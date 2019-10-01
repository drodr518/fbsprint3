import { CoursesService } from 'src/app/courses/courses.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewContentComponent } from './../new-content.component';
import { MatDialogRef } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrls: ['./new-quiz.component.scss']
})
export class NewQuizComponent implements OnInit {

  @Input('current_dialog') current_dialog: MatDialogRef<NewContentComponent>;
  @Input('data') data: {course: string, current_module: string};


  today = new Date();
  newQuizForm: FormGroup;
  newQuestionForm: FormGroup;
  questionsForm: FormGroup;
  enteringQuestion = false;
  answerInvalid = false;
  items = [];
  
  constructor(private formBuilder: FormBuilder,
    private coursesServices: CoursesService) { 
      this.newQuizForm = this.formBuilder.group({
        title: ['', Validators.required],
        isTimed: [false, Validators.required],
        time: [{value: 10, disabled: true}, [Validators.min(1), Validators.required]],
        noDueDate: [true, Validators.required],
        dueDate: [{value: this.today, disabled: false}, Validators.required],
        isUnlimited: [true, Validators.required],
        attempts: [{value:1, disabled: false},[Validators.min(1), Validators.required]]
      });

      this.newQuestionForm = this.formBuilder.group({
        question: ['', Validators.required],
        value: [1, [Validators.min(0), Validators.required]],
        answer: [1, [Validators.required, Validators.min(1), Validators.max(4)]],
        A: ['', Validators.required],
        B: ['', Validators.required],
        C: [''],
        D: [''],
      });

      this.questionsForm = this.formBuilder.group({
        hasQuestion: [ false, Validators.requiredTrue ]
      });

    }

  ngOnInit() {
  }

  timeCheck() {
    if(!this.newQuizForm.value.isTimed) {
      this.newQuizForm.controls['time'].enable();
    } else this.newQuizForm.controls['time'].disable();
  }

  attempsCheck() {
    if(!this.newQuizForm.value.isUnlimited) {
      this.newQuizForm.controls['attempts'].enable();
    } else this.newQuizForm.controls['attempts'].disable();
  }

  dueCheck() {
    if(!this.newQuizForm.value.noDueDate) {
      this.newQuizForm.controls['dueDate'].enable();
    } else this.newQuizForm.controls['dueDate'].disable();
  }

  addItem() {
    let newItem = {
      question: this.newQuestionForm.value.question,
      value: this.newQuestionForm.value.value,
      answer: this.newQuestionForm.value.answer,
      options: [this.newQuestionForm.value.A, this.newQuestionForm.value.B]
    }


    if(this.newQuestionForm.value.C) newItem.options.push(this.newQuestionForm.value.C);
    if(this.newQuestionForm.value.D) newItem.options.push(this.newQuestionForm.value.D);

    if(newItem.answer > newItem.options.length) {
      this.answerInvalid = true;
      return null;
    } else {
      this.answerInvalid = false;
    }
    this.items.push(newItem);
    this.questionsForm.controls['hasQuestion'].setValue(true);

    this.newQuestionForm.reset();
    this.enteringQuestion = false;
  }

  removeItem(itemIndex) {
    this.items.splice(itemIndex);

    if(this.items.length < 1){
      this.questionsForm.controls['hasQuestion'].setValue(false);
    } else {
      this.questionsForm.controls['hasQuestion'].setValue(true);
    }
  }

}
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  invalidCredentials = false;
  private subscription: Subscription[];

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.subscription = [];
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  authenticateUser() {
    const authUser = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    // this.subscription.push(
    //   this.authentication.authenticateUser(authUser)
    //     .subscribe(
    //       (payload) => {
    //         this.router.navigateByUrl('');
    //       },
    //       (err) => {
    //         if (err.status === 401) {
    //           this.invalidCredentials = true;
    //         }
    //       })
    // );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.forEach((item) => {
        item.unsubscribe();
      });
    }
  }
}

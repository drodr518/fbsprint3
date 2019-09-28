import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewCourseService {

  constructor(private http: HttpClient) { }

  addCourse(course) {
    return this.http.post(`${environment.apiAddress}/courses/addCourse`, {course});
  }
}


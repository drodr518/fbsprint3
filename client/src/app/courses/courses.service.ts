import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourseInfo(course_id) {
    const params = { params: new HttpParams().set('key',`${course_id}`)};
    return this.http.get(`${environment.apiAddress}/courses/course-info`, params);
  }

  getDiscussions(course_id) {
    const params = { params: new HttpParams().set('course', `${course_id}`)};
    return this.http.get(`${environment.apiAddress}/courses/course-discussions`, params);
  }

  getModules(course_id) {
    const params = { params: new HttpParams().set('course', `${course_id}`)};
    return this.http.get(`${environment.apiAddress}/courses/modules`, params);
  }

  getDiscussionPosts(course_id, discussion_id) {
    const params = { params: new HttpParams().set('course', `${course_id}`).set('discussion', `${discussion_id}`)};
    return this.http.get(`${environment.apiAddress}/courses/discusssion-posts`, params);
  }

  getDiscussionInfo(course_id, discussion_id) {
    const params = { params: new HttpParams().set('course', `${course_id}`).set('discussion', `${discussion_id}`)};
    return this.http.get(`${environment.apiAddress}/courses/course-discussion-info`, params);
  }

  getInstructorInfo(instructor_id) {
    const params = { params: new HttpParams().set('id', `${instructor_id}`)};
    return this.http.get(`${environment.apiAddress}/users/instructor-info`, params);
  }
}

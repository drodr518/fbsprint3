import { TestBed } from '@angular/core/testing';

import { NewCourseService } from './new-course.service';

describe('NewCourseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewCourseService = TestBed.get(NewCourseService);
    expect(service).toBeTruthy();
  });
});

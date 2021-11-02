import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCourses } from 'src/app/actions/courses.actions';
import { AppState, selectCoursesArray } from 'src/app/reducers';
import { CourseEntity } from 'src/app/reducers/course-catalog.reducer';
import { selectedCourseSet } from '../../actions/courses.actions';


@Component({
  selector: 'app-course-catalog',
  templateUrl: './course-catalog.component.html',
  styleUrls: ['./course-catalog.component.css']
})
export class CourseCatalogComponent implements OnInit {

  age: number = 1;
  courses$!: Observable<CourseEntity[]>;
  constructor(private store: Store<AppState>) {
    //store.dispatch(loadCourses());
  }

  ngOnInit(): void {
    this.courses$ = this.store.select(selectCoursesArray);


  }

  setSelectedCourse(payload: CourseEntity) {
    this.store.dispatch(selectedCourseSet({ payload }));
  }
}

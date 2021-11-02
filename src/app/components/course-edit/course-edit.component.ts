import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState, selectHasSelectedCourse, selectSelectedCourse } from 'src/app/reducers';
import { CourseEntity } from 'src/app/reducers/course-catalog.reducer';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit, OnDestroy {

  id!: number;
  hasSelectedCourse$!: Observable<boolean>;
  selectedCourse$!: Observable<CourseEntity | null>;
  course!: CourseEntity | null;
  subscription!: Subscription;
  form = this.formBuilder.group({
    numberOfDays: []
  })
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {

      this.id = parseInt(params['id']);
      console.log('Got new params....', this.id);
    });

    this.hasSelectedCourse$ = this.store.select(selectHasSelectedCourse);
    this.selectedCourse$ = this.store.select(selectSelectedCourse);
    this.selectedCourse$.subscribe(c => {
      this.course = c;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submit() {
    console.log(this.form.get('numberOfDays')?.value);
  }

}

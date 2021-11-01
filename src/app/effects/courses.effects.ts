import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { CourseEntity } from "src/reducers/course-catalog.reducers";
import * as actions from '../actions/courses.actions';



@Injectable()
export class CoursesEffects {



    // loadCourses => loadCoursesCompleted | loadCoursesFailed
    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.loadCourses),
            mergeMap(() => this.client.get<{ data: CourseEntity[] }>('https://localhost/itu/courses/course-catalog')
                .pipe(
                    map(response => response.data),
                    map(payload => actions.loadCoursesCompleted({ payload })),
                    catchError(() => of(actions.loadCoursesFailed({ payload: 'Could Not The Courses' })))
                )
            )
        )



    );



    constructor(private actions$: Actions, private client: HttpClient) { }
}
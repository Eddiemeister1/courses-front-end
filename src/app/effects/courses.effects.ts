import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import * as actions from '../actions/courses.actions';
import { CourseEntity } from "../reducers/course-catalog.reducer";
import { environment } from '../../environments/environment';
import { Router } from "@angular/router";

@Injectable()
export class CoursesEffects {

    readonly baseUrl = environment.apiUrl;

    updateDayCount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.courseDayCountAdjusted),
            map(a => ({ id: a.course.id, days: a.newNumberOfDays })),
            mergeMap(d => this.client.put(this.baseUrl + `itu/courses/course-catalog/${d.id}/numberOfDays/${d.days}`, {})
                /// do catchError Here.
            )
        ), { dispatch: false })
    editSelectedCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.selectedCourseSet),
            /*navigate to the course edit thing */
            map(a => a.payload.id), // Action -> id
            tap((id) => this.router.navigate(['..', 'course', 'edit', id]))
        )
        , { dispatch: false })

    // loadCourses => loadCoursesCompleted | loadCoursesFailed
    loadCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.loadCourses),
            mergeMap(() => this.client.get<{ data: CourseEntity[] }>(this.baseUrl + 'itu/courses/course-catalog')
                .pipe(
                    map(response => response.data), // response -> data
                    map(payload => actions.loadCoursesCompleted({ payload })), // data -> { type: 'courses', payload: { }}
                    catchError(() => of(actions.loadCoursesFailed({ payload: 'Could Not The Courses' })))
                )
            )
        )

    );

    constructor(private actions$: Actions, private client: HttpClient, private router: Router) { }
}

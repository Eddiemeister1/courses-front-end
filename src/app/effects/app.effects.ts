import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as appActions from '../actions/app.actions';
import * as courseActions from '../actions/courses.actions';
import { map } from 'rxjs/operators';
@Injectable()
export class AppEffects {

    // applicationStarted -> loadTheCourses
    loadTheCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(appActions.applicationStarted),
            map(() => courseActions.loadCourses())
        )
    );

    constructor(private actions$: Actions) { }
}

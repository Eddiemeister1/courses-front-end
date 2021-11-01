import { createAction, props } from "@ngrx/store";
import { CourseEntity } from "src/reducers/course-catalog.reducers";


export const loadCourses = createAction(
    '[courses] load the courses'
);

export const loadCoursesCompleted = createAction(
    '[courses] load courses completed',
    props<{ payload: CourseEntity[] }>()
);

export const loadCoursesFailed = createAction(
    '[courses] loading the courses failed',
    props<{ payload: string }>()
);
import { createAction, props } from '@ngrx/store';
import { CourseEntity } from '../reducers/course-catalog.reducer';

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

export const selectedCourseSet = createAction(
    '[courses] selected course set',
    props<{ payload: CourseEntity }>()
);

export const courseDayCountAdjusted = createAction(
    '[courses] course day count adjusted',
    props<{ course: CourseEntity, newNumberOfDays: number }>()
);

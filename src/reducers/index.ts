import * as fromCourses from './course-catalog.reducers';

export interface AppState {
    courses: fromCourses.CourseCatalogState
}

export const reducers = {
    courses: fromCourses.reducer
}
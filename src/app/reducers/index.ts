import { createSelector } from '@ngrx/store';
import * as fromCourses from './course-catalog.reducer'

export interface AppState {
    courses: fromCourses.CourseCatalogState
}

export const reducers = {
    courses: fromCourses.reducer
}

const selectCourses = (state: AppState) => state.courses;

export const selectCoursesArray = fromCourses.adapter.getSelectors(selectCourses).selectAll;

export const selectHasSelectedCourse = createSelector(
    selectCourses,
    c => !!c.selectedCourse
)

export const selectSelectedCourse = createSelector(
    selectCourses,
    c => c.selectedCourse
)
// export const selectCourseList = createSelector(
//     selectCourses,
//     courses => courses.ids.map(id => courses.entities[id])
// )
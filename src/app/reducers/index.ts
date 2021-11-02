import * as fromCourses from './course-catalog.reducer'

export interface AppState {
  courses: fromCourses.CourseCatalogState
}

export const reducers = {
  courses: fromCourses.reducer
}

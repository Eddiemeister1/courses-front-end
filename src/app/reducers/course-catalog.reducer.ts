import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';

export interface CourseEntity {
  id: string;
  title: string;
  description?: string;
  numberOfDays: number;
  type: string;
}

export interface CourseCatalogState extends EntityState<CourseEntity> {

}

export const adapter = createEntityAdapter<CourseEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: CourseCatalogState = initialState, action: Action): CourseCatalogState {
  return reducerFunction(state, action);
}




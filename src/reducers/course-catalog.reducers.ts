import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer } from "@ngrx/store";

export interface CourseEntity {
    id: string,
    title: string,
    description?: string,
    nomberOfDays: number,
    type: string;
}

export interface CourseCatalogState extends EntityState<CourseEntity> {

}

export const adapter = createEntityAdapter<CourseEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
    initialState
);

export function reducer(state: CourseCatalogState = initialState, action: Action) {
    return reducerFunction(state, action);
}
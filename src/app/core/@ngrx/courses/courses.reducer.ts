import { Action, createReducer, on } from '@ngrx/store';
import { CoursesState, initialCoursesState } from './courses.state';
import * as CoursesActions from './courses.actions';

const reducer = createReducer(initialCoursesState,
    on(CoursesActions.getCourses, state => {
        console.log('GET_COURSES');
        return {
            ...state,
            loading: true
        };
    }),

    on(CoursesActions.getCoursesSuccess, (state, { cources }) => {
        console.log('GET_COURSES_SUCCESS');
        const data = [...cources];
        return {
            ...state,
            data,
            loading: false,
            loaded: true,
            error: null,
            selectedTask: null
        };
    }),

    on(CoursesActions.getCoursesError,
        CoursesActions.getCourseError,
        (state, { error }) => {
            console.log('GET_COURSES/COURSE_ERROR', error);
            return {
                ...state,
                loading: false,
                loaded: false,
                error
            };
        }
    ),

    on(CoursesActions.getCourse, state => {
        console.log('GET_COURSE');
        return {
            ...state,
            loading: true,
            loaded: false
        };
    }),

    on(CoursesActions.getCourseSuccess, (state, { course }) => {
        console.log('GET_COURSE_SUCCESS');
        const selectCourse = { ...course };
        return {
            ...state,
            selectCourse,
            loading: false,
            loaded: true,
            error: null
        };
    }),

    on(CoursesActions.updateCourseSuccess, (state, { course }) => {
        console.log('UPDATE_COURSE_SUCCESS');
        const data = [...state.data];
        const index = data.findIndex(c => c.id === course.id);

        data[index] = { ...course };

        return {
            ...state,
            data
        };
    }),

    on(
        CoursesActions.updateCourseError,
        CoursesActions.createCourseError,
        CoursesActions.deleteCourseError,
        (state, { error }) => {
            console.log('UPDATE/CREATE/DELETE_COURSE_ERROR');
            return {
                ...state,
                error
            };
        }),

    on(CoursesActions.createCourseSuccess, (state, { course }) => {
        console.log('CREATE_COURSE_SUCCESS');
        const data = [...state.data, { ...course }];
        return {
            ...state,
            data
        };
    }),

    on(CoursesActions.deleteCourse, state => {
        console.log('DELETE_COURSE');
        return { ...state };
    }),

    on(CoursesActions.deleteCourseSuccess, (state, { course }) => {
        console.log('DELETE_COURSE_SUCCESS', course);
        const data = state.data.filter(c => c.id !== course.id);

        return {
            ...state,
            data
        };
    }),

);

export function coursesReducer(state: CoursesState | undefined, action: Action) {
    return reducer(state, action);
}

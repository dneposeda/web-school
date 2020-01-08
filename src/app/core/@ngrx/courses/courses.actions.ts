import { createAction, props } from '@ngrx/store';
import { ICourse } from './../../../interfaces/icourse';

export enum CourseActionTypes {
    getCourses = '[Courses List Page] GET_COURSES',
    getCoursesSuccess = '[Courses List Page] GET_COURSES_SUCCEESS',
    getCoursesError = '[Courses List Page] GET_COURSES_ERROR',
    getCourse = '[Edit Course Page (User)] GET_COURSE',
    getCourseSuccess = '[Edit Course Page] GET_COURSE_SUCCEESS',
    getCourseError = '[Edit Course Page] GET_COURSE_ERROR',
    updateCourse = '[Course Update Page] UPDATE_COURSE',
    updateCourseSuccess = '[Course Update Page] UPDATE_COURSE_SUCCEESS',
    updateCourseError = '[Course Update Page] UPDATE_COURSE_ERROR',
    createCourse = '[Course Сreate Page] CREATE_COURSE',
    createCourseSuccess = '[Course Сreate Page] CREATE_COURSE_SUCCEESS',
    createCourseError = '[Course Сreate Page] CREATE_COURSE_ERROR',
    deleteCourse = '[Course List Page] DELETE_COURSE',
    deleteCourseSuccess = '[Course List Page] DELETE_COURSE_SUCCEESS',
    deleteCourseError = '[Course List Page] DELETE_COURSE_ERROR',
}

export const getCourses = createAction(
    CourseActionTypes.getCourses,
    props<{ count: number }>()
);
export const getCoursesSuccess = createAction(
    CourseActionTypes.getCoursesSuccess,
    props<{ cources: ICourse[] }>()
);
export const getCoursesError = createAction(
    CourseActionTypes.getCoursesError,
    props<{ error: Error | string }>()
);

export const getCourse = createAction(
    CourseActionTypes.getCourse,
    props<{ courseID: number }>()
);

export const getCourseSuccess = createAction(
    CourseActionTypes.getCourseSuccess,
    props<{ course: ICourse }>()
);

export const getCourseError = createAction(
    CourseActionTypes.getCourseError,
    props<{ error: Error | string }>()
);

export const updateCourse = createAction(
    CourseActionTypes.updateCourse,
    props<{ course: ICourse }>()
);

export const updateCourseSuccess = createAction(
    CourseActionTypes.updateCourseSuccess,
    props<{ course: ICourse }>()
);

export const updateCourseError = createAction(
    CourseActionTypes.updateCourseError,
    props<{ error: Error | string }>()
);

export const createCourse = createAction(
    CourseActionTypes.createCourse,
    props<{ course: ICourse }>()
);

export const createCourseSuccess = createAction(
    CourseActionTypes.createCourseSuccess,
    props<{ course: ICourse }>()
);

export const createCourseError = createAction(
    CourseActionTypes.createCourseError,
    props<{ error: Error | string }>()
);

export const deleteCourse = createAction(
    CourseActionTypes.deleteCourse,
    props<{ course: ICourse }>()
);

export const deleteCourseSuccess = createAction(
    CourseActionTypes.deleteCourseSuccess,
    props<{ course: ICourse }>()
);

export const deleteCourseError = createAction(
    CourseActionTypes.deleteCourseError,
    props<{ error: Error | string }>()
);

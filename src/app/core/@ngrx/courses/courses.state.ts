import { ICourse } from '../../../interfaces/icourse';

export interface CoursesState {
    data: ReadonlyArray<ICourse>;
    selectCourse: Readonly<ICourse>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string;
}

export const initialCoursesState: CoursesState = {
    data: [],
    selectCourse: null,
    loading: false,
    loaded: false,
    error: null
};

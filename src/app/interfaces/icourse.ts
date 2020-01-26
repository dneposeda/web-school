import { IAuthor } from '../modules/courses/services/author.service';

export interface ICourse {
    id: number;
    title: string;
    creationDate: string;
    duration: number;
    description: string;
    topRated: boolean;
    authors?: IAuthor[];
}

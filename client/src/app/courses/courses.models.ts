
export class Course {
    id: string; // databse key
    name: string; // course name
    description: string; // course description
    instructor_id: number;  // instructor databse key
    instructor_name: string; // instructor name
    size: number; //  number of studnet enrolled
    MAX_SIZE: number; // number of students this course supports
    assignments: Assessment[]; // assessment objs
    modules: Module[]; // module objs
    discussions: Discussion[]; // discussion objs
}

export class Module {
    id: string;
    name: string;
    resources: Content[];
}

export class Content {
    title: string;
}

export class Document extends Content {
    link: string;
}

export class EmbededVideo extends Content {
    html: string;
}

export class ExternalLink extends Content {
    url: string;
}

export class Assessment extends Content {
    id: string;
    isTimed: boolean;
    time: number;
    dueDate: string;
    doneDate: string;
    attempts: number;
    items: Question[];
}

export class Question {
    id: number;
    val: number;
    question: string;
    answer: string;
    response: string;
    options: string[];
}

export class Discussion {
    id: string;
    title: string;
    description: string;
    posts: Post[];
    isClosed: boolean;
}

export class Post {
    id: string;
    user_name: string;
    user_id: string;
    date: string;
    post: string;
}

export interface CourseNav {
    id: string;
    name: string;
}

export interface DIscussions {
    id: string;
    title: string;
}

export interface IPost {
    user_id: string;
    user_name: string;
    date: string;
    post: string;
}

export interface Page {
    title: string;
    page: string;
}

export interface Resource {
    embedded: string;
    id: string;
    link: string;
    mod: string;
    outOf: string;
    page: string;
    title: string;
    url: string;
}
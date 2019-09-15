
export interface Course {
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

export interface Module {
    id: string;
    name: string;
    resources: Content[];
}

export interface Content {
    title: string;
}

export interface Document extends Content {
    link: string;
}

export interface EmbededVideo extends Content {
    html: string;
}

export interface ExternalLink extends Content {
    url: string;
}

export interface Assessment extends Content {
    id: string;
    isTimed: boolean;
    time: number;
    dueDate: string;
    doneDate: string;
    attempts: number;
    items: Question[];
}

export interface Question {
    val: number;
    question: string;
    answer: string;
    response: string;
}

export interface MultipleChoiseQuestion extends Question {
    options: string[];    
}

export interface Discussion {
    id: string;
    title: string;
    description: string;
    posts: Post[];
    isClosed: boolean;
}

export interface Post {
    id: string;
    user_name: string;
    user_id: string;
    date: string;
    post: string;
}
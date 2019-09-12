
export interface Course {
    id: string;
    name: string;
    description: string;
    instructor_id: number;
    instructor_name: string;
    size: number;
    MAX_SIZE: number;
    assignments: Assessment[];
    modules: Module[];
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
    attempts: number;
    items: Question[];
}

export interface Question {
    val: number;
    question: string;
    answer: string;
}

export interface MultipleChoiseQuestion extends Question {
    options: string[];    
}
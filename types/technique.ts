export interface Technique {
  id: string;
  category: string;
  grades: string[];
  attack: string;
  technique: string;
  videos: VideoDemo[];
}

export interface VideoDemo {
  id: string;
  youtubeId: string;
  caption: string;
  instructor: string;
  variation: string;
}

export interface FilterState {
  categories: string[];
  grade: string;
  freeText: string;
}

export type CategoryType = 
  | 'Suwari Waza'
  | 'Hanmi Handachi Waza' 
  | 'Tachi Waza'
  | 'Ushiro Waza'
  | 'Futari Dori'
  | 'Randori'
  | 'Tanto Dori';

export type GradeType = 
  | '5k' | '4k' | '3k' | '2k' | '1k'
  | '1d' | '2d' | '3d' | '4d';
// src/data/types.ts

export interface Section {
    id: string;
    title: string;
    htmlCode: string;
    cssCode: string;
    previewImg: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    sections: Section[];
  }
  
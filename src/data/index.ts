// src/data/index.ts
import { Category } from './types';

import { headerCategory } from './categories/header';
import { heroCategory } from './categories/hero';
import { instructorsCategory } from './categories/instructors';
import { textImageOverlapCategory } from './categories/textimage-overlap';
import { downloadCategory } from './categories/download';
import { courseDetailsCategory } from './categories/course-details';
import { expertiseCategory } from './categories/expertise';
import { benefitsCategory } from './categories/benefits';
import { aboutCategory } from './categories/about';
import { footerCategory } from './categories/footer';
import { subheroCategory } from './categories/subhero';
import { expertsCategory } from './categories/experts';
import { byTheNumbersCategory } from './categories/by-the-numbers';
import { valueCategory } from './categories/value';
import { boilerplateCategory } from './categories/boilerplate';

export const categories: Category[] = [
  boilerplateCategory,
  headerCategory,
  heroCategory,
  subheroCategory,
  downloadCategory,
  byTheNumbersCategory,
  instructorsCategory,
  textImageOverlapCategory,
  courseDetailsCategory,
  expertiseCategory,
  expertsCategory,
  benefitsCategory,
  aboutCategory,
  valueCategory,
  footerCategory,
  
];

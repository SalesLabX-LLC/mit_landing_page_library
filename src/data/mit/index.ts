// src/data/index.ts
import { Category } from '../types';

import { headerCategory } from './header';
import { heroCategory } from './hero';
import { instructorsCategory } from './instructors';
import { textImageOverlapCategory } from './textimage-overlap';
import { downloadCategory } from './download';
import { courseDetailsCategory } from './course-details';
import { expertiseCategory } from './expertise';
import { benefitsCategory } from './benefits';
import { aboutCategory } from './about';
import { footerCategory } from './footer';
import { subheroCategory } from './subhero';
import { expertsCategory } from './experts';
import { byTheNumbersCategory } from './by-the-numbers';
import { valueCategory } from './value';
import { boilerplateCategory } from './boilerplate';

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

// src/data/index.ts
import { Category } from './types';

import { headerCategory } from './categories/header';
import { heroCategory } from './categories/hero';
import { featureIconCategory } from './categories/feature-icon';
import { gridLinesCategory } from './categories/grid-lines';
import { instructorsCategory } from './categories/instructors';
import { textImageOverlapCategory } from './categories/textimage-overlap';
import { downloadCategory } from './categories/download';
import { courseDetailsCategory } from './categories/course-details';
import { expertiseCategory } from './categories/Expertise';
import { benefitsCategory } from './categories/Benefits';
import { aboutCategory } from './categories/about';
import { footerCategory } from './categories/footer';
import { subheroCategory } from './categories/subhero';
import { expertsCategory } from './categories/experts';
import { byTheNumbersCategory } from './categories/by-the-numbers';

export const categories: Category[] = [
  headerCategory,
  heroCategory,
  featureIconCategory,
  gridLinesCategory,
  instructorsCategory,
  textImageOverlapCategory,
  downloadCategory,
  courseDetailsCategory,
  expertiseCategory,
  benefitsCategory,
  aboutCategory,
  footerCategory,
  subheroCategory,
  expertsCategory,
  byTheNumbersCategory,
];

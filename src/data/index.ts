// src/data/index.ts
import { Category } from './types';

import { headerCategory } from './categories/header';
import { heroCategory } from './categories/hero';
import { featureIconCategory } from './categories/feature-icon';
import { gridLinesCategory } from './categories/grid-lines';
import { byNumbersCategory } from './categories/by-number';
import { instructorsCategory } from './categories/instructors';
import { textImageOverlapCategory } from './categories/textimage-overlap';
import { downloadCategory } from './categories/download';

export const categories: Category[] = [
  headerCategory,
  heroCategory,
  featureIconCategory,
  gridLinesCategory,
  byNumbersCategory,
  instructorsCategory,
  textImageOverlapCategory,
  downloadCategory
];

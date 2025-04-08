// src/data/index.ts
import { Category } from './types';

import { headerCategory } from './catagories/header';
import { heroCategory } from './catagories/hero';
import { featureIconCategory } from './catagories/feature-icon';
import { gridLinesCategory } from './catagories/grid-lines';
import { byNumbersCategory } from './catagories/by-number';
import { instructorsCategory } from './catagories/instructors';
import { textImageOverlapCategory } from './catagories/textimage-overlap';
import { downloadCategory } from './catagories/download';

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

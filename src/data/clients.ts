import { Category } from './types';

import { categories as mitCategories } from './mit';
import { categories as client1Categories } from './clientExample1';

export type ClientKey = 'mit' | 'clientExample1';

export const clients: {
  id: ClientKey;
  name: string;
  categories: Category[];
}[] = [
  {
    id: 'mit',
    name: 'MIT',
    categories: mitCategories,
  },
  {
    id: 'clientExample1',
    name: 'Client Example 1',
    categories: client1Categories,
  },
];

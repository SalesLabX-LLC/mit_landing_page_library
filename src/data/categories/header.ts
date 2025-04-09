// src/data/header.ts
import { Category } from '../types';

export const headerCategory: Category = {
  id: 'cat-header',
  name: 'Header',
  sections: [
    {
      id: 'sec-header-1',
      title: 'Header Section 1',
      htmlCode: `<!-- Header Section -->
<header class="header">
  <div class="container">
    <a
      href="https://professional.mit.edu/?utm_medium=pardotLP&utm_campaign=sp-pcb-2025-brochure"
      class="logo-link"
    >
      <img
        src="src/assets/images/header-1.png"
        alt="MIT Professional Education Logo"
        class="logo"
      />
    </a>
  </div>
</header>`,
      cssCode: `/* Header section styles */
.header {
  height: 100px;
  background-color: white;
  display: flex;
  align-items: center;
}

.logo-link {
  display: block;
}

.logo {
  max-width: 212px;
}`,
      previewImg: 'header-1.png'
    },
    {
      id: 'sec-header-2',
      title: 'Header Section 2',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'header-2.png'
    },
    {
      id: 'sec-header-3',
      title: 'Header Section 3',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'header-3.png'
    },
    {
      id: 'sec-header-4',
      title: 'Header Section 4',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'header-4.png'
    }
  ]
};

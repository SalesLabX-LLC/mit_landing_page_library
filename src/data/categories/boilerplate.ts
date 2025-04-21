import { Category } from '../types';

export const boilerplateCategory: Category = {
  id: 'cat-boilerplate',
  name: 'Boiler Plate',
  sections: [
    {
      id: 'sec-boilerplate-1',
      title: 'HTML Boilerplate',
      htmlCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>%%title%%</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://slxcloud.app/MIT/2025/cell-therapy-2025-ty-lp/images/favicon.png" rel="shortcut icon" type="image/x-icon">
  <link href="https://slxcloud.app/MIT/2025/cell-therapy-2025-ty-lp/images/webclip.png" rel="apple-touch-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>
  <!-- ENTER SECTIONS HERE -->
</body>
</html>`,
      cssCode: '',
      previewImg: 'boiler-plate.png' 
    }
  ]
};

// src/data/hero.ts
import { Category } from '../types';

export const heroCategory: Category = {
  id: 'cat-hero',
  name: 'Hero',
  sections: [
    {
      id: 'sec-hero-1',
      title: 'Hero Section 1',
      htmlCode: `<!-- Hero Section -->
<img 
  src="src/assets/images/hero-1-mobile.png" 
  alt="Breakthrough Innovation"
  class="hero-mobile-image"
/>
<section class="hero">
  <div class="hero-content">
    <h1 class="hero-title">Breakthrough Innovation</h1>
    <p class="hero-subtitle">Harnessing AI+ to Create Value</p>
    <div class="date-container-wrapper">
      <div class="date-container">
        <img 
          src="src/assets/images/Cal-icon.png"
          alt="Calendar Icon"
          class="calendar-icon"
        />
        <span class="date-text">
          Jul 07 - <span class="nowrap"></span>09, 2025
        </span>
      </div>
      <div class="date-container">
        <img 
          src="src/assets/images/Location-icon.png"
          alt="Location Icon"
          class="calendar-icon"
        />
        <span class="date-text">On Campus at MIT</span>
      </div>
    </div>
    <div class="date-container">
      <a href="#form" class="brochure-button">
        DOWNLOAD <span class="nowrap">BROCHURE</span>
      </a>
    </div>
  </div>
  <img 
    src="src/assets/images/hero-1-arrow.png"
    alt="arrow"
    class="hero-arrow"
/>
</section>

<section class="value-section">
  <div class="container">
    <div class="value-grid">
      <div class="heading-column">
        <h2 class="section-heading">
          Maximize the value of your organization's digital tools. Create powerful solutions.
        </h2>
      </div>
      <div class="divider"></div>
      <div class="text-column">
        <p class="value-text">
          COVID-19. Climate change. Cutting-edge technologies. Global disruptions are
          profoundly impacting the way that organizations do business. Yet, one thing
          remains unaltered—your responsibility to provide value to your customers. 
          Learn to foster an innovative, resilient organization that not only survives 
          but thrives amid difficult circumstances in this three-day course.
        </p>
      </div>
    </div>
  </div>
</section>`,
      cssCode: `/* Hero section styles */
.hero {
  background-image: url("src/assets/images/hero-1-bg.png");
  background-size: cover;
  background-position: center top;
  width: 100%;
  padding: 150px 0 170px;
  position: relative;
  display: block;
}

.hero-mobile-image {
  display: none;
  width: 100%;
}

.hero-arrow {
  position: absolute;
  max-width: 300px;
  bottom: -5%;
  left: 35%;
  z-index: 1;
}

.hero-content {
  width: 95vw;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .hero-content {
    width: 85vw;
  }
}

@media (min-width: 1440px) {
  .hero-content {
    width: 1240px;
  }
}

.hero-title {
  color: white;
  font-size: 64px;
  line-height: 110%;
  max-width: 530px;
  font-weight: 900;
  margin-bottom: 5px;
}

.hero-subtitle {
  line-height: 130%;
  color: white;
  font-size: 40px;
  font-style: italic;
  font-weight: 500;
}

.date-container {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
}

.calendar-icon {
  margin-right: 15px;
  width: auto;
  height: 36px;
}

.date-text {
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 110%;
  font-weight: 700;
}

.date-container-wrapper {
  display: flex;
  gap: 45px;
}`,
      previewImg: 'hero-1.png'
    },




    
    {
      id: 'sec-hero-2',
      title: 'Hero Section 2',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'hero-2.png'
    },
    {
      id: 'sec-hero-3',
      title: 'Hero Section 3',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'hero-3.png'
    },
    {
      id: 'sec-hero-4',
      title: 'Hero Section 4',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'hero-4.png'
    }
  ]
};

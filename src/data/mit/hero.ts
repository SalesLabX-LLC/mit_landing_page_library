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
      htmlCode: `<!-- Hero Section -->

    <a href="#form"><img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Mobile.jpg"
            alt="Breakthrough Innovation" class="hero-mobile-image" /></a>
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Future Transportation Systems: User-Centric, Green, Automated <span style="font-weight: 300; font-style: italic">&</span> AI-Driven</h1>

            <div class="date-container-wrapper">
                <div class="date-container">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/Cal-icon.png" alt="Calendar Icon"
                        class="calendar-icon">
                    <span class="date-text">Jul 28 - Aug <span class="nowrap"></span>01, 2025</span></span>
                </div>
                <div class="date-container">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Location-icon%20%281%29.png"
                        alt="Location Icon" class="calendar-icon">
                    <span class="date-text">Live Online</span>
                </div>

            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>

    </section>

    <section class="subhero">
        <div class="container">
            <div class="subhero-container">
                <div>
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/LearnOnTheForefrontModelImage.png"
                        alt="Woman" class="subhero-img" />
                </div>
                <div>
                    <h2>Learn On The Forefront Of Transportation Innovation</h2>
                    <p>Dive into the latest research from MIT's Intelligent Transportation Systems Lab and learn to
                        translate real-time data into real-world results that mitigate traffic congestion and other
                        transportation challenges.</p>
                </div>
            </div>
        </div>
    </section>`,
      cssCode: `/* Hero section styles */
.hero {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Desktop.jpg");
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

@media (max-width: 768px) {


    .hero {
        background-image: url("https://slxcloud.app/MIT/2025/Course-2025-mstn/images/Tablet.jpg");
        background-position: left 85% top 10%
    }
}

@media (min-width: 1440px) {
    .hero-content {
        width: 1240px;
    }
}

.hero-title {
    color: white;
    font-size: 48px;
    line-height: 110%;
    max-width: 550px;
    font-weight: 800;
    margin-bottom: 5px;
}

.hero-subtitle {
    line-height: 130%;
    color: white;
    font-size: 40px;
    font-weight: 400;

}

.date-container {
    display: flex;
    align-items: center;
    padding-top: 25px;
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
    gap: 0;
    flex-direction: column;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .hero-title {
        font-size: 42px;
    }

    .date-text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {

    .hero,
    .header {
        display: none;
    }

    .date-container-wrapper {
        flex-direction: column;
        gap: 5px;
    }

    .date-container {
        padding-bottom: 0px;
        margin-top: 20px !important;
    }


    .hero-mobile-image {
        display: block;
        width: 100%;
    }
}`,
      previewImg: 'hero-2.png'
    },

    {
      id: 'sec-hero-3',
      title: 'Hero Section 3',
      htmlCode: `<!-- Hero Section -->

    <a href="#form"><img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Mobile%20Header.jpg"
            alt="Learning Algorithms, Design and Safety" class="hero-mobile-image" /></a>
    <section class="hero">
        <div class="hero-content">
            <p class="hero-subtitle">AI in Robotics: </p>
            <h1 class="hero-title">Learning Algorithms,<br> Design and Safety </h1>

            <div class="date-container-wrapper">
                <div class="date-container">

                    <span class="date-text">Jul 09 - 11, 2025 | On Campus</span>
                </div>

            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>

    </section>`,
      cssCode: `
/* Hero section styles */
.hero {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-HERO.png");
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

@media (max-width: 768px) {


    .hero {
        background-image: url("https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%20LP%203.21.25%20AI%20for%20Scientific%20Discovery%20LP-tablet.jpg");
        background-position: left 85% top 10%
    }
}

@media (min-width: 1440px) {
    .hero-content {
        width: 1240px;
    }
}

.hero-title {
    color: white;
    font-size: 60px;
    line-height: 110%;
    max-width: 630px;
    font-weight: 800;
    margin-bottom: 5px;
}

.hero-subtitle {
    line-height: 130%;
    color: white;
    font-size: 36px;
    font-weight: 400;

}

.date-container {
    display: flex;
    align-items: center;
    padding-top: 25px;
}

.calendar-icon {
    margin-right: 15px;
    width: auto;
    height: 36px;
}

.date-text {
    color: white;
    font-size: 32px;
    letter-spacing: 1px;
    line-height: 110%;
    font-weight: 500;
}

.date-container-wrapper {
    display: flex;
    gap: 45px;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .hero-title {
        font-size: 42px;
    }

    .date-text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {

    .hero,
    .header {
        display: none;
    }

    .date-container-wrapper {
        flex-direction: column;
        gap: 5px;
    }

    .date-container {
        padding-bottom: 0px;
        margin-top: 20px !important;
    }


    .hero-mobile-image {
        display: block;
        width: 100%;
    }
}


/* Brochure button styles */
.brochure-button {
    display: inline-block;
    background-color: #D6E040;
    color: black;
    width: 292px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 0.5px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: 900;
    z-index: 99;
}

.brochure-button:hover {
    background-color: #c5ce37;
}

@media (max-width: 767px) {
    .brochure-button {
        width: 100%;
        max-width: 292px;
    }
}





/* Additional responsive improvements */
@media (max-width: 480px) {
    .hero-title {
        font-size: 36px;
    }

    .date-text {
        font-size: 14px;
    }


}
`,
      previewImg: 'hero-3.png'
    },
    
    {
      id: 'sec-hero-4',
      title: 'Hero Section 4',
      htmlCode: `<!-- Hero Section -->

    <a href="#form"><img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Mobile.jpg"
            alt="Breakthrough Innovation" class="hero-mobile-image" /></a>
    <section class="hero">
        <div class="hero-content">
            <p class="hero-subtitle">Ethics of AI:</p>
            <h1 class="hero-title">Building Responsible<br> AI, Machine Learning,<br> and GPTs</h1>

            <div class="date-container-wrapper">
                <div class="date-container">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/Cal-icon.png" alt="Calendar Icon"
                        class="calendar-icon">
                    <span class="date-text">July 21-<span class="nowrap"></span>23, 2025</span></span>
                </div>

            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>

    </section>`,
      cssCode: `
/* Hero section styles */
.hero {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-merai/images/Desktop.jpg");
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

@media (max-width: 768px) {


    .hero {
        background-image: url("https://slxcloud.app/MIT/2025/Course-2025-merai/images/Tablet.jpg");
        background-position: left 85% top 10%
    }
}

@media (min-width: 1440px) {
    .hero-content {
        width: 1240px;
    }
}

.hero-title {
    color: white;
    font-size: 45px;
    line-height: 110%;
    max-width: 530px;
    font-weight: 800;
    margin-bottom: 5px;
}

.hero-subtitle {
    line-height: 130%;
    color: white;
    font-size: 40px;
    font-weight: 400;

}

.date-container {
    display: flex;
    align-items: center;
    padding-top: 25px;
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
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .hero-title {
        font-size: 42px;
    }

    .date-text {
        font-size: 16px;
    }
}

@media (max-width: 468px) {

    .hero,
    .header {
        display: none;
    }

    .date-container-wrapper {
        flex-direction: column;
        gap: 5px;
    }

    .date-container {
        padding-bottom: 0px;
        margin-top: 20px !important;
    }


    .hero-mobile-image {
        display: block;
        width: 100%;
    }
}
`,
      previewImg: 'hero-4.png'
    },

   
  ]
};

// src/data/hero.ts
import { Category } from '../types';

export const subheroCategory: Category = {
  id: 'cat-subhero',
  name: 'Sub Hero',
  sections: [
    {
      id: 'sec-subhero-1',
      title: 'Sub Hero Section 1',
      htmlCode: `<section class="subhero">
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
      cssCode: `/* Main section styling */
.subhero {
    background-color: #ffffff;
    padding: 100px 0 83px !important;
    display: flex;
    justify-content: center;
    align-items: center;
   
}


/* Inner container with padding */
.subhero-container {
    display: flex;
    flex-direction: row;
    padding: 80px 60px;
    position: relative;
    background-color: #7F0426;
    border-radius: 10px;
    max-width: 1104px;
    margin-inline: auto;
    align-items: center;

}

/* Left column - image container */
.subhero-container>div:first-child {
    flex: 1;
    position: relative;
    min-height: 300px;
}

/* Right column - text content */
.subhero-container>div:last-child {
    flex: 1;
    padding-left: 30px;
    position: relative;
}

/* The vertical divider line */
.subhero-container>div:last-child::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #BA375C;
}

/* Image styling - absolute positioned */
.subhero-img {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    height: auto;
    /* Make it taller than the container */
    max-width: 450px;
}

/* Typography styling */
.subhero-container>div:last-child p:first-child {
    font-size: 20px;
    font-style: italic;
    line-height: 110%;
    margin-bottom: 15px;
    color: white;
}

.subhero-container>div:last-child h2 {
    font-size: 36px;
    font-weight: 800;
    /* extra bold */
    margin-bottom: 15px;
    color: white;
    max-width: 440PX;
}

.subhero-container>div:last-child p:last-child {
    font-size: 16px;
    font-weight: 500;
    /* medium weight */
    line-height: 150%;
    color: white;
}


@media (max-width: 1230px) {
    .subhero-img {
        top: 50px;
        max-width: 430px;
    }
}


/* Responsive styling */
@media (max-width: 991px) {

    .subhero-container {
        flex-direction: column !important;
        padding: 60px 30px;
    }
    .subhero-container>div:last-child h2 {
        font-size: 32px;
    }

    .subhero-img {
        top: 12%;
        max-width: 330px;
    }

    .subhero-container>div:first-child {
        min-height: 250px;
        margin-bottom: 40px;
    }

    .subhero-container>div:last-child {
        padding-left: 0;
    }

    .subhero-container>div:last-child::before {
        left: 0;
        top: -20px;
        height: 2px;
        width: 100%;
    }

    .subhero-img {
        max-height: 350px;
        top: -22%;
    }
}

@media (max-width: 576px) {
    .subhero {
        padding: 60px 0;
    }

    .subhero-container {
        padding: 40px 20px;
    }

    .subhero-container>div:last-child p:first-child {
        font-size: 18px;
    }

    .subhero-container>div:last-child h2 {
        font-size: 28px;
    }
}
`,
      previewImg: 'subhero-1.png'
    },

    {
        id: 'sec-subhero-2',
        title: 'Sub Hero Section 2',
        htmlCode: `<section class="sunbhero">
        <div class="container">
            <div class="subhero-container">
                <div>
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/FirstModelImage.png" alt="Woman"
                        class="subhero-img" />
                </div>
                <div>
                    <p>Build AI applications that are</p>
                    <h2>Smart, Safe, and Responsible</h2>
                    <p>Discover how to develop and deploy AI systems in ways that are ethical, responsible, and
                        beneficial for all.</p>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `
/* Main section styling */
.sunbhero {
    background-color: #ffffff;
    padding: 100px 0 83px;
    display: flex;
    justify-content: center;
    align-items: center;
}


/* Inner container with padding */
.subhero-container {
    display: flex;
    padding: 80px 60px;
    position: relative;
    background-color: #01318C;
    border-radius: 10px;
    max-width: 848px;
    margin-inline: auto;
align-items: center;

}

/* Left column - image container */
.subhero-container>div:first-child {
    flex: 1;
    position: relative;
    min-height: 300px;
}

/* Right column - text content */
.subhero-container>div:last-child {
    flex: 1;
    padding-left: 30px;
    position: relative;
}

/* The vertical divider line */
.subhero-container>div:last-child::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #5883BA;
}

/* Image styling - absolute positioned */
.subhero-img {
    position: absolute;
    top: -35%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 100%;
    height: auto;
    /* Make it taller than the container */
    max-width: 450px;
}

/* Typography styling */
.subhero-container>div:last-child p:first-child {
    font-size: 20px;
    font-style: italic;
    line-height: 110%;
    margin-bottom: 15px;
    color: white;
}

.subhero-container>div:last-child h2 {
    font-size: 36px;
    font-weight: 800;
    /* extra bold */
    margin-bottom: 15px;
    color: white;
}

.subhero-container>div:last-child p:last-child {
    font-size: 16px;
    font-weight: 500;
    /* medium weight */
    line-height: 150%;
    color: white;
}

/* Responsive styling */
@media (max-width: 992px) {
    .subhero-container {
        padding: 60px 40px;
    }

    .subhero-container>div:last-child h2 {
        font-size: 32px;
    }
}

@media (max-width: 768px) {
    .sunbhero {
        padding: 80px 0;
    }

    .subhero-container {
        flex-direction: column;
        padding: 60px 30px;
    }

    .subhero-container>div:first-child {
        min-height: 250px;
        margin-bottom: 40px;
    }

    .subhero-container>div:last-child {
        padding-left: 0;
    }

    .subhero-container>div:last-child::before {
        left: 0;
        top: -20px;
        height: 2px;
        width: 100%;
    }

    .subhero-img {
        max-height: 350px;
        top: -32%;
    }
}

@media (max-width: 576px) {
    .sunbhero {
        padding: 60px 0;
    }

    .subhero-container {
        padding: 40px 20px;
    }

    .subhero-container>div:last-child p:first-child {
        font-size: 18px;
    }

    .subhero-container>div:last-child h2 {
        font-size: 28px;
    }
}
`,
        previewImg: 'subhero-2.png'
      },

      {
        id: 'sec-subhero-3',
        title: 'Sub Hero Section 3',
        htmlCode: `<section class="info-section">
        <div class="container">
            <div class="info-box">
                <div class="info-column left-column">
                </div>
                <div class="divider"></div>
                <div class="info-column right-column">
                    <h2 class="info-heading">Capture Attention. <br>Create Impact.<br> Drive <span
                            class="nowrap">Results.</span></h2>
                    <p class="info-text">When technical expertise meets exceptional communication, the results are
                        transformational. The Persuasive Communication Bootcamp is designed for technology and science
                        professionals ready to elevate their ability to present, persuade, and lead in <span
                            class="nowrap">any setting.</span></p>
                </div>
            </div>
        </div>
        <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/Model1%201.png" alt="Professional person"
            class="left-column-image">
    </section>`,
        cssCode: `
/* Info section styles */
.info-section {
    background-color: white;
    padding: 100px 0;
    position: relative;
}

.info-box {
    background-color: #7F0426;
    border-radius: 10px;
    display: flex;
    position: relative;
    overflow: hidden;
}

.info-column {
    flex: 1;
    padding: 50px;
}

.divider {
    width: 2px;
    height: 50%;
    background-color: #BA375C;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
}

.info-heading {
    color: white;
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    margin-bottom: 30px;
}

.info-text {
    color: white;
    font-size: 16px;
    line-height: 150%;
}

.left-column-image {
    max-width: 100%;
    height: auto;
    position: absolute;
    bottom: 0;
    /* Makes the image overlap the bottom of the container */
    left: 10%;
    width: 50%;
    display: flex;
    justify-content: center;
    max-width: 500px;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .info-box {
        flex-direction: column;
    }

    .info-column {
        padding: 40px;
    }

    .info-heading {
        font-size: 30px;
    }

    .divider {
        display: none;
    }

    .left-column-image {
        display: none;
    }
}

@media (max-width: 767px) {

    /* Adjust styles for mobile */
    .info-column {
        padding: 30px;
    }

    .info-heading {
        font-size: 26px;
    }

    /* Only hide left column in info section */
    .info-section .left-column {
        display: none;
    }

    .info-section .right-column {
        width: 100%;
    }

    .info-box {
        flex-direction: column;
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

    .info-heading {
        font-size: 24px;
    }

    .info-text {
        font-size: 15px;
    }

    .info-section {
        padding: 60px 0;
    }
}
`,
        previewImg: 'subhero-3.png'
      },

      

   
  ]
};

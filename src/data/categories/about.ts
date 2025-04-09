// src/data/by-number.ts
import { Category } from '../types';

export const aboutCategory: Category = {
  id: 'cat-about',
  name: 'About',
  sections: [
    {
      id: 'sec-about-1',
      title: 'About 1',
      htmlCode: `<section class="about-mit-section">
        <div class="container">
            <div class="about-columns">
                <div class="about-column left-column">
                    <h2 class="about-heading">About MIT Professional Education </h2>
                    <div class="about-line"></div>
                </div>
                <div class="about-column middle-column">
                    <p class="about-text">For 75 years, MIT Professional Education has been providing technical
                        professionals worldwide a gateway to renowned MIT research, knowledge, and expertise, through
                        advanced education programs designed specifically for them. In addition to industry-focused,
                        two-to-five-day live virtual and on-campus courses through Short Programs, MIT Professional
                        Education offers professionals the opportunity to take online and blended learning courses
                        through Digital Plus Programs, attend courses abroad through International Programs, enroll in
                        regular MIT academic courses through the Advanced Study Program, or attend Corporate Programs
                        designed specifically for their companies. For more information, please
                        <span class="nowrap"> visit professional.mit.edu.</span>
                    </p>
                </div>
                <!-- Empty spacer column to prevent text overlap with image -->
                <div class="right-column-spacer"></div>
            </div>
        </div>

        <!-- Image positioned absolutely in the bottom right corner -->
        <div class="about-image-container">
            <img src="https://slxcloud.app/MIT/2025/Course-2025-pcb/images/dome-bottom.png" alt="MIT Dome"
                class="about-image">
        </div>
    </section>`,
      cssCode: `/* About MIT section styles - final version */
.about-mit-section {
    background-color: white;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
}

.about-columns {
    display: grid;
    gap: 40px;
}

.about-column {
    position: relative;
}

.left-column {
    flex: 1;
}

.middle-column {
    flex: 2;
}

/* Empty space column to prevent text overlap with image */
.right-column-spacer {
    flex: 1;
    min-width: 330px;
    /* Match image width to prevent text overlap */
}

.about-heading {
    font-size: 32px;
    line-height: 130%;
    font-weight: 800;
    color: #252525;
    margin-bottom: 30px;
    display: block;
}

.about-line {
    height: 2px;
    background-color: #A90533;
    position: absolute;
    left: -100vw;
    /* Extend to the left edge of the screen */
    width: auto;
    /* Let the line length be determined by position */
    right: 0;
    /* End exactly at the end of the heading */
}

.about-text {
    font-size: 17px;
    line-height: 150%;
    font-weight: 500;
    /* medium weight */
    color: #262525;
}

.about-image-container {
    position: absolute;
    bottom: -4px;
    right: 0;
    z-index: 1;
}

.about-image {
    max-width: 330px;
    height: auto;
}

/* Media query for smaller screens */
@media (max-width: 1200px) {
    .right-column-spacer {
        min-width: 280px;
    }

    .about-image {
        max-width: 280px;
    }
}

@media (min-width: 991px) {
    .about-columns {
        display: grid;
        gap: 40px;
        grid-template-columns: 208px 1fr 200px;
    }
}

@media (max-width: 991px) {
    .about-columns {
        flex-wrap: wrap;
        gap: 30px;
    }

    .left-column {
        flex: 0 0 100%;
    }

    .middle-column {
        flex: 0 0 calc(100% - 330px);
        /* Leave space for image */
    }

    .right-column-spacer {
        min-width: 0;
        flex: 0;
    }

    .about-heading {
        font-size: 28px;
    }

    .about-mit-section {
        padding-bottom: 240px;
        /* Add padding at the bottom for the image */
    }
}

@media (max-width: 767px) {
    .about-columns {
        flex-direction: column;
        gap: 30px;
    }

    .left-column,
    .middle-column {
        flex: 0 0 100%;
    }

    .about-heading {
        font-size: 26px;
        margin-bottom: 30px;
    }

    .about-line {
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        right: auto;
    }

    .about-text {
        font-size: 16px;
    }

    .about-image {
        max-width: 290px;
    }


}

@media (max-width: 480px) {
    .about-heading {
        font-size: 24px;
    }

    .about-text {
        font-size: 15px;
    }

    .about-mit-section {
        padding-bottom: 200px;
        /* Add padding at the bottom for the image */
    }

    .about-image {
        max-width: 250px;
    }
}
`,
      previewImg: 'about-1.png'
    },
    {
        id: 'sec-about-2',
        title: 'About 2',
        htmlCode: ``,
        cssCode: ``,
        previewImg: 'about-2.png'
      },
    
  ]
};

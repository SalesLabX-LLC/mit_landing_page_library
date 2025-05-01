// src/data/download.ts
import { Category } from '../types';

export const downloadCategory: Category = {
  id: 'cat-download',
  name: 'Download',
  sections: [
    {
      id: 'sec-download-1',
      title: 'Download Section 1',
      htmlCode: `<!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to download the Breakthrough Innovation:
                        Harnessing AI+ to Create
                        <span class="nowrap">Value brochure</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,
      cssCode: `

/* Straight-cut white corner in the top right */
.download-section::before {
    content: "";
    position: absolute;
    top: -2px;
    right: 0;
    width: 130px;
    height: 100px;
    background-color: white;
    clip-path: polygon(100% 0, 0 0, 100% 100%);
}

.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png");
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #ffffff;
    display: block;
}

.highlight {
    color: #D6E040;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}`,
      previewImg: 'download-1.png'
    },
    
    {
      id: 'sec-download-2',
      title: 'Download Section 2',
      htmlCode: `<!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to<br> to download the Future Transportation
                        Systems: User-Centric, Green, Automated <span style="font-weight: 300; font-style: italic">&</span>
                        <span class="nowrap"> AI-Driven brochure</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                   %%content%%
                </div>
            </div>
        </div>
    </section>`,
      cssCode: `/* Download section styles */
.download-section {
    background-color: #E8E8E8;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0,
            /* top left */
            calc(100% - 150px) 0,
            /* top right minus triangle width */
            100% 150px,
            /* triangle point */
            100% 100%,
            /* bottom right */
            0 100%
            /* bottom left */

        );

}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {

    display: flex;
    align-items: flex-start;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #55031A;
    display: block;
}

.highlight {
    color: #A90533;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}`,
      previewImg: 'download-2.png'
    },

    {
        id: 'sec-download-3',
        title: 'Download Section 3',
        htmlCode: ` <!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div>
                <p class="pre-form-text">Discover how generative AI tools are revolutionizing robotic design in our
                    accelerated Short Programs course. Download our brochure to <span class="nowrap">learn more.</span></p>
            </div>
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Learn on the<br>
                            cutting-edge of the <span class="nowrap"> AI revolution</span>
                    </h2>
                    <p class="download-subheading">Take a deep dive into the latest advances in robot learning, safety
                        certification, and testing—and explore the many ways generative AI is revolutionizing robotics
                        in this high-impact <span class="nowrap">three-day course.</span></p>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `
/* Download section styles */
.download-section {
    background-color: #ffffff;
    padding: 65px 0 0;
    position: relative;
    overflow: hidden;
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-NUMBERS.png?_t=1743695557");
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: top 10% right;
}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    /* background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png"); */
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 43px;
}

.download-heading {
    font-size: 52px;
    line-height: 120%;
    font-weight: 800;
    color: #01318C;
    display: block;
    max-width: 550px;
}

.download-subheading {
    font-size: 28px;
    line-height: 134%;
    font-weight: 500;
    color: #252525;
    display: block;
}

.pre-form-text {
    position: relative;
    /* Required for the pseudo-element positioning */
    font-size: 16px;
    font-weight: 500;
    line-height: 140%;
    max-width: 550px;
    background-color: transparent;
    /* Remove background from the main element */
    padding: 40px 70px 40px 0;
    margin-bottom: 50px;
    z-index: 222;
}

.pre-form-text::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -100vw;
    /* Extend to the left edge of the viewport */
    background-color: #E4EAF5;
    z-index: -1;
    /* Place it behind the text */
    clip-path: polygon(0% 0%, 100% 0%, 99% 100%, 0% 100%);
}

.highlight {
    color: #01318C;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}
`,
        previewImg: 'download-3.png'
      },
      
      {
        id: 'sec-download-4',
        title: 'Download Section 4',
        htmlCode: `<!-- Download Section -->
    <section class="download-section">
        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/arrows-gray.png" class="form-arrows-top" />
        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/arrows-gray.png" class="form-arrows-bottom" />
        <div class="container">

            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to<br> download the AI for
                        <span class="nowrap">Scientific Discovery</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `
/* Download section styles */
.download-section {
    background-color: #ffffff;
    padding: 75px 0;
    position: relative;
    overflow: hidden;
}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    /* background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png"); */
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #262525;
    display: block;
}

.highlight {
    color: #A90533;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}`,
        previewImg: 'download-4.png'
      },

      {
        id: 'sec-download-5',
        title: 'Download Section 5',
        htmlCode: `<!-- Download Section -->
    <section class="download-section">
        <div class="container">
            <div class="download-columns">
                <div class="download-column left-column">
                    <h2 class="download-heading">
                        <span class="highlight">Submit the form</span> to<br> to download the Ethics of AI: Building
                        Responsible AI, Machine Learning, and
                        <span class="nowrap"> GPTs Brochure</span>
                    </h2>
                </div>
                <div class="download-column right-column" id="form">
                    <iframe src="https://professional-education.mit.edu/l/310211/2025-01-30/3s4zngq" width="100%"
                        height="500" type="text/html" frameborder="0" allowTransparency="true"
                        style="border: 0"></iframe>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `
/* Download section styles */
.download-section {
    background-color: #E4EAF5;
    padding: 100px 0;
    position: relative;
    overflow: hidden;
    clip-path: polygon(0 0,
            /* top left */
            calc(100% - 150px) 0,
            /* top right minus triangle width */
            100% 150px,
            /* triangle point */
            100% 100%,
            /* bottom right */
            0 100%
            /* bottom left */

        );
    background-image: url(https://slxcloud.app/MIT/2025/Course-2025-merai/images/Binary1.png);
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: bottom 10% left;
}



.download-columns {
    display: grid;
    gap: 50px;
    position: relative;
    grid-template-columns: 1fr 1fr;
    /* Ensure content stays above the corner piece */
    z-index: 1;
}


.download-column.left-column {
    /* background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%202.png"); */
    background-position: bottom 16% center;
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-start;
}

.download-heading {
    font-size: 36px;
    line-height: 120%;
    font-weight: 800;
    color: #01318C;
    display: block;
}

.highlight {
    color: #021944;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .download-columns {
        gap: 30px;
    }

    .download-heading {
        font-size: 30px;
    }

    .download-section::before {
        width: 100px;
        height: 80px;
    }
}

@media (max-width: 767px) {
    .download-columns {
        grid-template-columns: 1fr;
    }

    .download-column.left-column {
        background-image: none;

    }

    .download-heading {
        font-size: 26px;
        margin-bottom: 40px;
        display: block;
    }

    .download-section::before {
        width: 80px;
        height: 60px;
    }

    /* Ensure the download section left column is visible */
    .download-section .left-column {
        display: block;
    }
}

@media (max-width: 480px) {
    .download-section {
        padding: 80px 0;
    }

    .download-heading {
        font-size: 24px;
    }

    .download-section::before {
        width: 60px;
        height: 45px;
    }
}
`,
        previewImg: 'download-5.png'
      },

      
  ]
};

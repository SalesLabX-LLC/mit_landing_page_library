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
      previewImg: 'src/assets/images/download-1.png'
    },
    
    {
      id: 'sec-download-2',
      title: 'Download Section 2',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'src/assets/images/download-2.png'
    }
  ]
};

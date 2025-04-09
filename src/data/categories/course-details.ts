import { Category } from '../types';

export const courseDetailsCategory: Category = {
    id: 'cat-courseDetails',
    name: 'course-details',
    sections: [
      {
        id: 'sec-course-details-1',
        title: 'Course Details Section 1',
        htmlCode: `<!-- Course Details Section -->
    <section class="course-details-section">
        <div class="container">
            <div class="course-details-columns">
                <div class="course-title-column">
                    <h2 class="section-heading">Course<br>Details</h2>
                </div>
                <div class="course-info-column-wrapper">
                    <div class="course-info-column">
                        <div class="course-description">
                            <p>Featuring dynamics lectures, case study analysis, and interactive projects, this program
                                is grounded in the latest research from MIT's Intelligent Transportation Systems Lab.
                                With the guidance of engineering expert Professor Moshe Ben-Akiva, you'll focus on
                                today's most pressing mobility topics, including traffic simulation models (microscopic
                                to macroscopic), discrete choice modeling for travel behavior, and predictive analysis
                                using <span class="nowrap"> machine learning.</span></p>

                        </div>
                        <div class="course-specifics">
                            <div class="course-specifics-grid">
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Course Dates</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">July 28-Aug. 1, 2025</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Duration</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">5 Days</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Format</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">Live Online</p>
                                </div>
                                <div class="course-specific-item">
                                    <h3 class="specific-title">Fee</h3>
                                    <div class="divider"></div>
                                    <p class="specific-value">$3,750</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `/* Course Details Section Styles */



/* Course Details Section */
.course-details-section {
    background-color: white;
    padding: 0px 0 100px;
    overflow: hidden;
}

.course-details-columns {
    display: flex;
    align-items: center;
}

.course-title-column {
    width: 25%;
    padding-right: 30px;
}

.course-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
}

.course-info-column-wrapper {
    width: 75%;
    position: relative;
}

.course-info-column {
    background: #7F0426;
    border-radius: 10px 0 0 10px;
    padding: 40px 0 40px 40px;
    display: flex;
    position: relative;
    color: white;
    align-items: center;
}

/* Extend the background to the edge of screen */
.course-info-column::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 100vw;
    background: #7F0426;
}

.course-description {
    width: 50%;
    padding-right: 30px;
}

.course-description p {
    color: white;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 20px;
}

.course-description p:last-child {
    margin-bottom: 0;
}

.course-specifics {
    width: 50%;
    padding-left: 30px;
}

.course-specifics-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
}

.course-specific-item {
    display: flex;
    flex-direction: column;
}

.specific-title {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 23px;
    font-weight: 700;
    line-height: 200%;
    margin: 0;
}

.divider {
    height: 2px;
    background-color: #BA375C;
    margin: 5px 0;
    width: 100%;
}

.specific-value {
    color: #FFF;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin: 0;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .course-info-column {
        flex-direction: column;
    }

    .course-description,
    .course-specifics {
        width: 100%;
        padding: 0;
    }

    .course-description {
        margin-bottom: 30px;
    }

}

@media (min-width: 768px) {
    .course-specifics-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
}

@media (max-width: 768px) {
    .course-details-columns {
        flex-direction: column;
    }

    .course-title-column {
        width: 100%;
        padding-right: 0;
        margin-bottom: 20px;
    }

    .course-info-column-wrapper {
        width: 100%;
    }

    .course-specifics-grid {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, auto);
    }

}`,
        previewImg: 'course-details-1.png'
      },

      {
        id: 'sec-course-details-2',
        title: 'Course Details Section 2',
        htmlCode: ``,
        cssCode: ``,
        previewImg: 'course-details-2.png'
      },
      
      
    ]
  };
  
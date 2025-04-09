
import { Category } from '../types';

export const benefitsCategory: Category = {
  id: 'cat-benefits',
  name: 'Benefits',
  sections: [
    {
      id: 'sec-benefits-1',
      title: 'benefits 1',
      htmlCode: `<!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="expertise-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn to implement the latest design-thinking techniques to power
                            <span class="nowrap">cutting-edge innovations</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Conceive new user experiences in areas where there is no prior solution
                            <span class="nowrap">to leverage</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Develop robust and resilient business strategies amid global uncertainty
                            and rapid <span class="nowrap">cultural change</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Overcome organizational obstacles and gain the traction to <span
                                class="nowrap">drive implementation</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Leverage the power and potential of digital technologies—in particular,
                            AI/machine learning, IoT, and robotics—to drive business transformation and <span
                                class="nowrap">create value</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Build a business that fosters mutually beneficial partnerships to create
                            robust ecosystems, develop new products, and enhance the <span class="nowrap">user
                                experience</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/orange-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Apply advanced Design-Thinking techniques to create
                            <span class="nowrap">breakthrough innovations</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>
    </section>`,
      cssCode: `/* Benefits Grid section styles */
.benefits-grid-section {
    background-color: white;
    padding: 0 0 70px;
}

.expertise-heading {
    font-size: 28px;
    font-weight: 800;
    /* extra bold */
    color: #252525;
    margin-bottom: 20px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    position: relative;
    background-color: white;
}

/* Vertical line between columns */
.benefits-grid::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #E9804B;
    transform: translateX(-50%);
}

/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 30px;
    position: relative;
}

/* Add horizontal lines between rows */
.benefit-item:nth-child(1)::after,
.benefit-item:nth-child(2)::after,
.benefit-item:nth-child(3)::after,
.benefit-item:nth-child(4)::after,
.benefit-item:nth-child(5)::after,
.benefit-item:nth-child(6)::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #E9804B;
}

/* Remove horizontal line for the last item in each row when it's a 2-column layout */
.benefit-item:nth-child(7)::after {
    display: none;
}

.benefit-icon {
    flex-shrink: 0;
    width: auto;
    height: 24px;
    margin-right: 15px;
}

.benefit-icon img {
    max-width: 100%;
    height: 24px;
    width: auto;
}

.benefit-content {
    flex-grow: 1;
}

.benefit-text {
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
    /* medium */
    color: #252525;
}

.date-container {
    margin-top: 40px;
    text-align: center;
}



/* Media query for tablets */
@media (max-width: 991px) {
    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Media query for mobile screens */
@media (max-width: 767px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    /* Remove vertical divider on mobile */
    .benefits-grid::before {
        display: none;
    }

    /* Reset horizontal lines styling for mobile */
    .benefit-item::after {
        left: 15px !important;
        right: 15px !important;
    }

    /* Ensure last item doesn't have a border */
    .benefit-item:last-child::after {
        display: none;
    }

    .benefit-item {
        padding: 25px 20px;
    }

    .benefit-icon {
        width: 20px;
        height: 20px;
        margin-right: 15px;
    }

    .benefit-text {
        font-size: 15px;
    }

    .expertise-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .benefits-grid-section {
        padding: 70px 0;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .benefit-item {
        padding: 20px 15px;
    }

    .expertise-heading {
        font-size: 26px;
    }

    .benefits-grid-section {
        padding: 50px 0;
    }
}
`,
      previewImg: 'benefits-1.png'
    },
    
    
  ]
};

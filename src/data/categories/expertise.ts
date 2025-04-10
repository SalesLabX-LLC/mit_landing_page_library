import { Category } from '../types';

export const expertiseCategory: Category = {
    id: 'cat-expertise',
    name: 'Expertise',
    sections: [
      {
        id: 'sec-expertise-1',
        title: 'Download Section 1',
        htmlCode: `<!-- Expertise Section -->
    <section class="expertise-section">
        <div class="container">
            <h2 class="expertise-heading">
                In this program you will learn <span class="nowrap">how to: </span>
            </h2>
            <!-- Add this below the expertise-heading in the expertise-section -->
            <div class="expertise-grid">
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/implement0icon.png"
                            alt="Cutting-edge Innovations Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Implement the latest Design-Thinking techniques to power <span
                                class="nowrap">cutting-edge innovations.</span></p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/harness-icon.png"
                            alt="Business Transformation Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Harness the power of digital technologies, including AI, IoT,
                            androbotics, to drive <span class="nowrap">business transformation.</span></p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/drive-icon.png"
                            alt="Drive Increased Revenue Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Drive increased revenue for existing products, services,
                            <span class="nowrap">and customers.</span>
                        </p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/build-icon.png"
                            alt="Forsustainable Growth Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Build new lines of business that position your organization
                            <span class="nowrap">forsustainable growth.</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>`,
        cssCode: `/* Expertise section styles */
.expertise-section {
    background-color: #ffffff;
    padding: 75px 0;
}

.expertise-heading {
    font-size: 28px;
    line-height: 140%;
    color: #252525;
    text-align: left;
    font-weight: 800;
    font-style: italic;
    margin-bottom: 40px;
}


/* Media query for smaller screens */
@media (max-width: 991px) {
    .expertise-heading {
        font-size: 26px;
    }
}

@media (max-width: 767px) {
    .expertise-heading {
        font-size: 24px;
        margin-bottom: 30px;
    }

    .expertise-section {
        padding: 60px 0;
    }
}

@media (max-width: 480px) {
    .expertise-heading {
        font-size: 22px;
    }

    .expertise-section {
        padding: 50px 0;
    }
}

/* Expertise grid styles */
.expertise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    background-color: #ffffff;
    position: relative;
}

/* Add divider lines */
.expertise-grid::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background-color: #E9804B;
    transform: translateX(-50%);
}

.expertise-grid::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background-color: #E9804B;
    transform: translateY(-50%);
}

.expertise-item {
    display: flex;
    align-items: center;
    padding: 30px;
}

.expertise-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 25px;
}

.expertise-icon img {
    max-width: 100%;
    height: auto;
}

.expertise-content {
    flex-grow: 1;
}

.expertise-item-heading {
    font-size: 20px;
    font-weight: 700;
    /* Bold */
    color: #252525;
    margin-bottom: 10px;
}

.expertise-item-text {
    font-size: 16px;
    line-height: 140%;
    font-weight: 500;
    /* Medium */
    color: #252525;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .expertise-grid {
        grid-template-columns: 1fr;
        position: relative;
    }

    /* Remove vertical divider on mobile */
    .expertise-grid::before {
        display: none;
    }

    /* Keep horizontal dividers between items on mobile by replacing the single center line with multiple lines */
    .expertise-grid::after {
        display: none;
        /* Remove the original horizontal line */
    }

    /* Add horizontal lines between grid items */
    .expertise-item {
        position: relative;
    }

    /* Add bottom border to all items except the last one */
    .expertise-item:not(:last-child)::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px;
        background-color: #E9804B;
    }

    .expertise-item {
        padding: 25px 20px;
    }

    .expertise-icon {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    .expertise-item-heading {
        font-size: 18px;
    }

    .expertise-item-text {
        font-size: 15px;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .expertise-icon {
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }

    .expertise-item {
        padding: 20px 15px;
    }
}

/* Expertise footer styles */
.expertise-footer {
    margin-top: 40px;
}

.expertise-footer-text {
    text-align: right;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    color: black;
    max-width: 60%;
    margin-left: auto;
}

/* Media query for smaller screens */
@media (max-width: 767px) {
    .expertise-footer {
        margin-top: 30px;
    }

    .expertise-footer-text {
        font-size: 18px;
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .expertise-footer-text {
        font-size: 16px;
    }
}`,
        previewImg: 'expertise-1.png'
      },

      {
        id: 'sec-expertise-2',
        title: 'Download Section 2',
        htmlCode: `<!-- Expertise Section -->
    <section class="expertise-section">
        <div class="container">
            <h2 class="expertise-heading">
                In this program, <span class="nowrap">you will:</span>
            </h2>
            <div class="expertise-grid">
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/ApplyIcon.png"
                            alt="Program Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Apply fundamental methods to model, analyze, and design
                            transportation systems and <span class="nowrap">mobility services</span></p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/AnalyzeIcon.png"
                            alt="Program Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Analyze individual mobility choices and evaluate transportation
                            network operations using various <span class="nowrap">modeling methods</span>
                        </p>
                    </div>
                </div>
                <div class="expertise-item">
                    <div class="expertise-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-mstn/images/ExploreIcon.png"
                            alt="Program Icon">
                    </div>
                    <div class="expertise-content">
                        <p class="expertise-item-text">Explore future transportation challenges, including green,
                            automated, and <span class="nowrap">AI-driven solutions</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>`,
        cssCode: `/* Expertise section styles */
.expertise-section {
    background-color: #ffffff;
    padding: 75px 0;
}

.expertise-heading {
    font-size: 28px;
    line-height: 140%;
    color: #252525;
    text-align: left;
    font-weight: 800;
    font-style: italic;
    margin-bottom: 40px;
}


/* Media query for smaller screens */
@media (max-width: 991px) {
    .expertise-heading {
        font-size: 26px;
    }
}

@media (max-width: 767px) {
    .expertise-heading {
        font-size: 24px;
        margin-bottom: 30px;
    }

    .expertise-section {
        padding: 60px 0;
    }
}

@media (max-width: 480px) {
    .expertise-heading {
        font-size: 22px;
    }

    .expertise-section {
        padding: 50px 0;
    }
}

/* Expertise grid styles */
.expertise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    background-color: #ffffff;
    position: relative;
}

/* Add vertical divider lines between columns */
.expertise-grid .expertise-item:not(:last-child) {
    position: relative;
}

.expertise-grid .expertise-item:nth-child(1):after,
.expertise-grid .expertise-item:nth-child(2):after {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 15%;
    right: 0;
    width: 2px;
    background-color: #A90533;
}

.expertise-item {
    display: flex;
    align-items: center;
    padding: 30px;
}

.expertise-icon {
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 25px;
}

.expertise-icon img {
    max-width: 100%;
    height: auto;
}

.expertise-content {
    flex-grow: 1;
}

.expertise-item-text {
    font-size: 16px;
    line-height: 140%;
    font-weight: 500;
    color: #252525;
}

/* Media query for smaller screens */
@media (max-width: 991px) {
    .expertise-grid {
        grid-template-columns: 1fr;
    }

    /* Remove vertical dividers on mobile */
    .expertise-grid .expertise-item:nth-child(1):after,
    .expertise-grid .expertise-item:nth-child(2):after {
        display: none;
    }

    /* Add horizontal dividers between items on mobile */
    .expertise-item:not(:last-child) {
        position: relative;
    }

    .expertise-item:not(:last-child):after {
        content: "";
        position: absolute;
        left: 15%;
        right: 15%;
        bottom: 0;
        height: 2px;
        background-color: #A90533;
    }

    .expertise-item {
        padding: 25px 20px;
    }

    .expertise-icon {
        width: 50px;
        height: 50px;
        margin-right: 20px;
    }

    .expertise-item-text {
        font-size: 15px;
    }
}

/* Additional adjustments for very small screens */
@media (max-width: 480px) {
    .expertise-icon {
        width: 40px;
        height: 40px;
        margin-right: 15px;
    }

    .expertise-item {
        padding: 20px 15px;
    }

    .expertise-item:not(:last-child):after {
        left: 10%;
        right: 10%;
    }
}
`,
        previewImg: 'expertise-2.png'
      },

      {
        id: 'sec-expertise-3',
        title: 'Download Section 3',
        htmlCode: `<section class="cards-section">
        <div class="container">
            <h2 class="section-heading">In this program, <span class="nowrap">you will:</span></h2>
        </div>
        <div class="container">
            <div class="cards-grid">
                <!-- Card 1 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-ICON1.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Discover different ways to apply large language models and generative AI <span class="nowrap">in
                            robotics</span>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-ICON2.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Learn how to optimize the robot <span class="nowrap">design process</span>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-%20ICON3.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Acquire methods for verifying, testing, and ensuring safety protocols <span class="nowrap">for
                            robots</span>
                    </div>
                </div>

                <!-- Card 4 -->
                <div class="card">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/MIT%2003.31%20AI%20in%20Robotics%20Learning%20Algorithms%2C%20Design%20and%20Safety%20%20am-ICON4.png"
                        alt="Core Competencies" class="card-icon">
                    <div class="card-text">
                        Tour MIT labs engaged in cutting-edge <span class="nowrap">robotics research</span>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `/* Cards Grid Section Styles */
.cards-section {
    padding: 60px 0;
}

.cards-section .section-heading {
    font-size: 32px;
    font-weight: 800;
    color: #01318C;
    margin-bottom: 37px;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.card {
    display: flex;
    align-items: center;
    background-color: #E4EAF5;
    padding: 25px;
    border-radius: 10px;
}

.card-icon {
    flex-shrink: 0;
    width: 55px;
    height: auto;
}

.card-text {
    margin-left: 10px;
    color: #252525;
    font-size: 15px;
    font-weight: 500;
    /* medium weight */
    line-height: 140%;
    text-align: left;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .cards-grid {
        grid-template-columns: 1fr;
    }

    .card {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .card {
        flex-direction: column;
        text-align: center;
    }

    .card-icon {
        margin-bottom: 15px;
    }

    .card-text {
        margin-left: 0;
    }
}
`,
        previewImg: 'expertise-3.png'
      },

     
      
      
    ]
  };
  
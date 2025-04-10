
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

    {
        id: 'sec-benefits-2',
        title: 'benefits 2',
        htmlCode: `<!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="expertise-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Tour MIT labs engaged in breakthrough
                            <span class="nowrap">robotics research </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn how to optimize the robot <span class="nowrap">design process
                            </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Find out more about training controllers via reinforcement learning and
                            <span class="nowrap">imitation learning</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore multi-agent control and <span class="nowrap">safety
                                processes</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Acquire a conceptual, hands-on understanding of how to leverage
                            simulators for training control <span class="nowrap">policies (sim-to-real) </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Discover methods for providing safety certificates to robots,
                            verification, <span class="nowrap">and testing </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">LExplore different ways to apply large language models and generative AI
                            <span class="nowrap">in robotics</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-air/images/Vector%2029.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Align robot objectives with your <span class="nowrap">organization's
                                objectives</span></p>
                    </div>
                </div>
            </div>

        </div>
    </section>`,
        cssCode: `
/* Benefits Grid section styles */
.benefits-grid-section {
    background-color: white;
    padding: 0 0 110px;
}

.expertise-heading {
    font-size: 32px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 35px;
    font-style: italic;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    position: relative;
    background-color: white;
}



/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 13.5px 30px;
    position: relative;
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
    height: 45px;
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
        previewImg: 'benefits-2.png'
      },

      {
        id: 'sec-benefits-3',
        title: 'benefits 3',
        htmlCode: `<!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="expertise-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Master key AI techniques, including the use of neural networks,
                            transformers, generative models, and Bayesian optimization, and understand their
                            applications in <span class="nowrap">scientific research</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Apply generative AI tools for hypothesis generation, text analysis, and
                            data-driven <span class="nowrap">decision-making</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Gain hands-on experience with large language models, predictive
                            modeling, and AI-driven <span class="nowrap">experiment planning</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore real-world AI applications in molecular discovery, materials
                            science, and protein <span class="nowrap">structure prediction</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn to handle and analyze large, high-dimensional datasets using <span
                                class="nowrap">AI methods</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Gain practical experience in overcoming research challenges, such as
                            working with limited experimental data and <span class="nowrap">optimizing workflows</span>
                        </p>
                    </div>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Apply advanced Design-Thinking techniques to create <span
                                class="nowrap">breakthrough innovations</span>
                        </p>
                    </div>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/red-triangle.png"
                            alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore real-world AI applications in molecular discovery, materials
                            science, and protein <span class="nowrap">structure prediction</span>
                        </p>
                    </div>
                </div>


            </div>

        </div>
    </section>`,
        cssCode: `
/* Benefits Grid section styles */
.benefits-grid-section {
    background-color: white;
    padding: 0 0 70px;
}

.benefits-grid-section.gray {
    background-color: #EEEEEE;
    padding: 75px 0 70px;
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
}

/* Vertical line between columns */


/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 13.5px 30px;
    position: relative;
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
    margin-top: 25px;
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
        previewImg: 'benefits-3.png'
      },

      {
        id: 'sec-benefits-4',
        title: 'benefits 4',
        htmlCode: ` <!-- Benefits Grid Section - 4 Areas -->
    <section class="benefits-grid-section">
        <div class="container">
            <h2 class="section-heading">
                Participant Takeaways
            </h2>
            <div class="benefits-grid">
                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Gain a deeper understanding of the key characteristics of AI, ML, and
                            GPT technologies, including Large Language Models, and the challenges around their ethical
                            development, deployment, <span class="nowrap">and use </span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Explore the specific ethical and practical challenges posed by
                            data-driven technologies, including bias, hallucinations, data leakage, privacy issues,
                            negative externalities, and other <span class="nowrap">unforeseen consequences</span>
                        </p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Learn to critically assess these ethical challenges and apply
                            appropriate principles and practical guidelines for governance in AI development <span
                                class="nowrap">and deployment</span></p>
                    </div>
                </div>

                <div class="benefit-item">
                    <div class="benefit-icon">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-merai/images/Arrow.png" alt="Arrow Icon">
                    </div>
                    <div class="benefit-content">
                        <p class="benefit-text">Develop the skills you need to implement ethical frameworks and
                            governance strategies effectively in <span class="nowrap">real-world applications</span></p>
                    </div>
                </div>


            </div>
            <div class="date-container">
                <a href="#form" class="brochure-button">DOWNLOAD <span class="nowrap">BROCHURE</span></a>
            </div>
        </div>
    </section>`,
        cssCode: `
/* Benefits Grid section styles */
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
    background-color: #01318C;
    transform: translateX(-50%);
}

/* Horizontal lines for rows */
.benefit-item {
    display: flex;

    align-items: center;
    padding: 13.5px 30px;
    position: relative;
}

/* Add horizontal lines between rows */
.benefit-item:nth-child(1)::after,
.benefit-item:nth-child(2)::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #01318C;
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
        previewImg: 'benefits-4.png'
      },

     
    
    
  ]
};

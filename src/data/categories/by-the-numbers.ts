// src/data/feature-icon.ts
import { Category } from '../types';

export const byTheNumbersCategory: Category = {
  id: 'cat-byTheNumbers',
  name: 'By The Numbers',
  sections: [
    {
      id: 'sec-byTheNumbers-1',
      title: 'By The Numbers 1',
      htmlCode: `<section class="numbers-section">
        <div class="container">
            <h2 class="section-heading">By the Numbers</h2>

            <div class="numbers-cards">
                <div class="number-card">
                    <div class="number">$34.83B</div>
                    <p class="card-text">The global AI in transportation market is estimated to grow from $4.50 billion
                        in 2024 to <strong>$34.83 billion</strong>
                        <span class="nowrap">by 2034.</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.precedenceresearch.com/artificial-intelligence-in-transportation-market?utm_source=chatgpt.com"
                            target="_blank">Precedence Research</a>
                    </p>
                </div>

                <div class="number-card number-card-2">
                    <div class="number">192,000</div>
                    <p class="card-text"><strong>192,000 </strong>publicly available electric vehicle charging ports are
                        available in the U.S. as of August 2024—up from <strong>100,000</strong> in<span class="nowrap">
                            early
                            2021.</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.theverge.com/2024/8/27/24229494/ev-charging-biden-funding-grants-infrastructure?utm_source=chatgpt.com"
                            target="_blank">The Verge</a> </p>
                </div>

                <div class="number-card">
                    <div class="number">15-20%</div>
                    <p class="card-text"><strong>15-20%</strong> reduction in commuting times in cities that harness
                        <span class="nowrap">smart-mobility applications </span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.mckinsey.com/capabilities/operations/our-insights/smart-cities-digital-solutions-for-a-more-livable-future"
                            target="_blank">McKinsey</a> </p>
                </div>
            </div>
        </div>
    </section>`,
      cssCode: `/* By the Numbers Section */
.numbers-section {
    background-color: white;
    padding: 100px 0;
    position: relative;
}

.numbers-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
    padding-bottom: 50px;
}

.numbers-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.number-card {
    border-radius: 10px;
    background: #55031A;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
}

.number-card-2 {
    background: #7F0426;

}

.number-card:nth-child(1) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(2) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(3) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number {
    color: #ffffff;
    font-size: 64px;
    font-weight: 800;
    line-height: 120%;
}

.number-card .card-text {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-left: 0;
}

.card-source,
.card-source a {
    color: #ffffff;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-top: auto;
}

.card-source a {
    text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .numbers-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .numbers-cards {
        grid-template-columns: 1fr;
    }

    .numbers-title {
        position: relative;
        top: 0;
        margin-bottom: 30px;
    }

    .numbers-section {
        padding: 40px 0;
    }
}

`,
      previewImg: 'by-the-numbers-1.png'
    },

    {
        id: 'sec-byTheNumbers-2',
        title: 'By The Numbers 2',
        htmlCode: `<section class="numbers-section">
        <div class="container">
            <h2 class="section-heading">By The Numbers</h2>

            <div class="numbers-cards">
                <div class="number-card">
                    <div class="number">79%</div>
                    <p class="card-text"><strong>79%</strong> of corporate strategists view AI and analytics as critical
                        to their success over the next <span class="nowrap">two years</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.gartner.com/en/newsroom/press-releases/2023-07-05-gartner-survey-finds-79-percent-of-corporate-strategists-see-ai-and-analytics-as-critical-to-their-success-over-the-next-two-years"
                            target="_blank">Gartner</a>
                    </p>
                </div>

                <div class="number-card">
                    <div class="number">60%</div>
                    <p class="card-text"><strong>60%</strong>of organizations using AI tools report using
                        <span class="nowrap">generative AI</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year"
                            target="_blank">McKinsey</a> </p>
                </div>

                <div class="number-card">
                    <div class="number">$34%</div>
                    <p class="card-text"><strong>34%</strong> of millennials reported using generative AI <span
                            class="nowrap">in 2023 </span></p>
                    <p class="card-source">Source: <a
                            href="https://www.emarketer.com/content/generative-ai-climb-across-all-age-groups-millennials-gen-z"
                            target="_blank">Insider Intelligence</a> </p>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `/* By the Numbers Section */
.numbers-section {
    background-color: white;
    padding: 35px 0 85px;
    position: relative;
}

.numbers-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
    padding-bottom: 50px;
}

.numbers-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.number-card {
    border-radius: 10px;
    background: #D6EFFA;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
}

.number-card:nth-child(1) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(2) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(3) {
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number {
    color: #01318C;
    font-family: "Work Sans", sans-serif;
    font-size: 75px;
    font-weight: 800;
    line-height: 120%;
}

.number-card .card-text {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-left: 0;
}

.card-source,
.card-source a {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-top: auto;
}

.card-source a {
    text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .numbers-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .numbers-cards {
        grid-template-columns: 1fr;
    }

    .numbers-title {
        position: relative;
        top: 0;
        margin-bottom: 30px;
    }

    .numbers-section {
        padding: 40px 0;
    }
}
`,
        previewImg: 'by-the-numbers-2.png'
      },

      {
        id: 'sec-byTheNumbers-3',
        title: 'By The Numbers 3',
        htmlCode: `<section class="by-the-numbers-section">
        <div class="container">
            <div class="by-the-numbers-grid">
                <div class="heading-column">
                    <div class="section-header">
                        <h2 class="section-heading">By the Numbers</h2>
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/green-triangle.png"
                            alt="Green Triangle Icon" class="section-icon">

                    </div>
                </div>
                <div class="cards-column">
                    <div class="stat-card">
                        <h3 class="stat-number">$4.4 trillion</h3>
                        <p class="stat-description">Generative AI will add a staggering $4.4 trillion to the global
                            economy each year</p>
                        <p class="stat-source">Source: <a
                                href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
                                target="_blank">McKinsey & Company</a></p>
                    </div>
                    <div class="stat-card">
                        <h3 class="stat-number">More than 60%</h3>
                        <p class="stat-description">More than 60% of companies with more 10,000 employees are using AI
                        </p>
                        <p class="stat-source">Source: <a
                                href="https://mitsloan.mit.edu/ideas-made-to-matter/who-what-and-where-ai-adoption-america#:~:text=More%20than%2050%25%20of%20companies,4%25%20in%20construction%20and%20retail."
                                target="_blank">MIT Sloan School of Management</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `/* By the Numbers Section */
.by-the-numbers-section {
    background-color: white;
    padding: 90px 0;
}

.by-the-numbers-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 60px;
    align-items:center;
}

.heading-column {
    position: relative;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.section-icon {
    width: 24px;
    height: auto;
}

.section-heading {
    font-size: 28px;
    font-weight: 800;
    color: #252525;
    margin: 0;
}

.cards-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.stat-card {
    background-color: #A90533;
    border-radius: 10px;
    padding:20px  40px;
    color: white;
}

.stat-number {
    font-size: 42px;
    font-weight: 800;
    color: white;
    margin: 0 0 20px 0;
    line-height: 1.1;
}

.stat-description {
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    color: white;
    margin: 0 0 30px 0;
}

.stat-source {
    font-size: 13px;
    color: white;
    margin: 0;
}

.stat-source a {
    color: white;
    text-decoration: underline;
}

.stat-source a:hover {
    opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 991px) {
    .by-the-numbers-grid {
        grid-template-columns: 200px 1fr;
        gap: 40px;
    }
    
    .stat-number {
        font-size: 36px;
    }
    
    .stat-description {
        font-size: 15px;
    }
}

@media (max-width: 767px) {
    .by-the-numbers-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .cards-column {
        grid-template-columns: 1fr;
        gap: 25px;
    }
    
    .section-heading {
        font-size: 26px;
    }
    
    .stat-card {
        padding: 30px;
    }
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 24px;
    }
    
    .stat-number {
        font-size: 32px;
    }
    
    .stat-description {
        font-size: 14px;
        margin-bottom: 20px;
    }
    
    .stat-card {
        padding: 25px;
    }
}


 
.download-columns {position: unset;
}
 .form-arrows-top {
    position: absolute;
    top: 2%;
    left: 0;
    width: 180px
    
    
}
 .form-arrows-bottom {
    position: absolute;
    bottom: 2%;
    left: 20%;
    width: 180px
    
    
}

@media (max-width: 991px) {
      .form-arrows-top {

    top: 20px;

    
    
}
     .form-arrows-bottom {
    bottom: 20px;

    
    
}
}`,
        previewImg: 'by-the-numbers-3.png'
      },

      {
        id: 'sec-byTheNumbers-4',
        title: 'By The Numbers 4',
        htmlCode: `    <section class="numbers-section">
        <div class="container">
            <h2 class="section-heading">By The Numbers</h2>

            <div class="numbers-cards">
                <div class="number-card">
                    <div class="number">93%</div>
                    <p class="card-text"><strong>93%</strong> of Fortune 500 CHROs are already integrating AI tools into
                        <span class="nowrap">their operations.</span>
                    </p>
                    <p class="card-source">Source: <a
                            href="https://www.gallup.com/workplace/651203/workplace-answering-big-questions.aspx"
                            target="_blank">Gallup</a>
                    </p>
                </div>

                <div class="number-card">
                    <div class="number">71%</div>
                    <p class="card-text"><strong>71%</strong>of employees trust their employers to act ethically as they
                        <span class="nowrap">develop AI.</span>
                    </p>
                    <p class="card-source">Source: McKinsey & Company </p>
                </div>

                <div class="number-card">
                    <div class="number">$4.4T</div>
                    <p class="card-text">Generative AI alone will add a staggering <strong>$4.4 trillion</strong> to the
                        global <span class="nowrap">economy—each year.</span></p>
                    <p class="card-source">Source: <a
                            href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
                            target="_blank">McKinsey & Company</a> </p>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `
/* By the Numbers Section */
.numbers-section {
    background-color: white;
    padding: 35px 0 25px;
    position: relative;
}

.numbers-title {
    color: #252525;
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
    padding-bottom: 50px;
}

.numbers-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.number-card {
    border-radius: 10px;
    background: #C1CFE5;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: relative;
    overflow: hidden;
}

.number-card:nth-child(1) {
    background-image: url('https://slxcloud.app/MIT/2025/Course-2025-merai/images/ByTheNumbers1.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(2) {
    background-image: url('https://slxcloud.app/MIT/2025/Course-2025-merai/images/ByTheNumbers2.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number-card:nth-child(3) {
    background-image: url('https://slxcloud.app/MIT/2025/Course-2025-merai/images/ByTheNumbers3.png');
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;
}

.number {
    color: #021944;
    font-family: "Work Sans", sans-serif;
    font-size: 84px;
    font-weight: 800;
    line-height: 120%;
}

.number-card .card-text {
    color: #021944;
    font-family: "Work Sans", sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 150%;
    margin-left: 0;
}

.card-source,
.card-source a {
    color: #021944;
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
    margin-top: auto;
}

.card-source a {
    text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 992px) {
    .numbers-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .numbers-cards {
        grid-template-columns: 1fr;
    }

    .numbers-title {
        position: relative;
        top: 0;
        margin-bottom: 30px;
    }

    .numbers-section {
        padding: 40px 0;
    }
}




/* Cards Grid Section Styles */
.cards-section {
    padding: 60px 0;
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
}`,
        previewImg: 'by-the-numbers-4.png'
      },

      
    
  ]
};

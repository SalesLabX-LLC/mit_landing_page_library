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
        htmlCode: ``,
        cssCode: ``,
        previewImg: 'by-the-numbers-2.png'
      },
    
  ]
};

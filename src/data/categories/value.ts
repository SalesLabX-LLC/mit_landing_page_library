// src/data/hero.ts
import { Category } from '../types';

export const valueCategory: Category = {
  id: 'cat-value',
  name: 'Value',
  sections: [
    

    {
        id: 'sec-value-1',
        title: 'Value Section 1',
        htmlCode: `<section class="value-section">
        <div class="container">
            <div class="value-grid">
                <div class="heading-column">
                    <h2 class="section-heading">Discover the tools transforming research</h2>
                </div>
                <div class="divider"></div>
                <div class="text-column">
                    <p class="value-text">Master AI techniques for enhancing experiments, building generative and
                        predictive models, and streamlining data analysis for faster insights.</p>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `
/* Grid-based Two Column Section with Divider */
/* Flex-based Two Column Section with Divider */
.value-section {
    background-color: #55031A;
    padding: 80px 0;
    position: relative;
}



.value-grid {
    display: flex;
    align-items: center;
    position: relative;
}

.heading-column {
    flex: 0 0 auto; 
    padding-right: 40px;
}

.value-grid .section-heading {
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    margin-bottom: 0;
    text-align: left;
    max-width: 252px;
}

.value-grid .divider {
    flex: 0 0 2px; /* 2px wide, don't grow, don't shrink */
    align-self: stretch; /* Fill the height */
    height: 120px;
    background-color: #A90533;
    margin: auto 20px; /* Add margin on both sides */
}



.value-text {
    font-size: 16px;
    padding-left: 40px;
    font-weight: 400;
    line-height: 160%;
    color: #ffffff;
    max-width: 600px;
}

/* Media query for tablet */
@media (max-width: 991px) {
    .value-grid {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .value-grid .section-heading {
        font-size: 24px;
        border-bottom: 2px solid #C64A1E;
        padding-bottom: 15px;
        margin-bottom: 20px;
        max-width: 80%;
    }

    .heading-column {
        padding-right: 0;
        width: 100%;
    }

    .value-grid .divider {
        display: none;
    }

    .text-column {
        padding-left: 0 !important;
        width: 100%;
    }
    .value-text {
        padding-left: 0;
    }
}

/* Media query for mobile */
@media (max-width: 767px) {
    .value-section {
        padding: 60px 0;
    }
    
    .value-text {
        max-width: 100%;
    }
}

/* Additional adjustments for smaller screens */
@media (max-width: 480px) {
    .value-section {
        padding: 50px 0;
    }

    .value-grid .section-heading {
        padding-bottom: 30px;
        font-size: 22px;
        
    }
}
`,
        previewImg: 'value-1.png'
      },

     

   
  ]
};

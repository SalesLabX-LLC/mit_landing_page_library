// src/data/grid-lines.ts
import { Category } from '../types';

export const expertsCategory: Category = {
  id: 'cat-experts',
  name: 'Experts',
  sections: [
    {
      id: 'sec-experts-1',
      title: 'experts 1',
      htmlCode: `<section class="mit-expert-section">

        <div class="expert-container">
            <div class="expert-content">
                <div class="expert-contentleft-column">
                    <h2 class="expert-heading">Design Next-Generation Transportation Systems</h2>
                    <div class="heading-line"></div>
                </div>
                <div class="expert-contentright-column">
                    <p class="expert-paragraph">
                        Autonomous vehicles. Electric mobility. On-demand services. We’re in a transportation
                        revolution, the seventh in history, and these changes are pushing the boundaries of
                        transportation design. As intelligent mobility systems evolve, professionals need a deep
                        understanding of AI-driven analytics, predictive modeling, and connected vehicle
                        technologies—and the skills to align these tools and technologies with broader urban planning
                        and sustainability goals.
                    </p>
                    <p class="expert-paragraph">
                        In this dynamic live online course, you'll discover how to design next-generation mobility
                        systems across a range of scales using the latest methods—from demand and network modeling to AI
                        to simulation, optimization, and control. You'll leave the experience with the tools you need to
                        enhance your region's transportation infrastructure—and the knowledge to tackle the societal and
                        environmental challenges shaping tomorrow's transportation landscape.
                    </p>
                </div>
            </div>
        </div>
    </section>`,
      cssCode: `/* MIT Expert Section Styles */
.mit-expert-section {
    padding: 100px 0;
    position: relative;
    background-color: #751115;
}

.expert-container {
    max-width: 1015px;
    margin: 0 auto;
    padding: 0 15px;
}

.expert-content {
    display: flex;
    gap: 110px;
}

.expert-contentleft-column {
    position: relative;
    flex-shrink: 0;
}

.expert-heading {
    font-size: 32px;
    font-weight: 800;
    /* extra bold */
    line-height: 130%;
    color: #ffffff;
    max-width: 383px;
    margin: 0 0 20px 0;
}

.heading-line {
    height: 2px;
    background-color: #BA375C;
    position: absolute;
    left: -100vw;
    /* Extends to the left edge of the screen */
    right: 0;
    width: calc(100% + 100vw);
}

.expert-contentright-column {
    flex: 1;
}

.expert-paragraph {
    font-size: 17px;
    line-height: 150%;
    color: #ffffff;
    margin: 0 0 30px 0;
}

.expert-paragraph:last-child {
    margin-bottom: 0;
}

/* Responsive Styles */
@media (max-width: 992px) {
    .expert-content {
        flex-direction: column;
        gap: 40px;
    }

    .expert-contentleft-column {
        width: 100%;
    }

    .expert-heading {
        max-width: 100%;
    }


}

@media (max-width: 768px) {
    .mit-expert-section {
        padding: 40px 0;
    }

    .expert-heading {
        font-size: 28px;
    }

    .expert-paragraph {
        font-size: 16px;
    }
}`,
      previewImg: 'experts-1.png'
    },

    {
        id: 'sec-experts-2',
        title: 'experts 2',
        htmlCode: ``,
        cssCode: ``,
        previewImg: 'experts-2.png'
      },
    
  ]
};

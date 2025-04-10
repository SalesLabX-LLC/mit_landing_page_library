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
        htmlCode: `<section class="mit-expert-section">

        <div class="container">
            <div class="expert-content">
                <div class="expert-contentleft-column">
                    <h2 class="expert-heading">Discover how to design breakthrough generative <span class="nowrap">AI tools</span></h2>
                    <div class="heading-line"></div>
                </div>
                <div class="expert-contentright-column">
                    <p class="expert-paragraph">
                        Generative AI is now ubiquitous, with some estimates suggesting that the market will reach a
                        staggering $1.3 trillion by 2032. But alongside this remarkable growth comes profound
                        disruption, as generative AI is transforming conventional robotic algorithms and design. Acquire
                        the skills you need to keep pace in the generative AI revolution in this brand-new, <span
                            class="nowrap">high-impact
                            course.</span>
                    </p>
                    <p class="expert-paragraph">
                        Alongside accomplished global peers, you'll explore the key ways that generative AI is
                        disrupting conventional robot design, with a focus on robot learning, testing, and the
                        application of safety certificates. You'll emerge with the skills you need to create
                        cutting-edge generative AI applications of your own—tools that can help you stay competitive in
                        this rapidly<span class="nowrap">evolving field.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>`,
        cssCode: `
/* MIT Expert Section Styles */
.mit-expert-section {
    position: relative;
    overflow: hidden;
}

.expert-container {
    max-width: 1015px;
    margin: 0 auto;
    padding: 0 15px;
}

.expert-content {
    display: flex;
    gap: 110px;
    padding: 60px 60px 60px 0;
    border-radius: 0 10px 10px 0;
    background: #021944;
    position: relative;
}


.expert-content::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    width: 100vw;
    height: 100%;
    background: #021944;
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
    max-width: 340px;
    margin: 0 0 20px 0;
}

.heading-line {
    height: 2px;
    background-color: #5883BA;
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
        previewImg: 'experts-2.png'
      },

     
    
  ]
};

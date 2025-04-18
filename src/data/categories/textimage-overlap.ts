// src/data/textimage-overlap.ts
import { Category } from '../types';

export const textImageOverlapCategory: Category = {
  id: 'cat-text-image',
  name: 'Text Image Overlap',
  sections: [
    {
      id: 'sec-textimg-1',
      title: 'Text-Image 1',
      htmlCode: `<section class="digital-age-section">
        <div class="container">
            <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%203.png" alt="Arrow"
                class="digital-age-arrow" />
            <div class="digital-age-grid">
                <div class="image-column">
                    <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/woman-digital-age.jpg"
                        alt="Woman in the digital age" class="digital-image">
                </div>
                <div class="text-column">
                    <div class="text-content">
                        <h2 class="digital-heading">Tap the Potential of the Digital Age.<br><em> Transform Your
                                Organization.</em></h2>
                        <p class="digital-text">In today's highly uncertain, increasingly digital world, it's more
                            essential than ever to understand how to enhance the value your business provides to <span
                                class="nowrap"></span>its
                            consumers.</span></p>
                        <p class="digital-text">In this three-day course, you'll acquire proven tools, skills, and
                            frameworks that can help you take your current product and services strategies to the next
                            level and future-proof your innovation efforts. You'll leave primed to use game-changing
                            technologies that can help you build better customer experiences and meet the unique,
                            evolving challenges of the<span class="nowrap"> digital age.</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
      cssCode: `/* Digital Age Section with Image and Text */
.digital-age-section {
    margin-top: 75px;
    padding: 0px 0 0px;
    background-color: #fff;
    position: relative;
    /* Light background for the section */
}


.digital-age-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 0px;
    align-items: center;
}


.digital-image {
    width: 55vw;
    height: auto;
    display: block;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: -70px;
    border-radius: 0 10px 10px 0;
    z-index: 1
}

.text-column {
    display: flex;
    align-items: center;
    padding-left: 40px;
}

.text-content {
    background-color: #C64A1E;
    border-radius: 10px;
    padding: 55px;
    color: white;
    z-index: 2;
}

.digital-heading {
    font-size: 32px;
    font-weight: 800;
    /* extra bold */
    line-height: 120%;
    color: white;
    margin-bottom: 20px;
}

.digital-text {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 20px;
}

.digital-text:last-child {
    margin-bottom: 0;
}

@media (min-width: 1600px) {

    .text-content {
        background-color: #C64A1E;
        border-radius: 10px;
        padding: 120px 55px;

    }
}

/* Media query for tablet and below */
@media (max-width: 991px) {
    .digital-age-grid {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .text-content {
        padding: 40px;
        border-radius: 0 0 10px 10px;
    }

    .digital-heading {
        font-size: 30px;
    }

    .digital-image {
        position: unset;
        width: 100%;
        border-radius: 10px 10px 0 0;
    }

    .digital-age-section {
        margin-top: 0;
    }
}

/* Media query for mobile */
@media (max-width: 767px) {
    .digital-age-section {
        padding: 60px 0;
    }

    .text-content {
        padding: 30px;
        border-radius: 0 0 10px 10px;
    }

    .digital-heading {
        font-size: 26px;
        margin-bottom: 15px;
    }

    .digital-text {
        font-size: 15px;
        line-height: 145%;
    }
}

/* Additional adjustments for smaller screens */
@media (max-width: 480px) {
    .digital-age-section {
        padding: 40px 0;
    }

    .text-content {
        padding: 25px;
        border-radius: 0 0 10px 10px;
    }

    .digital-heading {
        font-size: 24px;
    }
}

.digital-age-arrow {
    width: 100%;
    max-width: 500px;
    position: absolute;
    top: 45%;
    left: 15%;
    z-index: 999;
}

@media (max-width: 1700px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 15%;
    }
}

@media (max-width: 1440px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 10%;
    }
}

@media (max-width: 1140px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 5%;
    }
}

@media (max-width: 992px) {
    .digital-age-arrow {
        display: none;
    }
}`,
      previewImg: 'textimg-1.png'
    },

    
    {
      id: 'sec-textimg-2',
      title: 'Text-Image 2',
      htmlCode: ` <section class="digital-age-section">

        <div class="digital-age-grid">

            <div class="text-column">
                <div class="text-content">
                    <h2 class="digital-heading">Unlock AI for accelerated <br> scientific innovation</h2>
                    <p class="digital-text">Biology. Chemistry. Engineering. AI is transforming how scientific
                        discoveries are made across multiple disciplines, empowering researchers to enhance
                        workflows, generate hypotheses, speed up simulations, and automate experiment design.
                        Looking to harness the latest in AI to optimize your own research? Start here <span
                            class="nowrap"></span>at MIT.</span></p>
                    <p class="digital-text">In this high-impact three-day course—taught by MIT Professor Wojciech
                        Matusik and Harvard University Professor Hanspeter Pfister—you'll learn how to apply a range
                        of AI advancements to the scientific <span class="nowrap">discovery process.</span></p>
                    <p class="digital-text">Using generative and predictive AI models, you'll learn how to propose
                        innovative molecules, materials, and experimental designs, enabling you to optimize planning
                        and accelerate results. You'll also master AI techniques for solving common scientific
                        challenges, such as working with small datasets and automating repetitive tasks, freeing you
                        to focus on higher-value problem solving. Additionally, you'll dive into structured methods
                        for data visualization, making complex research findings easier to interpret <span
                            class="nowrap">and share.</span></p>
                </div>
            </div>
            <div class="image-column">
                <img src="https://slxcloud.app/MIT/2025/Course-2025-aisd/images/scientific-innovation.png" alt="Unlock AI for accelerated
                        scientific innovation" class="digital-image">
            </div>
        </div>
    </section>`,
      cssCode: `/* Digital Age Section with Image and Text */
.digital-age-section {
    margin-top: 75px;
    padding: 0px 0 0px;
    background-color: #fff;
    position: relative;
    /* Light background for the section */
}


.digital-age-grid {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 0px;
    align-items: center;
}


.digital-image {
    width: 50vw;

    border-radius: 0 10px 10px 0;
  
}

.text-column {
    display: flex;
    align-items: center;
}

.text-content {
    background-color: #EEEEEE;
    border-radius: 10px;
    color: #262525;
    z-index: 2;
}

.digital-heading {
    font-size: 32px;
    font-weight: 800;
    /* extra bold */
    line-height: 120%;
    color: 262525;
    margin-bottom: 20px;
}

.digital-text {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 20px;
}

.digital-text:last-child {
    margin-bottom: 0;
}

@media (min-width: 1600px) {

    .text-content {
        border-radius: 10px;

    }
}

@media (min-width: 1440px) {

    .text-content {
        
        padding: 90px;
        padding-left: calc((100vw - 1240px)/2);
        padding-right: 80px;
        width: 55vw;
    }
}
@media (max-width: 1440px) {

    .text-content {
        
        padding: 70px 7.5vw;
        width: 55vw;
    }
}


@media (min-width: 991px) {
    .digital-image  {
        position: absolute;
    top: -100px;
    width: 50vw;
    left: 50%;
    }

    
}
/* Media query for tablet and below */
@media (max-width: 991px) {
    .digital-age-grid {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .text-content {
        border-radius:10px 10px 0 0;
        padding: 40px 7.5vw;
        width: 100%;

    }

    .digital-heading {
        font-size: 30px;
    }

    .digital-image {
        position: unset;
        width: 100%;
        border-radius:  0 0 10px 10px;
    }

    .digital-age-section {
        margin-top: 0;
    }
}

/* Media query for mobile */
@media (max-width: 767px) {
    .digital-age-section {
        padding: 60px 0;
    }

    .text-content {
        border-radius:10px 10px 0 0 ;
        padding: 40px 2.5vw;

    }

    .digital-heading {
        font-size: 26px;
        margin-bottom: 15px;
    }

    .digital-text {
        font-size: 15px;
        line-height: 145%;
    }
}

/* Additional adjustments for smaller screens */
@media (max-width: 480px) {
    .digital-age-section {
        padding: 40px 0;
    }

    .text-content {
        border-radius:10px 10px 0 0 ;
        padding: 40px 2.5vw;
    }

    .digital-heading {
        font-size: 24px;
    }
}

.digital-age-arrow {
    width: 100%;
    max-width: 500px;
    position: absolute;
    top: 45%;
    left: 15%;
    z-index: 999;
}

@media (max-width: 1700px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 15%;
    }
}

@media (max-width: 1440px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 10%;
    }
}

@media (max-width: 1140px) {
    .digital-age-arrow {
        max-width: 450px;
        position: absolute;
        top: 45%;
        left: 5%;
    }
}

@media (max-width: 992px) {
    .digital-age-arrow {
        display: none;
    }
}

`,
      previewImg: 'textimg-2.png'
    },

    
    
  ]
};

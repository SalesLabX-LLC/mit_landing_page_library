// src/data/instructors.ts
import { Category } from '../types';

export const instructorsCategory: Category = {
  id: 'cat-instructors',
  name: 'Instructors',
  sections: [
    {
      id: 'sec-instructors-1',
      title: 'Instructors 1',
      htmlCode: `<!-- Instructor Section -->
    <section class="instructor-section">
        <div class="container">
            <h2 class="section-heading">Lead Faculty</h2>
        </div>

        <div class="instructor-container">
            <div class="content-wrapper">

                <div class="instructor-details">
                    <div class="instructor-info">
                        <h3 class="instructor-name">Michael A M Davies</h3>
                        <p class="instructor-bio">Michael A M Daviesteaches the engineering and business elements of the
                            Integrated Design andManagement (IDM) program at MIT. He is the founder and chairman of
                            Endeavour Partners, a boutique business strategy consulting firm that empowers global
                            business leaders to create value and drive growth through innovation. Davies' current
                            research focuses on the rapid shift toward smartphones, cloud services, the Internet of
                            Things, artificial intelligence, and robotics, with a particular emphasis on the forces
                            driving this shift and their implications over the next
                            <span class="nowrap">few years.</span>
                        </p>
                    </div>
                    <div class="instructor-image-container">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/Michael-A-M-Davies.png"
                            alt="Michael A M Davies" class="instructor-image">
                    </div>
                </div>
            </div>
        </div>

        <div class="instructor-container-right">
            <div class="content-wrapper-right">
                <div class="instructor-details-right">
                    <div class="instructor-image-container-right">
                        <img src="https://slxcloud.app/MIT/2025/Course-2025-bicv/images/Blade-Kotelly.png"
                            alt="Blade Kotelly" class="instructor-image-right">
                    </div>
                    <div class="instructor-info-right">
                        <h3 class="instructor-name-right">Blade Kotelly</h3>
                        <p class="instructor-bio-right">Blade Kotelly
                            is an innovation and user-experience expert and Senior Lecturer at MIT. He provides
                            consulting services in design-thinking, helps top brands radically innovate their products
                            and services, and teaches corporate teams how to create solutions that customers love. His
                            prior clients include Bose, CPIInternational, Whirlpool, and Lufthansa. He is the author of
                            a book focused on speech-recognition interface design,
                            The Art and Business of Speech Recognition: Creating the <span class="nowrap"> Noble
                                Voice.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>`,
      cssCode: `/* Instructor Section styles */
.instructor-section {
    background-color: white;
    padding: 0;
    overflow-x: hidden;
    position: relative;
}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container {
    width: 75%;
    background-color: #C64A1E;
    padding: 20px 20px 20px;
    position: relative;
    left: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-image: url("https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%204.png");
    background-position: top 30px left 70%;
    /* Added to position the background properly */
    background-size: 400px;
    background-repeat: no-repeat;

}

.content-wrapper {
    /* padding-left: calc(5vw + 20px); */
    padding-right: 0px;
    padding-left: 2.5vw;
}

.instructor-arrow {
    height: 50px;
    position: absolute;
    top: 30px;
}

.instructor-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    /* This should be uncommented */

    padding: 0;
    /* Add padding to ensure content doesn't overlap with the background */
    min-height: 300px;
    /* Set a minimum height to ensure the background is visible */
}

.instructor-info {
    width: 66.666%;
    /* 2/3 of the container width */
    padding-right: 40px;
}

.instructor-name {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-image-container {
    width: 33.333%;
    position: static;

}

.instructor-image {
    max-width: 300px;
    width: 100%;
    position: absolute;
    bottom: 20px;
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper {
        padding-left: 0;
        /* Tablet and small desktop padding */
    }

    .instructor-container {
        padding-left: 0;
    }

    .instructor-details {
        margin-left: 7.5vw;
    }

}

@media (min-width: 1440px) {
    .content-wrapper {
        padding-left: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }

    .instructor-details {
        margin-left: 0;
    }


}

@media (max-width: 1480px) {
    .instructor-container {
        width: 90%;
        padding-bottom: 20px;
    }
    .instructor-container-right {
        width: 90% !important;
    }
    .instructor-image {
        max-width: 330px;
        width: 100%;
        position: absolute;
        bottom: -30px;
    }
    .instructor-container-right {
        margin-top: -36px  !important;
    }
}



/* Mobile adjustments */
@media (max-width: 991px) {

    .instructor-container {
        width: 80%;
        padding-bottom: 0;
        padding-top: 60px;
    }

    .instructor-details {
        flex-direction: column;
    }

    .instructor-container-right {
        width: 80% !important;
    }

    .instructor-info {
        width: 100%;
        padding-right: 0;
        margin-bottom: 320px;
        /* Make space for the image below */
    }

    .instructor-image-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .instructor-image {
        position: static;
        max-width: 300px;
        margin-top: -280px;
    }
}

@media (max-width: 767px) {

    .instructor-container {
        width: 890%;
    }

    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section {
        padding: 70px 0;
    }

    .instructor-container {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;
    }

    .instructor-name {
        font-size: 22px;
    }

    .instructor-bio {
        font-size: 15px;
        padding-bottom: 100px;
    }

    .instructor-info {
        margin-bottom: 220px;
        max-width: 80vw;
    }

    /* .instructor-image {
        max-width: 300px;
        margin-top: -250px;
    } */
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section {
        padding: 50px 0;
    }

    .instructor-container {
        padding: 30px 0 0;
    }

    .instructor-info {
        margin-bottom: 180px;
    }

    .instructor-image {
        max-width: 270px;
        margin-top: -210px;
    }
}


/* Right-Aligned Instructor Section styles */
.instructor-section-right {
    background-color: white;
    padding: 100px 0;
    overflow-x: hidden;
    position: relative;

}

.section-heading {
    font-size: 36px;
    font-weight: 800;
    color: #252525;
    margin-bottom: 50px;
}

.instructor-container-right {
    width: 75%;
    background-color: #842619;
    padding: 60px 0;
    position: relative;
    right: 0;
    margin-left: auto;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: -40px;
    overflow: hidden;
    background-image: url(https://slxcloud.app/MIT/2025/Course-2025-bicv/images/arrow%205.png);
    background-repeat: no-repeat;
    background-size: 150px;
    background-position: left 18% center;

}

.content-wrapper-right {
    padding-right: 5vw;
    /* Default mobile padding on right */
    padding-left: 20px;
}

.instructor-details-right {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
}

.instructor-info-right {
    width: 66.666%;
    /* 2/3 of the container width */
    padding-left: 40px;
}

.instructor-name-right {
    color: white;
    font-size: 24px;
    font-weight: 700;
    /* bold */
    margin-bottom: 15px;
}

.instructor-bio-right {
    color: white;
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    /* regular */
}

.instructor-image-container-right {
    width: 33.333%;
    /* 1/3 of the container width */

}

.instructor-image-right {
    max-width: 300px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 60px;
    max-width: 230px;
    /* 50px above the container + 60px padding top */
}

/* Media queries for different screen sizes */
@media (min-width: 768px) {
    .content-wrapper-right {
        padding-right: 7.5vw;
        /* Tablet and small desktop padding */
    }
}

@media (min-width: 1440px) {
    .content-wrapper-right {
        padding-right: calc((100vw - 1240px) / 2);
        /* Desktop larger than 1440px */
    }
}

/* Mobile adjustments */
@media (max-width: 991px) {
    .instructor-details-right {
        flex-direction: column;
    }

    .instructor-info-right {
        width: 100%;
        padding-left: 0;
        margin-bottom: 250px;
        /* Make space for the image below */
        order: 1;
    }

    .instructor-image-container-right {
        width: 100%;
        display: flex;
        justify-content: center;
        order: 2;
    }

    .instructor-container-right {
        background-position: left 80% bottom 15%;
        padding-bottom: 0;
    }

    .instructor-image-right {
        position: static;
        max-width: 250px;
        margin-top: -220px;
        /* Overlap with the space created above */
    }
}

@media (max-width: 767px) {
    .section-heading {
        font-size: 30px;
        margin-bottom: 30px;
    }

    .instructor-section-right {
        padding: 70px 0;
    }

    .instructor-container-right {
        width: 100%;
        /* Full width on mobile */
        padding: 40px 0 0;

    }

    .instructor-name-right {
        font-size: 22px;
    }

    .instructor-bio-right {
        font-size: 15px;
    }

    .instructor-info-right {
        margin-bottom: 220px;
    }

    .instructor-image-right {
        max-width: 300px;
        margin-top: -200px;
    }
}

@media (max-width: 480px) {
    .section-heading {
        font-size: 26px;
    }

    .instructor-section-right {
        padding: 50px 0;
    }

    .instructor-container-right {
        padding: 30px 0;
        background-size: 60px;
    }

    .instructor-info-right {
        margin-bottom: 180px;
    }

    .instructor-image-right {
        max-width: 180px;
        margin-top: -210px;
    }
}`,
      previewImg: 'instructors-1.png'
    },
    {
      id: 'sec-instructors-2',
      title: 'Instructors 2',
      htmlCode: ``,
      cssCode: ``,
      previewImg: 'instructors-2.png'
    },
  ]
};

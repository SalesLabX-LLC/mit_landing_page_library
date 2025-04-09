// src/data/by-number.ts
import { Category } from '../types';

export const footerCategory: Category = {
  id: 'cat-footer',
  name: 'Footer',
  sections: [
    {
      id: 'sec-footer-1',
      title: 'Footer 1',
      htmlCode: `<!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-container">
                <div class="footer-content">
                    <h3 class="footer-heading">MIT Professional <span class="nowrap">Education</span></h3>
                    <p class="footer-text">700 Technology Square Building NE48-200<br>Cambridge, MA 02139, <span
                            class="nowrap">USA</span></p>
                    <p class="footer-text">Copyright © 2025 All Rights <span class="nowrap">Reserved</span></p>
                </div>
                <div class="footer-links">
                    <p class="footer-link">
                        <a href="https://accessibility.mit.edu/" target="_blank" rel="noopener"><span
                                class="nowrap">Accessibility</span></a>
                    </p>
                    <p class="footer-link">
                        <a href="https://professional.mit.edu/policies" target="_blank" rel="noopener"><span
                                class="nowrap">Privacy</span></a>
                    </p>
                </div>
            </div>
        </div>
    </footer>`,
      cssCode: `/* Footer styles with right-aligned links */
.footer {
    background-color: #252525;
    padding: 40px 0;
    color: white;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.footer-content {
    text-align: left;
}

.footer-heading {
    font-family: 'Libre Franklin', Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    /* bold */
    margin-bottom: 22px;
}

.footer-text {
    font-size: 14px;
    font-weight: 400;
    /* regular */
    line-height: 1.5;
    margin-bottom: 15px;
}

.footer-text:last-child {
    margin-bottom: 0;
}

.footer-links {
    text-align: right;
}

.footer-link {
    font-size: 14px;
    font-weight: 400;
    /* regular */
    line-height: 1.5;
    margin-bottom: 8px;
}

.footer-link a {
    color: white;
    text-decoration: underline;
}

.footer-link a:hover {
    color: #f0f0f0;
}

/* Responsive adjustments */
@media (max-width: 767px) {
    .footer {
        padding: 30px 0;
    }

    .footer-container {
        flex-direction: column;
    }

    .footer-links {
        text-align: left;
        margin-top: 25px;
    }
}

@media (max-width: 480px) {
    .footer-heading {
        font-size: 16px;
        margin-bottom: 18px;
    }

    .footer-text,
    .footer-link {
        font-size: 13px;
    }
}`,
      previewImg: 'footer-1.png'
    },

    {
        id: 'sec-footer-2',
        title: 'Footer 2',
        htmlCode: ``,
        cssCode: ``,
        previewImg: 'footer-2.png'
      },
    
  ]
};

import './footer.css';
import logo from '../../logo.svg';

class Footer {
    draw(): void {
        const footerContainer = document.querySelector('.footer');

        if (!footerContainer) {
            console.error('Footer container not found');
            return;
        }

        footerContainer.replaceChildren();

        const footerContent = document.createElement('div');
        footerContent.className = 'footer__content';

        const leftBlock = document.createElement('div');
        leftBlock.className = 'footer__left';

        const githubLink = document.createElement('a');
        githubLink.href = 'https://github.com/kanykeizulumova';
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.textContent = 'GitHub';

        leftBlock.appendChild(githubLink);

        const centerBlock = document.createElement('div');
        centerBlock.className = 'footer__center';

        const copyrightP = document.createElement('p');
        copyrightP.className = 'copyright';
        copyrightP.textContent = '2026 Copyright ';

        const newsApiLink = document.createElement('a');
        newsApiLink.href = 'https://newsapi.org';
        newsApiLink.target = '_blank';
        newsApiLink.rel = 'noopener noreferrer';
        newsApiLink.textContent = 'NewsAPI';

        copyrightP.appendChild(newsApiLink);
        centerBlock.appendChild(copyrightP);

        const rightBlock = document.createElement('div');
        rightBlock.className = 'footer__right';

        const schoolLink = document.createElement('a');
        schoolLink.href = 'https://rs.school/courses/javascript';
        schoolLink.target = '_blank';
        schoolLink.rel = 'noopener noreferrer';

        const schoolLogo = document.createElement('img');
        schoolLogo.src = logo;
        schoolLogo.alt = 'RS School Logo';
        schoolLogo.className = 'footer__logo';

        schoolLink.appendChild(schoolLogo);
        rightBlock.appendChild(schoolLink);

        footerContent.append(leftBlock, centerBlock, rightBlock);
        footerContainer.appendChild(footerContent);
    }
}

export default Footer;

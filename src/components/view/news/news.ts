import './news.css';
import { Article } from '../../../types';

class News {
    draw(data: Article[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        if (!newsItemTemp) {
            console.error('Template #newsItemTemp not found');
            return;
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;

            const newsItem = newsClone.querySelector('.news__item');
            if (newsItem && idx % 2 !== 0) {
                newsItem.classList.add('alt');
            }

            const photoElem = newsClone.querySelector('.news__meta-photo') as HTMLElement | null;
            if (photoElem) {
                photoElem.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            const authorElem = newsClone.querySelector('.news__meta-author');
            if (authorElem) {
                authorElem.textContent = item.author || item.source.name;
            }

            const dateElem = newsClone.querySelector('.news__meta-date');
            if (dateElem) {
                dateElem.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            }

            const titleElem = newsClone.querySelector('.news__description-title');
            if (titleElem) {
                titleElem.textContent = item.title;
            }

            const sourceElem = newsClone.querySelector('.news__description-source');
            if (sourceElem) {
                sourceElem.textContent = item.source.name;
            }

            const descElem = newsClone.querySelector('.news__description-content');
            if (descElem) {
                descElem.textContent = item.description || '';
            }

            const linkElem = newsClone.querySelector('.news__read-more a');
            if (linkElem) {
                linkElem.setAttribute('href', item.url);
            }

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news');
        if (newsContainer) {
            newsContainer.innerHTML = '';
            newsContainer.appendChild(fragment);
        }
    }
}

export default News;

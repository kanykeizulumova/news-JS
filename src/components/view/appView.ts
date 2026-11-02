import News from './news/news';
import { Article, ArticlesResponse, Source } from '../../types';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesResponse): void {
        const values: Article[] = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    drawSources(data: { sources?: Source[] }): void {
        const values: Source[] = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;

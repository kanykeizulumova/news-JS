import AppController from '../controller/controller';
import AppView from '../view/appView';
import { ArticlesResponse, SourcesResponse } from '../../types';
import Footer from '../footer/footer';

class App {
    private controller: AppController;
    private view: AppView;
    private footer: Footer;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.footer = new Footer();
    }

    public start(): void {
        this.footer.draw();

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.addEventListener('click', (e: Event) => {
                this.controller.getNews(e, (data: ArticlesResponse): void => {
                    this.view.drawNews(data);
                });
            });
        }

        this.controller.getSources((data: SourcesResponse): void => {
            this.view.drawSources(data);
        });
    }
}

export default App;

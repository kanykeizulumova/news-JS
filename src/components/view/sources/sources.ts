import './sources.css';
import { Source } from '../../../types';

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();

        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        if (!sourceItemTemp) {
            console.error('Template #sourceItemTemp not found');
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            const nameElem = sourceClone.querySelector('.source__item-name');
            if (nameElem) {
                nameElem.textContent = item.name;
            }

            const itemElem = sourceClone.querySelector('.source__item');
            if (itemElem) {
                itemElem.setAttribute('data-source-id', item.id);
            }

            fragment.append(sourceClone);
        });

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;

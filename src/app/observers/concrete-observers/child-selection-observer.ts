import { ISelectionObserver } from "../ISelectionObserver";
import { FilterItem } from "src/app/Models/filter-item";

export class ChildSelectionObserver implements ISelectionObserver {

    updateSelection(item: FilterItem) {
        let childItems = item.children;
        if (childItems && childItems.length > 0) {
            childItems.forEach(child => {
                let childObs = new ChildSelectionObserver();
                child.attachObserver(childObs);
                child.selectionState = item.selectionState;
                child.detachObserver(childObs);
            })
        }
    }

}
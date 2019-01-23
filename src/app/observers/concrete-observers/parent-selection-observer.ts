import { ISelectionObserver } from "../ISelectionObserver";
import { FilterItem } from "src/app/Models/filter-item";
import { SelectionState } from "src/app/enums/selection-enum";

export class ParentSelectionObserver implements ISelectionObserver {

    updateSelection(item: FilterItem) {
        let parentItem = item.parent;
        if (parentItem && parentItem.value) {
            let parentObs = new ParentSelectionObserver();
            parentItem.attachObserver(parentObs);
            let foundSelectedChild = parentItem.children.filter(child => { return child.selectionState === SelectionState.Selected });
            if (foundSelectedChild.length == parentItem.children.length) {
                parentItem.selectionState = SelectionState.Selected;
            }
            else {
                let foundNonSelectedChild = parentItem.children.filter(child => { return child.selectionState === SelectionState.NotSelected });

                if (foundNonSelectedChild.length == parentItem.children.length) {
                    parentItem.selectionState = SelectionState.NotSelected;
                }
                else {
                    parentItem.selectionState = SelectionState.PartiallySelected;
                }
            }

            parentItem.detachObserver(parentObs);
        }
    }

}
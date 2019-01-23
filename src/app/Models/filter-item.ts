import { SelectionState } from "../enums/selection-enum";
import { ISelectionObserver } from "../observers/ISelectionObserver";
export class FilterItem {

  key: string;
  value: number;
  parent: FilterItem;
  children: FilterItem[];
  private _selectionState: SelectionState = SelectionState.NotSelected;
  private observers: Array<ISelectionObserver> = new Array<ISelectionObserver>();

  get selectionState() {
    return this._selectionState;
  }
  set selectionState(value) {
    if (this._selectionState != value) {
      this._selectionState = value;
      this.notify();
    }
  }

  attachObserver(observer: ISelectionObserver) {
    this.observers.push(observer);
  }

  detachObserver(observer: ISelectionObserver) {
    let found = this.observers.find(obs => obs == observer);
    let ind = this.observers.indexOf(found);
    this.observers.splice(ind, 1);
  }

  notify() {
    this.observers.forEach(obs => obs.updateSelection(this));
  }
}
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FilterItem } from 'src/app/Models/filter-item';
import { SelectionState } from "../../enums/selection-enum";
import { ParentSelectionObserver } from 'src/app/observers/concrete-observers/parent-selection-observer';
import { ChildSelectionObserver } from 'src/app/observers/concrete-observers/child-selection-observer';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor() { }
  @Input() selectionLimit: number = 0;

  @ViewChild('childTreeView') childTreeView: TreeViewComponent;
  @Output() selectedChanged: EventEmitter<any> = new EventEmitter();
  @Input() items: FilterItem[];
  activeItem: FilterItem;

  ngOnInit() {
  }

  toggleItem(item: FilterItem) {
    this.activeItem = this.activeItem === item ? undefined : item;
    if (this.childTreeView !== undefined) {
      this.childTreeView.activeItem = undefined;
    }
  }

  getColor(item) {
    if (item === this.activeItem) {
      return 'rgb(247,247,247)';
    }
  }
  changeSelection($event, item: FilterItem) {
    $event.stopPropagation();
    let parentObs = new ParentSelectionObserver();
    let childObs = new ChildSelectionObserver();
    item.attachObserver(parentObs);
    item.attachObserver(childObs);
    if (item.selectionState == SelectionState.NotSelected)
      item.selectionState = SelectionState.Selected;
    else
      item.selectionState = SelectionState.NotSelected;
    item.detachObserver(parentObs);
    item.detachObserver(childObs);

  }



}
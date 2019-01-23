import { FilterItem } from "../Models/filter-item";

export interface ISelectionObserver {
  updateSelection(subject: FilterItem);
} 
export enum Category {
  GROCERIES = "Groceries",
  UTILITIES = "Utilities",
  ENTERTAINMENT = "Entertainment",
}

export type Filter = `${Category}` | "All Categories";

export const CATEGORIES = Object.values(Category);
export const ALL_CATEGORIES = "All Categories";

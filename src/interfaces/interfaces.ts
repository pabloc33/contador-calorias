export interface CategoriesI {
  id: number;
  name: string;
}

export interface Activity {
  id: string;
  category: number;
  name: string;
  calories: number;
}

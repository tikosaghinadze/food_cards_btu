// menuTypes.ts

// თითოეული icon-ის ტიპი
export interface IconType {
  img: string;
  background: string;
}

// თითოეული პროდუქტის ტიპი
export interface MenuItem {
  img: string;
  title: string;
  description: string;
  calories: number;
  calorieDetails: string;
  deg: number;
  newPrice: number;
  oldPrice: number;
  btnText: string;
  icons: IconType[];
}

// მენიუს ტიპი: key = კატეგორიის სახელი, value = პროდუქტის array
export type Menu = {
  pizza: MenuItem;
  pasta: MenuItem;
  cake: MenuItem;
};

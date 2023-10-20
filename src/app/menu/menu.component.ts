import { Component } from '@angular/core';

export interface MenuItem {
  name: string;
  category: string;
  price: number;
  imagePath:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public listmenu: MenuItem[] = [
    { name: "Salad", category: "Appetizer", price:70,imagePath:'assets/images/salad.jpeg'  },
    { name: "Burger", category: 'Main Course', price: 100 ,imagePath:'assets/images/Burger.avif'},
    { name: "IceCream", category: 'Dessert', price: 40,imagePath:'assets/images/IceCream.jpeg' },
    { name: "French Fries", category: "Appetizer", price: 110 ,imagePath:'assets/images/French Fries.jpg'},
    { name: "Pizza", category: 'Main Course', price: 120,imagePath:'assets/images/Pizza.jpg' },
    { name: "Smiley Fries", category: "Appetizer", price:70  ,imagePath:'assets/images/Smiley Fries.jpg'},
    { name: "Blue Mojito", category: "Cool Drinks", price:80 ,imagePath:'assets/images/Blue Mojito.jpeg' },
    { name: "Mutton Biryani", category: 'Main Course', price: 150 ,imagePath:'assets/images/Mutton Biryani.webp'},
    { name: "Fish Kebab", category: 'Main Course', price: 140 ,imagePath:'assets/images/Fish Kebab.jpg'},
    { name: "Grilled Sandwich", category: "Appetizer", price:100  ,imagePath:'assets/images/Grilled Sandwich.webp'},
    { name: "Sizzling Brownie", category: 'Dessert', price: 70 ,imagePath:'assets/images/Sizzling Brownie.jpg'},
    { name: "Deathby Chocolate", category: 'Dessert', price: 85,imagePath:'assets/images/Deathby Chocolate.jpg' },
    { name: "Falooda", category: 'Dessert', price: 80,imagePath:'assets/images/Falooda.jpg'},
    { name: "Fried Chicken", category: 'Main Course', price: 80 ,imagePath:'assets/images/Fried Chicken.webp'},
    { name: "Pudding", category: 'Dessert', price: 180 ,imagePath:'assets/images/Pudding.jpg'},
    { name: "White Sauce Pasta", category: "Appetizer", price:200 ,imagePath:'assets/images/White Sauce Pasta.webp' },
    { name: "Chocolate waffle", category: 'Dessert', price: 150,imagePath:'assets/images/Chocolate waffle.webp' },
    { name: "Chicken Noodles", category: 'Main Course', price: 120,imagePath:'assets/images/Chicken Noodles.gif' }

    ]
    selectedCategory: string = '';

    filteredMenu: MenuItem[] = [];

    ngOnInit() {
      this.setSelectCategory('');
    }
    setSelectCategory(category: string) {
      this.selectedCategory = category;
      this.filteredMenu = this.listmenu.filter(item => !category || item.category == category);
    }

}


# Cute Restaurant App

Welcome to the Cute Restaurant App, a delightful web application developed using Angular. This application is devolped as task give in the JavaFullStack Devolper course from Iamneo and also This app allows users to explore a restaurant's menu and filter menu items by category. The project incorporates various Angular features, including components, decorators, directives, and pipes, to create an appealing and user-friendly interface.

## Technical Specifications

**Tech Stack:**
- Angular
- Typescript
- HTML
- CSS

**Ports:**
- Front-end: 8081

## Features

### Menu Component (menu.component.ts)

- The app utilizes Angular's `@Component` decorator to define the menu component.
- It includes an interface named `MenuItem` with properties such as `name`, `category`, `price`, and `imagePath`.
- The component initializes an array of menu items (`listmenu`) with sample items, including names, categories, prices, and image paths.
- A filtering mechanism is implemented, allowing users to filter menu items based on categories.
- The selected category and the filtered menu are managed by the component.
- The component's template displays the menu items in a visually appealing way, including images, names, categories, prices, and an "Add to Cart" button.
- The filtering of menu items is done using the `setSelectCategory` function.

### App Component (app.component.html)

- The main app component includes the `<app-menu>` component to display the restaurant menu.
- Angular's `router-outlet` is not utilized in the provided code.

### Styling (styles.css)

- The code does not include a specific reference to external stylesheets or CSS classes. Inline styles are used for formatting.

## Getting Started

To get started with the Cute Restaurant App based on the provided code:

1. Clone the repository to your local machine.

2. Install the necessary dependencies.

   ```bash
   ng new cuteRestaurantApp
   
   cd cuteRestaurantApp

   ```

3. Replace the src folder in the cuteRestaurantApp with the Cloned folder

4. Run the app.

   ```bash
   ng serve --port 8081
   ```

5. Access the app in your web browser at `http://localhost:8081`.

## Sample Menu

The provided code initializes a sample menu with various items. These items are defined in the `listmenu` array, and each item includes properties like name, category, price, and image path. The menu items are dynamically filtered and displayed in the app based on the selected category.

Feel free to modify and expand the sample menu items to match your restaurant's offerings.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Enjoy building your Cute Restaurant App with Angular!

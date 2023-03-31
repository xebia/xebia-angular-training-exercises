# Communicate between components exercise

## Setup

This exercise already comes with a project set up. To download the dependent libraries, run the following command:

```
cd exerciseApp
npm install
```

Now start the development server:

```
ng serve
```

## Exercise

Open `exerciseApp/src/app/shopping-cart.service.ts` and look at the exposed content and methods in the service.

Open `exerciseApp/src/app/shopping-item/shopping-item.component.ts` and inject the service.

Open `exerciseApp/src/app/cart-list/cart-list.component.ts` and inject the service.

Now open `exerciseApp/src/app/cart-list/cart-list.component.html` and hook up the missing service content and method. 
Hint: use the `async` pipe for the content!

Now open `exerciseApp/src/app/cart-list/cart-list.component.html` and hook up the missing service method.

Check the app in the browser to see if your changes are correct.
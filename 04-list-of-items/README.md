# List of items exercise

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

Open `exerciseApp/src/app/item-list/item-list.component.ts` to see for which data you need to render a component list.

Open `exerciseApp/src/app/item-list/item-list.component.html` and finish the \*ngFor expression and bindings.

Check the browser output for the correct rendering of the list.

## Bonus if you have time left

1. Add an input field and a button so that we can add more grocery items to the list.
   You have to add `FormsModule` to the `imports` of `AppModule` to use the `ngModel` directive.
2. Show a validation message when when the input value is empty unless you haven't typed anything yet (dirty/pristine).

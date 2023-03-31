# Extract state from component to services exercise

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

Create a new feature module:

```
ng generate module CustomerDashboard
```

Now create a main component:

```
ng generate component customer-dashboard/CustomerDashboard
```

In `exerciseApp/src/app/customer-dashboard/customer-dashboard.module.ts`, add an `exports` array property and add 
`CustomerDashboardComponent` to it.

In `exerciseApp/src/app/app.module.ts`, add the `CustomerDashboardModule` to the imported modules.

Now, in `exerciseApp/src/app/app.component.html`, add customer dashboard component:

```html
<app-customer-dashboard></app-customer-dashboard>
```

Check your browser windows to see if the just generated component and module work!
# Angular router exercise

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

Add three new modules with lazy loading:

```
ng generate module home --route home --module app
ng generate module users --route users --module app
ng generate module articles --route articles --module app
```

Now open `exerciseApp/src/app/app-routing.module.ts`, format the file and add the following to the `routes` array:

```
  { path: '**', redirectTo: 'home' },
```

Check the browser and see that each route component is loaded in the `<router-outlet>`. Also check that the redirect 
works.
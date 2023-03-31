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

Open `exerciseApp/src/app/do-it-all/do-it-all.component.ts` and see how this component can benefit from state
extraction.

First, generate two new services by running these commands under `exerciseApp/`:

```
ng generate service TimeService
ng generate service CheckedService
```

Move the state and manipulation methods to their respective services. Inject the services and wire them up in the
template.

Check in the browser if the result is still the same.
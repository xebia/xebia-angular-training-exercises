# Passing input to a component exercise

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

As you have seen from the output of the development server, something is missing!

Open `exerciseApp/src/app/app.component.html` to see which component is rendered and which properties are bound.

Open `exerciseApp/src/app/happy-or-not/happy-or-not.component.ts` and add the missing input properties.

Look up the slides about 'Component data flow' to get a hint about the syntax.

## Bonus if you have time left

1. When you click on the <h2> with the name ("Frank" or "Dennis"), update the `title` to this name.
2. Render the emoji using content projection instead of using the `happy` Input.

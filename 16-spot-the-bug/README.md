# Spot the bug exercise

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

There is a bug hidden in this app! Run the application and try to find what the problem is... hint: one of the number
buttons seems to misbehave.

Open the Angular tab in Chrome DevTools and check if something is wrong with the input of the misbehaving component.

Open the Sources tab, press Ctrl-P / Cmd-P and open `number-button.component.html` (yes, the template). Place a 
breakpoint on the button line. Now adjust the line breakpoint to break just before `doEmit()`. Press the misbehaving 
button.

When in the breakpoint, step into the function with F11 / Cmd-; . In the component method, which condition is 
problematic?

Congratulations, you are a great bug hunter!

Bonus: run the tests and see if they cover this scenario.
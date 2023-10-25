# Observe the mouse exercise

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

We are going render a circle that is following the mouse cursor. The mouse coordinates are also rendered and updating while moving the mouse.

Open `exerciseApp/src/app/mouse-observer/mouse-observer.component.html` and see what is rendered in the template.

Open `exerciseApp/src/app/mouse-observer/mouse-observer.component.ts` and implement each TODO.

Browse to the development server to see how your mouse observer is working.

## Bonus if you have time left

1. Move the circle with a delay of 100ms
2. There is an invisible wall: the circle should stay on the left half of the aree, even if the mouse is moving on the right half.
3. Instead of the invisible wall, the circle should not move at all when the mouse is moving in the right half of the area.

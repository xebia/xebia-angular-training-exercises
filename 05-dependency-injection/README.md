# Dependency injection exercise

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

Open `exerciseApp/src/app/power.service.ts` and see what the service exposes.

Open `exerciseApp/src/app/socket/socket.component.ts` to see how the service is injected. Does it work, any why?

Open `exerciseApp/src/app/app.component.ts` and provide the power service to the component tree.

Check the browser output to see if the plug was injected in the socket.

Are there other places where/how you could have provided the PowerService?
One of the possible solutions will not work (white screen). Do you know why?

## Bonus if you have time left

1. Create a value provider with token `PLUGGED` and value `true`.
2. Inject it in the PowerService and use that value instead.

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
# Generate your first Angular app exercise

## Setup CLI

First, make sure you have installed the Angular CLI:

```
npm install -g @angular/cli
```

If you have run this command before, it will upgrade the CLI to the latest version.

Now test the Angular CLI:

```
ng help
```

It should give you a list of possible commands.

## Create app

Run the following command to create your first Angular app:

```
ng new myApp --no-routing --style css
```

Go to your app:

```
cd myApp
```

Start the development server:

```
ng serve
```

Now open a browser and go to:
http://localhost:4200

You should see the default application running.

## Update app component

Open `src/app/app.component.ts` and add the following property to the class:

```
  studentName = '...';
```

Replace the dots with your name of course!

Open `src/app/app.component.html` and clear its contents.
Paste in the following HTML:

```
<h1>Welcome to the Xebia Angular training, {{ studentName }}!</h1>
<p>It is nice to finally meet you.</p>

<svg viewBox="0 0 50 50">
  <path d="M0.161765 37.4041H11.5931L23.9592 25.0411L36.2892 37.4041H47.8644L29.7467 19.238L48.0261 0.927734H36.451L23.9592 13.471L11.5392 0.927734H0L18.1716 19.238L0.161765 37.4041Z" />
</svg>
```

Open `src/app/app.component.css` and paste the following CSS:

```
:host {
  font-family: "Roboto";
  --xebia-color: #6a1d57;
}
h1 {
  color: var(--xebia-color);
}
svg {
  width: 200px;
  fill: var(--xebia-color);
}
```

Open `src/index.html` and add the following element to the <head> tag:

```
<link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
```

Refresh the development page to see your app in full glory!
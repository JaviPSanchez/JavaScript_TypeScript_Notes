/*
Alright, so let's set up our project and also start to load some recipe data
from the Forkify API. And here as always, I already have the starter files loaded. Now this time we have a bit of a different structure here, so I have index.html out here, but then all the rest, all four assets for this project are here in the source folder.

<cmg ./img/Picture05.jpg>

Now, browsers actually don't understand Sass and so it has to be converted to CSS. And so Parcel is going to do that for us.

But now let's open up a new terminal here. And then just like before we need to initialize a new project by writing npm init. And so this command will then create or package.json file.

👉 npm init

Rellenamos todos los datos y dejamos el archivo package.json tal que asi:

NO OLVIDAR PONER "default" en vez de "main" 🖐

{
  "name": "forkify",
  "version": "1.0.0",
  "description": "Recipe API",
  "default": "index.html", 🖐
  "scripts": {
    "start": "parcel index/html",
    "build": "parcel build index.html"
  },
  "author": "JavierPSanchez",
  "license": "ISC"
}

Ahora toca instalar parcel:

👉 npm i parcel@next -D

And so I have to type @next and then edit as a dev dependency. So again, I am writing @next here to install a beta version.

Si tenemos algun problema podemos hacer:

👉 npm i parcel@2 -D

Una vez instalado tenemos:

{
  "name": "forkify",
  "version": "1.0.0",
  "description": "Recipe API",
  "default": "index.html",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  },
  "author": "JavierPSanchez",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.0.0-beta.3.1"
  }
}

And so now let's actually start Parcel by running our npm script, npm run start

👉 npm run start

And actually the start script is a special one in npm for which one you don't even need the run. So you can just write npm start:

👉 npm start

Si tenemos algun error con sass, podemos escribir:

👉 npm install

Y en teoria instalara sass en nuestros "devDependencies".

Una vez todo instalado tendremos nuestra carpeta de node_modules y dist:

<cmg ./img/Picture06.jpg>

And also you see that now we have an actual CSS file. And it is because of this that Parcel actually knows that it needs to compile the Sass file to CSS. So basically I referenced the Sass file here and therefore Parcel knew that it had to include that file in the distribution as well and to also replace the under link to the actual final CSS file.

But of course this folder here dist is not really important for us in development. So everything that we will develop will be here in the source folder and only what we then see in the browser is actually coming from this distribution dist folder.

So again, that's the whole logic of having a module bundler. So it takes a raw source code and compiles it into this nice package here dist folder  that is ready to ship to browsers.

So we can now think about making our first API call, vamos a irnos al local server que nos ha creado parcel:

http://localhost:1234

Una vez en nuestro local server comenzamos con lo que seria nuestra primera API call, el objetivo es mostrar recetas en el UI.

https://forkify-api.herokuapp.com/v2
*/

const { url } = require('inspector');

//And so now as always to make an Ajax request to an API we use the fetch function. que devolvera una promise!
fetch(
  'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
);
//And now that we have this, let's actually create some function around this. So an async function so that we can use ASYNC/Await. Como estamos en una funcion async podemos esperar a la promise tan esperada! Basicamente paramos el codigo de ejecutarse no siendo un problema puesto que funcionara en segundo plano. Por lo que no estamos bloqueando nuesto mainthread de ejecucion!
const showRecipe = async function () {
  try {
    const res = fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
  } catch (err) {
    alert(err);
  }
};
//Una vez que tengamos este resultado tenemos que convertirlo a .json, So as always, let's create a data variable and then await the response .json. So the json method is, again, a method that is available on all the response objects.

const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();

    console.log(res, data);
  } catch (err) {
    alert(err);
  }
};

//Here then in the response, we can see that ok is set to false. And so this is what we're going to use, remember that. So when ok is set to false means that there was some kind of error in the fetch. And so we can then use that to create our own errors.

const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(res, data);
  } catch (err) {
    alert(err);
  }
};

//Para finalizar queremos formatear un poco el OBJECT que recibimos de fetch, puesto que tiene guiones bajos ademas de info que no necesitamos. So basically I want to create a new object based on this object which has some better variable names.

const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    console.log(res, data);
    // So lets create a new recipe variable, which should be data and then remember that it is again data y luego destructuramos. Usamos let para poder crear un nuevo OBJECT:
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    alert(err);
  }
};

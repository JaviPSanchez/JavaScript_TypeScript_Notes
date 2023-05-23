/*
So let's now manually deployour project to an amazing and free hosting service called Netlify But before we can do that, we now need to create the final bundle of our application by running this build command:
*/
{
  "name": "15-mapty",
  "version": "1.0.0",
  "description": "Aplicacion que nos geolocaliza para detectar oportunidades alrededor de nosotros!",
  "default": "index.html",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html --dist-dir ./dist" 👌
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JaviPSanchez/MAPTY.git"
  },
  "author": "JaviPSanchez",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/JaviPSanchez/MAPTY/issues"
  },
  "homepage": "https://github.com/JaviPSanchez/MAPTY#readme",
  "devDependencies": {
    "parcel": "^2.0.0-beta.2"
  }
}
/*
Now this build command here is actually not yet complete, because in the build command, we actually need to manually specify that we want our output to be here in the dist folder, okay?

Tenemos que añadir a nuestro build script:

"build": "parcel build index.html --dist-dir ./dist"

So --dist-dir, which stands for distribution directory basically. And then we need to specify the folder that we actually want to be created.

./dist

Now what's also very important is that here we need to change from main to default.

"default": "index.html"

So very important. Otherwise this build command will not run in parcel two. So again, change this main here to default!

And so now this command here is ready for us to execute it.

👉 npm run build

and then let's wait for it. So as always, it takes some time here, but when it's done, we are ready to then deploy it to folder that was just created to, our Netflify server. And here it is, and now it contains the final code compressed and ready to be shipped:

<cmg img/Picture14.jpg>


But then after everything is done, and once you have the dist folder,
we are ready to go to Netlify and actually deploy this.

Let's go to netlify:

https://app.netlify.com/teams/javipsanchez/overview

Now, Netlify is a free service that lets us developers basically deploy static webpages or static web applications. And with static, we mean that the application only contains HTML, CSS and JavaScript files, as well as some images, but no database or no server side code at all. All right.

So basically Netlify only works for front end applications. So Netlify is really an amazing service. It's extremely easy to set up and to use.
It has a very generous, free plan, and it contains a lot of great features that you can also use for free. And one of these features is called continuous integration with git, which we will use a bit later in the section.




And speaking of easy, let me now show you how easy it actually is to quickly and manually deploy our forkify project. So let's go to our project folder in windows, seleccionamos nuestra carpeta dist creada con parcel y simplemente arrastramos la carpeta a la UI de netlify. And that's it, or page is now deployed!!

So you see how easy that was. So we get to this page here with this random name that we can click on, and this is our webpage, and now everyone can see it.


We can click here on site settings and change the name of our site.




But the great thing about Netlify is not only that it's easy, but as I mentioned before, also some of the great features and one of them is that automatically our page is now secured with an SSL certificate.



And another thing that's great is that all our site assets, so all the files that we just deployed were in fact deployed to a so-called content delivery network or CDN. And that means that instead of uploading the files only to one server in one location in the world,
our site now actually lives in many locations. So in many servers spread out across the entire world. And so then when a user is trying to access our page, they will then get diversion from the server that is closest to them. And so this will then greatly speed up the delivery time off your page or your application.


But anyway, this is how we deploy a project manually to Netlify. However, there is also a better way. So basically a way which allows us to automate the process of deploying the application and for that, we will need something called version control and git. And so let's take a look at that in the next video.
*/

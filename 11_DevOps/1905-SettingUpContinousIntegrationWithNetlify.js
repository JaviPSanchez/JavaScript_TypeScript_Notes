/*
All right, so let's now finally set up the continuous integration with Netlify. And to do that, let's go back to our Netlify dashboard:

https://app.netlify.com/teams/javipsanchez/overview

And so then let's go here to New site from Git:

<cmg ./img/Picture15.jpg>

And then from here, we can choose the option link site to GitHub, all right?

<cmg ./img/Picture16.jpg>

Now, in a nutshell, what continuous integration means or continuous deployment as Netlify apparently calls it, that basically is to connect a site to a git repository, and then whenever we change the code in our repository, then that will automatically trigger
a new deployment of our site. And so then everything happens really automatically. So all we will have to do then is to basically
build our code locally, committed to our git repository, then push that git repository to or remote repository on GitHub,
and then from there, the site will automatically be built and deployed.

Then here, we can select the git provider that we want. And so, as I mentioned before, there are actually more services beside GitHub,like GitLab and Bitbucket, but we will use GitHub, of course. Then here we have to authorize the access to GitHub, which in my case here was already done, but you will probably have to authenticate yourself again.

And then here we have all the repos that I have in my GitHub account:

<cmg ./img/Picture17.jpg>

Buscamos el repository que nos interesa subir a los servidores de Netlify. Then we can change which branch we want to deploy, ya sea la master o la que hayamos creado

<cmg ./img/Picture18.jpg>

But of course we want the master branch. But now here comes the question. So where is the code that we actually want to deploy?
Because remember, the code that we do want to deploy is in the disc folder of our code. However, the disc folder is not in our repository, right? But that's not a problem at all, because we can now tell Netlify here to run our build command whenever there is a change in the repository. And so this is really, really powerful:

"build": "parcel build index.html --dist-dir ./dist"

So let's come here to our package.json, and our build command is this one. And so here, let's just copy this build command.
So Netlify will then basically install all these dependencies and also these dev dependencies and run this command, okay?

<cmg ./img/Picture19.jpg>

So basically what we did manually also on our local computer, Netlify will do it for us, okay? And then finally, the publish directory. And so that is our dist folder:

<cmg ./img/Picture20.jpg>

So this is where the code will live after this build command is executed, right?

Finalmente pulsamos el boton de Deploy y esperamos a que se suba nuestra pagina al servidor , una vez hecho, ya tenemos nuestra pagina en Netlify!!!

So make sure that for all your projects in the future, you do the same workflow as we did here. So adding them to GitHub
and maybe even to a public repository, so that your potential future employers can actually see that you are active on GitHub.
So for some developers and especially newbies, GitHub also kind of serves as a portfolio so that other people can see how active you actually are in coding.
*/

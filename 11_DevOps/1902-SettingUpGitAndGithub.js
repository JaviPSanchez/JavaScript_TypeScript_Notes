/*
We as web developers, don't like to do things manually. So we like to automate things. And so that's where Git comes into play. So in this lecture we're going to install and set up Git on your computer, and also open a free account in github.

So let's start by opening up the Git website:

https://git-scm.com/

And so this is where we will download Git from. So Git is version control, so it is a software that runs on your computer and you can basically use Git to save snapshots of your code over time. And then if you need you can go back in time,
like two older versions of your code, if you need to recover some mistake for example, and that is really just a tip of the iceberg of everything that you can do with Git.

But anyway, let's now download this software and then install it. So I hope you successfully installed Git on your computer. And so let's now go back to our code
and start a so-called repository.

Make sure that in your terminal, you are in the project folder and not inside of any of other folder, so really the parent folder where your entire application lives. And so now we can write:

👉 "git init"

And so we have initialized an empty Git repository in this folder here. Basically a repository or as we also call it a repo is the fundamental concept of Git. So right now in our project folder, we created a local repository, which will eventually contain all of our code. So all the code, which is right now marked in this orange color. So you see it that changed as soon as we initialized this Git repository. So there is actually a very tight integration between Git and VS code.
And that is because really all software developers work with Git, so everyone needs these features.

Now, right now none of these files are already in our repository, but for now we will actually not add them. So I will leave that for the next lecture, because in this one all I wanted to do is to configure Git and also to open an account on GitHub next.

And so that's actually go do that. So let's, search for GitHub. Now we need GitHub or any other service that is similar to GitHub in order to basically store or local repository in the cloud. So eventually of course we will have some code here in this repository, and then we will want to save that repository online.

So for example, that we can switch between computers or that we can make sure that our code never gets lost. And so for that we need an account on some service, like GitHub and there's also GitLab among others.


And so let's open up an account here:

https://github.com/JaviPSanchez

For now, what I want to do here is to basically connect your local Git installation
with your GitHub account. And so let's do some configuration here. Git is basically a command line interface from which we can use the software and really do all kinds of stuff. Now, there are also some graphical user interfaces for Git.

But actually in my opinion, I think that it's easier to use Git on the command line. All right. But anyway, what I want to do now here is git config:

👉 git config --global user.name JaviPSanchez
👉 git config --global user.email javier.palomino-sanchez@outlook.com

And so with this it will then become a lot easier to basically connect your local repositories with GitHub. Okay. And that's actually it for this set of video in the next lecture we will then actually start using Git.


And that's actually really important. So you really need to start using Git because you will use Git in every web development job that you will ever find.

So every developer uses Git and also GitHub every single day.
*/

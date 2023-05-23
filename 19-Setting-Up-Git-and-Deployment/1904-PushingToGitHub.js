/*
So in this video, we're going to put all our code on to GitHub. Or as we usually say, we're going to push our code to a remote branch, so that we can then set up the continuous integration feature that I talked about before in the next video.

And so now here on GitHub, let's click on this plus button here, and create a new repository:

<cmg img/Picture07.jpg>

<cmg img/Picture08.jpg>


Then here, the first thing is that we need to give the repository a name. Then, I'm going to make it private, and so it is no one else can see this repository. Then down here, we have the option to add a README
and a .gitignore, but we don't want to do that, okay? So if we add a README right now, then we would create a conflict later on when we import our code.



So this here is the URL, basically of or a git repository, but what matters here is that now there are these two scenarios: So there is the scenario that we don't have a repository yet. So I mean, a local one,but that's not the case. So we already have the repository that we have been working on, and so what we want to do now, is to push that existing repository to this online repository. So to this remote repository that we just created here. And so in order to connect these two, we need to copy this line of code:

👉 git remote add origin https://github.com/JaviPSanchez/MAPTY.git

<cmg img/Picture09.jpg>

and execute it in our local repository. And so what this did here, was to add a remote branch, which is called "origin". All right, and the URL of that remote branch is called:

https://github.com/JaviPSanchez/MAPTY.git

So again, with this, we basically let our local repository know about
this remote repository right here. And if we check out our branches, now, then that origin branch might actually be there..., and it actually doesn't, but that doesn't really matter, it's there.

But what matters is that we can now push code to this remote branch, which remember is called "origin". And, so the way we do that is by writing:

👉 git push origin master

and then the name of the remote brand, which is called "origin". And of course, you could give this one another name, but "origin" is simply the standard name. So that's what everyone uses.... and then the name of the branch that you want to, to push. And so let's say, that we only want to push the master branch. and then you will see that it's going to do some work here.

<cmg img/Picture10.jpg>

And so now, if we go to GitHub and reload, or repository then our code is there. All right. Great!

So we successfully pushed our local repository into this remote repository. And so now, if we would work on any other computer, we could go ahead and take our code out of this repository.

So right now we only have the master branch, but if we really wanted to keep that other branch as well, in our remote repository, then we can simply recall this again.

👉 git push origin V1

and then the name of that other branch, which was called V1.

But anyway, let's now add a readme file, which is a common thing that all GitHub repositories should have. So it's basically a file that appears down here with a description of the project.

👉 touch README.md

and so we can use or command line a little bit. So, here it is:

<cmg img/Picture11.jpg>

And now to add a title to any MD file. So "MD" stands for "markdown" and so markdown, is like a special typing format that we can use to write simple documents.

And now, let's go through the same process, as before, so that we can also upload this file. So basically, upload this modification to our remote repository as well:

👉 git add -A
👉 git commit -m 'Added readme'
👉 git push origin master

And now as we reload the repo down here now appears, this description that we just added. Great!

<cmg img/Picture12.jpg>

Now, if you wanted to now start working on another computer, you could simply go to this button here, copy this URL, and then do the opposite, which is pull. Okay

<cmg img/Picture13.jpg>

Now, many times when we create a new repository, we actually do it the other way around. So, we start with a new repository on GitHub, then we give it a name, and then we actually add a readme here, and also a git ignore, then we create that repository, and then we pull that repo onto our computer. And so this, then actually, automatically connects the local repository with the remote one. And so that makes things a little bit easier. So a lot of times I do it like this, but in this case, we already had the local repository with all our code. And so, therefore,
we needed to create this repository really empty. So just the way that we did it. Okay.

But anyway, let's go back here to our remote Git repository now, so that in the next video, we can finally set up the continuous integration feature with netlify.
*/

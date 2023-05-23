/*
Let's now quickly go over the basics of Git. All I want to do here is to get you started as quick as possible with Git, so that we can then push our project to GitHub. All right, now before we can do anything else with git, in each repository,
we should have a git ignore file like this:



So if VS code didn't create it automatically for you,  then please go ahead and create this file right now:

.git ignore

<cmg img/Picture01.jpg>

And inside of this file, we can put all the folders and also files, which we want Git to ignore, or in other words, folders and files that we do not want to get into our repository. Por ejemplo, la carpeta con todos los modulos de node.js:

node_modules

And node modules is a perfect example of that. Because, well, we can always get
this code back from NPM, right? It is not part of our original source code. And so therefore, we don't need it in our Git repository.

And actually, the same is true for our dist folder:

dist

And so again, this is actually code that we do not need in our Git repository.
So usually, in the repository, we only want like the original source code, and everything that is necessary in order to basically compile our final project later. A medida que vayamos metiendo archivos iran dejando de estar seleccionados en el color naranja.

And now here, VS code shows us that there are basically "X" files in our repository that are pending changes:

<cmg img/Picture02.jpg>

Now only if you're using the Mac, you can add one type of file here, which is the .DS_Store, which is some kind of weird file that Mac OS sometimes adds to our directories.

But with this here, I think we're already at a good starting point, okay? So let's now run a Git command called git status:

👉 git status

And so this shows us here, that all of these files are untracked files:

<cmg img/Picture03.jpg>

And we can also see that we are on branch Master, and that there are no commits yet. So all of these files here are untracked. And so now we need to track them,
which in terms of git means to add them to the so called Staging area. So you can also see here in VS code, that these files are now untracked. So that's what this U stands for. Okay, but now, let's add all these files to the staging area by saying git add:

👉 git add -A

and then -A, which stands for all the files. Now, we could also add files manually. So one by one, but usually that's never necessary.

So I will simply add all of my files now. And so these files are now basically part of the repository. Okay, and so now here it says, A  so these files are now basically tracked or active:

<cmg img/Picture04.jpg>

Okay, then let's say we do some change in one of the files, lets say in the index.html, so now you see that this file was modified, right? And also immediately here on the sidebar, VS code tells us that something has changed. And so green here means that something was added. And when we click that, we can actually see the change:

<cmg img/Picture05.jpg>

And if we see git status now again, you will see that all of these files here, are ready to be committed.

All right, and so now we're ready to finally commit these files. And committing the files basically means that we really save the modifications of all the files to the repository. So adding the files, like this here, is basically just a pre step before the commit. So a commit is gonna be like a snapshot of your code at a certain point in time.

So each time before you make some significant changes to your codebase,
you should always commit. And so then, if necessary, you can go back to past commits, and delete any modifications that you did that were maybe wrong. And we will see how to do that actually later in this lecture.

But for now, let's commit what we already have here:

👉 git commit -m 'Initial commit'

So git commit, then -m, which stands for message. And then here, we need to specify a string, which is the commit message. And so usually, the first commit is always gonna be called "initial commit". Now, okay, and that's it. Now, they're all committed. And you see that all the files, now look normal here again.



Now, let's say that we do some modifications, in multiple files.
And without in pourpose we introduce some kind of a bug,  So if you wanted to go back on all of these files to the previous commit, then you could simply write git reset:

👉 git reset --hard HEAD

then --hard, and then HEAD, all in uppercase like this. And now watch what happens to this file as this command is executed. The two files here that previously had the M, for modified, are also now back to normal.

All right, and so this is the easiest way to going back in time, basically, to the previous commit. But now, let's say that you actually had already committed with the message of 'new feature" for exemple. 

So now these modified here are gone. And our code is now committed. No podemos venir hacia atras, pero si podemos borrar el ultimo commit, so you want to go back to the previous commit. So to do that, you need to take a look at that previous commit and you can do git log for that:

👉 git log

So here you have basically a log of all the commits that you did. So this one is the last one.  And it has basically this ID here. And so this has currently the HEAD -> master:

<cmg img/Picture06.jpg>

And so that's why previously
we could reset using this head keyword. But now you want to go back to this commit, so to the initial commit, right? And so let's copy this ID here, basically.

So select and copy: 384d6d43a6784801a08c754ed403dad584af7015

And now to get out of this log here, you need to type a Q, so Q for quit.

👉 Q  --> NO ME FUNCIONA....😫

Okay, so Ctrl C will not work here, you have to use key like this. And sometimes you even need like, 

👉 :q --> NO ME FUNCIONA....😫

But anyway, let's now do again but this time with the ID that we commited

👉 git reset --hard 384d6d43a6784801a08c754ed403dad584af7015

And now the BUG is gone and so we are now back in that initial commit.However, moving between commits like this  is a little bit dangerous. And so instead, when we plan on doing a lot of changes, usually, we simply create a new branch. So let's write git branch:

👉 git branch

And this will simply list all the branches that we currently have. And so right now, we only have the master branch. And the star here means that that's the branch that we are currently in. Okay, but now let's create a new branch. And so that new branch is then basically going to be a copy of the current master branch, in which we can develop new codes and adding new features, but without affecting the code that is in the master branch.  So it's basically a parallel track in which we can develop new code, but without affecting the original code that we had before, and which we knew was already working. And so this is a great way of preventing bugs in our main code base.

So we create a new branch, by writing again, git branch, but then here,
we can also specify now the name of the branch:

👉 git branch new-feature

So let's call this one new-feature. Okay, so we created a new branch,but we didn't switch to that new branch yet. So to switch to that branch, we write git checkout, and then the name of the branch:

👉 git checkout new-feature

So we just created a new feature, but this new feature o el codigo que hayamos creado is now in this new feature brand. And so now we have these two branches. So master and new feature.

Si cambiasemos de la brack new-feature a la master, veriamos que nuestro codigo desaparece dejando el codigo original de la branch master. Okay, and so this proves that there are now really like two different tracks with different versions of the code. So in the master branch, we have one code. And in the other branch, we have other code,



But now we can then merge these changes together. So when we are in the branch into which we want to add the new code, we can use Git merge.

👉 git merge new-feature

And so the code that we have in this branch, so in the master branch, is now the same as in the new feature branch. Okay, so this is a great feature to basically build code, but without affecting our original code, which might break with the changes that we are introducing. And so usually, we never work in the master branch, and simply add features in a different new branch. And then once we're done, we merge these two branches together. And then if there is some error, or something not working, we can always go back to what it was before.

All right, and that's all I had to show you in this short introduction to Git. And if you want to learn even more, or maybe have all of these commands that I just showed you, in one nice overview, there's actually a very handy cheat sheet forget, that was developed by GitHub, which I really like to use:

https://education.github.com/git-cheat-sheet-education.pdf


And actually, when I first found this, I even printed this out and put it on my desk, because there's a lot of stuff that we can do. So here is what I just showed you with the branches, right?


And in the next video, we will then actually use these commands here.
So Git push and Git pull, so that we can basically copy our local repository onto a repository that lives in the cloud on GitHub. And this will then allow us to basically keep a backup of our repository online. And it will also enable us to automatically deploy or site from this repository by setting up continuous integration on Netlify.

And so let's learn how to do that. So how to push our code to GitHub right in the next lecture.
*/

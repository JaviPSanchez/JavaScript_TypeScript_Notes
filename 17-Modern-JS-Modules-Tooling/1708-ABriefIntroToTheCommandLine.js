/*
Now before we can use a tool like parcel, we first need to learn a little bit about the Command Line. Yeah, you heard that right. All of these build tools that are available on NPM only work in the Command Line. And so now comes that time
where you finally have to learn a little bit about the basics at least of the Command Line.



Now the first thing that you need to know about any Command Line is that you are always in a folder. So right now we are in a project folder, So whenever we open a terminal in VS Code, we are always in this project folder itself and then from this location in the file system, we can move up and down using commands.

Now, the first command that I'm going to show you

DIR -->  Directory:  will show you the contents of the current folder.

CD -->  Change Directory:  we can go up and down the file tree. For going up we use cd .. (con el espacio) And so let's now move into one of them, so I can write again CD, and then let's say, I want to move into folder 13. So 13-advanced, but I actually don't have to type all of it. So instead I can just hit the tab key
and it will then auto complete this path for me.

If we want to move up two levels --> cd ../..

CLEAR -->  Everything disappears.

MKDIR --> create a folder, mkdir nombre.


TOUCH -->  create some files. edit name.extension

Ctrl+C --> Terminar tarea

up arrow -->  to see my past commands, and We can also go back down.

we could also add multiple files all at once. And this is actually something pretty useful:

TOUCH MULTIPLE FILES --> edit archivo1.index archivo2.css archivo3.js

RM --> Borrar archivos rm pepe.css

If we want move one folder file to the parent folder.

MV --> we need to specify first the name of the file that should be moved, and then the location into which that file should be moved. So what is that location?Well, in this case, we want to move it to the parent folder. And so that is ../

RMDIR -->  So this stands for Remove Directory

MKDAR -->  So Make a Directory.

We can use another trick to remove a directory. So we can use again RM which we also used to remove files and then we can specify a Fleck. So that's basically an option, which we write with a dash and then a specific symbol or a letter.

rm -R    👉 Recursive deleted all the files that are in here and then also the directory itself.
*/

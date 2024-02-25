////////////////CODING CHALLENGE 2//////////////

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/
//Lo primero es que vamos a esconder el boton!!
const btn = document.querySelector('.btn-country');
btn.style.opacity = 0;

//SOLUTION 1

//PART 1

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

/*
So create image, which should take in an image path. And then whenever we are promised to find something we always return in you promise, and also the promise is always done in the same way, at least in the beginning.So we have to resolve function and de reject function which are received by our executer function:
*/
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    /*
      Now we are told to create a new image using DOM, and so we want to create an element of the type image:
      */
    const img = document.createElement('img');
    /*
    And then all we need to do is to set the source property of that, to the image path that is received:
    */
    img.src = imgPath;
    /*
And so then on that image, we can wait for the load event. So when the image is done loading append it to the DOM element with the images class and to resolve the promise with the image element itself.

So that's select the element with the images class.

const imgContainer = document.querySelector('.images');


    */
    img.addEventListener('load', function () {
      /*
        And so again we should now append the image to that element, just again like we learned in the advanced DOM section.
        */
      imgContainer.append(img);
      /*
      But anyway, now we also want to resolve the promise because this load event of course means that loading the image was successful. And so this is where we will then resolve the promise, so mark it as successful and remember the resolved value should be the image.
      */
      resolve(img);
    });
    /*
    And so this is where we will then resolve the promise, so mark it as successful and remember the resolved value should be the image.
    */

    img.addEventListener('error', function () {
      /*
And now we should also listen to the error event, remember? And so in this case, we will then reject the promise with a new error as always.

And let's say image not found because that is probably the most likely error.
        */
      reject(new Error('Image not found'));
    });
  });
};

// PART 2
let currentImg; //--> GLOBAL VARIABLE
/*
But anyway, let's now handle the fulfilled, so the successful promise:

I need to actually pass in the path of the image.
*/
createImage('img/img-1.jpg')
  /*
And so remember that here we received the image as the resolved value. We don't need to really do anything here, because the image is already being appended to the DOM already. And so for now, at least we can just log something to the console.
*/
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');

    /*
So let's go back here and tackle step number three, which is to pause the execution for two seconds using this wait function we created earlier. ⏫⏫⏫

And so now in here, we will wait for two seconds. And so this is gonna return a promise. And so let's now return that so that we can chain the next then handler on that.
    */
    return wait(2);
  })
  /*
And wait doesn't have any resolved value, remember. And so we don't specify any argument or any parameter in this function. And now remember, here what we want to do, is to then hide this first image.

This image is only defined in this function but not in others. And so that's why I said previously that we are going to need a global variable to do that.
  */
  .then(() => {
    //Then we can hide it:
    currentImg.style.display = 'none';
    //And now load a second image, So where are we going to load the next image? Well, it's gonna be right here so that we can then chain the next then handler into our chain here. So we will return a new promise:
    return createImage('img/img-2.jpg');
  })
  //And so here we are back to receiving an image. And now let's just do exactly the same, so we assigned the current image to image so that in the next step we can then hide it, then image two load it and we wait two more seconds. And then in the next handler, we hide the current image again.
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  //Finalmente escondemos la segunda foto:
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  /*
Let's also write the .catch handler for looging the error:
  */
  .catch(err => console.error(err));

//SOLUTION 2
/*
const imageContainer = document.querySelector('.images');

const timeOut = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const handleResolve = (img, resolve) => {
  imageContainer.append(img);
  resolve(img);
};

const createImage = imgPath =>
  new Promise((resolve, reject) => {
    img = new Image();
    img.src = imgPath;

    img.addEventListener('load', handleResolve.bind(null, img, resolve));
    img.addEventListener(
      'error',
      reject.bind(null, Error('Invalid Image Source'))
    );
  });

let img;
createImage('img/img-1.jpg')
  .then(() => timeOut(2))
  .then(() => {
    img.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(() => timeOut(2))
  .then(() => (img.style.display = 'none'))
  .catch(err => console.error(err.message));
*/

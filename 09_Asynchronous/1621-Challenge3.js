////////////////CODING CHALLENGE 3//////////////

/*
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

//Lo primero es que vamos a esconder el boton!!
const btn = document.querySelector('.btn-country');
btn.style.opacity = 0;

//Aqui tenemos el codigo del CHALLENGE 2:

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

//Esta es la parte que vamos a cambiar ⏬.

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// PART 1
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// PART 2 --> So once you need to use async await in a map method like this, which believe me is pretty common, then you end up with an array of promises that you can then as a next step handle like this. So with the Promise.all combinator function.

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    /*
    (3) [Promise, Promise, Promise]
    0: Promise {<fulfilled>: img.parallel}
    1: Promise {<fulfilled>: img.parallel}
    2: Promise {<fulfilled>: img.parallel}
    length: 3
    __proto__: Array(0)
    */
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    /*
    [img, img, img]
    0: img.parallel
    1: img.parallel
    2: img.parallel
    length: 3
    __proto__: Array(0)
    */
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

/*
.images img.parallel {
  width: 40rem;
  margin: 2rem;
  border: 3rem solid white;
  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);
}
*/

import './main.css';

const btn = document.querySelector('.btn-country');
const imgContainer = document.querySelector('.images');
// btn.style.opacity = 0;

let currentImg;

btn.addEventListener('click', function () {
  createImage('img/img-1.jpg')
    .then(img => {
      currentImg = img;
      console.log('Image 1 loaded');
      return wait(2);
    })
    .then(() => {
      currentImg.style.display = 'none';
      return createImage('img/img-2.jpg');
    })
    .then(img => {
      currentImg = img;
      console.log('Image 2 loaded');
      return wait(2);
    })
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
    .catch(err => console.error(err));
});

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');

    // Set Classes
    img.classList.add('parallel');

    // Alternatively, directly apply styles
    img.style.width = '40rem';
    img.style.margin = '2rem';
    img.style.border = '3rem solid white';
    img.style.boxShadow = '0 2rem 5rem 1rem rgba(0, 0, 0, 0.1)';

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

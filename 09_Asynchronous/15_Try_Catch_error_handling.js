'use strict';

/*
In this lecture, we're gonna learn how error handling works with ASYNC/Await.
So with ASYNC/Await, we can't use the catch method that we use before, because we can't
really attach it anywhere, right. So instead, we use something called a try catch statement.
*/

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=949449785238995372407x102421`
    );
    const dataGeo = await resGeo.json();
    console.log(resGeo);

    //Country data

    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    const data = await res.json();

    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}😫`);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};
btn.addEventListener('click', whereAmI);

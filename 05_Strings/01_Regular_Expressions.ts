/**
 *
 * Con los Strings no existe el concepto de immutabilidad, son primitivas.
 *
 *
 * 1️⃣ .length()
 * 2️⃣ .toLowerCase()
 * 3️⃣ .toUpperCase()
 * 4️⃣ .indexof()
 * 5️⃣ .lastIndexOf
 * 6️⃣ .slice(inicio, final)
 * 7️⃣ .trim()
 * 8️⃣ .replace()
 * 9️⃣
 * 1️⃣0️⃣
 * 1️⃣1️⃣
 * 1️⃣2️⃣
 * 1️⃣2️⃣
 * 1️⃣2️⃣
 * 1️⃣3️⃣
 * 1️⃣4️⃣
 * 1️⃣5️⃣
 * 1️⃣6️⃣
 * 1️⃣7️⃣
 * 1️⃣8️⃣
 * 1️⃣9️⃣
 * 2️⃣0️⃣
 *
 *
 */

/**
 *
 */
const announcement =
  "All passangers come to boarding door 25. Boarding door 3!";
// REGULAR EXPRESSION, algo que confunde y es complejo en programacion, vamos a crear una REGULAR EXPRESSION sencilla, para ello se usan slashes / / en vez de comillas " " y añadilos el flag g de "global":

console.log(announcement.replaceAll(/door/g, "gate"));

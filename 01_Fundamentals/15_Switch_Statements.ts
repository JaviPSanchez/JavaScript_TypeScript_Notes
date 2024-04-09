const day = prompt('Dime un dia de la semana');

switch (
  day // day === "dia de la semana"
) {
  case 'monday':
    console.log('Gym time');
    break;
  case 'tuesday':
    console.log('Reading time');
    break;
  case 'wednesday':
    console.log('Rest day');
    break;
  case 'thrusday':
  case 'friday':
  case 'sunday':
    console.log('Study hard!!');
    console.log('Doing trading');
    break;
  case 'saturday':
    console.log('Rest day');
    break;
  default:
    console.log('Elige un dia de la semana');
}
// Si hiciesemos lo mismo con el if /else statements:
if (day === 'monday') {
  console.log('Gym time');
} else if (day === 'tuesday') {
  console.log('Reading time');
} else if (day === 'wednesday') {
  console.log('Rest day');
} else if (day === 'thrusday' || day === 'friday' || day === 'sunday') {
  console.log('Study hard!!');
  console.log('Doing trading');
} else if (day === 'saturday') {
  console.log('Rest day');
} else {
  console.log('Elige un dia de la semana');
}

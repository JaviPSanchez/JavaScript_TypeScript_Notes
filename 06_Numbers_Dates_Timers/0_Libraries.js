import moment from 'moment';
import { formatRelative, subDays } from 'date-fns';
import { es } from 'date-fns/locale';

const exempleMoment = function () {
  return moment().format('MMMM Do YYYY, h:mm:ss a');
  // moment().format('dddd');
  // moment().format('MMM Do YY');
  // moment().format('YYYY [escaped] YYYY');
  // moment().format();
};

console.log(exempleMoment());

const exempleDateFns = function () {
  return formatRelative(subDays(new Date(), 0), new Date(), { locale: es });
};

console.log(exempleDateFns());

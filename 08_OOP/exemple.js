const data = {
  work: [
    {
      id: 1,
      ponderation: 3,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'A',
      valeurChoix: 0,
    },
    {
      id: 2,
      ponderation: 6,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 3,
      ponderation: 4,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 4,
      ponderation: 3,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'B',
      valeurChoix: 0,
    },
    {
      id: 5,
      ponderation: 8,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'B',
      valeurChoix: 1,
    },
  ],
  finance: [
    {
      id: 1,
      ponderation: 2,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 2,
      ponderation: 9,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'B',
      valeurChoix: 0,
    },
    {
      id: 3,
      ponderation: 6,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 4,
      ponderation: 3,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'B',
      valeurChoix: 1,
    },
    {
      id: 5,
      ponderation: 1,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'B',
      valeurChoix: 1,
    },
  ],
  social: [
    {
      id: 1,
      ponderation: 1,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 2,
      ponderation: 4,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 3,
      ponderation: 3,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 4,
      ponderation: 3,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'A',
      valeurChoix: 0,
    },
    {
      id: 5,
      ponderation: 7,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'B',
      valeurChoix: 0,
    },
  ],
  leisure: [
    {
      id: 1,
      ponderation: 3,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'B',
      valeurChoix: 1,
    },
    {
      id: 2,
      ponderation: 2,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 3,
      ponderation: 1,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 4,
      ponderation: 6,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 5,
      ponderation: 7,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'B',
      valeurChoix: 1,
    },
  ],
  health: [
    {
      id: 1,
      ponderation: 2,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 2,
      ponderation: 2,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'A',
      valeurChoix: 1,
    },
    {
      id: 3,
      ponderation: 8,
      valeurReponseA: 0,
      valeurReponseB: 1,
      choixPatient: 'B',
      valeurChoix: 1,
    },
    {
      id: 4,
      ponderation: 4,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'B',
      valeurChoix: 0,
    },
    {
      id: 5,
      ponderation: 7,
      valeurReponseA: 1,
      valeurReponseB: 0,
      choixPatient: 'B',
      valeurChoix: 0,
    },
  ],
};

class Feature {
  constructor(data) {
    this.data = data;
    this.ponderation = this.extractPonderationValue();
    this.valueChoice = this.extractValueChoice();
    this.numerador = this.numerador();
    this.denominador = this.denominador();
  }

  extractPonderationValue() {
    const ponderation = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      const data1 = this.data[i].ponderation;
      ponderation.push(data1);
    }
    return ponderation;
  }
  extractValueChoice() {
    const valueChoice = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      const data2 = this.data[i].valeurChoix;
      valueChoice.push(data2);
    }
    return valueChoice;
  }
  numerador(arr1 = this.ponderation, arr2 = this.valueChoice) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      const product = arr1[i] * arr2[i];
      sum += product;
    }
    return sum;
  }
  denominador() {
    const array = this.ponderation;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
  total(val1 = this.numerador, val2 = this.denominador) {
    const total = val1 / val2;
    return total;
  }
}

const work = new Feature(data.work).total();
const finance = new Feature(data.finance).total();
const social = new Feature(data.social).total();
const leisure = new Feature(data.leisure).total();
const health = new Feature(data.health).total();
var ponderee = [];
ponderee.push(work, finance, social, leisure, health);
const final = ponderee.map(function (each_element) {
  return Number(each_element.toFixed(2));
});
console.log(final);

import './main.css';

/**
 * Remenber, Generic Types gives us flexibility combined with type safety!
 */

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
//Working with premitives
const textStorage = new DataStorage<string>();
// textStorage.addItem(10)
textStorage.addItem('Javier Palomino');
textStorage.addItem('Gabriel Palomino');
textStorage.addItem('Melissa Palomino');
textStorage.removeItem('Melissa Palomino');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(11);
console.log(numberStorage.getItems());

/*
//Working with Objects --> Reference Objects!
const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: 'Javier', age: 37 });
objectStorage.addItem({ name: 'Gabriel', age: 3 });
// This does not work, because JS has different references in memory for each object
objectStorage.removeItem({ name: 'Gabriel' });
console.log(objectStorage.getItems());
*/

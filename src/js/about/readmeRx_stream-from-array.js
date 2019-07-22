import { Observable } from 'rxjs';
/**
 * Если мы работаем с массивами и хотим каждый элемент из которых, мы должны использовать метод from()
 */

const createSubscribe = name => {
  return {
    next(x) {
      console.log(name, ': ', x);
    },
    error(err) {
      console.log(name, ': ', x);
    },
    completed() {
      console.log(name, ':  completed .');
    }
  };
};

let someArray = [1, 2, 3, 4];
let someObject = [
  {
    id: '0',
    key: 'value1'
  },
  {
    id: '1',
    key: 'value2'
  }
];

/**
 * Объекты __Set__ позволяют сохранять уникальные значения любого типа, как примитивы, так и другие типы объектов.
 * Значение элемента в Set может присутствовать только в одном экземпляре.
 * Это обеспечивает его уникальность в коллекции Set.
 * Значение *Set.length* всегда равно 0! __Set.prototype.size__ - узнать количество элементов.
 */
const set = new Set(['fromSet1', 'fromSet2', 'fromSet3', { fromSet4: 4 }]);

/**
 * Объект __Map__ содержит пары ключ-значение и сохраняет порядок вставки.
 * Любое значение (как объекты, так и примитивы) могут быть использованы в качестве ключей.
 * Значение *Map.length* всегда равно 0! *Map.prototype.size* - узнать количество элементов.
 *
 */
const map = new Map([[1, 'fromMap1'], [2, 'fromMap2'], [3, 'fromMap3']]);
const anotherMap = new Map();
let keyString = 'This is';
let keyObj = {};
anotherMap.set(keyString, 'example of more complex Map construction');
anotherMap.set(keyObj, { id: 1 });

/**
 * Метод from() необходим для того чтобы создать какой-то стрим из массива.
 * Он принимает массив в качестве аргумента
 * Метод итерирует каждый элемент из массива и выдаёт его как отдельное значение
 * (похож на of(), но для массива)
 */
Observable.from(someArray).subscribe(createSubscribe('from'));
Observable.from(someObject).subscribe(createSubscribe('from'));
Observable.from(set).subscribe(createSubscribe('from'));
Observable.from(map).subscribe(createSubscribe('from'));
Observable.from(anotherMap).subscribe(createSubscribe('from'));

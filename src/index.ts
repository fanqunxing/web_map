import map from './map';
// let map: IMap = new Map();

map.put('test', {
  name: 'qwqw',
  age: 23
});

map.put('test1', '{a: 12}');

map.remove('test1').then(data => {
  console.log(data);
});

map.get('test').then(data => {
  console.log(data);
});

map.get('test1').then(data => {
  console.log(data);
});
console.log(map);
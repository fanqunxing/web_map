import Map from './map';
import './lib/Set';
import ArraySet from './lib/ArraySet';
let map: Map = new Map('t_map');
let set: Set<any> = new ArraySet([1,2,3,6,7]);

set.add(1);
set.add(1);
set.add(2);
set.add(0);

console.log(set);
console.log(set.size());
console.log(set.toArray());

map.put('test', {
  name: 'qwqw',
  age: 23
});

map.put('test1', '{a: 12}');

map.get('test').then(data => {
  console.log(data);
});

map.get('test1').then(data => {
  console.log(data);
});
console.log(map);
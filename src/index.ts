import Map from './map';
let map: Map = new Map('t_map');

map.put('test', {
  name: 'qwqw',
  age: 23
});

map.put('test1', '{a: 12}');

map.get('test');

map.get('test1');

map.keySet();

map.foreach((item: any) => {
  console.log(item);
});

let map1: Map = new Map('t_map_1');
map1.put('1', '1');
map1.put('2', '23');
map1.foreach((item: any) => {
  console.log(item);
});

let map2: Map = new Map();
map2.put('12', '1');
map2.put('22', '23');

console.log(map);
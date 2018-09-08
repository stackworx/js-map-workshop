import StringMap, {hashCode} from '../StringMap';

test('hash', () => {
  expect(hashCode('A')).toBe(65);
  expect(hashCode('B')).toBe(66);
  expect(hashCode('DFHDFGHDFGHFDFHD')).toBe(1829145464);
  expect(
    hashCode('DFHDFGHDFGHFDFHDDFHGDFHFHJFGJTYGJTY%^&&%^$RSDFGDHDFHDHGDFHDFFHDF')
  ).toBe(-991566370);
});

test('test empty map', () => {
  const map = new StringMap();

  expect(map.size).toBe(0);
});

test('test set', () => {
  const map = new StringMap();
  map.set('A', 5);

  expect(map.size).toBe(1);
});

test('test double set', () => {
  const map = new StringMap();
  map.set('A', 5);
  map.set('A', 6);

  expect(map.size).toBe(1);
});

test('test set and get', () => {
  const map = new StringMap();
  map.set('A', 5);

  expect(map.get('A')).toBe(5);
  expect(map.size).toBe(1);
});

test('test clear', () => {
  const map = new StringMap();
  map.set('A', 5);
  map.clear();

  expect(map.get('A')).toBe(undefined);
  expect(map.size).toBe(0);
});

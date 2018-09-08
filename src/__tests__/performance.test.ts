import StringMap from '../StringMap';

const ELEMENTS = 10000;

test.skip(
  'test performance',
  () => {
    const map = new StringMap();

    for (let i = 0; i < ELEMENTS; i++) {
      map.set(i.toString(), i);
    }

    expect(map.size).toBe(ELEMENTS);

    for (let i = 0; i < ELEMENTS; i++) {
      expect(map.get(i.toString())).toBe(i);
    }
  },
  500
);

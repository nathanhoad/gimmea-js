# Gimmea - Give Me A

[![CircleCI](https://circleci.com/gh/nathanhoad/gimmea-js.svg?style=svg)](https://circleci.com/gh/nathanhoad/gimmea-js)

A set of quick value generation tools.

## Usage

`npm install gimmea`

### UUID

Generate a UUID:

```javascript
Gimmea.uuid(); // gives something like e61c58d4-68fd-440e-a525-18e4112c7020
```

### Hash

Generate a hash:

```javascript
Gimmea.hash('seed string'); // gives something like 761f2c5fbc3f8e50fa53eec2ceae5efb650846ba91bb58c249afbda70ebd537f
Gimmea.hash('seed string', 10); // gives something like 761f2c5fbc
```

### Slug

Slugifies a string:

```javascript
Gimmea.slug('This is the Title!'); // gives 'this-is-the-title'
Gimmea.slug('Thing', 10); // gives something like 'thing-0e94c54d8d'
```

### Weighted Random Value

Given an array of objects (each with an integer weight property), return one of the objects:

```javascript
let loadedCoin = [
  {
    name: 'heads',
    weight: 1
  },
  {
    name: 'tails',
    weight: 0
  }
];
Gimmea.weightedRandomValue(loadedCoin); // Always { name: 'heads', weight: 1 }

let lottery = [
  {
    name: 'Nathan',
    tickets: 10
  },
  {
    name: 'Lilly',
    tickets: 1
  }
];
Gimmea.weightedRandomValue(lottery, 'tickets'); // Nathan has 10 times the chances to win
```

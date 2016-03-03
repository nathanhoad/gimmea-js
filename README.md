# Gimmea - Give Me A

A set of quick value generation tools.


## Usage

`npm install gimmea`


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
```


### Grid

Generates a grid:

```javascript
Gimmea.grid(10); // generates a 10x10 grid with values of null
Gimmea.grid(10, 15, false); // generates a 10x15 grid with values of false
```
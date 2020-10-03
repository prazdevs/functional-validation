const { List } = require('immutable-ext');
const { Success } = require('./monoids');

const validate = (spec, obj) =>
  List(Object.keys(spec)).foldMap(
    key => spec[key].run(key, obj[key]),
    Success([obj])
  );

module.exports = validate;

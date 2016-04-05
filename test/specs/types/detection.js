/**
 * Testing
 * @ndaidong
 */

/* eslint no-undefined: 0*/
/* eslint no-array-constructor: 0*/
/* eslint no-new-func: 0*/

import path from 'path';
import test from 'tape';
import is from 'is';

var rootDir = '../../../src/';

var bella = require(path.join(rootDir, 'bella'));

var stringify = (x) => {
  if (is.array(x) || is.object(x)) {
    x = JSON.stringify(x);
  }
  return x;
};

// isArray
test('Testing .isArray(Anything) method:', (assert) => {
  [
    [],
    [ 1, 2, 3 ],
    new Array(),
    new Array(5)
  ].forEach((item) => {
    let r = bella.isArray(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be an array.`);
  });

  [
    'ABC',
    '',
    '100',
    4.2,
    3 / 5,
    0,
    1,
    Math.PI,
    null,
    undefined,
    function x() {}
  ].forEach((item) => {
    let r = bella.isArray(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must be not array.`);
  });
  assert.end();
});

// isObject
test('Testing .isObject(Anything) method:', (assert) => {
  [
    {},
    { a: 1, b: 0 },
    Object.create({}),
    [],
    new Date()
  ].forEach((item) => {
    let r = bella.isObject(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be an object.`);
  });

  [
    100,
    'ABC',
    '',
    null,
    undefined,
    0
  ].forEach((item) => {
    let r = bella.isObject(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must be not object.`);
  });
  assert.end();
});


// isString
test('Testing .isString(Anything) method:', (assert) => {
  [
    'Something',
    '10000',
    '',
    'undefined',
    String(1000)
  ].forEach((item) => {
    let r = bella.isString(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be an string.`);
  });

  [
    false,
    true,
    null,
    undefined,
    Number('1000'),
    0
  ].forEach((item) => {
    let r = bella.isString(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must be not string.`);
  });
  assert.end();
});

// isBoolean
test('Testing .isBoolean(Anything) method:', (assert) => {
  [
    true,
    2 - 1 === 1
  ].forEach((item) => {
    let r = bella.isBoolean(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be true.`);
  });

  [
    'ABC',
    '',
    '100',
    4.2,
    3 / 5,
    0,
    1,
    Math.PI,
    null,
    undefined,
    function x() {}
  ].forEach((item) => {
    let r = bella.isBoolean(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must be false.`);
  });
  assert.end();
});

// isDate
test('Testing .isBoolean(Anything) method:', (assert) => {
  [
    new Date()
  ].forEach((item) => {
    let r = bella.isDate(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be date.`);
  });

  [
    'ABC',
    '',
    '100',
    4.2,
    3 / 5,
    0,
    1,
    Math.PI,
    null,
    undefined,
    function x() {}
  ].forEach((item) => {
    let r = bella.isDate(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be date.`);
  });
  assert.end();
});


// isDef
test('Testing .isDef(Anything) method:', (assert) => {
  let a = 1;
  let b = null;
  let c = 'undefined';
  [
    a,
    b,
    c
  ].forEach((item) => {
    let r = bella.isDef(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be defined.`);
  });

  let something;
  [
    something
  ].forEach((item) => {
    let r = bella.isDef(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be defined.`);
  });
  assert.end();
});

// isEmail
test('Testing .isEmail(Anything) method:', (assert) => {
  [
    'ndaidong@gmail.com',
    'bob.nany@live.com',
    'bob.nany@live.com.vn'
  ].forEach((item) => {
    let r = bella.isEmail(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be email.`);
  });

  [
    'karu@.com',
    'karu',
    'bob.nany@live@com.v',
    '.bob.nany@live@com',
    '',
    undefined,
    0
  ].forEach((item) => {
    let r = bella.isEmail(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be email.`);
  });
  assert.end();
});


// isEmpty
test('Testing .isEmpty(Anything) method:', (assert) => {
  let something;
  [
    something,
    '',
    {},
    [],
    Object.create({})
  ].forEach((item) => {
    let r = bella.isEmpty(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be empty.`);
  });

  [
    1,
    true,
    { a: 1 },
    [ 1, 3 ],
    function x() {}
  ].forEach((item) => {
    let r = bella.isEmpty(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be empty.`);
  });
  assert.end();
});

// isFunction
test('Testing .isFunction(Anything) method:', (assert) => {
  [
    function x() {},
    new Function()
  ].forEach((item) => {
    let r = bella.isFunction(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be function.`);
  });

  let something;
  [
    1,
    true,
    { a: 1 },
    [ 1, 3 ],
    something,
    '',
    {},
    [],
    Object.create({})
  ].forEach((item) => {
    let r = bella.isFunction(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be function.`);
  });
  assert.end();
});


// isGeneratedKey
test('Testing .isGeneratedKey(Anything) method:', (assert) => {
  let trueResult = [];
  while (trueResult.length < 10) {
    trueResult.push(bella.createId());
  }
  trueResult.forEach((item) => {
    let r = bella.isGeneratedKey(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be generated key.`);
  });

  [
    ')jki',
    'karu_',
    'bob.nany@',
    '-asd',
    '',
    undefined,
    0
  ].forEach((item) => {
    let r = bella.isGeneratedKey(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be generated key.`);
  });
  assert.end();
});


// isInteger
test('Testing .isInteger(Anything) method:', (assert) => {
  [
    6e4,
    9,
    0
  ].forEach((item) => {
    let r = bella.isInteger(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be integer.`);
  });

  [
    'ABC',
    '',
    '100',
    4.2,
    3 / 5,
    Math.PI,
    null,
    undefined
  ].forEach((item) => {
    let r = bella.isInteger(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be integer.`);
  });
  assert.end();
});


// isLetter
test('Testing .isLetter(Anything) method:', (assert) => {
  [
    'abc',
    'ABC',
    'AbCd'
  ].forEach((item) => {
    let r = bella.isLetter(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be letter.`);
  });

  [
    ')jki',
    'karu_',
    'bob.nany@',
    '-asd',
    '',
    undefined,
    0,
    1325,
    4.2,
    3 / 5,
    Math.PI,
    null,
    undefined
  ].forEach((item) => {
    let r = bella.isLetter(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be letter.`);
  });
  assert.end();
});


// isNumber
test('Testing .isNumber(Anything) method:', (assert) => {
  [
    4.2,
    3 / 5,
    6e4,
    Math.PI,
    9,
    0
  ].forEach((item) => {
    let r = bella.isNumber(item);
    var x = stringify(item);
    assert.ok(r, `"${x}" must be number.`);
  });

  [
    ')jki',
    '',
    '100',
    null,
    undefined,
    new Function()
  ].forEach((item) => {
    let r = bella.isNumber(item);
    var x = stringify(item);
    assert.error(r, `"${x}" must not be number.`);
  });
  assert.end();
});

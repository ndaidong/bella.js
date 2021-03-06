/**
 * Check built-files to ensure they have been regenated correctly
 * @ndaidong
 */

import fs from 'fs';
import {test} from 'tap';

const pkgFake = require('../../package.json');
const proFile = './dist/bella.js';
const devFile = './dist/bella.min.js';

test('Validate production output', (assert) => {
  assert.ok(fs.existsSync(proFile), 'Production file must be generated');

  const s = fs.readFileSync(proFile, 'utf8');
  const a = s.split('\n');
  assert.ok(s.length > 0 && a.length > 5, 'Production file must be not empty');

  assert.ok(a[1] === ` * ${pkgFake.name}@${pkgFake.version}`, 'Package name must be correct');
  assert.ok(a[2].startsWith(' * built on:'), 'Package built time must be showed');
  assert.ok(a[3] === ` * repository: ${pkgFake.repository.url}`, 'Package repository must be correct');
  assert.ok(a[4] === ` * maintainer: ${pkgFake.author}`, 'Package author must be correct');
  assert.ok(a[5] === ` * License: ${pkgFake.license}`, 'Package license must be correct');

  assert.end();
});

test('Validate development output', (assert) => {
  assert.ok(fs.existsSync(devFile), 'Development file must be generated');

  const s = fs.readFileSync(devFile, 'utf8');
  const a = s.split('\n');
  assert.ok(s.length > 0 && a.length > 1, 'Development file must be not empty');
  const cmt = a[0];
  const pack = `${pkgFake.name}@${pkgFake.version}`;
  assert.ok(cmt.includes(pack), 'Package must be presented with name and version');
  const author = `${pkgFake.author}`;
  assert.ok(cmt.includes(author), 'Package author must be correct');
  const license = `${pkgFake.license}`;
  assert.ok(cmt.includes(license), 'Package license must be correct');

  assert.end();
});

const fs = require('fs');
const assert = require('assert');

console.log('Running sanity test…');
// comprueba que el artefacto existe y no está vacío
assert.ok(fs.existsSync('build.zip'), 'build.zip not found');
const size = fs.statSync('build.zip').size;
assert.ok(size > 1024, 'build.zip seems too small (≤1KB)');
console.log('✅ sanity test passed');

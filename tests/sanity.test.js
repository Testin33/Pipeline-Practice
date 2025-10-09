const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('Running sanity test...');

// 1. Verify that build.zip exists
const buildPath = path.join(__dirname, '..', 'build.zip');
assert.ok(fs.existsSync(buildPath), 'build.zip not found');

// 2. Verify that the file size is reasonable (> 1 KB)
const stats = fs.statSync(buildPath);
assert.ok(stats.size > 1024, `build.zip too small (${stats.size} bytes)`);

// 3. Confirm that the file can be opened
try {
  const file = fs.openSync(buildPath, 'r');
  fs.closeSync(file);
} catch (err) {
  throw new Error('build.zip could not be opened');
}

console.log('Sanity test passed successfully!');

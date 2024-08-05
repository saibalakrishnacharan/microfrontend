const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
        './dist/child/main.js',
        './dist/child/polyfills.js',
        './dist/child/runtime.js'
]
console.log("test", files);
await fs.ensureDir('./child');
await concat(files, './child/child.js');
await concat(files, '../microFrontEndforParent/src/assets/child.js');
})()

const path = require('path');

// provides the platform specific path segment separator
console.log(path.sep);

//to have a normalized path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

// to find the base file of a path
const base = path.basename(filePath);
console.log(base);

// to resolve a sequence of paths or path segments into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
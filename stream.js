var fs = require('fs')
var filepath= 'data.txt';

// read write ---------------------------------------------
/*var readbleStream= fs.createReadStream(filepath, {encoding: 'utf-8', heightWaterMark: 16 * 1024});
//readableStream.setEncoding('utf8');
var writeableStream= fs.createWriteStream('newData.txt')

readbleStream.on('data', function(chunk){
    writeableStream.write(chunk)
    
})*/

// Piping---------------------------------------------  // uncomment one by one
/*
var readStream = fs.createReadStream(filepath);


var writeStream = fs.createWriteStream('pipewrite.txt');

readStream.pipe(writeStream);*/

// Chaning---------------------------------------

//var fs = require('fs');

var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream(filepath)
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("File Compressed.");

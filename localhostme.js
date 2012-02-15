#!/usr/bin/env node
var c = require("connect");
var port = parseInt(process.argv.slice(2).join(" "), 10) || 8000;

var server = c.createServer(
	c.static(process.cwd()),
	c.directory(process.cwd())
).listen(port);

console.log("");
console.log("Current working directory successfully mapped to localhost:" + port + ". Ctrl+C to exit");
console.log("");
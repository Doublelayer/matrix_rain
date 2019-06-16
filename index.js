"use strict";

var streams = [];
var symbolSize = 20;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  textFont("Consolas");

  var x = 0;
  for (var i = 0; i <= width / symbolSize; i++) {
    var stream = new Stream(symbolSize);
    stream.generateSymbols(x, random(-2000, 0));

    streams.push(stream);
    x += symbolSize;
  }
}

function draw() {
  background(0, 150);
  streams.forEach(symbol => {
    symbol.render();
  });
}

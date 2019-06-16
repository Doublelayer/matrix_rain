"use strict";

class Stream {
  constructor(symbolSize) {
    this.symbols = [];
    this.totalSymbols = round(random(5, 60));
    this.speed = random(5, 20);
    this.symbolSize = symbolSize;
  }

  generateSymbols(x, y) {
    var opacity = 255;
    var fadeInterval = 1.6;

    for (var i = 0; i <= this.totalSymbols; i++) {
      var symbol = new Symbol(x, y, this.speed, this.symbolSize, opacity);
      opacity -= 255 / this.totalSymbols / fadeInterval;
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbol.symbolSize;
    }
  }

  render() {
    var blurIndex = round(random(0, this.symbols.length - 1));

    this.symbols.forEach(symbol => {
      blurIndex == this.symbols.indexOf(symbol)
        ? fill(229, 229, 229, symbol.opacity)
        : fill(0, 255, 70, symbol.opacity);

      text(symbol.value, symbol.x, symbol.y);
      textSize(symbol.symbolSize);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}

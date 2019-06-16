"use strict";

class Symbol {
  constructor(x, y, speed, symbolSize, opacity) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.symbolSize = symbolSize;
    this.opacity = opacity;
    this.switchInterval = round(random(5, 20));
  }

  setToRandomSymbol() {
    if (frameCount % this.switchInterval == 0) {
      var characters = "Doublelayer - Florin Hamann";

      //this.value = String.fromCharCode(0x30a0 + round(random(0, 96)));
      this.value = characters.charAt(round(random(0, characters.length)));
    }
  }

  rain() {
    this.y >= height ? (this.y = 0) : (this.y += this.speed);
  }
}

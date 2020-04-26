class Snake {
  
  constructor() {
  	this.body = [];
    this.body[0] = createVector(floor(w/2), floor(h/2));
    this.x = 0;
    this.y = 0;
    this.length = 0;
    this.image = loadImage('snake (2).png')
  }
  
  setDir(x, y) {
  	this.x = x;
    this.y= y;
  }
  
  update() {
  	var face = this.body[this.body.length-1].copy();
    this.body.shift();
    face.x += this.x;
    face.y += this.y;
    this.body.push(face);
  }
  
  grow() {
  	var face = this.body[this.body.length-1].copy();
    this.length++;
    this.body.push(face);
  }
  
  endGame() {
  	var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
    if(x > w-1 || x < 0 || y > h-1 || y < 0) {
       return true;
    }
    for(var i = 0; i < this.body.length-1; i++) {
    	var part = this.body[i];
      if(part.x == x && part.y == y) {
      	return true;
      }
    }
    return false;
  }
  
  eat(pos) {
  	var x = this.body[this.body.length-1].x;
    var y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y) {
      this.grow();
      return true;
    }
    return false;
  }
  
  show() {
  	for(var i = 0; i < this.body.length; i++) {
    	fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1)
    }
  }

}

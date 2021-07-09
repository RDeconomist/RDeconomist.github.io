
///Richard Davies
///First Canvas tutorial
///Data Science, 2021

//Search the document for the canvas element, and place this within a variable:
var canvas = document.querySelector('canvas');

//Set the weidth and height of the canvas:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Create the context variable
//This gives us the methods and functions to draw on canvas
var c = canvas.getContext('2d');

///////////////////////////
///Control Panel
///////////////////////////
//Speed (sp), Number (n), Size (w), Shape (sh)
var sp1 = 5;
var sp2 = 5;

var n1 = 50;
var n2 = 10;

var w1 = 0.005;
var w2 = 0.010;

var sh = 2;

//////////// Using a function to draw lots of moving circles
function Circle1(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI*sh, false);
        //c.strokeStyle = 'pink';
        //c.fillStyle = 'pink';
        c.strokeStyle = 'rgba(240,240,240,0.5)';
        c.fillStyle = 'rgba(245,240,240,0.5)';
        c.stroke();
        c.fill();
    }

    //Make sure that the balls bounce, rather than just go off screen:
    this.update = function(){
        if (this.x + this.r > innerWidth || this.x - this.r <0) {this.dx = -this.dx}
        if (this.y + this.r > innerHeight || this.y - this.r <0) {this.dy = -this.dy}
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}    

///////////////

//////////// Using a function to draw lots of moving circles
function Circle2(x, y, dx, dy, r) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI*sh, false);
        //c.strokeStyle = 'pink';
        //c.fillStyle = 'pink';
        c.strokeStyle = 'rgba(250,0,0,0.9)';
        c.fillStyle = 'rgba(250,0,0,0.9)';
        c.stroke();
        c.fill();
    }

    //Make sure that the balls bounce, rather than just go off screen:
    this.update = function(){
        if (this.x + this.r > innerWidth || this.x - this.r <0) {this.dx = -this.dx}
        if (this.y + this.r > innerHeight || this.y - this.r <0) {this.dy = -this.dy}
    
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}    

///////////////




//Create an empty array for circles:
var circle1Array = [];
var circle2Array = [];

//Now create a loop that creates a series of circles:
//Each of them has random properties:
//And then they get pushed into the array:

for (var i = 0; i < n1; i++) {
    
    // The original x and y (where the bubbles start from) affects the appearance a lot.
    var x = innerWidth/2;
    var y = innerHeight/2;
    //var x = Math.random() * innerWidth;
    //var y = Math.random() * innerHeight;
    
    
    
    // The direction the bubbles travel:

    // Attempt to make cirular:
    
    // var dist = Math.random();
    // var dx = Math.random()-0.5;
    // // var dy = ((dist*dist) - (dx*dx))^0.5
    // n = (dist*dist);
    // m = (dx*dx);
    // nm = n-m;
    // var dy = Math.sqrt(nm);

    
    // var dist = Math.random()
    // var dx = (Math.random() - 0.5)*sp1
    // var dy = (dist - dx)*sp1
    
    var dx = (Math.random() - 0.5)*sp1
    var dy = (Math.random() - 0.5)*sp1
    
    
    
    var r = Math.random()*window.innerWidth*w1;
    circle1Array.push(new Circle1(x, y, dx, dy, r))
}

for (var i = 0; i < n2; i++) {
    var x = (0.5)*innerWidth;
    var y = (0.5)*innerHeight;
    var dx = (Math.random() - 0.5)*sp2
    var dy = (Math.random() - 0.5)*sp2
    var r = Math.random()*window.innerWidth*w2;
    circle2Array.push(new Circle2(x, y, dx, dy, r))
}

//Animate the circles:
function animate() {
    requestAnimationFrame(animate);
    //Clear the screen:
    c.clearRect(0, 0, innerWidth, innerHeight);
    //circle.update();
    for (var i = 0; i < circle1Array.length; i ++) {
        circle1Array[i].update();
    };
    for (var i = 0; i < circle2Array.length; i ++) {
        circle2Array[i].update();
    }
}

//Now run the animation:
animate();

var canvas = document.getElementById("circle_box");
var ctx = canvas.getContext("2d");
var csize = 500;
//grabbing the canvas, surface to draw on, and declaring size (square)

var cr = 75;
var cx = 250;
var cy = 250;
//declaring circle variables: radius and start points respectively

ctx.fillStyle = "#000000";
ctx.strokeRect (0, 0, 500, 500);
//creating a visual representation of the canvas

var circle = function(ms, x, y, r) {
	ms.fillStyle = "#ffffff";
	ms.fillRect (1, 1, 498, 498);
	//refreshing screen
	ms.beginPath();
	//starting the circle
	ms.arc(x, y, r, 0, 2 * Math.PI);
	//creating circle path
	ms.stroke();
	//drawing circle
};

circle(ctx, cx, cy, cr); //drawing circle at beginning

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
		
		cx = cx - 3;
		if (cx < cr) {
			cx = cx + 3;
		}; //checking to make sure circle is not outside of canvas
		circle(ctx, cx, cy, cr);
		//moving circle
		
    } //left arrow key
    else if(event.keyCode == 39) {
		
        cx = cx + 3;
		if (cx > csize - cr) {
			cx = cx - 3;
		};
		circle(ctx, cx, cy, cr);
		
    } //right arrow key
	else if(event.keyCode == 38) {
		
        cy = cy - 3;
		if (cy < cr) {
			cy = cy + 3;
		};
		circle(ctx, cx, cy, cr);
		
    } //down arrow key
	else if(event.keyCode == 40) {
		
        cy = cy + 3;
		if (cy > csize - cr) {
			cy = cy - 3;
		};
		circle(ctx, cx, cy, cr);
		
    } //up arrow key
});//movement of the circle
function setup() {

    createCanvas(500, 500)
    background(153, 194, 56)

    //////////
    // GRID //
    //////////
    var circleSize = 4;
    noStroke()

    for (var i=circleSize /2; i < width; i+= circleSize * 1.25) {
        for (var n=circleSize /2; n < height; n += circleSize * 1.25) {
            ellipse(i, n, circleSize);
        }
    }


}
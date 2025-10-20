let jamPlay;

function preload(){
    jamPlay=loadSound('assets/LouieZongTRAFFICJAM.mp3')
}

function setup(){
    createCanvas(windowWidth/2,windowHeight/2);
}

function draw(){
    background(200);
}


function keyPressed(){
    if(key === 'g') {
    jamPlay.play();
    }
}
let jamPlay, fft, amp, level, cheeseSize, trumpetSize, cheeseImg, trumpetImg, addImage1, addImage2, addImage3, addImage4, cheeseLocation;

function preload(){
    jamPlay=loadSound('assets/LouieZongTRAFFICJAM.mp3');
    cheeseImg=loadImage('assets/Cheese.png');
    trumpetImg=loadImage('assets/trumpet.jpg');
}

function setup(){
    createCanvas(windowWidth/1.2,windowHeight/1.2);
    imageMode(CENTER);

    fft=new p5.FFT();
    amp = new p5.Amplitude();
    cheeseSize=0;

    jamPlay.addCue(.5,makeImage1)
    jamPlay.addCue(1.2,makeImage2)
    jamPlay.addCue(2.3,makeImage3)
    jamPlay.addCue(3.2,makeImage4)

}

function draw(){
    background(220,220,120);

    fill(0);
    textFont("courier new")                   
    textSize(28);
    text('Press G to start',10,100);
    textSize(48)
    text('TRAFFIC JAM - Louie Zong',10,50)

    fft.analyze();
    level=amp.getLevel();
    let treble=fft.getEnergy('treble');

    cheeseSize=map(level,0,1,0,100);
    trumpetSize=map(treble, 0, 255, 10, 150)

    image(cheeseImg,width/2,height/2,cheeseSize*4,cheeseSize*4);


    if(addImage1===true){
        image(trumpetImg,200,200,trumpetSize*2,200);
    }

    if(addImage2===true){
        image(trumpetImg,200,600,trumpetSize*2,200);
    }
    
    if(addImage3===true){
        image(trumpetImg,1400,200,trumpetSize*2,200);
    }
    
    if(addImage4===true){
        image(trumpetImg,1400,600,trumpetSize*2,200);
    }

}


function keyPressed(){
    if(key === 'g') {
    if(jamPlay.isPlaying()){
        jamPlay.pause();
    } else {
        jamPlay.play();
    }
    
}
}

function makeImage1(){
    addImage1=true
}
function makeImage2(){
    addImage2=true
}

function makeImage3(){
    addImage3=true
}

function makeImage4(){
    addImage4=true
}

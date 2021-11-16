function preload(){

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,200,150,200,200);
    fill("lightcoral");
    circle(60,60,100);
    circle(540,60,100);
    circle(60,440,100);
    circle(540,440,100);
    rect(110,50,380,20);
    rect(110,430,380,20);
    rect(50,110,20,280);
    rect(530,110,20,280);
    
}

function take_snapshot(){
    save("image1.png");
}
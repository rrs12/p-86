var canvas= new fabric.Canvas('myCanvas');
block_width= 100;
block_height= 100;
x_cord=50;
y_cord=100;
player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
        player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
        player_object.set({
            top: y_cord,
            left: x_cord
        });
        canvas.add(player_object);
});
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function (Img){
block_image_object= Img;

block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeight(block_height);
block_image_object.set({
    top: y_cord,
    left:x_cord
});
canvas.add(block_image_object);
});
}


window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keyPressed= e.keyCode;
    if(e.shiftKey == true && keyPressed == '80'){
        block_height=block_height+ 10;
        block_width=block_width +10;
        document.getElementById("current_width").innerHTML =block_width;
        document.getElementById("current_height").innerHTML =block_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        block_height=block_height- 10;
        block_width=block_width - 10;
        document.getElementById("current_width").innerHTML =block_width;
        document.getElementById("current_height").innerHTML =block_height;
    }

    if(keyPressed=='91' && keyPressed == '90'){
     canvas.remove(block_image_object)
    }

    if(keyPressed== '38'){
       up();
    }

    if(keyPressed== '40'){
        down();
     }

     if(keyPressed== '39'){
        right();
     }

     if(keyPressed== '37'){
        left();
     }

     if(keyPressed== '70'){
        new_image('spiderman_face.png')
     }
 
     if(keyPressed== '66'){
        new_image('ironman_body.png')
     }
 
     if(keyPressed== '76'){
        new_image('hulk_legs.png')
     }
 
     if(keyPressed== '82'){
        new_image('thor_right_hand.png')
     }
 
     if(keyPressed== '72'){
        new_image('captain_america_left_hand.png')
     }
 
}


function up(){
    if(y_cord>=0){
        y_cord= y_cord-block_height
        canvas.remove(player_object);
        player_update()
    }
}

function down(){
    if(y_cord<=500){
        y_cord= y_cord+block_height
        canvas.remove(player_object);
        player_update()
    }
}

function left(){
    if(x_cord>0){
        x_cord= x_cord-block_width
        canvas.remove(player_object);
        player_update()
    }
}

function right(){
    if(x_cord<=850){
        x_cord= x_cord+block_width
        canvas.remove(player_object);
        player_update()
    }
}


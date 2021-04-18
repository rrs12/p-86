var canvas= new fabric.Canvas('myCanvas');
block_width= 30;
block_height= 30;
x_cord=10;
y_cord=10;
player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function (Img){
        player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
        player_object.set({
            top: x_cord,
            left: y_cord
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
    top: x_cord,
    left:y_cord
});
canvas.add(player_object);;
});
}
canvas = document.getElementById("mycanvas");
ctx = getContext("2d");

img_height = 300;
img_widht = 200;

var img_image;

image_x = 100;
iamge_y = 100;

function add()
{
    img_imgTag = new Image();
    img_imgTag.onload = uploding;
    img_imgTag.src = img_imgTag;
}

function uploding()
{
    ctx.drawImage(img_imgTag, img_x, img_y, img_height, img_width);
}

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log("Key Pressed");

    if ((keyPressed >= 97 && keyPressed <= 112) || (keyPressed >= 65 && keyPressed <= 90))
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML = "You pressed a ALPHABET KEY";
        console.log("ALPHABET KEY");


    }

    if (keyPressed >= 48 && keyPressed <= 57)
    {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a NUMBER KEY";
        console.log("NUMBER KEY");
    }

    if (keyPressed >= 37 && keyPressed <= 40)
    {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed a ARROW KEY";
        console.log("ARROW KEY");
    }

    if (keyPressed >= 17)
    {
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed a SPECIAL KEY";
        console.log("SPECIAL KEY");
    }
}

function aplhabetkey()
{
    img_image = "Alpkey.png";
    add();
}

function numberkey()
{
    img_image = "numkey.png";
    add();
}

function arrowkey()
{
    img_image = "Arrkey.png";
    add();
}

function specialkey()
{
    img_image = "spkey.png";
    add();
}

function otherkey()
{
    img_image = "otherkey.png";
    add();
}
var i=0;
var slideoimage=["pictures/1197094.jpg","pictures/Fantastic Beasts and Where to Find Them Full Cast Wallpaper.jpg","pictures/1233080.jpg"];
var slideshow=function(){
    document.slideshow.src=slideoimage[i];
    if(i<slideoimage.length-1){
        i++;
    }
    else{
        i=0
    }
    setTimeout("slideshow()",2000);

}
slideshow();
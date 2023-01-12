
    var slideImg = document.getElementById("slideImg");
    var images = new Array(
        "assets/images/2.jpg",
        "assets/images/3.jpg",
        "assets/images/4.jpg",

    );

    var len = images.length;
    var i = 0;

    function slider(){
        if(i> len-1){
            i=0;
        }
        slideImg.src=images[i];
        i++;
        setTimeout('slider()',3000);
    }



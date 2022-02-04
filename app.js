

document.getElementById("btn"),addEventListener("click", function(){

    let rgb1 = Math.round(Math.random()*255);
    let rgb2 = Math.round(Math.random()*255);
    let rgb3 = Math.round(Math.random()*255);

    let rgb4 = Math.round(Math.random()*255);
    let rgb5 = Math.round(Math.random()*255);
    let rgb6 = Math.round(Math.random()*255);

    document.body.style.background = "linear-gradient(to bottom, rgb("+rgb1+","+rgb2+","+rgb3+"), rgb("+rgb4+","+rgb5+","+rgb6+")";

    document.getElementById("rgb").innerHTML = "rgb("+rgb1+","+rgb2+","+rgb3+"), rgb("+rgb4+","+rgb5+","+rgb6+")";
})
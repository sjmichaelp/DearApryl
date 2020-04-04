var scrollableElement = document.body, //document.getElementById('scrollableElement');
text1 = document.getElementById("display_text"),
text2 = document.getElementById("display_text2"),
text3 = document.getElementById("display_text3"),
text4 = document.getElementById("display_text4"),
text5 = document.getElementById("display_text5"),
text6 = document.getElementById("display_text6"),
text7 = document.getElementById("display_text7"),
text8 = document.getElementById("display_text8"),
text9 = document.getElementById("display_text9"),
text10 = document.getElementById("display_text10"),
text11 = document.getElementById("display_text11");

scrollableElement.addEventListener('wheel', zoom);

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.0005;

    // Restrict scale
    console.log(scale);
    scale = Math.min(1, scale);

    // Apply scale transform
    if(scale > -0.3){
        text1.style.opacity = scale; 
        text2.style.opacity = 0;

    } else if (scale < -0.3 && scale > -0.75) {
        text2.style.opacity = 1;
        text3.style.opacity = 0;
    } else if (scale < -0.75 && scale > -1) {
        text2.style.opacity = 0;
        text3.style.opacity = 1;
        text4.style.opacity = 0;
    } else if (scale < -1.25 && scale > -1.5) {
        text3.style.opacity = 0;
        text4.style.opacity = 1;
        text5.style.opacity = 0;
    } else if (scale < -1.75 && scale > -2) {
        text4.style.opacity = 0;
        text5.style.opacity = 1;
        text6.style.opacity = 0;
    } else if (scale < -2.25 && scale > -2.5) {
        text5.style.opacity = 0;
        text6.style.opacity = 1;
        text7.style.opacity = 0;
    }else if (scale < -2.75 && scale > -3) {
        text6.style.opacity = 0;
        text7.style.opacity = 1;
        text8.style.opacity = 0;
    } else if (scale < -3.25 && scale > -3.5) {
        text7.style.opacity = 0;
        text8.style.opacity = 1;
        text9.style.opacity = 0;
    } else if (scale < -3.75 && scale > -4) {
        text8.style.opacity = 0;
        text9.style.opacity = 1;
        text10.style.opacity = 0;
    } else if (scale < -4.25 && scale > -4.5) {
        text9.style.opacity = 0;
        text10.style.opacity = 1;
        text11.style.opacity = 0;
    } else if (scale < -4.75 && scale > -5) {
        text10.style.opacity = 0;
        text11.style.opacity = 1;
    }
  }
  
  let scale = 1;
  text1.onwheel = zoom;
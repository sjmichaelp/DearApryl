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
text11 = document.getElementById("display_text11"),
text12 = document.getElementById("display_text12"),
text13 = document.getElementById("display_text13"),
text14 = document.getElementById("display_text14"),
text15 = document.getElementById("display_text15"),
text16 = document.getElementById("display_text16"),
text17 = document.getElementById("display_text17"),
text18 = document.getElementById("display_text18"),
text19 = document.getElementById("display_text19"),
text20 = document.getElementById("display_text20"),
text21 = document.getElementById("display_text21"),
text22 = document.getElementById("display_text22"),
text23 = document.getElementById("display_text23"),
text24 = document.getElementById("display_text24"),
text25 = document.getElementById("display_text25"),
text26 = document.getElementById("display_text26"),
text27 = document.getElementById("display_text27"),
text28 = document.getElementById("display_text28"),
text29 = document.getElementById("display_text29"),
text30 = document.getElementById("display_text30"),
text31 = document.getElementById("display_text31"),
text32 = document.getElementById("display_text32"),
text33 = document.getElementById("display_text33"),
scroll_arrow = document.getElementById("scroll_arrow");

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
        text12.style.opacity = 0;
    } else if (scale < -5.25 && scale > -5.5) {
        text11.style.opacity = 0;
        text12.style.opacity = 1;
        text13.style.opacity = 0;
    } else if (scale < -5.75 && scale > -6) {
        text12.style.opacity = 0;
        text13.style.opacity = 1;
        text14.style.opacity = 0;
    } else if (scale < -6.25 && scale > -6.5) {
        text13.style.opacity = 0;
        text14.style.opacity = 1;
        text15.style.opacity = 0;
    } else if (scale < -6.75 && scale > -7) {
        text14.style.opacity = 0;
        text15.style.opacity = 1;
        text16.style.opacity = 0;
    } else if (scale < -7.25 && scale > -7.5) {
        text15.style.opacity = 0;
        text16.style.opacity = 1;
        text17.style.opacity = 0;
    } else if (scale < -7.75 && scale > -8) {
        text16.style.opacity = 0;
        text17.style.opacity = 1;
        text18.style.opacity = 0;
    } else if (scale < -8.25 && scale > -8.5) {
        text17.style.opacity = 0;
        text18.style.opacity = 1;
        text19.style.opacity = 0;
    } else if (scale < -8.75 && scale > -9) {
        text18.style.opacity = 0;
        text19.style.opacity = 1;
        text20.style.opacity = 0;
    } else if (scale < -9.10 && scale > -9.20) {
            text19.style.opacity = 0;
            text20.style.opacity = 1;
            text21.style.opacity = 0;
            text22.style.opacity = 0;
            text23.style.opacity = 0;
            text24.style.opacity = 0;
            text25.style.opacity = 0;
            text26.style.opacity = 0;
    } else if (scale < -9.25 && scale > -9.35) {
        text21.style.opacity = 1;
    } else if (scale < -9.40 && scale > -9.5) {
        text21.style.opacity = 1;
    } else if (scale < -9.75 && scale > -10) {
        text22.style.opacity = 1;
    } else if (scale < -10.25 && scale > -10.5) {
        text23.style.opacity = 1;
    } else if (scale < -10.75 && scale > -11) {
        text24.style.opacity = 1;
    } else if (scale < -11.25 && scale > -11.5) {
        text25.style.opacity = 1;
    } else if (scale < -11.75 && scale > -12) {
        text26.style.opacity = 1;
    } else if (scale < -12.25 && scale > -12.5) {
        text20.style.opacity = 0;
        text21.style.opacity = 0;
        text22.style.opacity = 0;
        text23.style.opacity = 0;
        text24.style.opacity = 0;
        text25.style.opacity = 0;
        text26.style.opacity = 0;
        text27.style.opacity = 1;
    } else if (scale < -13.25 && scale > -13.5) {
        text27.style.opacity = 0;
        text28.style.opacity = 1;
        text29.style.opacity = 0;
    } else if (scale < -13.75 && scale > -14) {
        text28.style.opacity = 0;
        text29.style.opacity = 1;
        text30.style.opacity = 0;
    } else if (scale < -14.25 && scale > -14.5) {
        text29.style.opacity = 0;
        text30.style.opacity = 1;
        text31.style.opacity = 0;
    } else if (scale < -14.75 && scale > -15) {
        text30.style.opacity = 0;
        text31.style.opacity = 1;
        text32.style.opacity = 0;
    } else if (scale < -15.25 && scale > -15.5) {
        text31.style.opacity = 0;
        text32.style.opacity = 1;
        text33.style.opacity = 0;
    } else if (scale < -15.75 && scale > -16) {
        text32.style.opacity = 0;
        text33.style.opacity = 1;
        scroll_arrow.style.opacity = 0;
    } 
}
  
  let scale = 1;
  text1.onwheel = zoom;
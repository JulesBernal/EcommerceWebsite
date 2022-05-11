let slideNum=1;
slideShow(slideNum);
function slideMath(n){
slideShow(slideNum+=n);
}
function currentSlide(n){
slideShow(slideNum=n);
}

function slideShow(n){
    let i;
    let slides=document.getElementsByClassName("slideFig");
    let tabs=document.getElementsByClassName("tabs");
    if (slides.length<n){
        slides=1}
    if (1>n){
        slideNum=slides.length;
    }
    for(i=0;i<slides.length;i++){
        slides[i].style.display="none";
        tabs[i].className=tabs[i].className.replace(" active", "");
    }
    slides[slideNum-1].style.display="block";
    tabs[slideNum-1].className+=" active";
}
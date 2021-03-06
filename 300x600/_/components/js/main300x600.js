function playAd(){    
    TweenLite.to('#adPlay', .7, {autoAlpha:0, ease: Back.easeOut});
    tl.to('#adFader', .4, {autoAlpha:0, ease: Power3.easeOut})
        .from('#adLogo', .4, {autoAlpha:0, ease: Power3.easeOut}, "-=.3")
        .from('#adBox', .4, {autoAlpha:0, left:-300, ease: Power3.easeOut}, "-=.1")
        .from('#adTxt1', .4, {autoAlpha:0, left:-150, ease: Power3.easeOut})
        .to('#adTxt1', .4, {autoAlpha:0, left:-150, ease: Power3.easeOut, delay:2.5})
        .from('#adTxt2', .4, {autoAlpha:0, left:-150,  ease: Power3.easeOut}, "-=.3")
        .from('#adCta', .4, {autoAlpha:0, left:-300,  ease: Power3.easeOut}, "-=.1");
};

function addListeners(){
    $( '#adContainer' ).click(clickIn);
};

function clickIn(evt){
   if(tl.progress() != 1){
    TweenLite.to('#adPlay', .7, {autoAlpha:0, ease: Back.easeOut});
        playAd();
  } else {
      TweenLite.to('#adPlay', .7, {autoAlpha:0, ease: Back.easeOut});
    tl.restart();
  }
};

function animationComplete(evt){
     TweenLite.to('#adPlay', .7, {autoAlpha:1, ease: Back.easeOut});
    $( '#adContainer' ).hover( hoverIn, hoverOut );
};

function hoverIn(evt)
{
    TweenLite.to('#adCtaArrow', .7, {left:'108px', ease: Back.easeOut});
};

function hoverOut(evt)
{
    TweenLite.to('#adCtaArrow', .7, { left:'103px', ease: Back.easeOut});
};

$(document).ready(function(){
    //set defaults
    $('#adFader').css('opacity', '1');
    //$('#adTxt3').css('opacity', '0');
    addListeners();
    //playAd();
});

var tl = new TimelineLite();
tl.eventCallback("onComplete", animationComplete);


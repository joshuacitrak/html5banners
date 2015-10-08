function playAd(){    
    TweenLite.to('#adPlay', .7, {autoAlpha:0, ease: Back.easeOut});
    tl.to('#adFader', .5, {autoAlpha:0, ease: Power3.easeOut})
    .from('#adBoxRect1', .5, {top:-53, ease:Power3.easeOut})
    .from('#adBoxRect2', .5, {top:212, ease: Power3.easeOut}, "-=.5")
        .from('#adLogo', .5, {autoAlpha:0, left:-50, ease: Power3.easeOut}, "-=.3")
        .from('#adTxt1', .5, {autoAlpha:0, top:150, ease: Power3.easeOut})
        .from('#adCta', .7, {scaleY:1, scaleX:0,  transformOrigin:"left top", ease: Power3.easeOut}, "+=.4")
        .from('#adCtaTxt', .7, {autoAlpha:0, ease: Power3.easeOut},"+=.2")
        .from('#adCtaArrow', .7, {autoAlpha:0, left:-5, ease: Back.easeOut},"-=.2");
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
    TweenLite.to('#adCtaArrow', .7, {left:'97px', ease: Back.easeOut});
};

function hoverOut(evt)
{
    TweenLite.to('#adCtaArrow', .7, { left:'92px', ease: Back.easeOut});
};

$(document).ready(function(){
    //set defaults
    $('#adFader').css('opacity', '1');
    addListeners();
    //playAd();
});

var tl = new TimelineLite();
tl.eventCallback("onComplete", animationComplete);


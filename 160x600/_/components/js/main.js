function playAd(){    
    TweenLite.to('#adPlay', .7, {autoAlpha:0, ease: Back.easeOut});
    tl.to('#adFader', .5, {autoAlpha:0, ease: Power3.easeOut})
        .from('#adLogo', .5, {autoAlpha:0, left:-50, ease: Power3.easeOut}, "-=.3")
        .from('#adBoxRect', .5, {autoAlpha:0, scaleX:.1, transformOrigin:"left top", ease: Power3.easeOut}, "-=.3")
        .from('#adBox', .7, {scaleY:0, scaleX:1,  transformOrigin:"right top", ease: Back.easeOut}, "-=.1")
        .from('#adTxt1', .5, {autoAlpha:0, top:-50, ease: Power3.easeOut})
        .to('#adTxt1', .5, {autoAlpha:0, top:100, ease: Power3.easeOut, delay:2})
        .from('#adTxt2', .5, {autoAlpha:0, top:-50, ease: Power3.easeOut}, "-=.3")
        .to('#adTxt2', .5, {autoAlpha:0, top:100, ease: Power3.easeOut, delay:2})
        .from('#adTxt3', .5, {autoAlpha:0, top:-50, ease: Power3.easeOut}, "-=.3")
        .from('#adCtaRect', .5, {autoAlpha:0, scaleX:.1, transformOrigin:"left top", ease: Power3.easeOut}, "-=.3")
        .from('#adCta', .7, {scaleY:0, scaleX:1,  transformOrigin:"right top", ease: Power3.easeOut}, "-=.1")
        .from('#adCtaTxt', .7, {autoAlpha:0, ease: Power3.easeOut},"-=.1")
        .from('#adCtaArrow', .7, {autoAlpha:0, left:-10, ease: Back.easeOut},"-=.3");
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
    //$('#adFader').css('opacity', '1');
    addListeners();
    //playAd();
});

var tl = new TimelineLite({onComplete:animationComplete});


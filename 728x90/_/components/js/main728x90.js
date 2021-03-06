function playAd(){    
    TweenLite.to('#adPlay', .7, {autoAlpha:0, ease: Back.easeOut});
    tl.to('#adFader', .5, {autoAlpha:0, ease: Power3.easeOut})
        .to('#adBox', .5, {autoAlpha:0, ease: Power3.easeOut}, "-=.5")
        .to('#adBgImage', .5, {autoAlpha:0, ease: Power3.easeOut}, "+=1.6")
        .to('#adBox', .5, {autoAlpha:1, ease: Power3.easeOut}, "-=.5")
        .to('#adLogo1', .5, {autoAlpha:0, ease: Power3.easeOut}, "-=.5")
        .from('#adTxt1', .5, {autoAlpha:0, left:-150, ease: Power3.easeOut})
        .to('#adTxt1', .5, {top:17, ease: Power3.easeOut, delay:2})
        .from('#adTxt2', .5, {autoAlpha:0, top:90, ease: Power3.easeOut}, "-=.2")
        .from('#adCta', .5, {scaleY:1, scaleX:0,  transformOrigin:"left top", ease: Power3.easeOut}, "+=.3")
        .from('#adCtaTxt', .5, {autoAlpha:0, ease: Power3.easeOut},"-=.1")
        .from('#adCtaArrow', .5, {autoAlpha:0, left:-5, ease: Back.easeOut},"-=.3");
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
    TweenLite.to('#adCtaBg', .7, {backgroundColor:"#D7234A", ease: Power3.easeOut});
};

function hoverOut(evt)
{
    TweenLite.to('#adCtaArrow', .7, { left:'103px', ease: Back.easeOut});
    TweenLite.to('#adCtaBg', .7, {backgroundColor:"#0099cc", ease: Power3.easeOut});
};

$(document).ready(function(){
    //set defaults here
    $('#adFader').css('opacity', '1');
    $('#adTxt1').css('top', '46px');
    addListeners();
    //playAd();
});

var tl = new TimelineLite();
tl.eventCallback("onComplete", animationComplete);


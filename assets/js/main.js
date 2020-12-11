var navLinks = new Array("index.html","deals.html","store.html","about.html","contact.html");
var navLinkLabels = new Array("Home","Deals","Store","About","Contact");
var mobileNavLinks = new Array("index.html","deals.html","store.html","about.html","contact.html");
var mobileNavLinkLabels = new Array("Home","Deals","Store","About","Contact");
for (var i=0;i<navLinks.length;i++){
    var navLinkLi = document.createElement("li");
    var navLinkA = document.createElement("a");
    navLinkLi.appendChild(navLinkA);
    document.getElementById("navLinkList").appendChild(navLinkLi);
    document.querySelectorAll("#navLinkList li a")[i].classList.add("blueColor","buttonLinkPadding","fedoraHat2ClipPath");
    document.querySelectorAll("#navLinkList li a")[i].innerHTML=navLinkLabels[i];
    document.querySelectorAll("#navLinkList li a")[i].href=navLinks[i];
}
for (var i=0;i<navLinks.length;i++){
    var mobileNavLinkLi = document.createElement("li");
    var mobileNavLinkA = document.createElement("a");
    mobileNavLinkLi.appendChild(mobileNavLinkA);
    document.getElementById("mobileNavLinkList").appendChild(mobileNavLinkLi);
    document.querySelectorAll("#mobileNavLinkList li")[i].classList.add("mobileLinksPadding");
    document.querySelectorAll("#mobileNavLinkList li a")[i].classList.add("blueColor","buttonLinkPadding","fedoraHat2ClipPath");
    document.querySelectorAll("#mobileNavLinkList li a")[i].innerHTML=navLinkLabels[i];
    document.querySelectorAll("#mobileNavLinkList li a")[i].href=navLinks[i];
}
$("#navLinkList li a").mouseenter(function(){
    $(this).removeClass("blueColor");
    $(this).addClass("whiteColor");
    $(this).addClass("blueBackground");
})
$("#navLinkList li a").mouseleave(function(){
    $(this).removeClass("whiteColor");
    $(this).addClass("blueColor");
    $(this).removeClass("blueBackground");
})
function slider(){
    if (document.getElementById("slide").src=="file:///D:/MarkoStojanovicSinatraRecords/assets/img/recordingStudio.jpg"){
        document.getElementById("slide").src="file:///D:/MarkoStojanovicSinatraRecords/assets/img/store.jpg";
        document.getElementById("slide").alt="Store";
    }
    else if (document.getElementById("slide").src=="file:///D:/MarkoStojanovicSinatraRecords/assets/img/store.jpg"){
        document.getElementById("slide").src="file:///D:/MarkoStojanovicSinatraRecords/assets/img/museum.jpg";
        document.getElementById("slide").alt="Museum";
    }
    else {
        document.getElementById("slide").src="file:///D:/MarkoStojanovicSinatraRecords/assets/img/recordingStudio.jpg";
        document.getElementById("slide").alt="Recording studio";
    }
    setTimeout("slider()",3000);
}
slider();
document.getElementById("hamburger").addEventListener("click", function() {
document.getElementById("mobileNavLinkList").classList.toggle("displayFlex");
});
if(window.location=='file:///D:/MarkoStojanovicSinatraRecords/index.html'){
var numberLabels = new Array("Frank Sinatra founded the company","Grammy awards won","First cassette sold","First CD released");
for (var i=0;i<numberLabels.length;i++){
var numberLi = document.createElement("li");
var numberSpan = document.createElement("span");
var particularNumber = document.createTextNode("0");
numberSpan.appendChild(particularNumber);
numberLi.appendChild(numberSpan);
document.getElementById("aFewNumberList").appendChild(numberLi);
document.querySelectorAll("#aFewNumberList li")[i].classList.add("displayFlex","alignItemsCenter","flexDirectionColumn");
document.querySelectorAll("#aFewNumberList li span")[i].classList.add("blueBackground","buttonLinkPadding","fedoraHat2ClipPath","whiteColor","textAlignCenter");
var numberP = document.createElement("p");
numberLi.appendChild(numberP);
document.querySelectorAll("#aFewNumberList li p")[i].innerHTML=numberLabels[i];
document.querySelectorAll("#aFewNumberList li p")[i].classList.add("blueColor","textAlignCenter");
}
var target1 = document.querySelectorAll("#aFewNumberList li span")[0];
var target2 = document.querySelectorAll("#aFewNumberList li span")[1];
var target3 = document.querySelectorAll("#aFewNumberList li span")[2];
var target4 = document.querySelectorAll("#aFewNumberList li span")[3];
function foundationYearCounter(aFewNumberList, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        target1.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
function grammyAwardsCounter(aFewNumberList, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        target2.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
function firstCassetteCounter(aFewNumberList, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        target3.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
function firstCDCounter(aFewNumberList, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        target4.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
foundationYearCounter("aFewNumberList li span", 1915, 1947, 5000);
grammyAwardsCounter("aFewNumberList li span", 0, 5, 5000);
firstCassetteCounter("aFewNumberList li span", 1915, 1966, 5000);
firstCDCounter("aFewNumberList li span", 1915, 1991, 5000);
}
var businessHours = new Array("Every day","Opening time","10:00 AM","Closing time","10:00 PM");
for (var i=0;i<businessHours.length;i++){
    var businessHoursLi = document.createElement("li");
    var businessHoursP = document.createElement("p");
    businessHoursLi.appendChild(businessHoursP);
    document.getElementById("businessHourList").appendChild(businessHoursLi);
    document.querySelectorAll("#businessHourList li p")[i].innerHTML=businessHours[i];
    document.querySelectorAll("#businessHourList li p")[i].classList.add("blueColor","textAlignCenter");
}
var bottomLinks = new Array("facebook.com","instagram.com","sitemap.html","documentation.pdf","#");
var bottomLinkFAClasses = new Array("fa-facebook","fa-instagram","fa-sitemap","fa-file-text","fa-user");
for (var i=0;i<bottomLinks.length;i++){
var bottomLinksLi = document.createElement("li");
var bottomLinksA = document.createElement("a");
var bottomLinksSpan = document.createElement("span");
bottomLinksA.appendChild(bottomLinksSpan);
bottomLinksLi.appendChild(bottomLinksA);
document.getElementById("bottomLinkList").appendChild(bottomLinksLi);
document.querySelectorAll("#bottomLinkList li a")[i].href=`${bottomLinks[i]}`;
document.querySelectorAll("#bottomLinkList li a")[i].classList.add(`whiteColor`,`blueBackground`,`fedoraHatClipPath`,`buttonLinkPadding`);
document.querySelectorAll("#bottomLinkList li a span")[i].classList.add(`fa`);
document.querySelectorAll("#bottomLinkList li a span")[i].classList.add(`${bottomLinkFAClasses[i]}`);
document.querySelectorAll("#bottomLinkList li a span")[i].setAttribute("aria-hidden","true");
}
if(window.location=='file:///D:/MarkoStojanovicSinatraRecords/store.html'){
    var jazzAlbumImages = new Array("file:///D:/MarkoStojanovicSinatraRecords/assets/img/strangersInTheNight.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/niceNEasy.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/olBlueEyesIsBack.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/theShelterOfYourArms.jpg");
    var jazzAlbumLabels = new Array(`"Strangers in the Night"`,`"Nice 'n' Easy"`,`"Ol' Blue Eyes Is Back"`,`"The Shelter of Your Arms"`);
    var jazzAlbum1Information = new Array(`Frank Sinatra`,`Strangers in the Night`,`Sinatra Records`);
    var jazzAlbum2Information = new Array(`Frank Sinatra`,`Nice 'n' Easy`,`Sinatra Records`);
    var jazzAlbum3Information = new Array(`Frank Sinatra`,`Ol' Blue Eyes Is Back`,`Sinatra Records`);
    var jazzAlbum4Information = new Array(`Sammy Davis Junior`,`The Shelter of Your Arms`,`Sinatra Records`);
    for (var i=0;i<jazzAlbumImages.length;i++){
        var jazzAlbumImage = document.createElement("img");
        var jazzAlbum = document.createElement("div");
        var jazzAlbumInformationList = document.createElement("ul");
        var jazzAlbumA = document.createElement("a");
        jazzAlbum.appendChild(jazzAlbumImage);
        jazzAlbum.appendChild(jazzAlbumInformationList);
        jazzAlbum.appendChild(jazzAlbumA);
        document.querySelector("#jazzRecords").appendChild(jazzAlbum);
        document.querySelectorAll("#jazzRecords div img")[i].src=jazzAlbumImages[i];
        document.querySelectorAll("#jazzRecords div img")[i].alt=jazzAlbumLabels[i];
        document.querySelectorAll("#jazzRecords div")[i].classList.add('blueBackground','displayFlex','flexDirectionColumn','alignItemsCenter','albumWidth','laptopWidth45','albumMargin','mobileWidth95','bottomBorderRadius');
        document.querySelectorAll("#jazzRecords div ul")[i].classList.add('displayFlex','flexDirectionColumn','alignItemsCenter','whiteColor'); 
        document.querySelectorAll("#jazzRecords div a")[i].innerHTML = "Find out!";
        document.querySelectorAll("#jazzRecords div a")[i].classList.add('whiteBackground','blueColor','fedoraHatClipPath','width25','buttonLinkPadding','textAlignCenter');
    }
    for (var i=0;i<jazzAlbum1Information.length;i++){
        var jazzAlbumLi = document.createElement("li");
        var jazzAlbumP = document.createElement("p");
        jazzAlbumLi.appendChild(jazzAlbumP);
        document.querySelector("#jazzRecords div ul").appendChild(jazzAlbumLi);
        jazzAlbumP.innerHTML=jazzAlbum1Information[i];
    }
    for (var i=0;i<jazzAlbum2Information.length;i++){
        var jazzAlbumLi = document.createElement("li");
        var jazzAlbumP = document.createElement("p");
        jazzAlbumLi.appendChild(jazzAlbumP);
        document.querySelector("#jazzRecords div:nth-of-type(2) ul").appendChild(jazzAlbumLi);
        jazzAlbumP.innerHTML=jazzAlbum2Information[i];
    }
    for (var i=0;i<jazzAlbum3Information.length;i++){
        var jazzAlbumLi = document.createElement("li");
        var jazzAlbumP = document.createElement("p");
        jazzAlbumLi.appendChild(jazzAlbumP);
        document.querySelector("#jazzRecords div:nth-of-type(3) ul").appendChild(jazzAlbumLi);
        jazzAlbumP.innerHTML=jazzAlbum3Information[i];
    }
    for (var i=0;i<jazzAlbum4Information.length;i++){
        var jazzAlbumLi = document.createElement("li");
        var jazzAlbumP = document.createElement("p");
        jazzAlbumLi.appendChild(jazzAlbumP);
        document.querySelector("#jazzRecords div:last-of-type ul").appendChild(jazzAlbumLi);
        jazzAlbumP.innerHTML=jazzAlbum4Information[i];
    }
    var myFullMod1 = $('#myFullMod1').fullmod();
    var myFullMod2 = $('#myFullMod2').fullmod();
    var myFullMod3 = $('#myFullMod3').fullmod();
    var myFullMod4 = $('#myFullMod4').fullmod();
    $('#jazzRecords div:eq(0) a').click(function(){
        myFullMod1.show()
    });
    $('#jazzRecords div:eq(1) a').click(function(){
        myFullMod2.show()
    });
    $('#jazzRecords div:eq(2) a').click(function(){
        myFullMod3.show()
    });
    $('#jazzRecords div:last a').click(function(){
        myFullMod4.show()
    });
    var rockAndRollAlbumImages = new Array("file:///D:/MarkoStojanovicSinatraRecords/assets/img/aBiggerBang.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/elvisIsBack.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/25.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/memoryAlmostFull.jpg");
    var rockAndRollAlbumLabels = new Array(`"A Bigger Bang"`,`"Elvis Is Back!"`,`"25"`,`"Memory Almost Full"`);
    var rockAndRollAlbum1Information = new Array(`The Rolling Stones`,`A Bigger Bang`,`Virgin Records`);
    var rockAndRollAlbum2Information = new Array(`Elvis Presley`,`Elvis Is Back!`,`Sinatra Records`);
    var rockAndRollAlbum3Information = new Array(`Adele`,`25`,` Columbia Records`);
    var rockAndRollAlbum4Information = new Array(`Paul McCartney`,`Memory Almost Full`,`Hear Music`);
    for (var i=0;i<rockAndRollAlbumImages.length;i++){
        var rockAndRollAlbumImage = document.createElement("img");
        var rockAndRollAlbum = document.createElement("div");
        var rockAndRollAlbumInformationList = document.createElement("ul");
        var rockAndRollAlbumA = document.createElement("a");
        rockAndRollAlbum.appendChild(rockAndRollAlbumImage);
        rockAndRollAlbum.appendChild(rockAndRollAlbumInformationList);
        rockAndRollAlbum.appendChild(rockAndRollAlbumA);
        document.querySelector("#rockAndRollRecords").appendChild(rockAndRollAlbum);
        document.querySelectorAll("#rockAndRollRecords div img")[i].src=rockAndRollAlbumImages[i];
        document.querySelectorAll("#rockAndRollRecords div img")[i].alt=rockAndRollAlbumLabels[i];
        document.querySelectorAll("#rockAndRollRecords div")[i].classList.add('whiteBackground','displayFlex','flexDirectionColumn','alignItemsCenter','albumWidth','laptopWidth45','albumMargin','mobileWidth95','bottomBorderRadius');
        document.querySelectorAll("#rockAndRollRecords div ul")[i].classList.add('displayFlex','flexDirectionColumn','alignItemsCenter','blueColor'); 
        document.querySelectorAll("#rockAndRollRecords div a")[i].innerHTML = "Find out!";
        document.querySelectorAll("#rockAndRollRecords div a")[i].classList.add('blueBackground','whiteColor','fedoraHatClipPath','width25','buttonLinkPadding','textAlignCenter');
    }
    for (var i=0;i<rockAndRollAlbum1Information.length;i++){
        var rockAndRollAlbumLi = document.createElement("li");
        var rockAndRollAlbumP = document.createElement("p");
        rockAndRollAlbumLi.appendChild(rockAndRollAlbumP);
        document.querySelector("#rockAndRollRecords div ul").appendChild(rockAndRollAlbumLi);
        rockAndRollAlbumP.innerHTML=rockAndRollAlbum1Information[i];
    }
    for (var i=0;i<rockAndRollAlbum2Information.length;i++){
        var rockAndRollAlbumLi = document.createElement("li");
        var rockAndRollAlbumP = document.createElement("p");
        rockAndRollAlbumLi.appendChild(rockAndRollAlbumP);
        document.querySelector("#rockAndRollRecords div:nth-of-type(2) ul").appendChild(rockAndRollAlbumLi);
        rockAndRollAlbumP.innerHTML=rockAndRollAlbum2Information[i];
    }
    for (var i=0;i<rockAndRollAlbum3Information.length;i++){
        var rockAndRollAlbumLi = document.createElement("li");
        var rockAndRollAlbumP = document.createElement("p");
        rockAndRollAlbumLi.appendChild(rockAndRollAlbumP);
        document.querySelector("#rockAndRollRecords div:nth-of-type(3) ul").appendChild(rockAndRollAlbumLi);
        rockAndRollAlbumP.innerHTML=rockAndRollAlbum3Information[i];
    }
    for (var i=0;i<rockAndRollAlbum4Information.length;i++){
        var rockAndRollAlbumLi = document.createElement("li");
        var rockAndRollAlbumP = document.createElement("p");
        rockAndRollAlbumLi.appendChild(rockAndRollAlbumP);
        document.querySelector("#rockAndRollRecords div:last-of-type ul").appendChild(rockAndRollAlbumLi);
        rockAndRollAlbumP.innerHTML=rockAndRollAlbum4Information[i];
    }
    var myFullMod5 = $('#myFullMod5').fullmod();
    var myFullMod6 = $('#myFullMod6').fullmod();
    var myFullMod7 = $('#myFullMod7').fullmod();
    var myFullMod8 = $('#myFullMod8').fullmod();
    $('#rockAndRollRecords div:eq(0) a').click(function(){
        myFullMod5.show()
    });
    $('#rockAndRollRecords div:eq(1) a').click(function(){
        myFullMod6.show()
    });
    $('#rockAndRollRecords div:eq(2) a').click(function(){
        myFullMod7.show()
    });
    $('#rockAndRollRecords div:last a').click(function(){
        myFullMod8.show()
    });
    var rhythmAndBluesAlbumImages = new Array("file:///D:/MarkoStojanovicSinatraRecords/assets/img/setTheNightToMusic.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/backToBasics.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/spiritInTheDark.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/yourHeartsInGoodHands.jpg");
    var rhythmAndBluesAlbumLabels = new Array(`"Set the Night to Music"`,`"Back to Basics"`,`"Spirit in the Dark"`,`"Your Heart's in Good Hands"`);
    var rhythmAndBluesAlbum1Information = new Array(`Roberta Flack`,`Set the Night to Music`,`Sinatra Records`);
    var rhythmAndBluesAlbum2Information = new Array(`Christina Aguilera`,`Back to Basics`,`Sinatra Records`);
    var rhythmAndBluesAlbum3Information = new Array(`Aretha Franklin`,`Spirit in the Dark`,`Atlantic`);
    var rhythmAndBluesAlbum4Information = new Array(`Al Green`,`Your Heart's in Good Hands`,`MCA Records`);
    for (var i=0;i<rhythmAndBluesAlbumImages.length;i++){
        var rhythmAndBluesAlbumImage = document.createElement("img");
        var rhythmAndBluesAlbum = document.createElement("div");
        var rhythmAndBluesAlbumInformationList = document.createElement("ul");
        var rhythmAndBluesAlbumA = document.createElement("a");
        rhythmAndBluesAlbum.appendChild(rhythmAndBluesAlbumImage);
        rhythmAndBluesAlbum.appendChild(rhythmAndBluesAlbumInformationList);
        rhythmAndBluesAlbum.appendChild(rhythmAndBluesAlbumA);
        document.querySelector("#rhythmAndBluesRecords").appendChild(rhythmAndBluesAlbum);
        document.querySelectorAll("#rhythmAndBluesRecords div img")[i].src=rhythmAndBluesAlbumImages[i];
        document.querySelectorAll("#rhythmAndBluesRecords div img")[i].alt=rhythmAndBluesAlbumLabels[i];
        document.querySelectorAll("#rhythmAndBluesRecords div")[i].classList.add('blueBackground','displayFlex','flexDirectionColumn','alignItemsCenter','albumWidth','laptopWidth45','albumMargin','mobileWidth95','bottomBorderRadius');
        document.querySelectorAll("#rhythmAndBluesRecords div ul")[i].classList.add('displayFlex','flexDirectionColumn','alignItemsCenter','whiteColor'); 
        document.querySelectorAll("#rhythmAndBluesRecords div a")[i].innerHTML = "Find out!";
        document.querySelectorAll("#rhythmAndBluesRecords div a")[i].classList.add('whiteBackground','blueColor','fedoraHatClipPath','width25','buttonLinkPadding','textAlignCenter');
    }
    for (var i=0;i<rhythmAndBluesAlbum1Information.length;i++){
        var rhythmAndBluesAlbumLi = document.createElement("li");
        var rhythmAndBluesAlbumP = document.createElement("p");
        rhythmAndBluesAlbumLi.appendChild(rhythmAndBluesAlbumP);
        document.querySelector("#rhythmAndBluesRecords div ul").appendChild(rhythmAndBluesAlbumLi);
        rhythmAndBluesAlbumP.innerHTML=rhythmAndBluesAlbum1Information[i];
    }
    for (var i=0;i<rhythmAndBluesAlbum2Information.length;i++){
        var rhythmAndBluesAlbumLi = document.createElement("li");
        var rhythmAndBluesAlbumP = document.createElement("p");
        rhythmAndBluesAlbumLi.appendChild(rhythmAndBluesAlbumP);
        document.querySelector("#rhythmAndBluesRecords div:nth-of-type(2) ul").appendChild(rhythmAndBluesAlbumLi);
        rhythmAndBluesAlbumP.innerHTML=rhythmAndBluesAlbum2Information[i];
    }
    for (var i=0;i<rhythmAndBluesAlbum3Information.length;i++){
        var rhythmAndBluesAlbumLi = document.createElement("li");
        var rhythmAndBluesAlbumP = document.createElement("p");
        rhythmAndBluesAlbumLi.appendChild(rhythmAndBluesAlbumP);
        document.querySelector("#rhythmAndBluesRecords div:nth-of-type(3) ul").appendChild(rhythmAndBluesAlbumLi);
        rhythmAndBluesAlbumP.innerHTML=rhythmAndBluesAlbum3Information[i];
    }
    for (var i=0;i<rhythmAndBluesAlbum4Information.length;i++){
        var rhythmAndBluesAlbumLi = document.createElement("li");
        var rhythmAndBluesAlbumP = document.createElement("p");
        rhythmAndBluesAlbumLi.appendChild(rhythmAndBluesAlbumP);
        document.querySelector("#rhythmAndBluesRecords div:last-of-type ul").appendChild(rhythmAndBluesAlbumLi);
        rhythmAndBluesAlbumP.innerHTML=rhythmAndBluesAlbum4Information[i];
    }
    var myFullMod9 = $('#myFullMod9').fullmod();
    var myFullMod10 = $('#myFullMod10').fullmod();
    var myFullMod11 = $('#myFullMod11').fullmod();
    var myFullMod12 = $('#myFullMod12').fullmod();
    $('#rhythmAndBluesRecords div:eq(0) a').click(function(){
        myFullMod9.show()
    });
    $('#rhythmAndBluesRecords div:eq(1) a').click(function(){
        myFullMod10.show()
    });
    $('#rhythmAndBluesRecords div:eq(2) a').click(function(){
        myFullMod11.show()
    });
    $('#rhythmAndBluesRecords div:last a').click(function(){
        myFullMod12.show()
    });
    var traditionalPopAlbumImages = new Array("file:///D:/MarkoStojanovicSinatraRecords/assets/img/howDoesThatGrabYou.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/weAreInLove.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/seattle.jpg","file:///D:/MarkoStojanovicSinatraRecords/assets/img/classicSongsMyWay.jpg");
    var traditionalPopAlbumLabels = new Array(`"How Does That Grab You?"`,`"We Are in Love"`,`"Seattle"`,`"Classic Songs, My Way"`);
    var traditionalPopAlbum1Information = new Array(`Nancy Sinatra`,`How Does That Grab You?`,`Sinatra Records`);
    var traditionalPopAlbum2Information = new Array(`Harry Connick Junior`,`We Are in Love`,`Sinatra Records`);
    var traditionalPopAlbum3Information = new Array(`Perry Como`,`Seattle`,`RCA Victor`);
    var traditionalPopAlbum4Information = new Array(`Paul Anka`,`Classic Songs, My Way`,`Sinatra Records`);
    for (var i=0;i<traditionalPopAlbumImages.length;i++){
        var traditionalPopAlbumImage = document.createElement("img");
        var traditionalPopAlbum = document.createElement("div");
        var traditionalPopAlbumInformationList = document.createElement("ul");
        var traditionalPopAlbumA = document.createElement("a");
        traditionalPopAlbum.appendChild(traditionalPopAlbumImage);
        traditionalPopAlbum.appendChild(traditionalPopAlbumInformationList);
        traditionalPopAlbum.appendChild(traditionalPopAlbumA);
        document.querySelector("#traditionalPopRecords").appendChild(traditionalPopAlbum);
        document.querySelectorAll("#traditionalPopRecords div img")[i].src=traditionalPopAlbumImages[i];
        document.querySelectorAll("#traditionalPopRecords div img")[i].alt=traditionalPopAlbumLabels[i];
        document.querySelectorAll("#traditionalPopRecords div")[i].classList.add('whiteBackground','displayFlex','flexDirectionColumn','alignItemsCenter','albumWidth','laptopWidth45','albumMargin','mobileWidth95','bottomBorderRadius');
        document.querySelectorAll("#traditionalPopRecords div ul")[i].classList.add('displayFlex','flexDirectionColumn','alignItemsCenter','blueColor'); 
        document.querySelectorAll("#traditionalPopRecords div a")[i].innerHTML = "Find out!";
        document.querySelectorAll("#traditionalPopRecords div a")[i].classList.add('blueBackground','whiteColor','fedoraHatClipPath','width25','buttonLinkPadding','textAlignCenter');
    }
    for (var i=0;i<traditionalPopAlbum1Information.length;i++){
        var traditionalPopAlbumLi = document.createElement("li");
        var traditionalPopAlbumP = document.createElement("p");
        traditionalPopAlbumLi.appendChild(traditionalPopAlbumP);
        document.querySelector("#traditionalPopRecords div ul").appendChild(traditionalPopAlbumLi);
        traditionalPopAlbumP.innerHTML=traditionalPopAlbum1Information[i];
    }
    for (var i=0;i<traditionalPopAlbum2Information.length;i++){
        var traditionalPopAlbumLi = document.createElement("li");
        var traditionalPopAlbumP = document.createElement("p");
        traditionalPopAlbumLi.appendChild(traditionalPopAlbumP);
        document.querySelector("#traditionalPopRecords div:nth-of-type(2) ul").appendChild(traditionalPopAlbumLi);
        traditionalPopAlbumP.innerHTML=traditionalPopAlbum2Information[i];
    }
    for (var i=0;i<traditionalPopAlbum3Information.length;i++){
        var traditionalPopAlbumLi = document.createElement("li");
        var traditionalPopAlbumP = document.createElement("p");
        traditionalPopAlbumLi.appendChild(traditionalPopAlbumP);
        document.querySelector("#traditionalPopRecords div:nth-of-type(3) ul").appendChild(traditionalPopAlbumLi);
        traditionalPopAlbumP.innerHTML=traditionalPopAlbum3Information[i];
    }
    for (var i=0;i<traditionalPopAlbum4Information.length;i++){
        var traditionalPopAlbumLi = document.createElement("li");
        var traditionalPopAlbumP = document.createElement("p");
        traditionalPopAlbumLi.appendChild(traditionalPopAlbumP);
        document.querySelector("#traditionalPopRecords div:last-of-type ul").appendChild(traditionalPopAlbumLi);
        traditionalPopAlbumP.innerHTML=traditionalPopAlbum4Information[i];
    }
    var myFullMod13 = $('#myFullMod13').fullmod();
    var myFullMod14 = $('#myFullMod14').fullmod();
    var myFullMod15 = $('#myFullMod15').fullmod();
    var myFullMod16 = $('#myFullMod16').fullmod();
    $('#traditionalPopRecords div:eq(0) a').click(function(){
        myFullMod13.show()
    });
    $('#traditionalPopRecords div:eq(1) a').click(function(){
        myFullMod14.show()
    });
    $('#traditionalPopRecords div:eq(2) a').click(function(){
        myFullMod15.show()
    });
    $('#traditionalPopRecords div:last a').click(function(){
        myFullMod16.show()
    });
    function generatingExpandingList() {
        for (var i=1;i<=(jazzAlbumLabels+rockAndRollAlbumLabels+rhythmAndBluesAlbumLabels+traditionalPopAlbumLabels).length;i++){
            $(`#myFullMod${i}>.fullmod-content>.fullmod-body>div>ul>li>ul`).hide().click(function(e){e.stopPropagation();});
            $(`#myFullMod${i}>.fullmod-content>.fullmod-body>div>ul>li`).hover(
                function(){$(this).find('ul').slideDown();
                },function(){$(this).find('ul').slideUp();}
            )
        }
    }
    generatingExpandingList();
}
if(window.location=='file:///D:/MarkoStojanovicSinatraRecords/contact.html'){
    document.getElementById("userReasonForContact").addEventListener("click",function(){
        if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==1 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==2 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==3){
            document.getElementById("partnership").classList.add("displayFlex");
            document.getElementById("meeting").classList.add("displayFlex");
            document.getElementById("userPartner").addEventListener("click",function(){
                if(document.getElementById("userPartner").options[document.getElementById("userPartner").selectedIndex].value==2){
                document.querySelector("#partnership div").classList.remove("width100");
                document.getElementById("nameOfTheCompany").classList.add("displayFlex");
                }
                else {
                    document.getElementById("nameOfTheCompany").classList.remove("displayFlex");
                    document.querySelector("#partnership div").classList.add("width100");
                }
            })
            document.getElementById("desiredFormat").classList.remove("displayFlex");
            document.getElementById("homeAddress").classList.remove("displayFlex");
            document.getElementById("complain").classList.remove("displayFlex");
        }
        else if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==4 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==5 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==6 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==7 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==8 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==9 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==10 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==11 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==12 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==13 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==14 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==15 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==16 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==17 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==18 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==19){
            document.getElementById("partnership").classList.remove("displayFlex");
            document.getElementById("meeting").classList.remove("displayFlex");
            document.getElementById("desiredFormat").classList.add("displayFlex");
            document.getElementById("homeAddress").classList.add("displayFlex");
            document.getElementById("complain").classList.remove("displayFlex");
            if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==5 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==11 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==14 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==15  || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==16  || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==17  || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==19){
                document.getElementById("userAlbumFormat").options[1].setAttribute("disabled",true);
                document.getElementById("userAlbumFormat").options[1].text="Vinyl (the format is not available for a particular album)";
                document.getElementById("userAlbumFormat").options[2].removeAttribute("disabled");
                document.getElementById("userAlbumFormat").options[2].text="Compact disc";
            }
            else if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==18){
                document.getElementById("userAlbumFormat").options[1].removeAttribute("disabled");
                document.getElementById("userAlbumFormat").options[1].text="Vinyl";
                document.getElementById("userAlbumFormat").options[2].setAttribute("disabled",true);
                document.getElementById("userAlbumFormat").options[2].text="Compact disc (the format is not available for a particular album)";
            }
            else {
                document.getElementById("userAlbumFormat").options[1].removeAttribute("disabled");
                document.getElementById("userAlbumFormat").options[1].text="Vinyl";
                document.getElementById("userAlbumFormat").options[2].removeAttribute("disabled");
                document.getElementById("userAlbumFormat").options[2].text="Compact disc";
            }
        }
        else if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==20){
            document.getElementById("partnership").classList.remove("displayFlex");
            document.getElementById("meeting").classList.remove("displayFlex");
            document.getElementById("desiredFormat").classList.remove("displayFlex");
            document.getElementById("homeAddress").classList.remove("displayFlex");
            document.getElementById("complain").classList.add("displayFlex");
        }
        else {
            document.getElementById("partnership").classList.remove("displayFlex");
            document.getElementById("meeting").classList.remove("displayFlex");
            document.getElementById("desiredFormat").classList.remove("displayFlex");
            document.getElementById("homeAddress").classList.remove("displayFlex");
            document.getElementById("complain").classList.remove("displayFlex");
        }
    })
    function contactFormChecking() {
        var namePattern = /^[A-ZČĆŽŠĐ][A-zČĆŽŠĐčćžšđ]+([ ][A-ZČĆŽŠĐ][A-zČĆŽŠĐčćžšđ]+)*$/;
        var emailPattern = /^[A-z0-9]([.]?[A-z0-9]){5,29}[@][a-z0-9]{2,}([.][a-z0-9]{2,})+$/;
        var companyPattern = /^[A-ZČĆŽŠĐ0-9]+([ ]?[A-zČĆŽŠĐčćžšđ0-9])+$/;
        var addressPattern = /^[[123456789][0-9]*([/]([a-zčćžšđ]|([123456789][0-9]*)))*([ ][A-ZČĆŽŠĐ][A-zčćžšđ]*){3,}$/;
        if (document.getElementById("userFirstName").value==''){
            document.getElementById("firstNameMessage").innerHTML="This field must not remain empty!";
            document.getElementById("firstNameMessage").classList.remove('greenColor');
            document.getElementById("firstNameMessage").classList.add('redColor');
        }
        else if(namePattern.test(document.getElementById("userFirstName").value)){
            document.getElementById("firstNameMessage").innerHTML="You have filled in this field correctly!";
            document.getElementById("firstNameMessage").classList.remove('redColor');
            document.getElementById("firstNameMessage").classList.add('greenColor');
        }
        else {
            document.getElementById("firstNameMessage").innerHTML="You have not filled in this field correctly! For example: Al George";
            document.getElementById("firstNameMessage").classList.remove('greenColor');
            document.getElementById("firstNameMessage").classList.add('redColor');
        }
        if (document.getElementById("userLastName").value==''){
            document.getElementById("lastNameMessage").innerHTML="This field must not remain empty!";
            document.getElementById("lastNameMessage").classList.remove('greenColor');
            document.getElementById("lastNameMessage").classList.add('redColor');
        }
        else if(namePattern.test(document.getElementById("userLastName").value)){
            document.getElementById("lastNameMessage").innerHTML="You have filled in this field correctly!";
            document.getElementById("lastNameMessage").classList.remove('redColor');
            document.getElementById("lastNameMessage").classList.add('greenColor');
        }
        else {
            document.getElementById("lastNameMessage").innerHTML="You have not filled in this field correctly! For example: Francis McCartney";
            document.getElementById("lastNameMessage").classList.remove('greenColor');
            document.getElementById("lastNameMessage").classList.add('redColor');
        }
        if (document.getElementById("userEmailAddress").value==''){
            document.getElementById("emailMessage").innerHTML="This field must not remain empty!";
            document.getElementById("emailMessage").classList.remove('greenColor');
            document.getElementById("emailMessage").classList.add('redColor');
        }
        else if(emailPattern.test(document.getElementById("userEmailAddress").value)){
            document.getElementById("emailMessage").innerHTML="You have filled in this field correctly!";
            document.getElementById("emailMessage").classList.remove('redColor');
            document.getElementById("emailMessage").classList.add('greenColor');
        }
        else {
            document.getElementById("emailMessage").innerHTML="You have not filled in this field correctly! For example: Ed.McMahon.123@3mail.co.us";
            document.getElementById("emailMessage").classList.remove('greenColor');
            document.getElementById("emailMessage").classList.add('redColor');
        }
        if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==0){
            document.getElementById("reasonForContactMessage").innerHTML="You have not selected a reason for contact! For example: Strangers in the Night";
            document.getElementById("reasonForContactMessage").classList.remove('greenColor');
            document.getElementById("reasonForContactMessage").classList.add('redColor');
        }
        else if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==1 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==2 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==3){
            document.getElementById("reasonForContactMessage").innerHTML="You have selected a reason for contact correctly!";
            document.getElementById("reasonForContactMessage").classList.remove('redColor');
            document.getElementById("reasonForContactMessage").classList.add('greenColor');
            if(document.getElementById("userPartner").options[document.getElementById("userPartner").selectedIndex].value==0){
                document.getElementById("partnerMessage").innerHTML="You have not selected your current status correctly! For example: Record company";
                document.getElementById("partnerMessage").classList.remove('greenColor');
                document.getElementById("partnerMessage").classList.add('redColor');
            }
            else if(document.getElementById("userPartner").options[document.getElementById("userPartner").selectedIndex].value==2){
                document.getElementById("partnerMessage").innerHTML="You have selected your current status correctly!";
                document.getElementById("partnerMessage").classList.remove('redColor');
                document.getElementById("partnerMessage").classList.add('greenColor');
                if(document.getElementById("userCompany").value==''){
                    document.getElementById("companyMessage").innerHTML="This field must not remain empty!";
                    document.getElementById("companyMessage").classList.remove('greenColor');
                    document.getElementById("companyMessage").classList.add('redColor');
                }
                else if(companyPattern.test(document.getElementById("userCompany").value)){
                    document.getElementById("companyMessage").innerHTML="You have filled in this field correctly!";
                    document.getElementById("companyMessage").classList.remove('redColor');
                    document.getElementById("companyMessage").classList.add('greenColor');
                }
                else {
                    document.getElementById("companyMessage").innerHTML="You have not filled in this field correctly! For example: 7Up";
                    document.getElementById("companyMessage").classList.remove('greenColor');
                    document.getElementById("companyMessage").classList.add('redColor');
                }
            }
            else {
                document.getElementById("partnerMessage").innerHTML="You have selected your current status correctly!";
                document.getElementById("partnerMessage").classList.remove('redColor');
                document.getElementById("partnerMessage").classList.add('greenColor');
            }
            if(document.getElementById("userDateOfTheMeeting").value==''){
                document.getElementById("dateOfTheMeetingMessage").innerHTML="You have not picked the desired date of the meeting! For example: 12/31/2020";
                document.getElementById("dateOfTheMeetingMessage").classList.remove('greenColor');
                document.getElementById("dateOfTheMeetingMessage").classList.add('redColor');
            }
            else {
                document.getElementById("dateOfTheMeetingMessage").innerHTML="You have picked the desired date of the meeting correctly!";
                document.getElementById("dateOfTheMeetingMessage").classList.remove('redColor');
                document.getElementById("dateOfTheMeetingMessage").classList.add('greenColor');
            }
            if(document.getElementById("userTimeOfTheMeeting").value==''){
                document.getElementById("timeOfTheMeetingMessage").innerHTML="You have not picked the desired time of the meeting! For example: 11:05 AM";
                document.getElementById("timeOfTheMeetingMessage").classList.remove('greenColor');
                document.getElementById("timeOfTheMeetingMessage").classList.add('redColor');
            }
            else {
                document.getElementById("timeOfTheMeetingMessage").innerHTML="You have picked the desired time of the meeting correctly!";
                document.getElementById("timeOfTheMeetingMessage").classList.remove('redColor');
                document.getElementById("timeOfTheMeetingMessage").classList.add('greenColor');
            }
        }
        else if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==4 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==5 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==6 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==7 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==8 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==9 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==10 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==11 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==12 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==13 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==14 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==15 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==16 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==17 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==18 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==19){
            document.getElementById("reasonForContactMessage").innerHTML="You have selected a reason for contact correctly!";
            document.getElementById("reasonForContactMessage").classList.remove('redColor');
            document.getElementById("reasonForContactMessage").classList.add('greenColor');
            if(document.getElementById("userAlbumFormat").options[document.getElementById("userAlbumFormat").selectedIndex].value==0){
                document.getElementById("albumFormatMessage").innerHTML="You have not selected the desired format of a album! For example: Vinyl";
                document.getElementById("albumFormatMessage").classList.remove('greenColor');
                document.getElementById("albumFormatMessage").classList.add('redColor');
            }
            else {
                document.getElementById("albumFormatMessage").innerHTML="You have selected the desired format of a album correctly!";
                document.getElementById("albumFormatMessage").classList.remove('redColor');
                document.getElementById("albumFormatMessage").classList.add('greenColor');
            }
            if(document.getElementById("userAddress").value==''){
                document.getElementById("addressMessage").innerHTML="This field must not remain empty!";
                document.getElementById("addressMessage").classList.remove('greenColor');
                document.getElementById("addressMessage").classList.add('redColor');
            }
            else if(addressPattern.test(document.getElementById("userAddress").value)){
                document.getElementById("addressMessage").innerHTML="You have filled in this field correctly!";
                document.getElementById("addressMessage").classList.remove('redColor');
                document.getElementById("addressMessage").classList.add('greenColor');
            }
            else {
                document.getElementById("addressMessage").innerHTML="You have not filled in this field correctly! For example: 15/c Fifth Avenue Ottawa Canada";
                document.getElementById("addressMessage").classList.remove('greenColor');
                document.getElementById("addressMessage").classList.add('redColor');
            }
        }
        else if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==20){
            document.getElementById("reasonForContactMessage").innerHTML="You have selected a reason for contact correctly!";
            document.getElementById("reasonForContactMessage").classList.remove('redColor');
            document.getElementById("reasonForContactMessage").classList.add('greenColor');
            if(document.getElementById("userReasonForComplain").options[document.getElementById("userReasonForComplain").selectedIndex].value==0){
                document.getElementById("reasonForComplainMessage").innerHTML="You have not selected the reason for complain! For example: Sound problem";
                document.getElementById("reasonForComplainMessage").classList.remove('greenColor');
                document.getElementById("reasonForComplainMessage").classList.add('redColor');
            }
            else {
                document.getElementById("reasonForComplainMessage").innerHTML="You have selected the reason for complain correctly!";
                document.getElementById("reasonForComplainMessage").classList.remove('redColor');
                document.getElementById("reasonForComplainMessage").classList.add('greenColor');
            }
        }
        else if(document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==21 || document.getElementById("userReasonForContact").options[document.getElementById("userReasonForContact").selectedIndex].value==22){
            document.getElementById("reasonForContactMessage").innerHTML="You have selected a reason for contact correctly!";
            document.getElementById("reasonForContactMessage").classList.remove('redColor');
            document.getElementById("reasonForContactMessage").classList.add('greenColor');
            if(document.getElementById("userDescription").value==''){
                document.getElementById("descriptionMessage").innerHTML="This field must not remain empty!";
                document.getElementById("descriptionMessage").classList.remove('greenColor');
                document.getElementById("descriptionMessage").classList.add('redColor');
            }
            else {
                document.getElementById("descriptionMessage").innerHTML="You have filled in this field correctly!";
                document.getElementById("descriptionMessage").classList.remove('redColor');
                document.getElementById("descriptionMessage").classList.add('greenColor');
            }
        }
        return false;
    }
}
$(function() {
    var doc = $(document);
    var fadeElement = $('.fadeScroll');
    doc.on('scroll',function(){
        var currentScrollPosition = doc.scrollTop();
        fadeElement.each(function(){
            var $this = $(this);
            var elementOffsetTop = $this.offset().top;
            if(currentScrollPosition>elementOffsetTop) $this.css('opacity',1-(currentScrollPosition-elementOffsetTop)/400);
        })
    })
})
var authorMod = $('#authorMod').fullmod();
$('#bottomLinkList li:last a').click(function(){
    authorMod.show();
});
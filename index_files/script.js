window.addEventListener('load', function() {
    let tinggiCircle = document.getElementById('cirexp1').offsetHeight;

    let tinggiText1 = document.getElementById('exp1').offsetHeight;
    let tinggiText2 = document.getElementById('exp2').offsetHeight;
    let tinggiText3 = document.getElementById('exp3').offsetHeight;
    let tinggiText4 = document.getElementById('edu1').offsetHeight;
    let tinggiText5 = document.getElementById('edu2').offsetHeight;

    let target1 = document.getElementById('cirexp1');
    let target2 = document.getElementById('cirexp2');
    let target3 = document.getElementById('cirexp3');
    let target4 = document.getElementById('ciredu1');
    let target5 = document.getElementById('barstepperedu');

    let gap1 = tinggiText1 - tinggiCircle;
    let gap2 = tinggiText2 - tinggiCircle;
    let gap3 = tinggiText3 - tinggiCircle;
    let gap4 = tinggiText4 - tinggiCircle;

    let panjangprogress2 = tinggiText4+tinggiText5;

    target1.style.marginBottom = gap1 + 'px';
    target2.style.marginBottom = gap2 + 'px';
    target3.style.marginBottom = gap3 + 'px';
    target4.style.marginBottom = gap4 + 'px';
    target5.style.height = panjangprogress2 + 'px';


});
console.log(
  "%cWhat the f*ck do you think you're doing, bro??!!!", 
  "color: red; font-size: 18px; font-weight: bold; background: black; padding: 8px; border-radius: 4px;"
);
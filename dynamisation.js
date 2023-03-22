function showSection1() {
        section1.hidden = false;
        section2.hidden = true;
        section3.hidden = true;
        section4.hidden = true;
};
function showSection2() {
        section1.hidden = true;
        section2.hidden = false;
        section3.hidden = true;
        section4.hidden = true;
};
function showSection3() {
        section1.hidden = true;
        section2.hidden = true;
        section3.hidden = false;
        section4.hidden = true;
};
function showSection4() {
        section1.hidden = true;
        section2.hidden = true;
        section3.hidden = true;
        section4.hidden = false;
};

window.onload = function () {
        section1 = document.getElementById("sec-bceb");
        section2 = document.getElementById("sec-e50a");
        section3 = document.getElementById("carousel_0cf7");
        section4 = document.getElementById("sec-127f");

        button1 = document.getElementById("button1");
        button2 = document.getElementById("button2");
        button3 = document.getElementById("button3");
        button4 = document.getElementById("button4");

        button1.addEventListener('click',showSection1);
        button2.addEventListener('click',showSection2);
        button3.addEventListener('click',showSection3);
        button4.addEventListener('click',showSection4);

        
};
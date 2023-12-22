// var msg=document.querySelector("#likes1")

var msg = document.querySelector('#likes1');
var msg1 = document.querySelector('#likes2');
var msg2 = document.querySelector('#likes3');
function likes(e) {
    if (e == 1) {
        msg.innerText++;
    }
    else if (e == 2) {
        msg1.innerText++;
    }
    else if (e == 3) {
        msg2.innerText++;
    }
}


const article = document.getElementById('post');

console.log(article);

var btnLike = document.getElementsByClassName('btn_like');

console.log(btnLike[0]);

var likeInfo = document.getElementsByClassName('like_info');

var clike_count = 0;

function likeUp(e) {
    clike_count++;
    likeInfo[0].innerHTML = `<h5><strong>Like ${clike_count}</strong></h5>`;
    console.log(likeInfo[0]);
}

//btnLike[0].addEventListener('click', likeUp);

Array.from(btnLike).forEach(element => {
    element.addEventListener('click', likeUp);
}); //ES 6 version add Event Listener by get the className

var btnComment = document.getElementsByClassName('btn_comment');

var commnetPlace = document.getElementsByClassName('commnet_input_place');

function gotoCommnet() {
    commnetPlace[0].focus();
}

//btnComment.addEventListener('click', commnetWindow);

Array.from(btnComment).forEach(element => {
    element.addEventListener('click', gotoCommnet);
}); //ES 6 version add Event Listener by get the className

var btnShare = document.getElementsByClassName('btn_share');

var dummy = document.getElementById('dummy');

var overlay = document.getElementById('overlay');

var backplace = document.getElementById('backplace');

var body = document.getElementsByTagName('body');

body[0].addEventListener('click', (e) => {
    var id = e.target.getAttribute('id');
    if(id === 'backplace') {
        turnOn();
    }
    else if(id === 'text') {
        turnOn();
    }
});

dummy.innerHTML = overlayTemplate();

overlay = document.getElementById('overlay');

overlay.addEventListener('click', turnOff);

backplace = document.getElementById('backplace');

backplace.addEventListener('click', () => {
    console.log('Hello!');
});

function shareEvent(e) {
    if(overlay === null) {
        console.log('in the if');
        overlay = document.getElementById('overlay');
        overlay.addEventListener('click', turnOff(overlay));
    }
    if(overlay.style.display === "block") {
        turnOff();
    }
    else {
        turnOn();
    }
}

Array.from(btnShare).forEach(element => {
    element.addEventListener('click', shareEvent);
});

function turnOn() {
    overlay.style.display = "block";
}

function turnOff() {
    overlay.style.display = "none";
}

function overlayTemplate () {
    return `
    <div id="overlay">
        <div id="backplace" style="block">
            <p id="text">This is overlay</p>
        </div>
    </div>`;
}


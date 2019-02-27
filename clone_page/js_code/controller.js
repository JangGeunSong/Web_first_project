const article = document.getElementById('post');

console.log(article);

var btnLike = document.getElementsByClassName('btn_like');

console.log(btnLike[0]);

console.log(btnLike);

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

function shareEvent() {
    
}

Array.from(btnShare).forEach(element => {
    element.addEventListener('click', shareEvent);
});
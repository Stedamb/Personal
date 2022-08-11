var workBox = document.getElementById('work');
var socialBox = document.getElementById('social');
var artBox = document.getElementById('other');


workBox.onclick = function() {
    workBox.innerHTML = '';
    workBox.style.backgroundImage = "url('./res/github.png')";
    workBox.style.backgroundSize = "500px";
    workBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  location.href = "http://github.com/Stedamb"; }, 1000);
}

socialBox.onclick = function() {
    socialBox.innerHTML = '';
    socialBox.style.backgroundImage = "url('./res/insta.png')";
    socialBox.style.backgroundSize = "500px";
    socialBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  location.href = "https://www.instagram.com/ste_dambrosio/"; }, 1000);
}

artBox.onclick = function() {
    artBox.innerHTML = '';
    artBox.style.backgroundImage = "url('./res/pinterest.jpg')";
    artBox.style.backgroundSize = "500px";
    artBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  location.href = "https://www.pinterest.it/stefanodambrosio/"; }, 1000);
}

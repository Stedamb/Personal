var workBox = document.getElementById('work');
var socialBox = document.getElementById('social');
var artBox = document.getElementById('other');


workBox.onclick = function() {
    workBox.innerHTML = '';
    workBox.style.backgroundImage = "url('./res/github.png')";
    workBox.style.backgroundSize = "500px";
    workBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  
        location.href = "http://github.com/Stedamb"; 
        workBox.style.backgroundImage = "url('./res/coding.gif')";
        workBox.style.backgroundSize = "auto 400px";
        workBox.style.backgroundBlendMode = "darken";
    }, 1000);
}

socialBox.onclick = function() {
    socialBox.innerHTML = '';
    socialBox.style.backgroundImage = "url('./res/insta.png')";
    socialBox.style.backgroundSize = "500px";
    socialBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  
        location.href = "https://www.instagram.com/ste_dambrosio/";
        socialBox.style.backgroundImage = "url('./res/giphy.gif')";
        socialBox.style.backgroundSize = "auto 400px";
        socialBox.style.backgroundBlendMode = "darken";
    }, 1000);

}

artBox.onclick = function() {
    artBox.innerHTML = '';
    artBox.style.backgroundImage = "url('./res/pinterest.jpg')";
    artBox.style.backgroundSize = "500px";
    artBox.style.backgroundBlendMode = "normal";
    setTimeout(() => {  
        location.href = "https://www.pinterest.it/stefanodambrosio/";
        artBox.style.backgroundImage = "url('./res/pinterest.jpg')";
        artBox.style.backgroundSize = "auto 400px";
        artBox.style.backgroundBlendMode = "normal";
    }, 1000);
}

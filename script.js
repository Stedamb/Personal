var workBox = document.getElementById('work');


workBox.onclick = function() {
    console.log('Clicked');
    workBox.innerHTML = '';
    workBox.style.backgroundImage = "url('./res/github.png')";
    setTimeout(() => {  location.href = "http://github.com/Stedamb"; }, 1000);


}

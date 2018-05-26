console.log('sanitycheck');

//using query selector
/*var test = document.querySelectorAll('.test');
for(var i = 0; i<test.length; i++){
    test[i].innerHTML = 'hello again';    
}
*/

function getGif(){
var data = JSON.parse(this.responseText);
    //console.log(data.data[0].images.downsized.url);
    for(var i = 0; i<data.data.length; i++){
        //console.log(data.data[i].images.downsized.url);
        var image = document.createElement('img');
        image.src = data.data[i].images.downsized.url;
        images.appendChild(image);
    }
}

//var input = document.querySelector('#inputSec');
var input = document.getElementById('inputSec').value;
var link = 'http://api.giphy.com/v1/gifs/search?q='+input+"&api_key=xOPmGbJ95Q9dUHWbCE6UaH80YpBBH5KH";

var req = new XMLHttpRequest();
req.open("GET", link);
req.send();
req.addEventListener('load', getGif);

var button = document.querySelector('#inputBtn');
button.addEventListener('click', getGif);


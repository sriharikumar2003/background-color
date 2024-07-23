var arr = ["red","green","blue","pink","yellow","orange","white","violet","darkblue"];
var screen = document.getElementsByClassName("back")[0];
var button = document.getElementsByTagName("button")[0];
var text = document.getElementsByClassName("center")[0];
function changeColor(key){
    var num = (Math.random() * 9);
    var val = Math.floor(num);
   screen.style.backgroundColor = arr[val];
   text.textContent = "Background color: " +arr[val];
}
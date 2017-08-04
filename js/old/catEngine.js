var cat = function(name,image){
  this.name = name;
  this.img = image;
  this.count = 0;
  this.clickBoardText= "";
}




var fester = new cat("Fester", "img/cat-1.jpg");
var chewie = new cat("Chewie", "img/cat-2.jpg");
var dizzee = new cat("Dizzee", "img/cat-3.jpg");
var tiddles = new cat("Tiddles", "img/cat-4.jpg");
var buster = new cat("Buster", "img/cat-5.jpg");
var snowflake = new cat("Snowflake", "img/cat-6.jpg");

var catsArray = [fester, chewie, dizzee, tiddles, buster, snowflake];

// for(var i = 0; i < catsArray.length; i++){
//   document.getElementById("cat" + i).innerHTML = catsArray[i].name;
//   document.getElementById('cat-image-1').src = fester.img;
// }

document.getElementById('cat1').innerHTML = fester.name;
document.getElementById('cat-image-1').src = fester.img;

var list = document.getElementById('list-container').appendChild(document.createElement('ul'));
for(var i = 0; i < catsArray.length; i++){
  var listItem = list.appendChild(document.createElement('li'));
  listItem.innerHTML = catsArray[i].name;

  listItem.addEventListener('click', (function(copyListItem){
    return function(){
      for(var i = 0; i < catsArray.length; i++){
        catsArray[i].count = 0;
        catsArray[i].clickBoardText.innerHTML = catsArray[i].count + " clicks";
      };
      document.getElementById('cat1').innerHTML = copyListItem.name;
      document.getElementById('cat-image-1').src = copyListItem.img;

  };
  })(catsArray[i]));

};



 for(let i = 0; i < catsArray.length; i++){
  var elem = document.getElementById("cat-image-1");
  catsArray[i].clickBoardText =document.getElementById("click-count-1");
  elem.addEventListener('click', function(){
    catsArray[i].count +=1;
    catsArray[i].clickBoardText.innerHTML = catsArray[i].count + " clicks";
  }, false);
};





// for(let i = 0; i < catsArray.length; i++){
//   var elem = document.getElementById("cat-image-" + (i+1));
//   catsArray[i].clickBoardText =document.getElementById("click-count-"+ (i+1));
//   elem.addEventListener('click', function(){
//     catsArray[i].count +=1;
//     catsArray[i].clickBoardText.innerHTML = catsArray[i].count + " clicks";
//     console.log("Clickboard = " + clickBoard);
//   }, false);
// };






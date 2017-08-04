var model = {
  currentCat: null,

  cats : [
  {
    name: "Fester",
    clickCount: 0,
    url: "img/cat-1.jpg"
  },
   {
    name: "Chewie",
    clickCount: 0,
    url: "img/cat-2.jpg"
  },
   {
    name: "Dizzee",
    clickCount: 0,
    url: "img/cat-3.jpg"
  },
   {
    name: "Tiddles",
    clickCount: 0,
    url: "img/cat-4.jpg"
  },
   {
    name: "Buster",
    clickCount: 0,
    url: "img/cat-5.jpg"
  },
   {
    name: "Snowflake",
    clickCount: 0,
    url: "img/cat-6.jpg"
  }
  ]

}

var octupus = {
  init : function(){
    model.currentCat = model.cats[0];
    listView.catName = model.currentCat.name;
    listView.init();
    catView.init();
  },

  getCats: function(){
    return model.cats;
  },

  getCurrentCat: function(){
    return model.currentCat;
  },

  setCurrentCat: function(newCat){
    model.currentCat = newCat;
  },

  incrementCounter: function() {

    model.currentCat.clickCount+=1;

  }

}



var catView = {
  init: function(){
    var catName = document.getElementById('cat1').textContent;
    var catPic = document.getElementById('cat-image-1');
    var clickCounter = document.getElementById('click-count-1');
    catPic.addEventListener('click', function(){
      octupus.incrementCounter();
      document.getElementById('click-count-1').textContent = octupus.getCurrentCat().clickCount + " clicks";
    });
  },

  render: function(){

    document.getElementById('cat1').textContent = octupus.getCurrentCat().name;
    document.getElementById('cat-image-1').src = octupus.getCurrentCat().url;
    document.getElementById('click-count-1').textContent = octupus.getCurrentCat().clickCount + " clicks";
  }
}


var listView = {

  catName: document.getElementById('cat1').textContent,
  catPic : document.getElementById('cat-image-1'),
  clickCounter : document.getElementById('click-count-1'),

  init: function(){
    var cats = octupus.getCats();
    var list = document.getElementById('list-container').appendChild(document.createElement('ul'));
    for(let i = 0; i < cats.length; i++){
      var listItem = list.appendChild(document.createElement('li'));
      listItem.textContent =  cats[i].name;
      listItem.addEventListener('click',(function(copyOfCat){
          return function(){
            octupus.setCurrentCat(copyOfCat);
            catView.render();
          }
      }(cats[i])));
    };

  }



}


octupus.init();
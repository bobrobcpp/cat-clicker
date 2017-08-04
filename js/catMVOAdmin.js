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
    adminView.init();
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

  updateCatProperties: function(newCat){

    model.currentCat.name = newCat.name;
    model.currentCat.url = newCat.url;
    model.currentCat.clickCount = newCat.clickCount;
  },

  incrementCounter: function() {

    model.currentCat.clickCount+=1;

  }

}

var adminView = {
  init: function(){

    document.getElementById('adminButton').addEventListener('click', function(){
      var form = document.getElementById('adminBox').appendChild(document.createElement('form'));
// Name Label
      var nameLabel = form.appendChild(document.createElement('label'));
      var nameInput = form.appendChild(document.createElement('input'));
      setAttributes(nameLabel, {"for": "name", "class": "aLabel"});
      nameLabel.textContent = "Cats Name";
      setAttributes(nameInput, {"type": "text","id": "name", "class": "aInput", "value": octupus.getCurrentCat().name});
// Url label
      var urlLabel = form.appendChild(document.createElement('label'));
      var urlInput = form.appendChild(document.createElement('input'));
      setAttributes(urlLabel, {"for": "url", "class": "aLabel"});
      urlLabel.textContent = "Image Url";
      setAttributes(urlInput, {"type": "text","id": "url", "class": "aInput", "value": octupus.getCurrentCat().url});
// Click counter label
      var clickLabel = form.appendChild(document.createElement('label'));
      var clickInput = form.appendChild(document.createElement('input'));
      setAttributes(clickLabel, {"for": "clickCat", "class": "aLabel"});
      clickLabel.textContent = "Click Counter";
      setAttributes(clickInput, {"type": "text","id": "clickCat", "class": "aInput", "value": octupus.getCurrentCat().clickCount});
//Add save button
      var saveButton = form.appendChild(document.createElement('button'));
      setAttributes(saveButton, { "id": "saveButton"});
      saveButton.innerHTML = 'Save';
      saveButton.addEventListener('click', function myFunc(){
        var saveName = document.getElementById('name').value;
        var saveUrl = document.getElementById('url').value;
        var saveClickCat = document.getElementById('clickCat').value;
        var adminCat = octupus.getCurrentCat;
        adminCat.name = saveName;
        adminCat.url = saveUrl;
        adminCat.clickCount = saveClickCat;
        octupus.updateCatProperties(adminCat);
        // alert("Here");
      });

//Add cancel button

      var cancelButton = form.appendChild(document.createElement('button'));
      setAttributes(cancelButton, { "id": "cancelButton"});
      cancelButton.innerHTML = 'Cancel';
      // cancelButton.addEventListener('click', function myFunc(){
      //   alert(this);
      // });

      function setAttributes(el, attrs) {
        for(var key in attrs) {
          el.setAttribute(key, attrs[key]);
      }
    }
    });
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
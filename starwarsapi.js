var starWarsPeopleList = document.querySelector('#list1');
var starWarsPeopleList2 = document.querySelector('#list2');
var randomNum;
var p1;
var p2;
var films;


 console.log(randomNum=Math.floor(1+Math.random()*10));

 fetch('https://swapi.co/api/people/?page='+randomNum)
 
    .then(function(response){
        return response.json();
    })
    .then(function(json){
    let people=json.results;

 for(const p of people){// p is the person each "people" is refering to.
 let listItem = document.createElement('button');// this is making a button for each name populated
 listItem.innerHTML= p.name;// this is naming each button the name of each p, or "people"
 listItem.id=p.name;
 listItem.setAttribute('data-films',p.films);
 starWarsPeopleList.appendChild(listItem); 

 listItem.addEventListener('click',revealList);
 function revealList(){
     let filmLink=listItem.dataset;
     filmLink=document.createElement("li");
     filmLink.innerHTML=filmLink.name;
     starWarsPeopleList.appendChild(filmLink);
    }
}})

 
 

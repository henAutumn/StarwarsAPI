var starWarsPeopleList = document.querySelector('#list1');
var randomNum;

var films;


 console.log(randomNum=Math.floor(1+Math.random()*10));

 fetch('https://swapi.co/api/people/?page='+randomNum)
 
    .then(function(response){
        return response.json();
    })
    .then(function(json){
    let people=json.results;

 for(p of people){// p is the person each "people" is refering to.
 let listItem = document.createElement('button');// this is making a button for each name populated
 listItem.innerHTML= p.name;// this is naming each button the name of each p, or "people"

 listItem.setAttribute('data-films',p.films);// this is appending our data films to each of our list items
// var movies=p.films;// this is placing data
 starWarsPeopleList.appendChild(listItem); 

 listItem.addEventListener('click',revealList);
 function revealList(){
     for(var i=0;i<=p.films.length;i++){
     let filmLink=p.films[i];
     filmLink=document.createElement("li"); 
                 
     filmLink.innerHTML=p.films[i];
     let filmTag=document.createElement("a");
     filmTag.setAttribute('href',filmLink.innerHTML);
     filmTag.setAttribute('target','_blank');
     filmTag.appendChild(filmLink);
     starWarsPeopleList.appendChild(filmTag);
    }

   
    }
}})

 
 

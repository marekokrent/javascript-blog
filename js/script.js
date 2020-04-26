 'use strict';

function titleClickHandler(event){
event.preventDefault();
const clickedElement = this; 


/* remove class 'active' from all article links  */
let activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}



/* add class 'active' to the clicked link */

clickedElement.classList.add("active");

/* remove class 'active' from all articles */

let acitiveArticles = document.querySelectorAll('.posts article.active');
for (let activeArticle of acitiveArticles){
  activeArticle.classList.remove('active');
}

/* get 'href' attribute from the clicked link */

let articleSelector = clickedElement.getAttribute("href");
//articleSelector = articleSelector.substr(1);



/* find the correct article using the selector (value of 'href' attribute) */

let targetArticle = document.querySelector('.posts article[id="'+articleSelector+'"]');


/* add class 'active' to the correct article */

targetArticle.classList.add("active");

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
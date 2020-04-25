'use strict';

/* remove class 'active' from all article links  */
const acitiveLinks = document.querySelectorAll('.titles a .active');
for (let activeLink of acitiveLinks){
  activeLink.classList.remove('active');
}

const acitiveArticles = document.querySelectorAll('.posts article .active');
for (let activeArticle of acitiveArticles){
  activeArticle.classList.remove('active');
}

/* add class 'active' to the clicked link */



/* remove class 'active' from all articles */

/* get 'href' attribute from the clicked link */

/* find the correct article using the selector (value of 'href' attribute) */

/* add class 'active' to the correct article */

function titleClickHandler(event){
  console.log('Link was clicked!');
  console.log(event);
  const clickedElement = this;
  console.log('clickedElement:', clickedElement);
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
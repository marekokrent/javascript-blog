
'use strict';

function titleClickHandler(event){
  event.preventDefault();
  let clickedElement = this; 


  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /* add class 'active' to the clicked link */

  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */

  let acitiveArticles = document.querySelectorAll('.posts article.active');
  for (let activeArticle of acitiveArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */

  let articleSelector = clickedElement.getAttribute('href');
  articleSelector = articleSelector.substr(1);



  /* find the correct article using the selector (value of 'href' attribute) */

  let targetArticle = document.querySelector('.posts article[id="'+articleSelector+'"]');


  /* add class 'active' to the correct article */

  targetArticle.classList.add('active');

}



const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){


  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';

  /* for each article */
  let html = '';
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles){

    /* get the article id */
    let articleID = article.getAttribute('id');

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    

    /* get the title from the title element */

    const linkHTML = '<li><a href="#' + articleID + '"><span>' + articleTitle + '</span></a></li>';

    /* create HTML of the link */

    html = html + linkHTML;

    /* insert link into titleList */
  }
  titleList.innerHTML = html;
}


generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
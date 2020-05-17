
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
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector= '.author-article',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optTagsListSelector = '.list .tags';

function generateTitleLinks(customSelector = ''){


  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML='';

  
  let html = '';
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

  const links = document.querySelectorAll('.titles a');

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}


generateTitleLinks();


function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};

  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector );

  /* START LOOP: for every article: */

  for (let article of articles){
    
    /* find tags wrapper */

    const wrapperTags = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */

    let articleTags = article.dataset.tags; 

    /* split tags into array */

    const articleTagsArray = articleTags.split(' ');

    /* START LOOP: for each tag */
   
    for(let tag of articleTagsArray) {
   
      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-'+tag+'"> '+tag+' </a></li>';

      /* add generated code to html variable */

      html = html + linkHTML;

      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add generated code to allTags object */
        allTags[tag]=1;
      } else {
        allTags[tag]++;
      }

    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    wrapperTags.innerHTML = html;
  /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');
  /*[NEW] create variable for all links HTML code */
  let allTagsHTML = '';
  /* [NEW] START LOOP for each tag in allTags: */
  for (let tag in allTags){
    allTagsHTML += '<li><a href="#tag-'+tag + '">'+tag+' - '+ allTags[tag] +'</a></li>';
  }
  console.log(allTagsHTML);
  
  tagList.innerHTML = allTagsHTML;

}

generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  const href = clickedElement.getAttribute('href');

  /* make a new constant "tag" and extract tag from the "href" constant */

  const tag = href.replace('#tag-','');

  /* find all tag links with class active */

  const links = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for (let link of links) {
  
    /* remove class active */
    link.classList.remove('active');
  
  /* END LOOP: for each active tag link */
  }

  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinks = document.querySelectorAll('.post-tags .list a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let tagLink of tagLinks) {
    /* add class active */
    tagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}


function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('.post-tags .list a[href^="#tag-"]');
  /* START LOOP: for each link */
  for (let link of links) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click',tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();


function generateAuthors() {

  const articles = document.querySelectorAll(optArticleSelector );
  for (let article of articles){
    let wrapperAuthors = article.querySelector(optArticleAuthorSelector);
    let articleAuthor = article.dataset.author; 
    wrapperAuthors.innerHTML =  '<p><strong>Author:</strong><a href="#author'+articleAuthor+'">'+articleAuthor+'</a></p>';
  }
}

generateAuthors()

function authorClickHandler(event){
  
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute('href');
  const author = href.replace('#author','');
  const links = document.querySelectorAll('a.active[href^="#author"]');
  for (let link of links) {
    link.classList.remove('active'); 
  }

  const authorLinks = document.querySelectorAll('.author-article a[href="' + href + '"]');

  for (let authorLink of authorLinks) {

    authorLink.classList.add('active');

  }

  generateTitleLinks('[data-author="' + author + '"]');
}


function addClickListenersToAuthors(){

  const links = document.querySelectorAll('.author-article a[href^="#author"]');

  for (let link of links) {
   
    link.addEventListener('click',authorClickHandler);

  }
} const titleList = document.querySelector(optTitleListSelector);

addClickListenersToAuthors();


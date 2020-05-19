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
    function calculateTagsParams(tags){
      const tagsParams = {};
      tagsParams.max = 0;
      tagsParams.min = 999999;
      for(let tag in tags){
          if (tags[tag]>tagsParams.max){
            tagsParams.max=tags[tag];
          }
          if (tags[tag]<tagsParams.min){
            tagsParams.min=tags[tag];
          }
      }
      // console.log(tagsParams);
      return tagsParams;
  
    }
    const tagsParams = calculateTagsParams(allTags);
    let allTagsHTML = '';
    /* [NEW] START LOOP for each tag in allTags: */
    for (let tag in allTags){
      const tagLinkHTML = '<li><a class="tag-size-'+calculateTagClass(allTags[tag], tagsParams)+'" href="#tag-'+tag + '">'+tag+' '+'</a></li>';
      allTagsHTML += tagLinkHTML;
    }
    tagList.innerHTML = allTagsHTML;
  
  }
  
  generateTags();

let allAuthors= {};

function generateAuthors() {

    const articles = document.querySelectorAll(optArticleSelector );
    for (let article of articles){
      let wrapperAuthors = article.querySelector(optArticleAuthorSelector);
      let articleAuthor = article.dataset.author; 
      wrapperAuthors.innerHTML =  '<p><strong>Author:</strong><a href="#author'+articleAuthor+'">'+articleAuthor+'</a></p>';
    }
  }
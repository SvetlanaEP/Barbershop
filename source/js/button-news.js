let newsButton=document.querySelector('.news__to-all');
    lastNews=document.querySelector('.news__item--none');
    btnAll=document.querySelector('.button--to-all');
    btnCollapse=document.querySelector('.button--collapse');

newsButton.addEventListener("click", function () {
   if (lastNews.classList.contains("news__item--none"))  {
       lastNews.classList.remove("news__item--none");
       btnAll.classList.add('news__button--none');
       btnCollapse.classList.remove('news__button--none');
   } else {
       lastNews.classList.add("news__item--none");
       btnAll.classList.remove('news__button--none');
       btnCollapse.classList.add('news__button--none');
   }
});
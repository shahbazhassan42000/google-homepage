document.addEventListener("DOMContentLoaded",function () {
   //google-apps toggle
   let google_apps_btn=document.querySelector(".google-apps-img");
   let google_apps_img_container=document.querySelector(".google-apps-container");
   google_apps_btn.addEventListener('click',function () {
      if(google_apps_img_container.style.display==="block")
      {
         google_apps_img_container.style.display="none";
         google_apps_btn.classList.remove("focus");
      }
      else
      {
         google_apps_img_container.style.display="block";
         google_apps_btn.classList.add("focus");
      }
   });
   document.addEventListener('mouseup',function (event) {
      if(!google_apps_img_container.contains(event.target) && event.target!=google_apps_btn)
      {
         google_apps_img_container.style.display="none";
         google_apps_btn.classList.remove("focus");
      }
   });
   //google-account toggle
   let google_account_btn=document.querySelector("#google-account-button");
   let google_account_container=document.querySelector(".google-account-container");
   google_account_btn.addEventListener('click',function () {
      if(google_account_container.style.display==="block")
      {
         google_account_container.style.display="none";
         google_account_btn.classList.remove("focus");
      }
      else
      {
         google_account_container.style.display="block";
         google_account_btn.classList.add("focus");
      }
   });
   document.addEventListener('mouseup',function (event) {
      if(!google_account_container.contains(event.target) && event.target!=google_account_btn)
      {
         google_account_container.style.display="none";
         google_account_btn.classList.remove("focus");
      }
   });
   //hamburger toggle
   let hamburger_btn=document.querySelector(".hamburger");
   let hamburger_container=document.querySelector(".hamburger-menu");
   let humburger_overlayer=document.querySelector(".hamburger-container");
   hamburger_btn.addEventListener('click',function () {
      if(hamburger_container.style.display==="block")
      {
         hamburger_container.style.display="none";
         humburger_overlayer.style.display="none";
      }
      else
      {
         hamburger_container.style.display="block";
         humburger_overlayer.style.display="block";
         humburger_overlayer.style.backgroundColor="rgba(0, 0, 0, 0.5)";
      }
   });
   document.addEventListener('mouseup',function (event) {
      if(!hamburger_container.contains(event.target) && event.target!=hamburger_btn)
      {
         hamburger_container.style.display="none";
         humburger_overlayer.style.display="none";
      }
   });
   //popup toggle
   let pop_btn=document.querySelector("#reset-btn");
   let popup_container=document.querySelector(".popup");
   let popup_overlayer=document.querySelector(".popup-container");
   pop_btn.addEventListener('click',function () {
      if(popup_container.style.display==="flex")
      {
         popup_container.style.display="none";
         popup_overlayer.style.display="none";
      }
      else
      {
         popup_container.style.display="flex";
         popup_overlayer.style.display="block";
         popup_overlayer.style.backgroundColor="rgba(0, 0, 0, 0.5)";
      }
   });
   document.addEventListener('mouseup',function (event) {
      if(!popup_container.contains(event.target) && event.target!=pop_btn)
      {
         popup_container.style.display="none";
         popup_overlayer.style.display="none";
      }
   });
   //Google search functionality
   const search_Input=document.querySelector(".search-bar");
   const form=document.querySelector("#searchForm");

   form.addEventListener('submit',(event)=>{
      event.preventDefault(); //prevent reloading of page on submit button
      const searchQuery=search_Input.value;
      if(searchQuery.length===0)
         return false;
      else
         window.location=`https://www.google.com/search?query=${searchQuery}`;
   });

});
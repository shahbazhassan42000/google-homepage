document.addEventListener("DOMContentLoaded",function () {
   //google-apps toggle
   let google_apps_btn=document.querySelector(".google-apps-img");
   let google_apps_img_container=document.querySelector(".google-apps-container");
   google_apps_btn.addEventListener('click',function () {
      if(google_apps_img_container.style.display==="block")
         google_apps_img_container.style.display="none";
      else
         google_apps_img_container.style.display="block";
   });
   document.addEventListener('mouseup',function (event) {
      if(!google_apps_img_container.contains(event.target) && event.target!=google_apps_btn)
         google_apps_img_container.style.display="none";
   });
   //google-account toggle
   let google_account_btn=document.querySelector("#google-account-button");
   let google_account_container=document.querySelector(".google-account-container");
   google_account_btn.addEventListener('click',function () {
      if(google_account_container.style.display==="block")
         google_account_container.style.display="none";
      else
         google_account_container.style.display="block";
   });
   document.addEventListener('mouseup',function (event) {
      if(!google_account_container.contains(event.target) && event.target!=google_account_btn)
         google_account_container.style.display="none";
   });

});
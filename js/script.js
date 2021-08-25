document.addEventListener("DOMContentLoaded",function () {
   //google-apps toggle
   let google_apps_btn=document.querySelector(".google-apps-img");
   let google_apps_img_container=document.querySelector(".google-apps-container");
   google_apps_btn.addEventListener('click',function () {
      if(google_apps_img_container.style.display==="block")
      {
         console.log("Hiding!!!");
         google_apps_img_container.style.display="none";
      }
      else
      {
         console.log("Showing!!!");
         google_apps_img_container.style.display="block";
      }
   });
   document.addEventListener('mouseup',function (event) {
      if(!google_apps_img_container.contains(event.target) && event.target!=google_apps_btn)
      {
         console.log("Hiding!!! by blur")
         google_apps_img_container.style.display="none";
      }
   });
});
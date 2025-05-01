var tablinks = document.getElementsByClassName("tab-links");
   var tabcontents = document.getElementsByClassName("tab-contents");
   function openTab(tabname){
        for(tablink of tablinks){
           tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
           tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
}


document.getElementById("ecom").addEventListener("click", function() {
   window.open("https://mukila210.github.io/e-commerce/", "_blank");
 });
 document.getElementById("port").addEventListener("click", function() {
   window.open("https://mukila210.github.io/portfolio/", "_blank");
 });


var sidemenu = document.getElementById("sideMenu");
   function openmenu(){
      sidemenu.style.right = "0";
   }
   function closemenu(){
      sidemenu.style.right = "-150px";
   }
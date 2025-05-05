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


  const scriptURL = "https://script.google.com/macros/s/AKfycbzC06NsHg5Smiu7yTlRrv8yVvo_p7m9XjE6b0HAextwHxr1b0WJa3Mqz-D7_Tzhy6Pb/exec"
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = "Message sent successfully"
         setTimeout(function(){
            msg.innerHTML = ""
         },3000)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


  
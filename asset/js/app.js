
import{modebtn, sharebtn} from "./constants.js"


modebtn.addEventListener("click",()=> {
    const h= document.querySelector("html")
    // h.hasAttribute("data-bs-theme")
    // ?  h.removeAttribute("data-bs-theme")
    // : h.setAttribute("data-bs-theme","dark")
    if(h.hasAttribute("data-bs-theme")){
      h.removeAttribute("data-bs-theme")
      modebtn.innerHTML=`<i class = "bi bi-brightness-high"></i>` 
      modebtn.classList.remove("btn-dark")
      modebtn.classList.add("btn-light")
    }else{
      h.setAttribute("data-bs-theme","dark")
      modebtn.innerHTML=`<i class = "bi bi-moon-fill"></i>` 
      modebtn.classList.remove("btn-light")
      modebtn.classList.add("btn-dark")
    }
})

sharebtn.addEventListener("click",()=>{
  if (navigator.share){
    navigator.share({
      title: "awesome pwa camera app",
      Text:"switch, capture,share movement",
      URL:"https://ompatil777.github.io/camera/"
    })
  }
})
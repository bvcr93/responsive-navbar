const navSlide = () =>{
    const burger = document.querySelector(".fa-solid")
 const navLinks = document.querySelectorAll(".nav-links li")
       const nav = document.querySelector(".nav-links")

      
        burger.addEventListener("click", ()=>{
             //toggle nav
            nav.classList.toggle("nav-active")


            //animate links
            navLinks.forEach((link, index)=>{
                if(link.style.animation){
                   link.style.animation = ""
                }
                else {
                   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                }
                       })
            


        })

    }


navSlide()


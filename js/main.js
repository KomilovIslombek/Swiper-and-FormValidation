const arr = [1,2,3,4,5,6,7,8]
const sliderWrap = document.querySelector(".slider-wrap")
let sliderButtons = document.querySelector(".slider-buttons")



arr.forEach( i => {
    let newSlider = document.createElement("div")
    newSlider.classList.add("item")
    newSlider.textContent = i
    sliderWrap.appendChild(newSlider)
})

for (let i = 0; i < 6; i++) {
 
    let newButtons = document.createElement("div")
    newButtons.id = i
    newButtons.classList.add("btns")
    sliderButtons.appendChild(newButtons)    
    
}
let first = document.getElementById("0")
first.classList.add("active")
let allBtns = document.querySelectorAll(".btns")

allBtns.forEach((i, e)=> {
    i.addEventListener("click", (e)=> {
        allBtns.forEach((i)=> {
            console.log(i);
            i.classList.remove("active")
        })
        e.target.classList.add("active")

        sliderWrap.style.transform = `translateX(${e.target.id * -300}px)` 
        // console.log(e.target);
    })
})


// Form validation Start

const elForm = document.getElementById("form")
let elInp1 = document.getElementById("inp1")
let elInp2 = document.querySelector("#inp2")
let elInp3 = document.querySelector("#inp3")
let elInp4 = document.querySelector("#inp4")

const inputs = document.querySelectorAll("input")

inputs.forEach((e)=> {
    console.log(e);
    e.addEventListener("input", ()=> {
        if(elInp1.value.length >= 3) {
            document.querySelector(".name").style.display = "none"
            elInp1.classList.add("green")
            if(elInp2.value.indexOf('@') != '-1' && elInp2.value.indexOf('.com') != '-1') {
                elInp2.classList.add("green")
                document.querySelector(".email").style.display = "none" 
                if(elInp3.value >= 1 && elInp3.value == elInp4.value) {
                    elInp3.classList.add("green")
                    elInp4.classList.add("green")
                    document.querySelector(".password").style.display = "none"  
                    document.querySelector(".confirm-password").style.display = "none"    
                }  else {
                    elInp3.classList.remove("green")
                    elInp4.classList.remove("green")
                    document.querySelector(".password").style.display = "block"    
                    document.querySelector(".confirm-password").style.display = "block"    
                }
            } else {
                elInp2.classList.remove("green")
                document.querySelector(".email").style.display = "block"    
            }
        } else {
            elInp1.classList.remove("green")
            document.querySelector(".name").style.display = "block"    
        }
    })
})

elForm.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((i)=> {
        console.log(i.value);
        if(elInp1.value.length >= 3) {
            
            if(elInp2.value.indexOf('@') != '-1' && elInp2.value.indexOf('.com') != '-1') {
                 
                if(elInp3.value >= 1 && elInp3.value == elInp4.value) {
                    document.querySelector(".f").innerHTML = "Successful"
                    
                }  else {
                    console.log("bosh");
                    
                }
            } else {
               
            }
        } else {
            
        }

        // if(i.value == '') {
        //     console.log("bosh");
        // } else {
        //     document.querySelector(".f").innerHTML = "Successful"
        // }
    })
    
    // if(elInp1.value.length >= 4) {
    //     document.querySelector(".name").style.display = "none"
    //     if(elInp2.value.indexOf('@') != '-1' && elInp2.value.indexOf('.') != '-1') {
    //         document.querySelector(".email").style.display = "none" 
    //         if(elInp3.value >= 1 && elInp3.value == elInp4.value) {
    //             document.querySelector(".password").style.display = "none"  
    //             document.querySelector(".confirm-password").style.display = "none"    
    //         }  else {
    //             document.querySelector(".password").style.display = "block"    
    //             document.querySelector(".confirm-password").style.display = "block"    
    //         }
    //     } else {
    //         document.querySelector(".email").style.display = "block"    
    //     }
    // } else {
    //     document.querySelector(".name").style.display = "block"    
    // }


    // if(elInp1.value == "") {
    //     document.querySelector(".name").style.display = "block"
    // } else {
    //     document.querySelector(".name").style.display = "none"
    //     if (elInp2.value != "@ gmail . com") {
    //         document.querySelector(".email").style.display = "block"
    //     } else{
    //         console.log("jdsv");
    //         document.querySelector(".email").style.display = "none"
    //     }
    // }

    // if(elInp1.value == "" && elInp3.value == "") {
    //     console.log("hello");
    //     document.querySelector(".name").style.display = 'block'
    //     document.querySelector(".password").style.display = 'block'
    // } else if(elInp2.value != '@gmail.com') {
    //     document.querySelector(".name").style.display = 'none'
    //     document.querySelector(".email").style.display = 'block'
    // } else if(elInp3.value > 1 && elInp3.value == elInp4.value){
    //     document.querySelector(".email").style.display = 'none'
    //     console.log("true");
    // }
})







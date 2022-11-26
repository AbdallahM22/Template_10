// navbar

let button = document.querySelector(".navbar button");
let div =document.querySelector(".navbar button + div")

button.onclick = function() {
    div.classList.add("open")
}


window.addEventListener("click", (e)=> {
    if(e.target.classList.contains("open")) {
        e.target.classList.remove("open");
    }
})

// slider
let slider = document.querySelector(".slider");
let sideButtons = document.querySelectorAll(".slider .carousel > button");

slider.onmouseover = function() {
    sideButtons.forEach((button)=> {
        button.classList.add("show");
    });
};
slider.onmouseout = function() {
    sideButtons.forEach((button)=> {
        button.classList.remove("show");
    });
};

let testimonial = document.querySelector(".testimonial");
let sideButtons2 = document.querySelectorAll(".testimonial .carousel > button");

testimonial.onmouseover = function() {
    sideButtons2.forEach((button)=> {
        button.classList.add("show");
    });
};
testimonial.onmouseout = function() {
    sideButtons2.forEach((button)=> {
        button.classList.remove("show");
    });
};

// counter section 
let counter = document.querySelector(".counter");
let number = document.querySelectorAll(".counter .number");


// window.onscroll = function() {
//     if (window.scrollY >= counter.offsetTop) {
//         number.forEach((num)=> {
//             console.log(num.dataset.count)
//             let interval = setInterval(()=>{
//                 if(num.innerHTML != num.dataset.count) {
//                     num.innerHTML++;
//                 } else {
//                     clearInterval(interval)
//                 }
//             }, 2000 / num.dataset.count)
//         })
//     }
// }


window.addEventListener("scroll", ()=> {
    if (window.scrollY >= counter.offsetTop - 400) {
        console.log("ol")
        number.forEach((num)=> {
            console.log(num.dataset.count)
            let interval = setInterval(()=>{
                if(num.innerHTML != num.dataset.count) {
                    num.innerHTML++;
                } else {
                    clearInterval(interval)
                }
            }, 3000 / num.dataset.count)
        })
    }
})
// test

//
// function countUp() {
//     number.forEach((num)=> {
//         let reqAnimationId = requestAnimationFrame(countUp)
//             if(num.innerHTML != num.dataset.count) {
//                 num.innerHTML++;
//                 console.log(num.innerHTML)
//             } else {
//                 cancelAnimationFrame(reqAnimationId)
//             }
//         })
// }

// // function smoothAnimation() {
// //     // animtion
// //     requestAnimationFrame(smoothAnimation)
// // }
// requestAnimationFrame(countUp)

// features section 

let links = document.querySelectorAll(".features .links li");
let categories = document.querySelectorAll(".categories > div");

links.forEach((li)=> {
    li.onclick = function () {
        // remove active class
        links.forEach((ele)=> {
            ele.classList.remove("active");
            // hide elements
            categories.forEach((cat)=> {
                // cat.style.opacity = "0";
                cat.style.display = "none";
            })
        })
        // add active class on current element
        this.classList.add("active");
        // show elements
        let elements = Array.from(document.querySelectorAll(this.dataset.cat));
        elements.forEach((ele)=> {
            // ele.style.opacity = "1";
            ele.style.display = "block";
        })
    }
    
})
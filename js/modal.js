const modalCloseEl = document.querySelector(".modalClose")
let closeLine1 = document.querySelector(".close-line-1")
let closeLine2 = document.querySelector(".close-line-2")
modalCloseEl.addEventListener("mouseover", () => {
    closeLine1.classList.add("active")
    closeLine2.classList.add("active")
})
modalCloseEl.addEventListener("mouseout", () => {
    closeLine1.classList.remove("active")
    closeLine2.classList.remove("active")
})

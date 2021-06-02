const hoverableElem = document.createElement("div")
hoverableElem.classList.add("back-rectangle")
const backAElem = document.createElement("a")
backAElem.setAttribute("href", "../index.html#work-examples")
backAElem.appendChild(hoverableElem)
document.body.appendChild(backAElem)

const returnBackWrapperElem = document.querySelector(".return-back-wrapper")
hoverableElem.addEventListener("mouseover", () => {
    returnBackWrapperElem.classList.add("active")
})
hoverableElem.addEventListener("mouseout", () => {
    returnBackWrapperElem.classList.remove("active")
})

window.onload = () => {
    setTimeout(() => {
        const sideElem = document.createElement("div")
        console.log("here")
        sideElem.classList.add("side-hint")
        sideElem.appendChild(document.createTextNode("Hover top to return back"))
        document.body.appendChild(sideElem)
        setTimeout(() => {
            sideElem.classList.add("active")
        }, 100)
        setTimeout(() => {
            sideElem.classList.remove("active")
        }, 3200)
    }, 1000)
}


"use strict";
import { Anime } from "./js/Anime.js";
//------------app loader------------
const loader = document.querySelector(".loader")
const loaderInner = document.querySelector(".loader-inner")
const loaderLine = document.querySelector(".loader-line")
const loadStart = new Date()
const fullAnimationTime = 2000; //mseconds


const loaderLineLength = 282.84
const loaderAnime = new Anime()
    .setDraw(progress => {
        const offset = Math.round(progress*loaderLineLength)
        loaderLine.style.strokeDashoffset = offset.toString()
    })
    .setTiming((_ => _))
    .setDuration(2100)
    .setRepeat(true)
    .start()

window.onload = () => {
    console.log("Loaded!")
    loaderAnime.setDraw(progress => {
            const offset = Math.round(progress*loaderLineLength)
            const width = Math.round(-progress * 20 + loaderLineLength / 2)
            loaderLine.style.strokeDashoffset = offset.toString()
            const v = `${width} ${Math.round(loaderLineLength - width)}`
            console.log(v)
            loaderLine.style.strokeDasharray = v
        })
        .setRepeat(false)
        .setOnAnimeFinished(() => {
            setTimeout(() => {
                loader.classList.add("hide")
                setTimeout(() => {
                    loader.classList.add("hidden")
                }, 700)
            }, 500)
        })
}
//     setTimeout(() => {
//         //todo cascade timeouts
//         const currentIterAnimTime = (new Date() - loadStart) % fullAnimationTime
//         // loaderLine.classList.add("trans")
//         // setTimeout(() => {
//         //     loaderLine.style.animationPlayState = "paused"
//         // }, 1950 - currentIterAnimTime + fullAnimationTime)
//         // setTimeout(() => {
//         //     loader.classList.add("hide")
//         // }, 10000)
//         // setTimeout(() => {
//         //     loader.classList.add("hidden")
//         // }, 10500)
//     }, 1000)
// }

//-----------------
const scrollElem = document.querySelector('.scroll-icon');
scrollElem.addEventListener("click", () => {
    console.log("Click!")
    window.scrollBy({
        top: window.innerHeight * 1,
        behavior: "smooth"
    })
})

function changeLanguage(language) {
    console.log(language)
    languageData.forEach((elementData => {
        const htmlElement = document.querySelector(`#${elementData.tag}`)
        if (htmlElement) {
            htmlElement.innerHTML = elementData[language]
        }
    }))
}

const wiresSwitcher = document.querySelector(".second-content-bg")

const languages = { RUSSIAN: 'russian', ENGLISH: 'english' }

//language switcher
let siteLanguage = languages.RUSSIAN
const switcherLeftBtn = document.querySelector('.switcher-btn-left')
const switcherRightBtn = document.querySelector('.switcher-btn-right')
switcherLeftBtn.addEventListener('click', () => {
    console.log("Left switcher button handler")
    siteLanguage = languages.RUSSIAN
    switcherLeftBtn.classList.add('pressed')
    switcherRightBtn.classList.remove('pressed')
    changeLanguage(siteLanguage)
    wiresSwitcher.classList.remove("active")
})
switcherRightBtn.addEventListener('click', () => {
    console.log("Left switcher button handler")
    siteLanguage = languages.ENGLISH
    switcherRightBtn.classList.add('pressed')
    switcherLeftBtn.classList.remove('pressed')
    changeLanguage(siteLanguage)
    wiresSwitcher.classList.add("active")
})

//language data
const languageData = [
    {
        tag: 'resumeTitle',
        russian: 'Резюме',
        english: 'Resume'
    },
    {
        tag: 'resumeDescription',
        russian: 'Меня зовут Никита, мне 20 лет и настоящее время я являюсь студентом. Веб-разработкой занимаюсь больше 3 лет. В течении этого времени принял участие в 2 стартапах и большом количестве локальных проектов. Я только начинаю осваивать фриланс, но у меня достаточно мотивации и я стараюсь применить все мои знания в каждом проекте.',
        english: 'My name is Nikita, I am 20 years old and now I am a student. I have been working as web-developer during 3 years'
    }
]

//------------navbar scroller----------------------
function scrollToElementBySelector(selectorQuery) {
    console.log("Scroll To Element (F)")
    const element = document.querySelector(selectorQuery)
    const rect = element.getBoundingClientRect()
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    window.scrollBy({
        top: rect.top,
        behavior: "smooth"
    })
}

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
function checkFullyVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.top - 70 > viewHeight / 2); //todo navbar size (reorganize)
}

//-----------------navbar fixation------------------
const backendCard = document.querySelector(".backend-card")
const navbarElem = document.querySelector(".navbar")
document.addEventListener("scroll", () => {
    if (checkFullyVisible(backendCard)) {
        console.log("here")
        navbarElem.classList.add("navbar-fixed")
    } else {
        navbarElem.classList.remove("navbar-fixed")
    }
})


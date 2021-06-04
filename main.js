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


const API_KEY = "fe6dddd98b3b41d6ade53037886ca974"
const url = "https://newsapi.org/v2/everything?"
const top_url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

let search = document.getElementById('search')
let main = document.getElementById('main')
let notfound = document.getElementById('notfound')
let load = document.getElementById('load')
let logo = document.getElementById('logo')


const getData = async (keyword) => {
    try {
        load.style.display = "block"
        const response = await fetch(`${url}q=${keyword}&apiKey=${API_KEY}`)
        const data = await response.json()
        if (data.articles.length !== 0) {
            load.style.display="none"
            notfound.innerHTML = ""
            showData(data)
        }
        else {
            load.style.display = "none"
            notfound.classList.add('notfound', 'unhide')
            notfound.innerText = "News not found, search using different keyword"
            document.body.append(notfound)
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

search.addEventListener('keyup', (e) => {
    let keyword = document.getElementById('search').value
    if (e.key == 'Enter') {
        e.preventDefault();
        getData(keyword)
        search.value = ''
    }
})

const homeData = async () => {
    try {
        load.style.display = "block"
        const response = await fetch(top_url)
        const data = await response.json()
        load.style.display = "none"
        showData(data)
    } catch (error) {
        console.log("Error: ", error.message);
    }
}

homeData()

logo.addEventListener('click', () => {
    homeData()
})


const showData = async (data) => {
    let newsData = data.articles
    main.innerHTML = ""

    for (const news of newsData) {
        let card = document.createElement('div')
        let image = document.createElement('img')
        let img_container = document.createElement('div')
        let news_container = document.createElement('div')
        let title = document.createElement('p')
        let url = document.createElement('a')
        let button = document.createElement('button')

        url.href = news.url
        url.target = 'blank'

        card.classList.add('card')
        button.classList.add('btn')
        img_container.classList.add('img-container')
        news_container.classList.add('news-container')

        image.setAttribute('src', news.urlToImage)
        title.innerText = news.title
        button.innerText = 'View More'
        url.append(button)
        news_container.append(title)
        img_container.append(image)

        card.append(img_container, news_container, url)

        main.append(card)
    }

}
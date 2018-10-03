export const convertDateToDisplay = (time) => {/////// do do pliku zew
    const date = new Date(time)
    let month = date.getMonth() + 1,
        day = date.getDate(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes()

    if (day < 10) day = '0' + day.toString()
    if (month < 10) month = '0' + month.toString()
    if (minute < 10) minute = '0' + minute.toString()
    if (hour < 10) hour = '0' + hour.toString()

    return `Addition date: ${day}.${month}.${year} ${hour}:${minute}`
}

export const trimDescription = (description) => {
    if (description === undefined || description === null) return "There is no desc for this film"
    else if (description.length < 100) return description
    else return description.substring(0, 100) + '...'
}

export const addToLocalStorage = (film) => {
    let films
    if (localStorage.getItem('films') === null) {   /////////////DRY do zewnetrznego pliku
        films = []
    } else {
        films = JSON.parse(localStorage.getItem('films'))
    }
    const premissionToAdd = films.map(film => film.id.toString()).includes(film.id.toString())
    if (premissionToAdd) {
        return true
    } else {
        const newFilms = [...films, film]
        localStorage.setItem('films', JSON.stringify(newFilms))
        return false
    }
}

export const getFilmsFromLocalStorage = () => {/////////////DRY do zewnetrznego pliku
    let films
    if (localStorage.getItem('films') === null) {
        films = []
    } else {
        films = JSON.parse(localStorage.getItem('films'))
    }
    return films
}


// fetch(`https://api.vimeo.com/videos/290012756`, {
//     headers: {
//         "Authorization": "Bearer 2ad802183d35064bfb830f6b4b1a5fa3"
//     }
// })
//     .then((resp) => resp.json()).then(data => console.log(data))

export const createInit = (url) => {
    if (url.indexOf('vimeo.com') !== -1) {
        return {
            headers: {
                "Authorization": "Bearer 2ad802183d35064bfb830f6b4b1a5fa3"
            }
        }
    }
    else if (url.indexOf('www.googleapis.com') !== -1) {
        return {}
    }
}
export const createURL = (url, id) => {
    if (url.indexOf('vimeo.com') !== -1 || id.toString().length === 9) {
        return `https://api.vimeo.com/videos/${id}`
    }
    else if (url.indexOf('youtube.com/watch?v=') !== -1 || url.indexOf('youtu.be/') !== -1 || id.toString().length === 11) {
        return `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBfJ3rGTb5Xm56_02-DSSLzYesJb5lKaoY&id=${id}&part=snippet,contentDetails,statistics`
    }
}

export const getIdFromUrl = (url) => {
    let start = ''
    let id = ''

    if (url.indexOf('youtube.com/watch?v=') !== -1) {
        start = url.indexOf('?v=') + 3
        console.log(start)
        id = url.substring(start, start + 11)
        return id
    } else if (url.indexOf('youtu.be/') !== -1) {
        start = url.indexOf('.be/') + 4
        id = url.substring(start, start + 11)
        return id
    } else if (url.indexOf('vimeo.com/') !== -1) {
        start = url.indexOf('vimeo.com/') + 10
        id = url.substring(start, start + 9)
        console.log(id)
        return id
    } else if (url.length === 9 || url.length === 11) {
        return url
    }
    else return 'wkpNvvvighY' // tutaj trzeba w zależności od długości samego id zwrócić odpoweidni id
}
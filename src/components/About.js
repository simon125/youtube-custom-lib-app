import React from 'react'

const About = () => {
    return (
        <div className="card card-body my-4">
            <p className="lead">Aplikacja - biblioteka do przechowywania np ulubionych filmików w jednym miejscu</p>
            <p className="lead"> Napisz aplikacje która będzie używać API zewnetrznych</p>
            <p><i className="far fa-check-circle"></i> Youtube API</p>
            <p><i className="far fa-circle"></i> Vimeo API</p>

            <p className="lead"><i className="far fa-check-circle"></i> Uzytkownik może dodać film na strone poprzez input dostępny na stronie głównej</p>
            <p className="lead">Filmy powiny być wylistowane z danymi tj: </p>
            <ul style={{ listStyle: 'none' }}>
                <li><i className="far fa-check-circle"></i> Ilość odtworzeń </li>
                <li><i className="far fa-check-circle"></i> Ilość polubień</li>
                <li><i className="far fa-check-circle"></i> Nazwa filmu</li>
                <li><i className="far fa-check-circle"></i> Miniaturka filmu</li>
                <li><i className="far fa-check-circle"></i> Data dodania do biblioteki</li>
            </ul>
            <p className="lead">Filmy powiny posiadać akcje tj: </p>
            <ul style={{ listStyle: 'none' }}>
                <li><i className="far fa-check-circle"></i> Obejrzyj (w modalu) </li>
                <li><i className="far fa-check-circle"></i> Usuń</li>
                <li><i className="far fa-check-circle"></i> Dodaj do ulubionych</li>
            </ul>
            <p className="lead">Lista filmów powinna: </p>
            <ul style={{ listStyle: 'none' }}>
                <li><i className="far fa-circle"></i> Posiadać paginacje </li>
                <li><i className="far fa-check-circle"></i> Posiadać możliwość wyczyszczenia wszystkich filmów</li>
                <li><i className="far fa-circle"></i> ? Posiadać możliwość wgrania demo filmów</li>
                <li><i className="far fa-check-circle"></i> Filtr tylko ulubione</li>
                <li><i className="far fa-check-circle"></i> Sortowanie po najstarsze/ostatnio dodane</li>
            </ul>
        </div>
    )
}

export default About

import React, { Component } from 'react'

const Context = React.createContext()



const reducer = (state, action) => {

    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id.toString() !== action.payload.toString())
            }
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case 'ADD_TO_COLLECTION':
            return {
                ...state,

            }
        case 'DELETE_FROM_COLLECTION':
            return {
                ...state,

            }
        case 'CLEAR_ALL_COLLECTION':
            return {
                ...state,
            }
        case 'ADD_TO_FAVOURITE':
            return {
                ...state,
            }
        case 'REMOVE_FROM_FAVOURITE':
            return {
                ...state,
            }
        default:
            return state;
    }
}


export class Provider extends Component {

    state = {
        films: []
    }

    // componentDidMount() {
    //     fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=it&f_has_lyrics=1&apikey=24f0115490d2d758c632fbbdfe36330c`)
    //         .then(res => res.json()).then(data => {
    //             // console.log("z proxy: ", data)
    //             this.setState({ track_list: data.message.body.track_list })
    //         })
    //         .catch(err => console.log(err))
    // }


    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
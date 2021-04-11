// import Store from '../store'
import axios from 'axios'

// export function getListPokedex() {
//     Store.dispatch({type: });

//     return function(dispatch) {
//         return axios.get("http://localhost:3030/api/cards")
//             .then(card => {
//                 console.log(card)
//                 dispatch({type:'fetched_list', listPokedex: card.listPokedex})
//         })
//     }
// }

export const getListPokedex = () => (dispatch) => {
    axios.get("http://localhost:3030/api/cards")
        .then((res) => {
            dispatch({
                type: "FETCHING_LIST",
                payload: res.data
            })
            console.log(res)
        })
        .catch((err) => {
            dispatch({
                type: "FETCHING_LIST",
                payload: null
            })
        })
}
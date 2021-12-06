import {useRef} from "react";

const GETDATA = 'GETDATA'

const initState = {
    userData: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case GETDATA: {
           return  {...state, userData: action.userData}
        }
        default:
            return state
    }
}

export const getUserData = (user_country, user_name, type_id, number_id, user_img) => {
    return (dispatch) => {
        dispatch({
            type: GETDATA, userData: {
                user_country: user_country,
                userName: user_name,
                typeId: type_id,
                numberID: number_id,
                userImg: user_img==='test'
        }
        })
    }
}


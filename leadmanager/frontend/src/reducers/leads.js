import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types';

const initialState = {
    leads: []
};

export default function(state = initialState, actions){
    switch(actions.type){
        case GET_LEADS:
            return {
                ...state,
                leads: actions.payload
            }
        case DELETE_LEAD:
            return {
                ...state,
                leads: state.leads.filter((lead) => lead.id !== actions.payload)
            }

        case ADD_LEAD:
            return {
                ...state,
                leads: [...state.leads, actions.payload]
            }
        default:
            return state;
    }
}
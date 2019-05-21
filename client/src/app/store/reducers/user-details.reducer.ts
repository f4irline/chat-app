import * as UserDetailsActions from '../actions/user-details.action';

export interface Details {
    userName: string;
    room: number;
}

const initialState: Details = {
    userName: '',
    room: undefined,
};

export function reducer(state: Details = initialState, action: UserDetailsActions.Actions): Details {
    switch (action.type) {
        case UserDetailsActions.UPDATE_USERNAME:
            return {
                ...state,
                userName: action.payload,
            };
        case UserDetailsActions.UPDATE_ROOM:
            return {
                ...state,
                room: action.payload,
            };
        case UserDetailsActions.RESET_DETAILS:
            return initialState;
        default:
            return state;
    }
}

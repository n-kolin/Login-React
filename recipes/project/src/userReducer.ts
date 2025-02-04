import { createContext, Dispatch } from "react"

export type UserType = {
    id: number
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    address: string,
    phone: string
}
export const initialUser: UserType = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phone: '',

}


export type ActionType = {
    type: 'CREATE_USER',
    data: UserType
} | {
    type: 'UPDATE_USER',
    data: Partial<UserType>
} | {
    type: 'DELETE_USER',
}



export default (state: UserType, action: ActionType): UserType => {

    console.log('reducer');

    switch (action.type) {
        case 'CREATE_USER':
            console.log(action.data);
            return { ...action.data }
        case 'UPDATE_USER':
            return { ...state, ...action.data }

        default:
            return state

    }
}
type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}
type PhotosType = {
    small: string,
    large: string
}

export type UsersPageType = {
    users: UserType[]
}
let initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case 'UNFOLLOW': {
            debugger
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

type SetUsersActionType = {
    type: 'SET-USERS'
    users: UserType[]
}

export const followAction = (userId: number): FollowActionType => {
    return {type: 'FOLLOW', userId: userId}
}
export const unfollowAction = (userId: number): UnfollowActionType => {
    return {type: 'UNFOLLOW', userId: userId}
}

export const setUsersAction = (users: UserType[]): SetUsersActionType => {
    return {type: 'SET-USERS', users: users}
}
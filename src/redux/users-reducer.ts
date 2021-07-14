export type UserType = {
    id: number
    photoUrl: string
    followed: boolean,
    fullName: string
    status: string
    location: {city: string, country: string}
}

export type UsersPageType = {
    users: Array<UserType>
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
    userId: string
}
type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}

type SetUsersActionType = {
    type: 'SET-USERS'
    users: any
}

export const followAction = (userId: string): FollowActionType => {
    return {type: 'FOLLOW', userId: userId}
}
export const unfollowAction = (userId: string): UnfollowActionType => {
    return {type: 'UNFOLLOW', userId: userId}
}

export const setUsersAction = (users: any): SetUsersActionType => {
    return {type: 'SET-USERS', users: users}
}
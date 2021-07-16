import {connect} from "react-redux";
import { Users } from "./Users";
import {followAction, setUsersAction, unfollowAction} from "../../redux/users-reducer";



let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users

    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAction(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAction(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAction(users))
        }

    }
}

export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
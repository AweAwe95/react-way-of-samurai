import React from "react";
import q from "./Users.module.css";
import axios from "axios";

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
type UsersPageType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UsersPageType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {this.props.users.map(u => <div>
                <span>
                    <div className={q.item}>
                        <img
                            src={u.photos.small != null ? u.photos.small : "https://static.wikia.nocookie.net/drebedenboi/images/5/5c/%D0%9F%D0%B0%D1%85%D0%BE%D0%BC2.jpg/revision/latest?cb=20180314173639&path-prefix=ru"}
                            alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                this.props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>
            )
            }
        </div>
    }
}
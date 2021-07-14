import React from "react";
import q from './Users.module.css'

type LocationType = {
    country: string,
    city: string
}

type UserType = {
    id: string,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}

type UsersPageType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: any) => void
}

export function Users(props: UsersPageType) {
    if (props.users.length === 0) {
        props.setUsers([{
            id: '1',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenb8_kedNWkKXpNIvnbZU6UDywBXe0bKtEQ&usqp=CAU',
            followed: true,
            fullName: 'Vitali Karach',
            status: 'im looking for a job',
            location: {country: 'Belarus', city: 'Minsk'}
        },
            {
                id: '2',
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenb8_kedNWkKXpNIvnbZU6UDywBXe0bKtEQ&usqp=CAU',
                followed: false,
                fullName: 'Denis Zubr',
                status: 'im studying',
                location: {
                    country: 'Poland',
                    city: 'Katowice'
                }
            },
            {
                id: '3',
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSenb8_kedNWkKXpNIvnbZU6UDywBXe0bKtEQ&usqp=CAU',
                followed: true,
                fullName: 'Jurek Mih',
                status: 'im working in IT',
                location: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            }])
    }

    return (
        <div>
            {props.users.map(u => <div>
                <span>
                    <div className={q.item}>
                        <img src={u.photoUrl} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>
            )
            }
        </div>
    )
}
import {USERS} from "./users"
export const POSTS= [
    {
        imageUrl: require("../assets/p1.jpeg"),
        user: USERS[0].user,
        likes:7870 ,
        caption :"boom gg",
        profile_picture : USERS[0].image,
        comments: [
            {
                user: " prithi",
                comment:" kya baaat he yaar"
            },
            {
                user:" zamobi",
                comment: "ohooo karu janaika"
            }
        ]
    },
    {
        imageUrl: require("../assets/p1.jpeg"),
        user: USERS[1].user,
        likes:7870 ,
        caption :"boom gg",
        profile_picture : USERS[1].image,
        comments: [
            {
                user: " prithi",
                comment:" kya baaat he yaar"
            },
            {
                user:" zamobi", 
                comment: "ohooo karu janaika"
            }
        ]
    }
]
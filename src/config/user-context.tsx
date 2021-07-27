import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"

import { User } from "~models/user"

export const UserContext = React.createContext<UserProviderType>({
    user: undefined,
    isLoading: true,
    userId: "",
})

type UserProviderType = {
    user: User | undefined
    isLoading: boolean
    userId: string
}

export const UserProvider: React.FC = ({ children }) => (
    <UserContext.Provider value={{ ...useUser() }}>
        {children}
    </UserContext.Provider>
)

function useUser(): UserProviderType {
    const [{ user, isLoading }, setUser] = useState<{
        user: User | undefined
        isLoading: boolean
    }>({
        user: undefined,
        isLoading: true,
    })
    const [userId, setUserId] = useState("")

    useEffect(() => {
        firebase.auth().onAuthStateChanged(userAuth => {
            if (userAuth) setUserId(userAuth.uid)
        })
    }, [])

    useEffect(() => {
        if (firebase.auth().currentUser?.uid) {
            setUserId(firebase.auth().currentUser!.uid)
        }
    }, [])

    useEffect(() => {
        if (!userId) return
        firebase
            .firestore()
            .collection("Users")
            .doc(userId)
            .onSnapshot(doc => {
                setUser({ user: doc.data() as User, isLoading: false })
            })
    }, [userId])

    return {
        user,
        isLoading,
        userId,
    }
}

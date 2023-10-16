import { useEffect, useState } from "react"
import { User } from "../data/interfaces"
import { getUser } from "../service/getUser"

export const useGitUser = () => {
    const [user, setUser] = useState<User>({} as User)

    const getGithubUser =  async ({username}: {username?: string}) => {
        setUser(await getUser({username}))
    }

    useEffect(() => {
        getGithubUser({})
    }, [])


    return {
        user,
        getGithubUser
    }
}
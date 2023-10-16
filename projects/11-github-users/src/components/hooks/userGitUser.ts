import { useEffect, useRef, useState } from 'react'
import { User } from '../data/interfaces'
import { getUser } from '../service/getUser'

export const useGitUser = () => {
	const [user, setUser] = useState<User>({} as User)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const prevSearch = useRef('')

	const getGithubUser = async ({ username }: { username?: string }) => {
		try {
			if (prevSearch.current === username) {
				return
			}

			setLoading(true)
			setError(false)
			setUser(await getUser({ username }))
		} catch (error) {
			setError(true)
		} finally {
			setLoading(false)
            prevSearch.current = username!
		}
	}

	useEffect(() => {
		getGithubUser({ username: 'octocat' })
	}, [])

	return {
		user,
		loading,
		error,
		getGithubUser,
	}
}

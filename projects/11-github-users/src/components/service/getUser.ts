import { User } from '../data/interfaces'

export const getUser = async ({
	username,
}: {
	username?: string
}): Promise<User> => {
	try {
		const http = await fetch(
			`https://api.github.com/users/${
				username?.trim().length === 0 ? 'octocat' : username
			}`
		)
		const res = await http.json()

		if (res.message) throw res

		return {
			avatarUrl: res.avatar_url,
			bio: res.bio,
			blog: res.blog,
			company: res.company,
			createdAt: res.created_at,
			followers: res.followers,
			following: res.following,
			htmlUrl: res.html_url,
			location: res.location,
			name: res.name,
			publicRepos: res.public_repos,
			twitter: res.twitter_username,
			username: res.login,
		}
	} catch (error: any) {
		throw new Error(error.message)
	}
}

export const Gif = ({ heroImg, title, user }) => {
	const { avatar_url, username } = user

	return (
		<div>
			<img src={heroImg} alt={title} />
			<p> {title} </p>
			<div>
				<img src={avatar_url} alt={username} />
				<p> {username} </p>
			</div>
		</div>
	)
}

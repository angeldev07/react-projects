export const Gif = ({ heroImg, title, user }) => {
	const { avatar_url = '', username = 'Anonimus' } = user ?? {}

	return (
		<div className="card-gif">
			<div className="card-hero">
				<img src={heroImg} alt={title} />
			</div>
			<div className="card-texts">
				<p className="card-texts--title"> {title} </p>
				<div className="card-texts--username">
					<img src={avatar_url} alt={username} />
					<p> {username} </p>
				</div>
			</div>
		</div>
	)
}


import {BsGeoAltFill, BsLink45Deg, BsTwitter, BsBuildingsFill} from "react-icons/bs"
import { User } from "./data/interfaces";

interface Props {
    user: User
}

export const Perfil = ({user}: Props) => {
  return (
    <article className="card card-prof">
        {/* encabezado */}
        <header className="card-user">
            <div className="card-user--profile">
                <img src={user.avatarUrl} />
                <div>
                    <span>{user.name}</span>
                    <a href={user.htmlUrl}> @{user.username} </a>
                    <span>Joined {new Date(user.createdAt).toDateString()}</span>
                </div>
            </div>
            <p>{user.bio ?? 'This profile has no bio'}</p>
        </header>
        {/* repos */}
        <section className="card-stats">
            <ul>
                <li>
                    <h3>Repos</h3> 
                    {user.publicRepos}
                </li>
                <li>
                    <h3>Followers</h3> 
                    {user.followers}
                </li>
                <li>
                    <h3>Following</h3> 
                    {user.following}
                </li>
            </ul>
        </section>
        {/* extra info */}
        <section >
            <ul className="extra">
                <li>
                    <BsGeoAltFill />
                    <span>{user.location ?? 'Not Available'}</span> 
                </li>
                <li>
                    <BsLink45Deg />
                    <a href={user?.blog ?? ''}>{user?.blog?.length == 0 ? 'Not Available': user.blog}</a>
                </li>
                <li>
                    <BsTwitter />
                    <a href={`https://twitter.com/${user.twitter}` ?? ''}>{user.twitter ?? 'Not Available'}</a>
                </li>
                <li>
                    <BsBuildingsFill />
                    <a href={`https://github.com/${user.company}` ?? ''}> {user.company ?? 'Not Available'} </a>
                </li>
            </ul>
        </section>
    </article>
  )
}

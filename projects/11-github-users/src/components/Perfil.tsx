
import {BsGeoAltFill, BsLink45Deg, BsTwitter, BsBuildingsFill} from "react-icons/bs"
import { User } from "./data/interfaces";

interface Props {
    user: User
}

export const Perfil = ({user}: Props) => {
  return (
    <article>
        {/* encabezado */}
        <header>
            <img src={user.avatarUrl} />
            <div>
                <span>{user.name}</span>
                <a href={user.htmlUrl}> @{user.username} </a>
                <span>{user.createdAt}</span>
            </div>
            <p>{user.bio}</p>
        </header>
        {/* repos */}
        <section>
            <ul>
                <li>
                    Repos
                    {user.publicRepos}
                </li>
                <li>
                    Followers
                    {user.followers}
                </li>
                <li>
                    Following
                    {user.following}
                </li>
            </ul>
        </section>
        {/* extra info */}
        <section>
            <ul>
                <li>
                    <BsGeoAltFill />
                    {user.location}
                </li>
                <li>
                    <BsLink45Deg />
                    {user.blog}
                </li>
                <li>
                    <BsTwitter />
                    <a href={user.twitter ?? ''}>{user.twitter ?? 'Not Available'}</a>
                </li>
                <li>
                    <BsBuildingsFill />
                    <a href={user.company ?? ''}> {user.company ?? 'Not Available'} </a>
                </li>
            </ul>
        </section>
    </article>
  )
}

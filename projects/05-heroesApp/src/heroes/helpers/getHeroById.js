import { heroes } from "../../assets/data";

export const getHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
}
import { Character } from "@/interface";


export const getCharacter = async (id: string): Promise<Character> => {
    const response = await fetch(`https://www.amiiboapi.com/api/amiibo/?tail=${id}`);
    const data = await response.json();
    return data.amiibo[0];
};
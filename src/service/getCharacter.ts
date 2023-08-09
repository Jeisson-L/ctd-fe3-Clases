import { Character } from "@/interface";


export const getCharacter = async (id: string): Promise<Character> => {
    const response = await fetch(`https://amiiboapi.com/api/amiibo/?tail=${id}`);
    const data: { amiibo: Character[] } = await response.json();
    return data.amiibo[0];
};
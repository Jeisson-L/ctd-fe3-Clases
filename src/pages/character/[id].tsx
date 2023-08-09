import { Layout } from '@/components/layouts';
import React from 'react'
import { Character } from '../../interface/character';
import { Card } from '@/components/ui/card';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getCharacters } from '@/service';
import { getCharacter } from '@/service/getCharacter';

interface Props {
    character: Character;
}

const CharacterPage: NextPage<Props> = ({ character }) => {
    return (
        <Layout title="Character" description={`Pagina del personaje `}>
            <h1>Character Page</h1>
            <Card character={character} />
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (locales) => {
    const idiomas = locales.locales as string[];
    const data = await getCharacters();
    const paths = data.flatMap((character) => (
        idiomas.map((idioma: string) => ({ params: { id: character.tail }, locale: idioma }))
    ))

    console.table(paths)
    return {
        paths: paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string
    const character = await getCharacter(id);
    return {
        props: {
            character,
        },
    };
}

export default CharacterPage;
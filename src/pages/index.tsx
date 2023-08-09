import styles from "@/styles/Home.module.css";
import { Character } from '../interface';
import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/router";
import { CONTENT_BY_LOCALE } from "@/locale";
import { getCharacters } from "@/service";

interface Props {
	characters: Character[];
}

const Home: NextPage<Props> = ({ characters }) => {
	const { locale } = useRouter()
	const localContent = CONTENT_BY_LOCALE[locale as keyof typeof CONTENT_BY_LOCALE]
	const { home } = localContent

	return (
		<Layout title={'Ecommerce App - DH'} description='Ecommerce de Figuras coleccionables, Mario, Luigi'>
			<h1>{home.title}</h1>
			<div className={styles.grid}>
				{characters?.map((character) => (
					<Card key={character.tail} character={character} />
				))}
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await getCharacters();

	return {
		props: {
			characters: data,
		},
	};
};

export default Home;

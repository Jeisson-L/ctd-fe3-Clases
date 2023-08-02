import styles from "@/styles/Home.module.css";
import { Character } from '../interface';
import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layouts";
import { Card } from "@/components/ui/card";

interface Props {
	characters: Character[];
}

const Home: NextPage<Props> = ({ characters }) => {
	return (
		<Layout title='Ecommerce App - DH' description='Ecommerce de Figuras coleccionables, Mario, Luigi'>
			<h1>Mario</h1>
			<div className={styles.grid}>
				{characters?.map((character) => (
					<Card key={character.tail} character={character} />
				))}
			</div>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const character = await fetch("https://amiiboapi.com/api/amiibo/");
	const rest = await character.json();
	const data = rest.amiibo.slice(0, 20);

	return {
		props: {
			characters: data,
		},
	};
};

export default Home;
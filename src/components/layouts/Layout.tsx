import Head from "next/head";
import React, { FC } from "react";
import { Navbar } from "../ui/navbar/Navbar";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
    title: string;
    description: string;
    keywords?: string;
}

export const Layout: FC<Props> = ({ children, title, description, keywords }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
                <meta
                    name="keywords"
                    content={keywords || "sds"}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/*redes sociales */}
                <meta property="org:tittle" content={title} />
                <meta property="org:description" content={description} />
                <meta property="org:image" content='/img/mario.jpg' />
                <meta property="org:type" content='website' />

                <link rel="icon" href="/favicon.ico" />
                <meta charSet="utf-8" />
            </Head>
            <Navbar />
            <main>
                {children}
            </main>
        </>
    );
};
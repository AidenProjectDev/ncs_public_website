import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";

// TODO:
// - Change the meta image by the official NextCitizens image (1200x628)
// - Change the favicon

export default function Home() {
    return (
        <>
            <Head>
                <title>Boost and develop your FiveM server | NextCitizens</title>
                <meta name="title" content="Boost and develop your FiveM server | NextCitizens"/>
                <meta name="description" content="You are looking for the best framework to create your FiveM server. You are at the right place. Use our powerful framework for free right now." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextcitizens.net/" />
                <meta property="og:title" content="Boost and develop your FiveM server | NextCitizens" />
                <meta property="og:description" content="You are looking for the best framework to create your FiveM server. You are at the right place. Use our powerful framework for free right now." />
                <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nextcitizens.net/" />
                <meta property="twitter:title" content="Boost and develop your FiveM server | NextCitizens" />
                <meta property="twitter:description" content="You are looking for the best framework to create your FiveM server. You are at the right place. Use our powerful framework for free right now." />
                <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar active={"home"}/>
        </>
    )
}

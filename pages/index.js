import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import Link from "next/link";
import {useEffect} from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Home() {
    const codeSimplicity = "function API_Player:getClosest()\n\treturn (playerClosest), (playerClosestDistance)\nend";

    const particlesInit = async (engine) => {
        await loadStarsPreset(engine);
    };

    const options = {
        preset: "stars",
        background: {
            color: {
                value: "#2b3741"
            }
        },
        particles: {
            move: {
                speed: 1
            }
        }
    };

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
                <meta property="og:image" content="/social_background.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nextcitizens.net/" />
                <meta property="twitter:title" content="Boost and develop your FiveM server | NextCitizens" />
                <meta property="twitter:description" content="You are looking for the best framework to create your FiveM server. You are at the right place. Use our powerful framework for free right now." />
                <meta property="twitter:image" content="/social_background.png" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar active={"home"}/>

            <div className={styles.mainContainer}>
                <h1 className={styles.mainTitle}>NextCitizens</h1>
                <h2 className={styles.subTitle}>The future of FiveM</h2>

                <div className={styles.buttonContainer}>
                    <Link href="https://docs.nextcitizens.net">
                        <a className={styles.button} style={{marginRight: '1rem'}}>
                            Get started
                        </a>
                    </Link>
                    <Link href="https://github.com/NextCitizens">
                        <a className={styles.buttonOutline} style={{marginLeft: '1rem'}}>
                            GitHub
                        </a>
                    </Link>
                </div>
            </div>

            <Particles
                id={"particles-js"}
                init={particlesInit}
                options={options}
            />

            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.rowLeft}>
                        <h3>1. Simplicity</h3>
                        <p>
                            NextCitizens is the simpliest framework to build a FiveM server. It is easy to use and it is very easy to learn.
                        </p>
                    </div>
                    <div className={styles.rowRight}>
                        <SyntaxHighlighter language="lua" style={monokaiSublime}>
                            {codeSimplicity}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.rowRight}>
                        <SyntaxHighlighter language="lua" style={monokaiSublime}>
                            {codeSimplicity}
                        </SyntaxHighlighter>
                    </div>
                    <div className={styles.rowLeft}>
                        <h3>2. Powerful</h3>
                        <p>
                            We are the most powerful FiveM framework. You can use our new features to program your best scripts.
                        </p>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.rowCentered}>
                        <h3>3. Open source</h3>
                        <p>
                            Our project is completely open source. Thus, everyone can contribute to the project to make it better.
                        </p>
                    </div>
                </div>

                <div className={"banner"}>
                    <div className={"banner-content"}>
                        <h4>Join our Discord</h4>
                        <h5>
                            To get announcements about new features and updates.
                        </h5>
                    </div>
                    <a className={styles.buttonOutline} href="https://discord.gg/BgscMfAtJj" target={"_blank"}>Official Discord</a>
                </div>

            </div>

            <Footer />
        </>
    )
}

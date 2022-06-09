import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faBrain, faBullhorn} from "@fortawesome/free-solid-svg-icons";

const about = () => {
    return (<>
        <Head>
            <title>About | Boost and develop your FiveM server | NextCitizens</title>
            <meta name="title" content="About | Boost and develop your FiveM server | NextCitizens"/>
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

        <Navbar active={"about"}/>

        <div className={styles.mainContainer}>
            <h1 className={styles.mainTitle}>Discover Us</h1>
            <h2 className={styles.subTitle}>Why NCS is the best framework ?</h2>
        </div>

        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.rowLeft}>
                    <h3><FontAwesomeIcon icon={faBrain} /> Our mindset</h3>
                    <p>
                        We think that the best way to create a FiveM server is to use a framework. In addition,
                        the open source code of our framework allows all developers to add features and fix security issues.
                    </p>
                </div>
                <div className={styles.rowRight}>
                    <img src="https://picsum.photos/300" alt="Random generated picture"/>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.rowRight}>
                    <img src="https://picsum.photos/300" alt="Random generated picture"/>
                </div>
                <div className={styles.rowLeft}>
                    <h3><FontAwesomeIcon icon={faBook} /> Up-to-date and complete documentation</h3>
                    <p>
                        We have a complete documentation for all features of our framework and we maintain it for you.
                    </p>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.rowLeft}>
                    <h3><FontAwesomeIcon icon={faBullhorn} /> Community</h3>
                    <p>
                        Our community is based on the open source code of our framework.
                        We are always looking for new features and improvements from our users.
                    </p>
                </div>
                <div className={styles.rowRight}>
                    <img src="https://picsum.photos/300" alt="Random generated picture"/>
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
    </>)
}

export default about;

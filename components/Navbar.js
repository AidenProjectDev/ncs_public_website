import Link from "next/link";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const links = [
    { href: "/", label: "Home", active: "home", newTab: false},
    { href: "/about", label: "About", active: "about", newTab: false},
    { href: "https://docs.nextcitizens.net", label: "Documentation", active: "documentation", newTab: false },
    { href: "https://discord.gg/BgscMfAtJj", label: "Discord", active: "discord", newTab: true },
]

const Navbar = ({active}) => {
    const linksComponents = links.map(link => {
        return (
            <Link href={link.href} key={link.label}>
                <a className={active === link.active ? "active" : ""} target={link.newTab ? "_blank" : ""}>{link.label} {link.newTab ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{marginLeft: ".5rem", height: "16px"}}/> : ""}</a>
            </Link>
        )
    })

    return (
        <nav className="navbar">
            <div></div>
            <div id={"links-container"}>
                { linksComponents }
            </div>
            <div></div>
        </nav>
    )
}

export default Navbar

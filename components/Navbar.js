import Link from "next/link";

const links = [
    { href: "/", label: "Home", active: "home" },
    { href: "/about", label: "About", active: "about" },
    { href: "https://docs.nextcitizens.net", label: "Documentation", active: "documentation" },
    { href: "https://discord.gg/BgscMfAtJj", label: "Discord", active: "discord" },
]

const Navbar = ({active}) => {
    const linksComponents = links.map(link => {
        return (
            <Link href={link.href} key={link.label}>
                <a className={active === link.active ? "active" : ""}>{link.label}</a>
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

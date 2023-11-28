import Link from "next/link";
import Image from "next/image";
import style from "./header.style.module.scss";
import phoneImg from "./assets/phone.svg";
import mailImg from "./assets/mail.svg";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import github from "./assets/github.svg";
import titleLogo from "./assets/foodLogo.png";

export default function Header() {
    const socialIcon = [
        { iconPath: twitter, iconName: "twitter" },
        { iconPath: facebook, iconName: "facebook" },
        { iconPath: instagram, iconName: "instagram" },
        { iconPath: github, iconName: "github" },
    ];
    return (
        <>
            <div className={style.headerTopContainer}>
                <div className={style.headerTop}>
                    <div className={style.contactWrapper}>
                        <div className={style.headerContacts}>
                            <Image src={phoneImg} alt='phone'></Image>
                            <p>(414) 857 - 0107</p>
                        </div>

                        <div className={style.headerContacts}>
                            <Image src={mailImg} alt='phone'></Image>
                            <p>yummy@bistrobliss</p>
                        </div>
                    </div>

                    <div className={style.headerSocials}>
                        {socialIcon.map((el, i) => (
                            <Image src={el.iconPath} alt={el.iconName} key={i}></Image>
                        ))}
                    </div>
                </div>
            </div>

            <div className={style.headerBotContainer}>
                <div className={style.headerBot}>
                    <div className={style.titleBlock}>
                        <Link href='/home'>
                            <Image src={titleLogo} alt='titleLogo'></Image>
                            <h1>Bistro Bliss</h1>
                        </Link>
                    </div>

                    <nav>
                        <p>
                            <Link href='/home'> Home</Link>
                        </p>
                        <p>
                            <Link href='/about'> About</Link>
                        </p>
                        <p>
                            <Link href='/menu'> Menu</Link>
                        </p>
                    </nav>

                    <div className={style.titleBtn}>Book A Table</div>
                </div>
            </div>
        </>
    );
}

import Image from "next/image";
import style from "./footer.style.module.scss";
import footerLogo from "./assets/footerLogo.png";
import food1 from "./assets/food1.png";
import food2 from "./assets/food2.png";
import food3 from "./assets/food3.png";
import food4 from "./assets/food4.png";

export default function Footer() {
    <>
        <div className={style.footerContainer}>
            <div className={style.footerDesc}>
                <div className={style.footerBlock}>
                    <Image src={footerLogo} alt='titleLogo'></Image>
                    <h2>Bistro Bliss</h2>
                </div>

                <p>
                    In the new era of technology we look a in the future with certainty and pride to
                    for our company and.
                </p>
            </div>

            <div className={style.footerNav}></div>

            <div className={style.footerFood}></div>
        </div>
    </>;
}

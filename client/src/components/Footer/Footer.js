import Image from "next/image";
import style from "./footer.style.module.scss";
import footerLogo from "./assets/footerLogo.png";
import food1 from "./assets/food1.png";
import food2 from "./assets/food2.png";
import food3 from "./assets/food3.png";
import food4 from "./assets/food4.png";

export default function Footer() {
    const linkFooterBlockLeft = ["Home", "About", "Menu", "Pricing", "Blog", "Contact", "Delivery"];
    const linkFooterBlockRight = [
        "Start Here",
        "Styleguide",
        "Password Protected",
        "404 Not Found",
        "Licenses",
        "Changelog",
        "View More",
    ];

    const foodImg = [
        { imgPath: food1, imgName: "food1" },
        { imgPath: food2, imgName: "food2" },
        { imgPath: food3, imgName: "food3" },
        { imgPath: food4, imgName: "food4" },
    ];

    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.footerWrapper}>
                    <div className={style.footerDesc}>
                        <div className={style.footerBlock}>
                            <Image src={footerLogo} alt='titleLogo'></Image>
                            <h2>Bistro Bliss</h2>
                        </div>

                        <p>
                            In the new era of technology we look a in the future with certainty and
                            pride to for our company and.
                        </p>
                    </div>

                    <div className={style.footerNav}>
                        <div className={style.footerLinkBlockLeft}>
                            <h2>Pages</h2>

                            {linkFooterBlockLeft.map((el, i) => (
                                <p key={i}>{el}</p>
                            ))}
                        </div>

                        <div className={style.footerLinkBlockRight}>
                            <h2>Utility Pages</h2>

                            {linkFooterBlockRight.map((el, i) => (
                                <p key={i}>{el}</p>
                            ))}
                        </div>
                    </div>

                    <div className={style.footerFoodBlock}>
                        <h2>Follow Us On Instagram</h2>

                        <div className={style.footerFood}>
                            {foodImg.map((el, i) => (
                                <Image
                                    className={style.foodImg}
                                    src={el.imgPath}
                                    alt={el.imgName}
                                    key={i}
                                ></Image>
                            ))}
                        </div>
                    </div>
                </div>

                <p className={style.footerAuthor}>
                    Copyright © 2023 Hashtag Developer. All Rights Reserved
                </p>
            </div>
        </>
    );
}

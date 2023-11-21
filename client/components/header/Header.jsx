import React from "react";
import style from "./header.style.scss";
import Image from "next/image";
import phoneSvg from "./assets/phoneSvg.svg";
import mailSvg from "./assets/mailSvg.svg";

const Header = () => {
    return (
        <>
            {/* <div className={style.headerContainer}>
                <div className={style.headerContactWrapper}>
                    <div className={style.headerContact}>
                        <Image src={phoneSvg} alt='phoneSvg' />
                    </div>

                    <div className={style.headerSocials}></div>
                </div>

                <div className={style.headerTopWrapper}></div>
            </div> */}
        </>
    );
};

export default Header;

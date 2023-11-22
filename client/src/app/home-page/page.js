import Image from "next/image";
import style from "./homePage.style.module.scss";
import homeImage from "./assets/titleImg.png";
import menuItemCupIcon from "./assets/menuItemCupIcon.svg";
import menuItemRiseIcon from "./assets/menuItemRiseIcon.svg";
import menuItemDrinkIcon from "./assets/menuItemDrinkIcon.svg";
import menuItemCakeIcon from "./assets/menuItemCakeIcon.svg";
import serviceDrink from "./assets/serviceDrink.png";
import serviceHB from "./assets/serviceHB.png";
import serviceWedding from "./assets/serviceWedding.png";
import serviceHoliday from "./assets/serviceHoliday.png";

export default function HomePage() {
    const menuList = [
        {
            itemImg: menuItemCupIcon,
            itemImgName: "menuItemCupIcon",
            titleText: "Breakfast",
            titleDescription:
                "In the new era of technology we look in the future with certainty and pride for our life.",
        },
        {
            itemImg: menuItemRiseIcon,
            itemImgName: "menuItemRiseIcon",
            titleText: "Main Dishes",
            titleDescription:
                "In the new era of technology we look in the future with certainty and pride for our life.",
        },
        {
            itemImg: menuItemDrinkIcon,
            itemImgName: "menuItemDrinkIcon",
            titleText: "Drinks",
            titleDescription:
                "In the new era of technology we look in the future with certainty and pride for our life.",
        },
        {
            itemImg: menuItemCakeIcon,
            itemImgName: "menuItemCakeIcon",
            titleText: "Desserts",
            titleDescription:
                "In the new era of technology we look in the future with certainty and pride for our life.",
        },
    ];
    const serviceList = [
        {
            serviceImg: serviceDrink,
            serviceImgName: "serviceDrink",
            titleText: "Caterings",
            titleDescription:
                "In the new era of technology we look in the future with certainty for life.",
        },
        {
            serviceImg: serviceHB,
            serviceImgName: "serviceHB",
            titleText: "Birthdays",
            titleDescription:
                "In the new era of technology we look in the future with certainty for life.",
        },
        {
            serviceImg: serviceWedding,
            serviceImgName: "serviceWedding",
            titleText: "Weddings",
            titleDescription:
                "In the new era of technology we look in the future with certainty for life.",
        },
        {
            serviceImg: serviceHoliday,
            serviceImgName: "serviceHoliday",
            titleText: "Events",
            titleDescription:
                "In the new era of technology we look in the future with certainty for life.",
        },
    ];
    return (
        <>
            <div className={style.homePageContainer}>
                <div className={style.homePageTitle}>
                    <Image
                        className={style.homeImage}
                        src={homeImage}
                        alt='titleImage'
                        quality={75}
                    ></Image>

                    <div className={style.homePageTitleWrapper}>
                        <div className={style.homePageTitleBlock}>
                            <h1>Best food for your taste</h1>
                            <p>
                                Discover delectable cuisine and unforgettable moments in our
                                welcoming, culinary haven.
                            </p>

                            <div className={style.homePageMenuBtn}>
                                <div className={style.bookBtn}>Book A Table</div>

                                <div className={style.menuBtn}>Explore Menu</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.homePageMenu}>
                    <div className={style.homePageMenuWrapper}>
                        <h2>Browse Our Menu</h2>

                        <div className={style.menuList}>
                            {menuList.map((el, i) => (
                                <div className={style.menuItem} key={i}>
                                    <Image src={el.itemImg} alt={el.itemImgName}></Image>

                                    <h3>{el.titleText}</h3>
                                    <p>{el.titleDescription}</p>

                                    <p className={style.menuLink}>Explore Menu</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={style.homePageService}>
                    <div className={style.homePageServiceWrapper}>
                        <h2>We also offer unique services for your events</h2>

                        <div className={style.serviceList}>
                            {serviceList.map((el, i) => (
                                <div className={style.serviceItem} key={i}>
                                    <Image
                                        className={style.serviceImg}
                                        src={el.serviceImg}
                                        alt={el.serviceImgName}
                                    ></Image>

                                    <h3>{el.titleText}</h3>
                                    <p>{el.titleDescription}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

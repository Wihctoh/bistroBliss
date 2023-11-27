import Image from "next/image";
import style from "./about.style.module.scss";
import eggImg from "./assets/eggImg.png";
import phoneImg from "./assets/phone.svg";
import mailImg from "./assets/mail.svg";
import locationImg from "./assets/location.svg";
import vegetableImg from "./assets/vegetable.png";

export default function About() {
    const contactInfo = [
        { icon: phoneImg, iconName: "phoneImg", description: "(414) 857 - 0107" },
        { icon: mailImg, iconName: "mailImg", description: "happytummy@restaurant.com" },
        {
            icon: locationImg,
            iconName: "locationImg",
            description: "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles",
        },
    ];

    const vegetable = [
        { h3: "3", p: "Locations" },
        { h3: "1995", p: "Founded" },
        { h3: "65+", p: "Staff Members" },
        { h3: "100%", p: "Satisfied Customers" },
    ];
    return (
        <>
            <div className={style.aboutContainer}>
                <div className={style.healthyFoodContainer}>
                    <div className={style.healthyFoodWrapper}>
                        <div className={style.healthyFoodItem}>
                            <Image className={style.eggImg} src={eggImg} alt='eggImg'></Image>

                            <div className={style.healthyFoodItemInfo}>
                                <h3>Come and visit us</h3>

                                <div className={style.healthyFoodVisitsInfo}>
                                    {contactInfo.map((el, i) => (
                                        <div className={style.healthyFoodItemContacts} key={i}>
                                            <Image src={el.icon} alt={el.iconName}></Image>
                                            <p>{el.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={style.healthyFoodDescription}>
                            <h1>We provide healthy food for your family.</h1>
                            <h3>
                                Our story began with a vision to create a unique dining experience
                                that merges fine dining, exceptional service, and a vibrant
                                ambiance. Rooted in city's rich culinary culture, we aim to honor
                                our local roots while infusing a global palate.
                            </h3>
                            <p>
                                At place, we believe that dining is not just about food, but also
                                about the overall experience. Our staff, renowned for their warmth
                                and dedication, strives to make every visit an unforgettable event.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.vegetableContainer}>
                    <div className={style.vegetableWrapper}>
                        <div className={style.vegetableInfo}>
                            <div className={style.vegetableTitle}>
                                <h2>A little information for our valuable guest</h2>
                                <p>
                                    At place, we believe that dining is not just about food, but
                                    also about the overall experience. Our staff, renowned for their
                                    warmth and dedication, strives to make every visit an
                                    unforgettable event.
                                </p>
                            </div>

                            <div className={style.vegetableStatistic}>
                                {vegetable.map((el, index) => (
                                    <div className={style.vegetableBlock} key={index}>
                                        <h3>{el.h3}</h3>
                                        <p>{el.p}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Image src={vegetableImg} alt='vegetableImg'></Image>
                    </div>
                </div>
            </div>
        </>
    );
}

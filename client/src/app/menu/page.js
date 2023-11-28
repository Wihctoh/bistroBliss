import Image from "next/image";
import style from "./menu.style.module.scss";
import eggImg from "./assets/eggImg.png";
import pizzaImg from "./assets/pizzaImg.png";
import coctailImg from "./assets/coctailImg.png";
import cakeImg from "./assets/cakeImg.png";
import mintImg from "./assets/mintImg.png";
import icaCreamImg from "./assets/icaCreamImg.png";
import burgerImg from "./assets/burgerImg.png";
import wafflesImg from "./assets/wafflesImg.png";

export default function Menu() {
    const foodItem = [
        {
            img: eggImg,
            alt: "eggImg",
            price: "$ 9.99",
            title: "Fried Eggs",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: pizzaImg,
            alt: "pizzaImg",
            price: "$ 15.99",
            title: "Hawaiian Pizza",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: coctailImg,
            alt: "coctailImg",
            price: "$ 7.25",
            title: "Martinez Cocktail",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: cakeImg,
            alt: "cakeImg",
            price: "$ 20.99",
            title: "Butterscotch Cake",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: mintImg,
            alt: "mintImg",
            price: "$ 5.89",
            title: "Mint Lemonade",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: icaCreamImg,
            alt: "icaCreamImg",
            price: "$ 18.05",
            title: "Chocolate Icecream",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: burgerImg,
            alt: "burgerImg",
            price: "$ 12.55",
            title: "Cheese Burger",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
        {
            img: wafflesImg,
            alt: "wafflesImg",
            price: "$ 12.99",
            title: "Classic Waffles",
            description: "Made with eggs, lettuce, salt, oil and other ingredients.",
        },
    ];
    return (
        <>
            <div className={style.menuContainer}>
                <div className={style.menuWrapper}>
                    <div className={style.menuTitle}>
                        <h1>Our Menu</h1>
                        <p>
                            We consider all the drivers of change gives you the components you need
                            to change to create a truly happens.
                        </p>
                    </div>

                    <div className={style.menuFoodItemsContainer}>
                        {foodItem.map((el, index) => (
                            <div className={style.menuFoodItemsBox} key={index}>
                                <Image src={el.img} alt={el.alt}></Image>

                                <p className={style.foodPrice}>{el.price}</p>
                                <p className={style.foodTitle}>{el.title}</p>
                                <p className={style.foodDescription}>{el.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

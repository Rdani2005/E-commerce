import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {

    const Menus = [
        { name: "Home", icon: "home-outline", dis: "translate-x-0", link: "/" },
        { name: "Profile", icon: "person-outline", dis: "translate-x-16", link: "/profile" },
        { name: "Cart", icon: "cart-outline", dis: "translate-x-32", link: "/cart" },
        { name: "Search", icon: "search-outline", dis: "translate-x-48", link: "/search" },
        { name: "Settings", icon: "settings-outline", dis: "translate-x-64", link: "/settings" },
    ];
    const [active, setActive] = useState(0);
    return (
        <div className="fixed bottom-10 w-full bg-transparent flex justify-center">
            <div className="bg-gray-700 max-h-[4.4rem] mt-5  px-6 rounded-xl text-white">
                <ul className="flex relative">
                    <span
                        className={`bg-blue-900 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
             -top-5 rounded-full`}
                    >
                        <span
                            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
              rounded-tr-[11px] shadow-myShadow1"
                        ></span>
                        <span
                            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
              rounded-tl-[11px] shadow-myShadow2"
                        ></span>
                    </span>
                    {Menus.map((menu, i) => (
                        <li key={i} className="w-16">
                            <Link
                                to={menu.link}
                                className="flex flex-col text-center pt-6"
                                onClick={() => setActive(i)}
                            >
                                <span
                                    className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-white"
                                        }`}
                                >
                                    <ion-icon name={menu.icon}></ion-icon>
                                </span>
                                <span
                                    className={` ${active === i
                                        ? "translate-y-4 duration-700 opacity-100"
                                        : "opacity-0 translate-y-10"
                                        } `}
                                >
                                    {menu.name}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default Navbar
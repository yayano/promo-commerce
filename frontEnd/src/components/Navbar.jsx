import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import ThemeBtn from "../components/ThemeBtn";
import { ThemeProvider } from "../context/theme";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
    console.log(themeMode);
  }, [themeMode]);

  const {
    setShowSearch,
    showSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("login");
  };
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex items-center justify-between py-5 font-medium">
        <Link to="/">
          <img
            src={themeMode === "light" ? assets.logo : assets.darkLogo}
            className="w-36"
            alt=""
          />
        </Link>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 dark:text-gray-400">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>ACCUEIL</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>À PROPOS</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 dark:bg-gray-400 hidden" />
          </NavLink>
        </ul>
        <ThemeBtn />
        <div className="flex items-center gap-6 ">
          <img
            src={
              themeMode === "light"
                ? assets.search_icon
                : assets.search_icon_dark
            }
            onClick={() => setShowSearch(!showSearch)}
            className="w-5 cursor-pointer"
            alt=""
          />
          <div className="group relative">
            <img
              className="w-5 cursor-pointer "
              src={
                themeMode === "light"
                  ? assets.profile_icon
                  : assets.profile_icon_dark
              }
              alt=""
              onClick={() => (token ? null : navigate("/login"))}
            />
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p className="cursor-pointer hover:text-black">MON PROFIL</p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    COMMANDES
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    DÉCONNEXION
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative">
            <img
              src={
                themeMode === "light" ? assets.cart_icon : assets.cart_icon_dark
              }
              className="w-5 min-w-5"
              alt=""
            />
            <p className="absolute right-[-15px] bottom-[-5px] w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            src={
              themeMode === "light" ? assets.menu_icon : assets.menu_icon_dark
            }
            className="w-5 cursor-pointer sm:hidden"
            alt=""
            onClick={() => setVisible(true)}
          />
        </div>
        {/** Sidebar menu for small screen  */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white dark:bg-[#121212] transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600 dark:text-gray-300">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                src={assets.dropdown_icon}
                className="h-4 rotate-180"
                alt=""
              />
              <p>RETOUR</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              ACCUEIL
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/collection"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              À PROPOS
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;

import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../App/CartSlice";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const totalQTY = useSelector(selectTotalQTY);

  // untuk redux
  const dispatch = useDispatch();

  // mengambil dari cartSlice (setOpenCart)
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute border rounded-lg border-slate-100 py-3 mx-8 top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-7 border left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className={` w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style  ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                onClick={onCartToggle}
                type="button"
                className="border-none outline-none active:sclae-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style  ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={` absolute -top-1 right-0  w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-black text-slate-100 shadow-slate-900"
                      : "bg-black text-slate-100 shadow-slate-900"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

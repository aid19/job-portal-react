// import { useClickAway } from "react-use";
// import { useRef } from "react";
// import { useState } from "react";
// import { Squash as Hamburger } from "hamburger-react";
// import { AnimatePresence, motion } from "framer-motion";
// import { routes } from "../routes";
// import { BiHomeAlt2 } from "react-icons/bi";
// import { FiSearch } from "react-icons/fi";
// import { PiChatCircleBold } from "react-icons/pi";
// import { IoPricetagsOutline } from "react-icons/io5";

// const nav = [
//   {
//     title: "Home",
//     href: "#",
//     Icon: BiHomeAlt2,
//   },
//   {
//     title: "Explore",
//     href: "#",
//     Icon: FiSearch,
//   },
//   {
//     title: "Pricing",
//     href: "#",
//     Icon: IoPricetagsOutline,
//   },
//   {
//     title: "About",
//     href: "#",
//     Icon: PiChatCircleBold,
//   },
// ];

// export const NavMobile = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <div className="lg:hidden ">
//       <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
//     </div>
//   );
// };
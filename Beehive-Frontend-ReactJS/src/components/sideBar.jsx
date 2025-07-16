import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi"; // Import Logout Icon
const menuItems = [
  {
    label: "Dashboard",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa9b3de4de51e0f368f6185f93c096472cd82b15d6339627da2e2eee80cf37a5?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
    path: "/",
  },
  {
    label: "Hives List",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f5a2949fe4b63e79046c8333857089b4d7812f8b91480152b7cb5afd109d9d6?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
    path: "/hivelist",
  },
  {
    label: "Documentation",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a3c213f5133132a63408b0446d68d0333948a0b8cccaa3a727973b56bbed92e?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
    path: "/documentation",
  },
  {
    label: "Support",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3d65956cf436bf12682deec2cf19a45501ab34dec801c73fa809ab79c28f8fa?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801",
    path: "/support",
  },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full h-screen">
      <div className="flex flex-col grow px-4 pt-4 pb-7 w-full text-xs font-semibold leading-loose bg-orange-100 text-stone-700 h-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d088f690e5ab1bc29b66d083d409dab8f35341da8e04455104e2bdd22f519bc?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
          alt="Logo"
          className="object-contain self-center max-w-full aspect-[1.69] w-[108px]"
        />
        <div className="flex flex-col mt-6 w-full flex-grow">
          {menuItems.map((item, index) => (
            <ul
              key={index}
              className={`flex overflow-hidden gap-3 items-center px-4 py-3 ${
                index > 0 ? "mt-5" : ""
              } w-full whitespace-nowrap rounded-lg min-h-[36px] cursor-pointer ${
                location.pathname === item.path ? "bg-amber-300" : ""
              }`}
            >
              <li className="flex flex-1 shrink gap-3 self-stretch my-auto w-full basis-0 max-md:justify-center">
                <img
                  loading="lazy"
                  src={item.icon}
                  alt=""
                  className="object-contain shrink-0 my-auto w-4 aspect-square"
                />
                <a
                  href={item.path}
                  className="flex-1 shrink basis-0 max-md:hidden"
                >
                  {item.label}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="mt-auto">
          <button
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg bg-gray-100 text-stone-700 hover:bg-gray-200 transition"
            onClick={handleSignOut}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3d65956cf436bf12682deec2cf19a45501ab34dec801c73fa809ab79c28f8fa?placeholderIfAbsent=true&apiKey=ca516fbee743436d9ea048943e88f801"
              alt="Sign Out Icon"
              className="w-4 aspect-square"
            />
            <span className="max-md:hidden">Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

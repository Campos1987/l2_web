'use client'
import { UserRound } from "lucide-react";
import Logo from "../Logo/Logo";
import ToggleMobile from "./ToggleMobile/ToggleMobile";

const Header = () => {
  return (
    <header className="bg-primary h-16 w-full flex items-cente">
      <div className="grid grid-cols-6 w-full items-center">
        <div className="col-span-1 flex justify-start p-2">
          <ToggleMobile />
        </div>

        <div className="col-span-4 flex justify-center">
          <Logo />
        </div>

        <div className="col-span-1 flex justify-end p-2">
          <UserRound size={25} />
        </div>
      </div>
    </header>
  );
};

export default Header;

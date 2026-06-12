"use client";
import React, {useState, useCallback, useEffect, useRef} from "react";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { User } from "@prisma/client";
import { useRentModal } from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  const registerModal = useRegisterModal()
  const LoginModal = useLoginModal()
  const rentModal = useRentModal()

  const menuRef = useRef<HTMLDivElement>(null);

  const onRent = useCallback(() => {
    if(!currentUser){
      return LoginModal.onOpen()
    }

    rentModal.onOpen()

  }, [LoginModal, currentUser, rentModal])


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={menuRef} className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            "
        >
          Rentopia your home
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem label="Trips" onClick={() => router.push("/trips")} />
                <MenuItem
                  label="Favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="Reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="Properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem
                  label="Rentopia my home"
                  onClick={() => rentModal.onOpen()}
                />

                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={LoginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

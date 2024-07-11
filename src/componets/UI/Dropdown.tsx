import { Fragment } from "react";
import { Link, Form } from "react-router-dom";
import {
  Menu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { UserIcon } from "@heroicons/react/16/solid";

const Dropdown = ({ user, logout }: { user: any; logout: () => void }) => {
  return (
    <Menu as="div" className="relative inline-block z-[9999]">
      <MenuButton className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name ?? "User"}
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <UserIcon className="size-6 rounded-full" />
        )}
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems
          as="ul"
          className="absolute flex flex-col items-end gap-2 right-0 mt-2 p-5 w-32 origin-top-right  rounded-md bg-white   shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          {!user.token && (
            <>
              <MenuItem>
                <Link to="/login">Login</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/signup">Sign Up</Link>
              </MenuItem>
            </>
          )}

          {user.token && (
            <>
              <MenuItem>
                <Link to="/profile">Profile</Link>
              </MenuItem>

              <MenuItem>
                <button type="button" onClick={logout}>
                  Logout
                </button>
              </MenuItem>
            </>
          )}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Dropdown;

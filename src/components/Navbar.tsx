"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../../public/professional.jpg";

type Props = {};

const navigation = [
  { name: "Appointment", href: "/#appointment", current: false },
  { name: "Location", href: "/#office-location", current: false },
  { name: "Support", href: "/#support", current: false },
  { name: "Pricing", href: "/#pricing", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({}: Props) {
  return (
    <Disclosure as="nav" className="bg-slate-800 sticky top-0 z-10">
      {({ open }) => (
        <>
          {/* outer entire Navbar box border-4 border-red-700 */}
          <div className="mx-auto max-w-[1550px] px-6">
            {/* inner entire Navbar box border-4 border-blue-700 */}
            <div className="relative flex h-20 items-center justify-between">
              {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* PURPLE, Navbar box left, stretched to R border-4 border-purple-700 */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      className="h-8 w-auto"
                      src={logo}
                      alt="Company logo"
                      placeholder="blur"
                      sizes=""
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-4">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <a href={item.href}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* GREEN, Navbar box right border-4 border-green-700 */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Search component */}
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <MagnifyingGlassIcon className="h-8 w-8" aria-hidden="true" />
                </button>
                {/* Right panel profile */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-10 w-10 rounded-full"
                        src={logo}
                        placeholder="blur"
                        alt="Profile icon"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* Profile panel dropdown menu */}
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium  text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm font-medium  text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/* Mobile menu left panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

// export default function Navbar(props: NavbarProps) {
//   return (
//     <header className="bg-green-800 sticky top-0 z-10 font-bold text-lg md:text-xl">
//      {/* TODO does the logo go inside the nav element? */}
//      <nav className="hidden lg:flex items-center justify-between h-20 mx-28">
//        <ul className="left-nav flex gap-12 justify-around items-center">
//          <li>
//            <Link href="/">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                viewBox="0 0 24 24"
//                fill="currentColor"
//                className="w-10 h-10"
//              >
//                <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" />
//              </svg>
//            </Link>
//          </li>
//          <li className="hover:text-black">
//            <Link href="/#appointment">Appointments</Link>
//          </li>
//          <li className="hover:text-black">
//            <Link href="/#office-location">Office</Link>
//          </li>
//          <li className="hover:text-black">
//            <Link href="/support">Support</Link>
//          </li>
//          <li className="hover:text-black">
//            <Link href="/#pricing">Pricing</Link>
//          </li>
//        </ul>
//        <ul className="right-nav flex items-center gap-10">
//          <li>
//            <Link href="/" className="hover:text-black">
//              Search
//            </Link>
//          </li>
//          <li>
//            <Link href="/" className="hover:text-black">
//              Sign In
//            </Link>
//          </li>
//        </ul>
//      </nav>
//      <nav className="flex lg:hidden justify-between items-center pt-8 mx-10 md:ml-24">
//        <button type="button">
//          <svg
//            xmlns="http://www.w3.org/2000/svg"
//            fill="none"
//            viewBox="0 0 24 24"
//            stroke-width="1.5"
//            stroke="currentColor"
//            className="w-10 h-10"
//          >
//            <path
//              stroke-linecap="round"
//              stroke-linejoin="round"
//              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//            />
//          </svg>
//        </button>
//        <ul className="right-nav flex items-center gap-10">
//          <li>
//            <Link href="/" className="hover:text-black">
//              Search
//            </Link>
//          </li>
//          <li>
//            <Link href="/" className="hover:text-black">
//              Sign In
//            </Link>
//          </li>
//        </ul>
//      </nav>
//    </header>
//   );
// }

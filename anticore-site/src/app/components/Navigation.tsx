"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IoLogoVk, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,

  XMarkIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../../public/Logo.svg";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const links = [
  { text: "Цены", href: "/price", current: false },
  { text: "О нас", href: "/about", current: false },
  { text: "Услуги", href: "/services", current: false },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname()
  return (
    <Disclosure as="nav" className="bg-white bg rounded-b-md drop-shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div
              className="flex shrink-0 items-center"
              onClick={() => router.push("/")}
            >
              <Image alt="Anticore" width={50} height={50} src={Logo} />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {links.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-orange-400 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-400 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <DevicePhoneMobileIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {links.map((item, index) => (
            <DisclosureButton
              key={index}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.text}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

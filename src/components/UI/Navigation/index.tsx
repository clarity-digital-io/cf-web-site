import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import ClarityFormsLogo from '../Icons/ClarityFormsLogo'

const navigation = [
  { name: 'Salesforce Native', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'View on AppExchange', href: '#' },
  { name: 'Pricing', href: '#' },
]

export default function Navigation() {
  return (
    <Popover>
      <nav
        className="relative mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center">
          <div className="flex w-full items-center justify-between md:w-auto">
            <Link href="/">
              <span className="sr-only">Clarity Forms</span>
              <ClarityFormsLogo />
            </Link>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-gray-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-10">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-zinc-800 hover:text-zinc-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>

                <ClarityFormsLogo />

              </div>
              <div className="-mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-zinc-400 hover:bg-gray-100 hover:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-bold text-zinc-700 hover:bg-gray-50 hover:text-zinc-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

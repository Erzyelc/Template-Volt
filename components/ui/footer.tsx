import Image from 'next/image'
import Link from 'next/link'
import Illustration from '@/public/images/footer-illustration.svg'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Bg */}
      <div className="absolute inset-0 bg-blue-600 -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <Image className="max-w-none" src={Illustration} alt="Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Blocks */}
        <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-blue-500">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="Cruip">
              <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-blue-100 group-hover:fill-white transform duration-150 ease-in-out"
                  d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z"
                />
                <path
                  className="fill-sky-400 group-hover:fill-sky-300 transform duration-150 ease-in-out"
                  d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z"
                />
              </svg>
            </Link>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Essentials</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Payments
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Budgeting and analytics
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Open banking
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Pockets
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  About us
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Diversity / Inclusion
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Sustainability
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Code of conduct
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Financial statements
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Lifestyle</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  International products
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Product method
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Customers
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-xs text-gray-100 font-bold uppercase mb-3">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Community
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Contact
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  DPA
                </a>
              </li>
              <li>
                <a className="text-blue-300 hover:text-white transition duration-150 ease-in-out" href="#0">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                href="#0"
                aria-label="Twitter"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                href="#0"
                aria-label="Github"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li className="ml-2">
              <a
                className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                href="#0"
                aria-label="Telegram"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights */}
          <div className="text-sm text-blue-300">© Cruip.com. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

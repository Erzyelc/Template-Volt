import Link from 'next/link'

export default function AuthHeader() {
  return (
    <header className="flex-1 flex mb-auto">
      <div className="flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link className="block group" href="/" aria-label="Cruip">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              className="fill-blue-600 group-hover:fill-blue-500 transform duration-150 ease-in-out"
              d="M12 6v24C5.373 30 0 24.627 0 18S5.373 6 12 6Z"
            />
            <path
              className="fill-sky-400 group-hover:fill-sky-300 transform duration-150 ease-in-out"
              d="M10.807 6.059A10.003 10.003 0 0 1 20 0c5.523 0 10 4.477 10 10 0 4.123-2.496 7.664-6.059 9.193.04-.392.059-.79.059-1.193 0-6.627-5.373-12-12-12-.403 0-.8.02-1.193.059Z"
            />
          </svg>
        </Link>
      </div>
    </header>
  )
}
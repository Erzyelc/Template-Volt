import Image from 'next/image'
import Header from './header'
import Illustration from '@/public/images/hero-illustration.svg'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'
import Avatar06 from '@/public/images/avatar-06.jpg'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="flex">
      {/* Content */}
      <div className="min-h-screen w-full lg:w-1/2">
        <div className="h-full">
          <div className="h-full w-full max-w-md px-6 mx-auto flex flex-col after:mt-auto after:flex-1">

            <Header />

            <div className="flex-1 py-8">
              {children}
            </div>

          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">
        {/* Bg */}
        <div className="absolute inset-0 bg-blue-600 pointer-events-none -z-10" />

        {/* Illustration */}
        <div className="absolute left-1/2 -translate-x-1/4 pointer-events-none -z-10">
          <object type="image/svg+xml" data={Illustration.src} width="1440" height="1214" />
        </div>

        {/* Quotes */}
        <div className="absolute inset-0 flex flex-col justify-center space-y-3">
          <div className="flex flex-nowrap space-x-3 mx-auto -translate-x-1/4">
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-60 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <Image className="rounded-full" src={Avatar01} width={44} height={44} alt="Testimonial 01" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Martin Chapa</div>
                  <div className="font-medium text-sm text-gray-600">Visual Designer</div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-80 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <Image className="rounded-full" src={Avatar02} width={44} height={44} alt="Testimonial 01" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Doris Hernandez</div>
                  <div className="font-medium text-sm text-gray-600">Web Software Engineer</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap space-x-3 mx-auto">
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-80 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <Image className="rounded-full" src={Avatar03} width={44} height={44} alt="Testimonial 03" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Marika Omoniyi</div>
                  <div className="font-medium text-sm text-gray-600">Front-end Engineer</div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-70 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <Image className="rounded-full" src={Avatar04} width={44} height={44} alt="Testimonial 04" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Taiwo Akinnusoye</div>
                  <div className="font-medium text-sm text-gray-600">Product Manager</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap space-x-3 mx-auto translate-x-1/4">
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-40 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <Image className="rounded-full" src={Avatar05} width={44} height={44} alt="Testimonial 05" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Doris Hernandez</div>
                  <div className="font-medium text-sm text-gray-600">Front-end Engineer</div>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="w-72 shrink-0 p-4 bg-white rounded opacity-25 hover:opacity-100 transition duration-150 ease-in-out">
              <div className="flex items-center space-x-3">
                <div className="shrink-0">
                  <Image className="rounded-full" src={Avatar06} width={44} height={44} alt="Testimonial 06" />
                </div>
                <div>
                  <div className="font-cabinet-grotesk text-gray-900 font-bold">Mark Kushner</div>
                  <div className="font-medium text-sm text-gray-600">Sr Product Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

'use client'

import { useState, useRef, Fragment } from 'react'
import type { StaticImageData } from 'next/image'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

interface ModalVideoProps {
  thumb: StaticImageData
  thumbWidth: number
  thumbHeight: number
  thumbAlt: string
  video: string
  videoWidth: number
  videoHeight: number
}

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div>

      {/* Video thumbnail */}
      <div className="relative inline-flex justify-center items-center">
        <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
        {/* Illustration */}
        <svg className="absolute right-0 top-0 -mt-11 mr-9" xmlns="http://www.w3.org/2000/svg" width="69" height="77">
          <path
            className="fill-emerald-400"
            d="M19.987 69.903a16 16 0 0 1-4.12.88 10 10 0 0 1-4.6-.76 9.15 9.15 0 0 1-3.71-3l-.63-.93-.51-1a9.07 9.07 0 0 1-.76-2.31 16.42 16.42 0 0 1 1-8.18 46 46 0 0 1 3.11-6.78 58.58 58.58 0 0 1 8.65-11.79 60.66 60.66 0 0 1 11.18-9.44 45.88 45.88 0 0 1 9.67-4.87 28.1 28.1 0 0 1 11-1.65 25.07 25.07 0 0 1 9.68 2.59 18.08 18.08 0 0 1 4.34 2.92 12.86 12.86 0 0 1 3.16 4.55 13.64 13.64 0 0 1 1 5.31 20.71 20.71 0 0 1-.7 5 35.54 35.54 0 0 1-3.79 8.91 52.15 52.15 0 0 1-5.46 7.63 72.54 72.54 0 0 1-6.52 6.6 58.48 58.48 0 0 1-15.51 10.06 39.78 39.78 0 0 1-3.91 1.47c-.67.2-1.35.39-2 .56a10.66 10.66 0 0 1-2.74.25 7.59 7.59 0 0 1-2.73-.63 3.17 3.17 0 0 1-1.82-1.94c-.48-1.77.65-3.57 1.92-5 .15-.17.33-.38.46-.51l.37-.37c.25-.25.5-.5.75-.73.5-.49 1-.94 1.54-1.4 1-.91 2.11-1.76 3.2-2.59a66 66 0 0 1 6.81-4.53 44.56 44.56 0 0 1 9.75-4.32 22.28 22.28 0 0 1 5.53-.91 13.5 13.5 0 0 1 5.91 1.09 10.75 10.75 0 0 1 4.61 4.13l.74 1.32c.229.488.42.993.57 1.51.28.977.438 1.984.47 3a17.19 17.19 0 0 1-.73 5.58 21.73 21.73 0 0 1-2.16 5.06c-1.24 2-2.26 2.51-2.44 2.23-.18-.28.17-1.39.5-3.15a24.07 24.07 0 0 0 .33-7 13.91 13.91 0 0 0-.83-3.9 8.73 8.73 0 0 0-2.2-2.87 6.64 6.64 0 0 0-3-1.32 12.39 12.39 0 0 0-4 .05 31.68 31.68 0 0 0-8.84 3.07 59.18 59.18 0 0 0-8.36 5.16c-1.34 1-2.64 2-3.84 3.05-.3.27-.61.54-.88.81l-.54.52c-.11.1-.08.06-.12.11-.04.05 0 .15.12.16h.17l.42-.09.56-.14c.75-.2 1.51-.44 2.26-.71a47.25 47.25 0 0 0 8.79-4.41 65.55 65.55 0 0 0 14.92-13.36 41 41 0 0 0 6.16-10.25c1.47-3.62 2.17-7.66.82-10.69a8.43 8.43 0 0 0-3.29-3.74 19.61 19.61 0 0 0-2.45-1.33c-.45-.17-.89-.37-1.34-.54l-1.37-.43a23 23 0 0 0-11.5 0 38.32 38.32 0 0 0-12.15 5.44 58.11 58.11 0 0 0-10.35 8.85 53.09 53.09 0 0 0-8 11.06 32.11 32.11 0 0 0-2.51 6.2c-.57 2.09-.72 4.22.06 5.77a6.4 6.4 0 0 0 2.2 2.63 5.15 5.15 0 0 0 1.51.61 6.23 6.23 0 0 0 1.74.11 17.27 17.27 0 0 0 7.38-2.8c4.75-2.91 9-6.88 13.05-10.89a97.44 97.44 0 0 0 16-20.33 49.73 49.73 0 0 0 4.91-11.72l.37-1.49.27-1.54c.199-.989.32-1.992.36-3a9.11 9.11 0 0 0-1.23-5.27 6.61 6.61 0 0 0-3.08-2.43 13.93 13.93 0 0 0-4.31-.84 32 32 0 0 0-9.31 1.08 59.27 59.27 0 0 0-9.08 3.11 60.65 60.65 0 0 0-8.39 4.66c-2.37 1.57-4.58 3.3-6.83 5.12-2.09 1.69-3.79 3.15-5.22 4.38a77.994 77.994 0 0 1-3.64 2.95 14 14 0 0 1-4.68 2.64 10.65 10.65 0 0 1-1.73.49c-.72 0-.44-.89.68-2.61a54.19 54.19 0 0 1 5.93-7.22 86.61 86.61 0 0 1 14.37-12.19 60.24 60.24 0 0 1 4.18-2.53 45.5 45.5 0 0 1 4.49-2.2 55.38 55.38 0 0 1 9.54-3 37.12 37.12 0 0 1 10.52-.89 17.78 17.78 0 0 1 5.84 1.44 12.52 12.52 0 0 1 5.32 4.36 13.2 13.2 0 0 1 2.19 6.31 21.59 21.59 0 0 1-.28 5.76 45.26 45.26 0 0 1-2.91 9.94 68.73 68.73 0 0 1-7.37 13 104.64 104.64 0 0 1-9.37 11.25 134.3 134.3 0 0 1-10.58 9.94 61.69 61.69 0 0 1-6 4.45 32.1 32.1 0 0 1-6.92 3.51l-.04-.12Z"
          />
        </svg>
        {/* Play button */}
        <div className="absolute">
          <button className="btn h-10 px-4 inline-flex items-center text-gray-900 bg-white hover:bg-blue-50" onClick={() => { setModalOpen(true) }} aria-label="Watch the video">
            <span className="tracking-normal text-blue-500 mr-2">
              <svg className="fill-current" width="9" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M.783.088A.5.5 0 0 0 0 .5v11a.5.5 0 0 0 .783.412l8-5.5a.5.5 0 0 0 0-.824l-8-5.5Z" />
              </svg>
            </span>
            Quick Explainer
          </button>
        </div>
      </div>
      {/* End: Video thumbnail */}

      <Transition show={modalOpen} as={Fragment} afterEnter={() => videoRef.current?.play()}>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>

          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-75 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ttransition ease-out duration-200"
            leaveFrom="oopacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="max-w-6xl mx-auto h-full flex items-center">
              <Dialog.Panel className="w-full max-h-full aspect-video bg-black overflow-hidden">
                <video ref={videoRef} width={videoWidth} height={videoHeight} loop controls>
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
          {/* End: Modal dialog */}

        </Dialog>
      </Transition>

    </div>
  )
}
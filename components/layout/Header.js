'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { useSelectedLayoutSegment } from 'next/navigation'

function checkSegment(segment){
  if(segment === null) return '/';
  return '/' + segment;
}

const navigation = [
  { name: 'Нүүр', href: '/' },
  { name: 'Бүтээгдэхүүн', href: '/products' },
  { name: 'Бидний тухай', href: '/about' },
  { name: 'Холбоо барих', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const segment = useSelectedLayoutSegment()

  const currentSegment = checkSegment(segment)

  return (
      <>
          <header className="fixed w-full isolate z-40 backdrop-blur-md">
              <nav className='cont flex items-center justify-between py-6 relative' aria-label="Global">
                  <div className='h-10 flex lg:flex-1 items-end'>
                      <div>
                          <a href="/" className=''>
                              <Image src={Logo} alt="Datacom" className='h-[34px] sm:h-10 w-auto' loading="eager" priority={true} />
                          </a>
                      </div>
                  </div>
                  <div className="flex gap-4 lg:hidden">
                      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-600 hover:text-selected transition-all" onClick={() => setMobileMenuOpen(true)} >
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </button>
                  </div>
                  <div className='hidden lg:flex lg:gap-x-6'>
                      {navigation.map((item) => (
                          <a key={item.name} href={item.href} className={`text-sm leading-6 focus-visible:outline-none hover:text-selected transition-all ${currentSegment === item.href ? 'text-zinc-800 font-semibold' : 'text-zinc-600'}`}>
                              {item.name}
                          </a>
                      ))}
                  </div>
              </nav>
              <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                  <div className="fixed inset-0 z-50" />
                  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
                      <div className="flex items-center justify-between">
                          <a href="#">
                              <Image src={Logo} alt="Datacom" className='w-8 h-auto' loading="eager" priority={true} />
                          </a>
                          <button type="button" className="-m-2.5 rounded-md p-2.5 text-zinc-600" onClick={() => setMobileMenuOpen(false)} >
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                      </div>
                      <div className="mt-6 flow-root">
                          <div className="-my-6 divide-y divide-slate-500/10">
                              <div className="space-y-2 py-6">
                                  {navigation.map((item) => (
                                      <a key={item.name} href={item.href} className={`-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-slate-50 ${currentSegment === item.href ? 'text-zinc-800 font-semibold' : 'text-zinc-600'}`}>
                                          {item.name}
                                      </a>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </DialogPanel>
              </Dialog>
          </header>
      </>
  )
}
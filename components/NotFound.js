'use client'

export default function NotFound() {
  return (
    <div className='mt-6 md:mt-20'>
      <main className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto mt-8 md:mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-semibold leading-8 text-pink-500">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Хуудас олдсонгүй</h1>
          <p className="mt-4 text-base leading-7 text-gray-500 sm:mt-6 sm:text-lg sm:leading-8">
              Уучлаарай, таны хайсан зүйл олдсонгүй.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
              <a href="/" className='rounded-md bg-gradient-to-r from-pink-500 to-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500'>
                Нүүр хуудас
              </a>
        </div>
      </main>
    </div>
  )
}
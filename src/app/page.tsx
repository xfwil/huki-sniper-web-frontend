import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-black flex flex-col items-center justify-center min-h-screen">
      <Image src='./huki-logo-transparent.png' alt='logo' width={450} height={450} className='mb-1'/>
      <div className='flex space-x-4'>
        <Link href='https://t.me/huki_snipe_bot' target='_blank'>
          <Image src='./icons8-telegram-app.svg' alt='Telegram' width={48} height={48} />
        </Link>
      </div>
    </main>
  )
}

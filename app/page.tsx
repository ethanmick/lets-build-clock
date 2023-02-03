import localFont from '@next/font/local'
import { Clock } from './clock'
const digital = localFont({ src: './fonts/digital.ttf' })

export default function Home() {
  const now = new Date()
  return (
    <main
      className={`flex justify-center items-center h-screen ${digital.className}`}
    >
      <Clock time={now.getTime()} />
    </main>
  )
}

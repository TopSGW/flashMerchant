
import Image from 'next/image'
import HeaderV from '../components/Header'
import Overview from '../components/Overview'

export default function Home() {
  return (
    <div>
      <HeaderV/>
      <main>
        <Overview/>
      </main>

    </div>
  )
}

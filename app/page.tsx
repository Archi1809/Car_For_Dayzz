import Image from 'next/image'
import { SearchBar, Hero, Carlist} from '@/components'
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="CarCatalogue">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        </div>

        <div className='home__filters'>
          <SearchBar />
        </div>

          <Carlist />  
      </div>
    </main>
  )
}

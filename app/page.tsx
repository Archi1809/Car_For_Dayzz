import Image from 'next/image'
import { SearchBar , CustomFilter, Hero, Carlist} from '@/components'
import { fuels , yearsOfProduction} from '@/constants'
export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        </div>

        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year"  options={yearsOfProduction}/>
          </div>
        </div>

      <Carlist />  
      </div>
    </main>
  )
}

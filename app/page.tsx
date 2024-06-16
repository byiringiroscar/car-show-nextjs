'use client'
import { useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";

export default  function Home() {
  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)


  // search states
  const [manufacturers, setManufacturers] = useState('')
  const [model, setmodel] = useState("")

  // filter states
  const [fuel, setFuel] = useState("")
  const [year, setYear] = useState("")


  // paginationstates
  const [limit, setLimit] = useState(10)


  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
              <CustomFilter title='fuel' options={fuels} />
              <CustomFilter title='year' options={yearsOfProduction} />
            </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  );
}

import React, { useEffect, useState } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({breeds: apiBreeds}) => {
      const breedStrings = apiBreeds.map(({name}) => name)
      setBreeds(breedStrings)
    }, error => console.error(error))
  }, [setBreed, animal, setBreeds]) // if you want to run effect once, then DependencyList should be [] empty. 

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

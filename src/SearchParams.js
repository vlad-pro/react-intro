import React, { useEffect, useState, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);


  // We have a bit of a problem though. 
  // Jest expects to be to run this tests synchronously and we're doing async await.
  // Here we're simulating a submit event to search for pets and then checking it properly called the API
  //  and then renders the correct animal list length.
function requestPets() {
  pet
    .animals({
      location,
      breed,
      type: animal
    })
    .then(({ animals }) => {
      setPets(animals || []);
    });
}

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(
      ({ breeds: apiBreeds }) => {
        const breedStrings = apiBreeds.map(({ name }) => name);
        setBreeds(breedStrings);
      },
      (error) => console.error(error)
    );
    // if you want to run effect once, then DependencyList should be [] empty.
  }, [setBreed, animal, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        {/* NOTE: we are not using Dropdown as it's creating it's own hooks and we are using hooks from the App  */}
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

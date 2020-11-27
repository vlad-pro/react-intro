import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    // throw new Error("error to chek the handling") // can be used to check error boundry handling in components
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, location, description, name, media } = this.state;

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              // themeHook[0] because we are provided the theme and the setTheme function.
              // These we are getitng from the context that we set in the .Provided in the App.js
              // This is the example where hooks are a great combo with Contex, even though I do not qite get it.
              <button style={{ backgroundColor: themeHook[0] }}>
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

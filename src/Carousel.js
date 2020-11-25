import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      active: 0,
    };
    // binding this to the fuction. 
    // Hint: it's possbile to bind this for class methods by converting them to arrow functions (gets this from the place it's written)
    this.handleIndexClick = this.handleIndexClick.bind(this) 
  }

  handleIndexClick(event) {
    this.setState({
      // event.target.dataset.index comes from the DOM and everyting that comes from the dom is a sting, we need a number here.
      active: +event.target.dataset.index 
      // unary plus(+) does the same as  the same as parseInt(event.target.dataset.index, 10) and converting a string to a number
    });
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => {
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />;
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;

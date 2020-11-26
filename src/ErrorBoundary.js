// mostly code from reactjs.org/docs/error-boundaries.html
import React from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError)
      setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here </Link>
          to go back to the home page or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
    // Pass through to children.
    // Return all of the components that is inside the Erro boundary.
    // Render them if everythons is okay
  }
}

export default ErrorBoundary;

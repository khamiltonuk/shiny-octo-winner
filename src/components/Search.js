import React, { Fragment } from "react";
import { compose, lifecycle } from "recompose";

const Search = props => {
  console.log(props);
  return (
    <Fragment>
      <h1>Search</h1>
      <ul>
        {props.beers &&
          props.beers.map(beer => {
            return <li key={beer.id}>{beer.name}</li>;
          })}
      </ul>
    </Fragment>
  );
};

const enhance = compose(
  lifecycle({
    componentDidMount() {
      const { fetchBeer } = this.props;
      fetchBeer();
    }
  })
);

export default enhance(Search);

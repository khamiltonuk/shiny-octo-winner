import React, { Fragment } from "react";
import { compose, lifecycle, withHandlers } from "recompose";

const Search = props => {
  console.log(props);
  return (
    <Fragment>
      <h1>Search</h1>
      <input onChange={props.handleInputChange} />
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
  }),
  withHandlers({
    handleInputChange: props => event => {
      const { fetchBeer } = props;
      fetchBeer(event.target.value);
    }
  })
);

export default enhance(Search);

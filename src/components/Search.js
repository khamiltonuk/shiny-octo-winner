import React, { Fragment } from "react";
import { compose, lifecycle, withHandlers } from "recompose";

const Search = props => {
  console.log(props);
  return (
    <Fragment>
      <form className="search-form">
        <div className="input-wrapper">
          <input
            type="text"
            className="search"
            placeholder="find a beer"
            onChange={props.handleInputChange}
          />
          {props.loading && <div className="spinner">loading</div>}
        </div>
        <ul className="suggestions">
          {props.beers &&
            props.beers.map(beer => {
              return (
                <li key={beer.id}>
                  {beer.name}
                  <span className="abv">
                    ABV:
                    {beer.abv}
                  </span>
                </li>
              );
            })}
        </ul>
      </form>
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

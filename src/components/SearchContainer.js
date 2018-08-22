import { connect } from "react-redux";
import { fetchBeer } from "../actions";

import Search from "./Search";

const SearchContainer = connect(
  function mapStateToProps(state) {
    return {
      beers: state.beers
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      fetchBeer: query => dispatch(fetchBeer(query))
    };
  }
)(Search);

export default SearchContainer;

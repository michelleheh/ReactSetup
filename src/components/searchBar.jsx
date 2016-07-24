import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { testAction } from '../actions/searchActions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input 
          className="form-control" 
          type="text" 
          placeholder="temp" 
          onChange={() => {
            console.log('this.props.', this.props.search);
          }}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    test: testAction,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
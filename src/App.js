import React from 'react';
import { connect } from 'react-redux'

import { buyItem, removeFeature } from './actions/carActions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  
  // const removeFeature = item => (
  //   { type: 'REMOVE_FEATURE', payload: item }
  // );

  // const buyItem = item => (
  //  { type: 'BUY_ITEM', payload: item}
  // );

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures 
        car={props.car}
        removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures
        additionalFeatures={props.additionalFeatures}
        buyItem={props.buyItem}
         />
        <Total 
        car={props.car} 
        additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStateToProps,
  {buyItem, removeFeature})(App);

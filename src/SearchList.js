import React, { Component } from 'react';
import './SearchList.css';

import Restaurant from './Restaurant';
import Search from './Search';


class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurantList: [] };
    this.search = this.search.bind(this);
  }
  search(rList) {
    this.setState({ restaurantList: rList });
    this.forceUpdate();
  }
  render() {
    return (
      <div className='SearchList'>
        <Search search={this.search} />
        { this.renderResults() }
      </div>
    );
  }
  renderResults() {
    try {
      return this.state.restaurantList.map((r, index) => (
        <Restaurant key={r.name+index} name={r.name} price={r.price} address={r.address} img={r.img} info={r.info}/>
      ));
    }
    catch(err) {
      console.log(err);
      return
    }
  }
}

export default SearchList;

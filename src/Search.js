import React, { Component } from 'react';
import $ from 'jquery';
import './Search.css';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurantList: []};
    this.search = this.search.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  render() {
    return (
      <div className="Search">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Please enter your desired city:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="input" size="lg" />
        </InputGroup>
        <br />
        <Button id="search" variant="success" onClick={this.search}>Search!</Button>
      </div>
    );
  }
  updateState(restaurantList) {
    this.props.search(restaurantList);
  }
  search() {
    var u = 'https://opentable.herokuapp.com/api/restaurants';
    var restaurantList = [];
    var that = this;
    console.log($('#input').val());

    $.ajax( {
      type: 'GET',
      url: u,
      data: {city: $('#input').val() },
      success: function(response) {
        if (response.restaurants.length === 0) {
          alert("City not found, please try again");
        }
        $.each(response.restaurants, function(index, element) {
          restaurantList.push({
            name: element.name,
            price: element.price,
            address: element.address,
            img: element.image_url,
            info: element.reserve_url
          });
        });
        that.updateState(restaurantList);
      },
      error: function(xhr) {
        alert(xhr.responseJSON.error);
      },
      dataType: 'json'
    });
  }
}

export default Search;

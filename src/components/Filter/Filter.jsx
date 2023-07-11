import React, { Component } from 'react';
import { FilterSection, FilterInput, FilterTitle } from './Filterstyled';

export default class Filter extends Component {
  handleInputChange = e => {
    this.props.onFilter(e.target.value);
  };
  render() {
    return (
      <FilterSection>
        <FilterTitle>{this.props.title}</FilterTitle>
        <FilterInput
          onChange={this.handleInputChange}
          value={this.props.filter}
          type="text"
          name="filter"
        />
      </FilterSection>
    );
  }
}

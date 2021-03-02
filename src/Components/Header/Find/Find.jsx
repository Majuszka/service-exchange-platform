import { useState } from "react";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

import "./Find.scss";

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <div className="form">
        <div className="menu">
          <button
            className="btnCat dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            I can offer
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Linguistics
              </a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <button
            className="btnCat dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            I'm looking for
          </button>
          <ul
            className="dropdown-menu cc"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a className="dropdown-item" href="#">
                Art
              </a>
            </li>
          </ul>
        </div>
        <div className="menu">
          <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)}
          />

          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)}
          />
        </div>

        <div className="btnFindDiv">
          <button type="submit" value="search" className="btnFind">
            Find
          </button>
        </div>
      </div>
    );
  }
}
export default Find;

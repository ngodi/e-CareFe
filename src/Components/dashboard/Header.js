import React, { Component } from "react";

export default class Header extends Component {
  
  render() {
    return (
      <header class={this.props.headerClass}>
      <div class="header-top">
        <div class="yt-icon-button" onClick={this.props.toggleSideBar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div class="header-container">
          <img src="https://i.pinimg.com/564x/29/7b/11/297b11432a31c1e0c439bd97e86968b9.jpg" />
          <div>
            <h4 class="">Aboki Joke</h4>
            <h6 class="">Hospital Number: 131 345</h6>
          </div>
        </div>
      </div>
    </header>
    );
  }
}

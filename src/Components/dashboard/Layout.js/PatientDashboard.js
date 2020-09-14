import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import "../index.css";

import Sidebar from "../Sidebar";
import Header from "../Header";
import SubHeader from "../SubHeader";
import DashboardPatient from "../Pages/DashboardPatient";
import Profile from "../Pages/Profile";
import Appointments from "../Pages/Appointments";

export default class PatientDashboard extends Component {
  constructor() {
    super();
    this.state = {
      mobileView: false,
      desktopView: false,
      showSidebar: false,
    };
    this.updateViewState = this.updateViewState.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  updateViewState() {
    if (!this.state.mobileView && document.documentElement.clientWidth < 667) {
      this.setState({
        mobileView: true,
        desktopView: false,
        showSidebar: false,
      });
    } else if (
      document.documentElement.clientWidth > 667 &&
      document.documentElement.clientWidth < 1024
    ) {
      this.setState({
        mobileView: false,
        desktopView: true,
        showSidebar: false,
      });
    } else if (document.documentElement.clientWidth > 1024) {
      this.setState({
        mobileView: false,
        desktopView: true,
        showSidebar: true,
      });
    }

    if (this.state.mobileView) {
    }
  }

  toggleSideBar() {
    if (this.state.desktopView && document.documentElement.clientWidth > 1024) {
      if (this.state.showSidebar) {
        this.setState({
          showSidebar: false,
        });
      } else if (!this.state.showSidebar) {
        this.setState({
          showSidebar: true,
        });
      }
    } else {
      if (
        document.documentElement.clientWidth > 640 &&
        document.documentElement.clientWidth < 1024
      ) {
        if (this.state.showSidebar) {
          this.setState({
            showSidebar: false,
          });
        } else if (!this.state.showSidebar) {
          this.setState({
            showSidebar: true,
          });
        }
      }
    }

    this.setState({
      showSidebar: !this.state.showSidebar,
    });
  }
  componentWillMount() {
    this.updateViewState();
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateViewState);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewState);
  }

  render() {
    let containerClass = "grid-container";
    let headerClass = "header-pd-lg";

    if (this.state.desktopView) {
      if (this.state.showSidebar) {
        headerClass = "header-pd l-260";
      } else if (!this.state.showSidebar) {
        headerClass = "header-pd-lg";
      }
    }

    if (this.state.mobileView) {
      containerClass = "grid-container" + " mobileview";
    } else if (this.state.desktopView && !this.state.showSidebar) {
      containerClass = "grid-container" + " hide-bar";
    }

    return (
      <div class={containerClass} id="patient-dashboard">
        <Header headerClass={headerClass} toggleSideBar={this.toggleSideBar} />

        <Sidebar
          showSidebar={this.state.showSidebar}
          mobileView={this.state.mobileView}
          toggleSideBar={this.toggleSideBar}
        />
        <main class="main">
          <SubHeader />
          <div class="">
            <Switch>
              <Route exact path="/dashboard/patient">
                <DashboardPatient />
              </Route>
              <Route path="/dashboard/patient/profile">
                <Profile />
              </Route>
              <Route path="/dashboard/patient/appointments">
                <Appointments />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

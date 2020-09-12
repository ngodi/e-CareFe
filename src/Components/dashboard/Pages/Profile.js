import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2018/08/14/22/54/cats-3606836_1280.jpg"
              className="profile-img-rounded"
            ></img>
            <div className="d-flex justify-content-center align-items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.658 3C17.408 3 17.148 3.1 16.958 3.29L15.128 5.12L18.878 8.87L20.708 7.04C21.098 6.65 21.098 6.02 20.708 5.63L18.368 3.29C18.168 3.09 17.918 3 17.658 3ZM14.058 9.02L14.978 9.94L5.91805 19H4.99805V18.08L14.058 9.02ZM2.99805 17.25L14.058 6.19L17.808 9.94L6.74805 21H2.99805V17.25Z"
                  fill="#007D85"
                />
              </svg>
              <span className="my-2">Edit Profile Picture</span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="  d-flex justify-content-center">
            <div className="col-md-6 col-sm-12">
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="St Andrew Meedeical College"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Owner:  V.K. Tripathi"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Reg. No.: 131 345"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ph. No.: +21345676878"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="E-65, hsgkjfgkqwje,jhjkerfghv , uhygdsyfgw gg , lagos, jhsadhgdfv ,"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-save float-right">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

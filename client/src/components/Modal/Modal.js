import React from "react";

class Interests extends Component {
  render() {
    return (
      <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">My Interests</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Please choose the technologies you are interested in:</p>
            </div>
            <div>
              <form>
                <div className="form-group row">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Username
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="username"
                      className="form-control"
                      id="inputUsername"
                      placeholder="Username"
                    />
                  </div>
                </div>
                <fieldset className="form-group">
                  <div className="row">
                    <legend class="col-form-label col-sm-2 pt-0">
                      Technologies
                    </legend>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios1"
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="gridRadios1">
                          HTML
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          JavaScript
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          CSS
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          Node.JS
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          Express.JS
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="option2"
                        />
                        <label className="form-check-label" for="gridRadios2">
                          MongoDB
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Interests;

import React, { Component } from "react";

class ResourceList extends Component {
  render() {
    const urls = this.props.list;
    console.log("list:", urls);

    return (
      <div className="container">
        <ul className="res-list">
          <li>
            {urls.map((url, i) => (
              <a href={url} target="_blank" key={i}>
                {url}
                <br />
              </a>
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

export default ResourceList;

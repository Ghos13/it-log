import React from "react";

class About extends React.Component {
  render() {
    return (
      <main>
        <div className="container">
          <h1 className="about_title">
            hello, welcome to <span className="about_span">"COMPUTER IT" </span>
          </h1>
          <p className="about_pages">
            this web page is made for the convenience of using computers for
            learning and is not used for bad deed
          </p>
          <br />
          <p className="about_pages">owner: IT-RUN Acodemi</p>
          <p className="about_pages">creator: WorthlesSoul</p>
          <p className="about_pages">Idea: Aidar</p>
        </div>
      </main>
    );
  }
}
export default About;

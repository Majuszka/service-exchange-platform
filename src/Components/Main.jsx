import React from "react";
import "../styles/Main.scss";
import Logo from "./img/two-way-cross.png";

function Main() {
  return (
    <div id="home">
      <div>
        <main className="main">
          <h1>
            Two
            <span>
              <img src={Logo} className="logo" alt="" />
            </span>
            Way Street
          </h1>
          <p>Service Exchange Platform - get new skills for FREE!!</p>
          <button
            className="btnJoinFind"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join
          </button>
        </main>
      </div>
    </div>
  );
}

export default Main;

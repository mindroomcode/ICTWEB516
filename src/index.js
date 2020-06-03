import React from 'react';
import ReactDOM from 'react-dom';
import {Route, NavLink, BrowserRouter} from 'react-router-dom';
import './index.css';


let Template = ()=>(
  <BrowserRouter>
    <div>
      <h1>React Basic SPA</h1>
      <ul className="header">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </div>
  </BrowserRouter>
) 

let Header = () => (
  <div>
    <p>Header</p>
  </div>
)

let Home = () => (
  <div>
    <h2>Welcome</h2>
    <p>
      Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut
      aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
      rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
      molestie. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus.
    </p>
    <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
  </div>
);

let About = () => (
  <div>
    <h2>We are...</h2>
    <ol>
      <li>Nulla pulvinar diam</li>
      <li>Facilisis bibendum</li>
      <li>Vestibulum vulputate</li>
      <li>Eget erat</li>
      <li>Id porttitor</li>
    </ol>
  </div>
);

let Contact = () => (
  <div>
  <h2>Contact us</h2>
  <p>Blah sem velit, vehicula eget sodales vitae, rhoncus eget sapien:</p>
</div>
);

let Footer = () => (
  <div>
    <hr />
    <p>Footer Copyright © {(() => new Date().getFullYear())()}</p>
  </div>
)


ReactDOM.render(<Template />, document.getElementById('root'))
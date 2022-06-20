import React from "react";
import "./header.css";
import logo from "../../../Assets/Images/kidzapp-logo.png";
import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="custom-header fixed-top">
        <nav className="navbar navbar-expand-lg new-custom-nav ">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} width="100" height="100" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img
                height="100"
                width="100"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAclBMVEU+Pj739/f+/v4oKCg2NjYxMTEtLS3s7Ozp6emMjIzc3NyDg4M5OTk/Pz9paWn7+/vPz8+YmJjx8fEkJCSdnZ3CwsJYWFinp6dERES4uLh5eXlfX19ubm5RUVG7u7vY2NikpKSvr6/Hx8dUVFSJiYl/f3+jLebvAAAEeUlEQVR4nO2di3aiMBCGYUgANXQE79eK1fd/xYXtbkUStKfrWU5+5nuCfCeX4uTvJAjxCfoewH9AHDEQRwzEEYMhO7KPfN+RicIk9ZGkIHKIWo4UnkfLQPuJOUyOBT1x5HC1jpQJfMWoWOVty3tHmq5138P8Z7TeULcjrWb+TmGD6MJdjjSP+h7di4i37HakEkWxkhyRy5HHOIrVcl2ww5F2EHvxC8c88hlpGqvTdUWWI+2xpjHI2HJMsKax2pFTbjnyMe57UC9Gz6nlSLnqe1Avxuwtxy2c46G9VukN7MgJgvUAHLP2uSqOXiKOGIgjBuKIgThiII4YiCMGQ3C0fz8OoQ6AV895a9dz+Oj/pdw9KrccU7T6amzVV/EOHWPXyXmBVUS+lZCb91YfUBOpitB25HekHRk1MgHNe+QVjqSeOO+RK8kRypbUbx15gPpDYNb36F5CtO3MdVSSC+P/p4CKVg/yOdXBU+Qq9vmrzmg9SR/mrOqpLDbbtY79RGf7MrVigc7cIydjP0lDciQ8O/KrfSdRf4pTZsg5ZCTEEQNxxEAcMRBHDMQRA3HEQBwxEEcMxBEDccRAHDEQRwyG6sjM5CnOGw/bkTldnPKRl8yPY7Y7drQdKSyXUayVn2gdHeZJu2HHvSNTqbTfMR2jo7y1Yu8cOdkhJDv0ekxdjpyufY4C3DB6Sm5HTtZ+L9MG8Tu7HXcYs1hjssLlSCeEvfgXtXXk5ThBUmy2QGhkdHP/E1ZNbu0BGvPY96BeTZRavSyg0qs1emM5rrCWanXqTKxeFhecPxyfmJ3liNY+R3pZoCCOGIgjBuKIgThiII4YiCMG4oiB7TiE38gTvFrHAGpWV6uXxRSu9lhavSwYbT/aNWS8u4A3x11Ain+nE9IcSVLtnb0seImzJY1JXO8FVKs1gJG8NQi6dwx5bDA+BEx87sg81HfJS4Q9qbPu7EqdIztpzzNIgYpH4YMMUn26JqdD5GuUTCkdZ3m7XYcjE0g83uQTP8nL9/B5JvBzxfYd0fwx38x24iGOGIgjBuKIgThiII4YiCMG4oiBOGIgjhiIIwbiiIE4YiCOGAzUkYmLxE8KRycLVy/9cHH5MHHkJepw3RTPeulzOA9i5e9NslGxHrUbdrTetjhn/qetlC4fvG1Bp5m/U9ggmnS+UUI5SvZRbzvemqESRTEI4ovzzSAe4yhWy3XhypLRDmIv/sU45pHPSNNYbcmTnV+F++eHzM6vJljT2AzpfmXmjwhpwCa3hwO//r8D763SveU4hDdn0Y4c6deBgjhiII4YiCMG4oiBOGIgjhiIIwb278ch1AEGUM/ho/+Xcveo3HIcQH0V8NCx6+S8wJrIWwm5eW8F1OYhcN9bod0/Hp29LGiFI6nd98iV5AhFUu878gB1e5lZ36N7CdG1M9dR53MC/z8FVPwon1MdPMXc+JyzCozWl3YzC0de7ng96L6Dbz9Er/dl8iwv93suiYvUT5Lv5R7/ePqJW2agGV04xBEDccRAHDEQRwzEEYMhOP4CkCLRQH0jd6MAAAAASUVORK5CYII="
                alt=""
              />
            </span>
          </button>

          <div
            className="collapse navbar-collapse direct-links"
            id="navbarSupportedContent"
          >
            <div className="row">
              <div className="col-12 d-flex">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown active">
                    <NavLink
                      className="nav-link dropdown-toggle custom-dropdown"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Search By
                    </NavLink>
                    <div
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <NavLink className="dropdown-item" to="#">
                        Action
                      </NavLink>
                      <NavLink className="dropdown-item" to="#">
                        Another action
                      </NavLink>
                    </div>
                  </li>
                  <li style={{ position: "relative" }}>
                    <form className="search-form  ">
                      <input
                        className="custom-dropdown"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle custom-dropdown"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Download App
                    </NavLink>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <NavLink className="dropdown-item" to="#">
                        Action
                      </NavLink>
                      <NavLink className="dropdown-item" to="#">
                        Another action
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item ">
                    <select
                      className=" custom-dropdown"
                      id="exampleFormControlSelect1"
                    >
                      <option className="UAE">UAE</option>
                      <option className="EG">EG</option>
                    </select>
                  </li>
                  <li className="nav-item">
                    <BsFillPersonFill className="login-icon" />
                  </li>
                </ul>
              </div>
              <div className="col-12 d-flex">
                <ul className="navbar-nav direct-ul ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/activity">
                      Find Activities
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blog">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/awards" className="nav-link">
                      Kidzapp Awards
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/tv">
                      Kidzapp TV
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/getInTouch">
                      Get In Touch
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/getListed">
                      Get Listed
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

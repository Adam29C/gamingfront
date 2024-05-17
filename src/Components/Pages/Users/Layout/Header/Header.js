import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Withdraw } from "../../../../Service/user.service";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const role = localStorage.getItem("roles");
  const token = localStorage.getItem("token");
  const user_details = JSON.parse(localStorage.getItem("user_details"));

  const [data, setData] = useState();

  const navigate = useNavigate();

  const getWithdrawData = async () => {
    if (role == 2) {
      const res = await Withdraw(user_details?.id, token);
      setData(res);
    }
  };

  useEffect(() => {
    getWithdrawData();
    if (token != null && token != "null" && token != undefined) {
      const decoded = jwtDecode(token && token);
      const expiryTimestamp = decoded.exp * 1000;

      if (expiryTimestamp < Date.now()) {
        navigate("/");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_details");
    localStorage.removeItem("roles");
    console.log("check logout");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <app-topnav _ngcontent-nsr-c57="" _nghost-nsr-c54="">
      <header
        _ngcontent-nsr-c54=""
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div
          _ngcontent-nsr-c54=""
          className="container d-flex align-items-center"
        >
          <div
            _ngcontent-nsr-c54=""
            className="d-flex align-items-center justify-content-between"
          >
            <Link
              _ngcontent-nsr-c54=""
              to="/dashboard"
              className="logo d-flex align-items-center"
            >
              <img
                _ngcontent-nsr-c54=""
                alt=""
                className="desktop-logo"
                src="/assets/images/reddybook/logo-text.png"
              />
              <img
                _ngcontent-nsr-c54=""
                className="mobile-logo"
                src="/assets/images/reddybook/logo.png"
              />
            </Link>
            <i
              _ngcontent-nsr-c54=""
              className="bi bi-list-nested toggle-sidebar-btn"
            />
          </div>
          <div _ngcontent-nsr-c54="" className="search-bar">
            <form
              _ngcontent-nsr-c54=""
              noValidate=""
              method="POST"
              action="#"
              className="search-form d-flex align-items-center ng-untouched ng-pristine ng-valid"
            >
              <input
                _ngcontent-nsr-c54=""
                type="text"
                placeholder="Search Events"
                typeaheadoptionfield="name"
                className="form-control ng-untouched ng-pristine ng-valid"
                aria-expanded="false"
                aria-autocomplete="list"
              />

              <button _ngcontent-nsr-c54="" type="submit" title="Search">
                <i _ngcontent-nsr-c54="" className="bi bi-search" />
              </button>
            </form>
          </div>
          <a _ngcontent-nsr-c54="" href="#" className="rules">
            rules
          </a>

          {role == 2 ? (
            <>
              <Link
                _ngcontent-mmi-c54=""
                to="/deposit"
                className="rules btn-deposit ng-star-inserted"
              >
                <img
                  _ngcontent-mmi-c54=""
                  src="assets/images/deposit-icon.png"
                />{" "}
                deposit
              </Link>

              <Link
                _ngcontent-mmi-c54=""
                to="/withdraw"
                className="rules btn-withdraw ng-star-inserted"
              >
                <img
                  _ngcontent-mmi-c54=""
                  src="assets/images/withdrawal-icon.png"
                />
                withdrawal
              </Link>
            </>
          ) : (
            ""
          )}

          <nav _ngcontent-nsr-c54="" className="header-nav ms-auto">
            <ul _ngcontent-nsr-c54="" className="d-flex align-items-center">
              {role == 2 ? (
                <>
                  <li
                    _ngcontent-mmi-c54=""
                    className="nav-item expo_bal ng-star-inserted"
                  >
                    <a
                      _ngcontent-mmi-c54=""
                      href="javascript:void(0);"
                      className="nav-link"
                    >
                      <i _ngcontent-mmi-c54="" className="bi bi-bank" />
                      <span _ngcontent-mmi-c54="">
                        Bal
                        <b _ngcontent-mmi-c54="">
                          {data?.WalledInfo?.amount
                            ? data?.WalledInfo?.amount
                            : "0"}
                        </b>
                      </span>
                    </a>
                  </li>

                  <li
                    _ngcontent-mmi-c54=""
                    className="nav-item expo_bal ng-star-inserted"
                  >
                    <a
                      _ngcontent-mmi-c54=""
                      href="/market-analysis"
                      routerlink="/market-analysis"
                      className="nav-link"
                    >
                      <i _ngcontent-mmi-c54="" className="bi bi-bar-chart" />
                      <span _ngcontent-mmi-c54="">
                        exp<b _ngcontent-mmi-c54="">0</b>
                      </span>
                    </a>
                  </li>

                  <li _ngcontent-mmi-c54="" className="nav-item dropdown pe-3">
                    <a
                      _ngcontent-mmi-c54=""
                      href="javascript:void(0);"
                      data-bs-toggle="dropdown"
                      className="nav-link nav-profile d-flex align-items-center pe-0 ng-star-inserted"
                    >
                      <i
                        _ngcontent-mmi-c54=""
                        className="bi bi-person-fill userpro-icons"
                      />
                      <span
                        _ngcontent-mmi-c54=""
                        className="dropdown-toggle ps-lg-2"
                      >
                        {user_details?.name}
                      </span>
                    </a>

                    <ul
                      _ngcontent-mmi-c54=""
                      className="dropdown-menu header-ul  dropdown-menu-end dropdown-menu-arrow profile"
                    >
                      <li _ngcontent-mmi-c54="" className="dropdown-header ">
                        <h6 _ngcontent-mmi-c54="">HI, {user_details?.name}</h6>
                      </li>

                      <li _ngcontent-mmi-c54="">
                        <Link
                          _ngcontent-mmi-c54=""
                          to="/"
                          className="dropdown-item d-flex align-items-center deposit-withdraw-sidebar-title"
                        >
                          <img
                            _ngcontent-mmi-c54=""
                            src="assets/images/menu-home.png"
                            className="user-header-menue-img"
                          />
                          <span _ngcontent-mmi-c54="">home</span>
                        </Link>
                      </li>
                      <li _ngcontent-mmi-c54="" className="ng-star-inserted">
                        <a
                          _ngcontent-mmi-c54=""
                          href="/deposit"
                          routerlink="/deposit"
                          className="dropdown-item hover-list d-flex align-items-center deposit-withdraw-sidebar-title deposit"
                        >
                          <img
                            _ngcontent-mmi-c54=""
                            src="assets/images/deposit-icon.png"
                            className="user-header-menue-img"
                          />
                          <span _ngcontent-mmi-c54="">Deposit </span>
                        </a>
                      </li>

                      <li _ngcontent-mmi-c54="" className="ng-star-inserted">
                        <a
                          _ngcontent-mmi-c54=""
                          href="/withdraw"
                          routerlink="/withdraw"
                          className="dropdown-item hover-list d-flex align-items-center deposit-withdraw-sidebar-title withdraw"
                        >
                          <img
                            _ngcontent-mmi-c54=""
                            src="assets/images/withdrawal-icon.png"
                            className="user-header-menue-img"
                          />
                          <span _ngcontent-mmi-c54="">Withdraw</span>
                        </a>
                      </li>

                      <li _ngcontent-mmi-c54="">
                        <Link
                          _ngcontent-mmi-c54=""
                          to="/userprofile"
                          className="dropdown-item d-flex align-items-center"
                        >
                          <i _ngcontent-mmi-c54="" className="bi bi-person" />
                          <span _ngcontent-mmi-c54="">My Profile</span>
                        </Link>
                      </li>
                      <li _ngcontent-mmi-c54="">
                        <Link
                          _ngcontent-mmi-c54=""
                          href="#"
                          onClick={handleLogout}
                          className="dropdown-item d-flex align-items-center"
                        >
                          <i
                            _ngcontent-mmi-c54=""
                            className="bi bi-box-arrow-right"
                          />
                          <span _ngcontent-mmi-c54="">Sign Out</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                ""
              )}

              {/* login logout btn */}
              {(!role === 2 || role === null || role === "null") && (
                <li _ngcontent-nsr-c54="" className="nav-item dropdown pe-3">
                  <Link
                    _ngcontent-nsr-c54=""
                    type="button"
                    className="btn-login"
                    to="/signup"
                  >
                    Signup
                  </Link>

                  <Link
                    _ngcontent-nsr-c54=""
                    type="button"
                    className="btn-login"
                    to="/login"
                  >
                    Login
                  </Link>

                  <ul
                    _ngcontent-nsr-c54=""
                    className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
                  >
                    <li _ngcontent-nsr-c54="" className="dropdown-header">
                      <h6 _ngcontent-nsr-c54="">HI,</h6>
                    </li>

                    <li _ngcontent-nsr-c54="">
                      <Link
                        _ngcontent-nsr-c54=""
                        to="/dashboard"
                        className="dropdown-item d-flex align-items-center deposit-withdraw-sidebar-title"
                      >
                        <img
                          _ngcontent-nsr-c54=""
                          src="/assets/images/menu-home.png"
                        />
                        <span _ngcontent-nsr-c54="">home</span>
                      </Link>
                    </li>

                    <li _ngcontent-nsr-c54="">
                      <a
                        _ngcontent-nsr-c54=""
                        href="/profile"
                        routerlink="/profile"
                        className="dropdown-item d-flex align-items-center"
                      >
                        <i _ngcontent-nsr-c54="" className="bi bi-person" />
                        <span _ngcontent-nsr-c54="">My Profile</span>
                      </a>
                    </li>
                    <li _ngcontent-nsr-c54="">
                      <a
                        _ngcontent-nsr-c54=""
                        href="#"
                        routerlink="#"
                        className="dropdown-item d-flex align-items-center"
                      >
                        <i
                          _ngcontent-nsr-c54=""
                          className="bi bi-bar-chart-steps"
                        />
                        <span _ngcontent-nsr-c54="">Account statement</span>
                      </a>
                    </li>

                    <li _ngcontent-nsr-c54="">
                      <a
                        _ngcontent-nsr-c54=""
                        href="#"
                        routerlink="#"
                        className="dropdown-item d-flex align-items-center"
                      >
                        <i _ngcontent-nsr-c54="" className="bi bi-bullseye" />
                        <span _ngcontent-nsr-c54="">stake settings</span>
                      </a>
                    </li>
                    <li _ngcontent-nsr-c54="">
                      <a
                        _ngcontent-nsr-c54=""
                        href="#"
                        routerlink="#"
                        className="dropdown-item d-flex align-items-center"
                      >
                        <i
                          _ngcontent-nsr-c54=""
                          className="bi bi-bar-chart-line"
                        />
                        <span _ngcontent-nsr-c54="">profit &amp; loss</span>
                      </a>
                    </li>
                    <li _ngcontent-nsr-c54="">
                      <a
                        _ngcontent-nsr-c54=""
                        href="#"
                        routerlink="#"
                        className="dropdown-item d-flex align-items-center"
                      >
                        <i _ngcontent-nsr-c54="" className="bi bi-bar-chart" />
                        <span _ngcontent-nsr-c54="">Unsettled Bets</span>
                      </a>
                    </li>
                    <li _ngcontent-nsr-c54="">
                      <a
                        _ngcontent-nsr-c54=""
                        href="#"
                        routerlink="#"
                        className="dropdown-item d-flex align-items-center"
                      >
                        <i _ngcontent-nsr-c54="" className="bi bi-lock" />
                        <span _ngcontent-nsr-c54="">change password</span>
                      </a>
                    </li>
                    <li _ngcontent-nsr-c54="">
                      <Link
                        _ngcontent-nsr-c54=""
                        href="#"
                        onClick={handleLogout}
                        className="dropdown-item d-flex align-items-center"
                      >
                        <i
                          _ngcontent-nsr-c54=""
                          className="bi bi-box-arrow-right"
                        />
                        <span _ngcontent-nsr-c54="">Sign Out</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              )}

              {/* login logout btn */}
            </ul>
          </nav>
        </div>
      </header>

      <div _ngcontent-nsr-c54="" className="new-middle-menus">
        <ul _ngcontent-nsr-c54="">
          <li _ngcontent-nsr-c54="">
            <Link _ngcontent-nsr-c54="" to="/dashboard" className="nmm-active">
              <img _ngcontent-nsr-c54="" src="/assets/images/menu-home.png" />
              Home
            </Link>
          </li>
          <li _ngcontent-nsr-c54="">
            <a
              _ngcontent-nsr-c54=""
              href="/inplay"
              routerlinkactive="nmm-active"
            >
              <img _ngcontent-nsr-c54="" src="/assets/images/menu-inplay.png" />
              in-play
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/4"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-4.png"
              />
              Cricket
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/1"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-1.png"
              />
              Football
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/2"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-2.png"
              />
              Tennis
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/2378961"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-2378961.png"
              />
              Politics
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/7"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-7.png"
              />
              Horse Racing
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/4339"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-4339.png"
              />
              Greyhound Racing
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/99994"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-99994.png"
              />
              Kabaddi
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/99999"
              routerlinkactive="nmm-active"
              className="hightlight-menu"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-99999.png"
              />
              Casino
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a _ngcontent-nsr-c54="" href="#(0)" routerlinkactive="nmm-active">
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-99991.png"
              />
              Sports book
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/99998"
              routerlinkactive="nmm-active"
              className="hightlight-menu"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-99998.png"
              />
              Int Casino
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/99990"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-99990.png"
              />
              Binary
            </a>
          </li>
          <li _ngcontent-nsr-c54="" className="nav-item">
            <a
              _ngcontent-nsr-c54=""
              href="/sports/99997"
              routerlinkactive="nmm-active"
            >
              <img
                _ngcontent-nsr-c54=""
                src="/assets/images/events/menu-99997.png"
              />
              Casino Vivo
            </a>
          </li>
        </ul>
      </div>
      <div _ngcontent-nsr-c54="" className="ipl-loksabha">
        <a _ngcontent-nsr-c54="" className="ipl" href="/sports/detail/28127348">
          <span _ngcontent-nsr-c54="" className="blinker">
            ipl 2024
          </span>
        </a>
        <a
          _ngcontent-nsr-c54=""
          className="loksabha"
          href="/sports/detail/1704972513"
        >
          <span _ngcontent-nsr-c54="" className="blinker">
            lok sabha 2024
          </span>
        </a>
      </div>
      <div
        _ngcontent-nsr-c54=""
        bsmodal=""
        tabIndex={-1}
        role="dialog"
        aria-labelledby="dialog-login-name"
        className="modal fade login-popup"
      >
        <div
          _ngcontent-nsr-c54=""
          className="modal-dialog modal-lg modal-dialog-centered"
        >
          <div _ngcontent-nsr-c54="" className="modal-content">
            <div _ngcontent-nsr-c54="" className="modal-body">
              <button
                _ngcontent-nsr-c54=""
                type="button"
                aria-label="Close"
                className="btn-close close pull-right"
              >
                <span _ngcontent-nsr-c54="" aria-hidden="true">
                  ×
                </span>
              </button>
              <app-login _ngcontent-nsr-c54="" _nghost-nsr-c51="">
                <section _ngcontent-nsr-c51="" className="login-block">
                  <div _ngcontent-nsr-c51="" className="container">
                    <div
                      _ngcontent-nsr-c51=""
                      className="row align-items-center"
                    >
                      <div _ngcontent-nsr-c51="" className="col-md-6 login-sec">
                        <h2 _ngcontent-nsr-c51="" className="text-center">
                          Login Now
                        </h2>
                        <form
                          _ngcontent-nsr-c51=""
                          noValidate=""
                          className="login-form ng-untouched ng-pristine ng-invalid"
                        >
                          <div _ngcontent-nsr-c51="" className="form-group">
                            <label
                              _ngcontent-nsr-c51=""
                              htmlFor="exampleInputEmail1"
                              className="text-uppercase"
                            >
                              Username / Mobile Number
                            </label>
                            <input
                              _ngcontent-nsr-c51=""
                              type="text"
                              formcontrolname="username"
                              className="form-control ng-untouched ng-pristine ng-invalid"
                            />
                          </div>
                          <div _ngcontent-nsr-c51="" className="form-group">
                            <label
                              _ngcontent-nsr-c51=""
                              htmlFor="exampleInputPassword1"
                              className="text-uppercase"
                            >
                              Password
                            </label>
                            <input
                              _ngcontent-nsr-c51=""
                              type="password"
                              formcontrolname="password"
                              className="form-control ng-untouched ng-pristine ng-invalid"
                            />
                          </div>
                          <div _ngcontent-nsr-c51="" className="form-check">
                            <label
                              _ngcontent-nsr-c51=""
                              className="form-check-label"
                            >
                              <input
                                _ngcontent-nsr-c51=""
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span _ngcontent-nsr-c51="">Remember Me?</span>
                            </label>
                          </div>
                          <div
                            _ngcontent-nsr-c51=""
                            className="form-group text-center"
                          >
                            <a _ngcontent-nsr-c51="" href="#" className="fp">
                              Forgot Password
                            </a>
                          </div>

                          <button
                            _ngcontent-nsr-c51=""
                            type="submit"
                            className="btn button-login btn-login"
                          >
                            Log In
                          </button>
                          <button
                            _ngcontent-nsr-c51=""
                            type="button"
                            className="btn button-login btn-login"
                          >
                            Login with Demo ID
                          </button>
                        </form>
                        <div _ngcontent-nsr-c51="" className="copy-text">
                          Powered by
                          <a _ngcontent-nsr-c51="" href="#()">
                            reddybook
                          </a>
                          <p _ngcontent-nsr-c51="">
                            <a
                              _ngcontent-nsr-c51=""
                              href="mailto:reddybook.clubofficial@gmail.com"
                            >
                              reddybook.clubofficial@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div
                        _ngcontent-nsr-c51=""
                        className="col-md-6 banner-sec d-none d-sm-block"
                      >
                        <div
                          _ngcontent-nsr-c51=""
                          className="banner-sec-content"
                        >
                          <div
                            _ngcontent-nsr-c51=""
                            id="carouselExampleIndicators2"
                            data-bs-ride="carousel"
                            className="carousel slide"
                          >
                            <div
                              _ngcontent-nsr-c51=""
                              className="carousel-inner"
                            >
                              <div
                                _ngcontent-nsr-c51=""
                                className="carousel-item active"
                              >
                                <img
                                  _ngcontent-nsr-c51=""
                                  src="/assets/images/log_one.png"
                                  className="img-fluid"
                                />
                              </div>
                              <div
                                _ngcontent-nsr-c51=""
                                className="carousel-item"
                              >
                                <img
                                  _ngcontent-nsr-c51=""
                                  src="/assets/images/log_two.png"
                                  className="img-fluid"
                                />
                              </div>
                              <div
                                _ngcontent-nsr-c51=""
                                className="carousel-item"
                              >
                                <img
                                  _ngcontent-nsr-c51=""
                                  src="/assets/images/log_three.png"
                                  className="img-fluid"
                                />
                              </div>
                              <div
                                _ngcontent-nsr-c51=""
                                className="carousel-item"
                              >
                                <img
                                  _ngcontent-nsr-c51=""
                                  src="/assets/images/log_four.png"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <button
                              _ngcontent-nsr-c51=""
                              type="button"
                              data-bs-target="#carouselExampleIndicators2"
                              data-bs-slide="prev"
                              className="carousel-control-prev"
                            >
                              <span
                                _ngcontent-nsr-c51=""
                                aria-hidden="true"
                                className="carousel-control-prev-icon"
                              />
                              <span
                                _ngcontent-nsr-c51=""
                                className="visually-hidden"
                              >
                                Previous
                              </span>
                            </button>
                            <button
                              _ngcontent-nsr-c51=""
                              type="button"
                              data-bs-target="#carouselExampleIndicators2"
                              data-bs-slide="next"
                              className="carousel-control-next"
                            >
                              <span
                                _ngcontent-nsr-c51=""
                                aria-hidden="true"
                                className="carousel-control-next-icon"
                              />
                              <span
                                _ngcontent-nsr-c51=""
                                className="visually-hidden"
                              >
                                Next
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </app-login>
            </div>
          </div>
        </div>
      </div>

      <div
        _ngcontent-nsr-c54=""
        bsmodal=""
        tabIndex={-1}
        role="dialog"
        aria-labelledby=""
        className="modal fade force-change-password-popup"
      >
        <div _ngcontent-nsr-c54="" className="modal-dialog bookModal">
          <div
            _ngcontent-nsr-c54=""
            className="modal-content modal-content-centered"
          >
            <div _ngcontent-nsr-c54="" className="modal-header">
              <h5 _ngcontent-nsr-c54="" className="modal-title">
                Force Change Password
              </h5>
              <button
                _ngcontent-nsr-c54=""
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span _ngcontent-nsr-c54="" aria-hidden="true">
                  ×
                </span>
              </button>
            </div>
            <div _ngcontent-nsr-c54="" className="modal-body p-0">
              <app-change-password _ngcontent-nsr-c54="" _nghost-nsr-c53="">
                <form
                  _ngcontent-nsr-c53=""
                  noValidate=""
                  className="cp_form p-3 ng-untouched ng-pristine ng-invalid"
                >
                  <div
                    _ngcontent-nsr-c53=""
                    className="row mb-lg-3 mt-lg-2 align-items-center"
                  >
                    <label
                      _ngcontent-nsr-c53=""
                      htmlFor="currentPassword"
                      className="col-md-3 col-lg-3 col-form-label text-lg-end"
                    >
                      Current Password :
                    </label>
                    <div _ngcontent-nsr-c53="" className="col-md-9 col-lg-9">
                      <input
                        _ngcontent-nsr-c53=""
                        type="password"
                        id="currentPassword"
                        formcontrolname="old_password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                  </div>
                  <div
                    _ngcontent-nsr-c53=""
                    className="row mb-lg-3 mt-lg-2 align-items-center"
                  >
                    <label
                      _ngcontent-nsr-c53=""
                      htmlFor="newPassword"
                      className="col-md-3 col-lg-3 col-form-label text-lg-end"
                    >
                      New Password :
                    </label>
                    <div _ngcontent-nsr-c53="" className="col-md-9 col-lg-9">
                      <input
                        _ngcontent-nsr-c53=""
                        type="password"
                        id="newPassword"
                        formcontrolname="new_password"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                  </div>
                  <div
                    _ngcontent-nsr-c53=""
                    className="row mb-lg-3 mt-lg-2 align-items-center"
                  >
                    <label
                      _ngcontent-nsr-c53=""
                      htmlFor="renewPassword"
                      className="col-md-3 col-lg-3 col-form-label text-lg-end"
                    >
                      Re-enter New Password :
                    </label>
                    <div _ngcontent-nsr-c53="" className="col-md-9 col-lg-9">
                      <input
                        _ngcontent-nsr-c53=""
                        type="password"
                        id="renewPassword"
                        formcontrolname="new_password_re"
                        className="form-control ng-untouched ng-pristine ng-invalid"
                      />
                    </div>
                  </div>
                  <div _ngcontent-nsr-c53="" className="feedback">
                    <p _ngcontent-nsr-c53="" className="small m-0">
                      <i _ngcontent-nsr-c53="">
                        <b _ngcontent-nsr-c53="">Note:</b> The New Password
                        field must be at least 6 characters
                      </i>
                    </p>
                    <p _ngcontent-nsr-c53="" className="small m-0">
                      <i _ngcontent-nsr-c53="">
                        <b _ngcontent-nsr-c53="">Note:</b> The New Password must
                        contain at least: 1 uppercase letter, 1 lowercase
                        letter, 1 number
                      </i>
                    </p>
                  </div>
                  <div _ngcontent-nsr-c53="" className="row mt-1">
                    <button
                      _ngcontent-nsr-c53=""
                      type="submit"
                      className="btn btn-thmemes"
                    >
                      Change Password
                    </button>
                  </div>
                </form>
              </app-change-password>
            </div>
          </div>
        </div>
      </div>

      <div
        _ngcontent-nsr-c54=""
        bsmodal=""
        tabIndex={-1}
        role="dialog"
        aria-labelledby=""
        className="modal fade force-change-password-popup"
      >
        <div
          _ngcontent-nsr-c54=""
          className="modal-dialog bookModal app_version"
        >
          <div
            _ngcontent-nsr-c54=""
            className="modal-content modal-content-padding-custom"
          >
            <div
              _ngcontent-nsr-c54=""
              ngclass="env.host.name == 'reddybook' || env.host.name == 'localhost'?'':'hide'"
              className="modal-body p-0 env.host.name == 'reddybook' || 'localhost'?'':'hide'"
            >
              <button
                _ngcontent-nsr-c54=""
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="close"
                style={{
                  position: "absolute",
                  right: 13,
                  top: 1,
                  color: "#fff",
                  fontSize: 21,
                }}
              >
                <span _ngcontent-nsr-c54="" aria-hidden="true">
                  ×
                </span>
              </button>
              <a _ngcontent-nsr-c54="">
                <img _ngcontent-nsr-c54="" src="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </app-topnav>
  );
};

export default Header;

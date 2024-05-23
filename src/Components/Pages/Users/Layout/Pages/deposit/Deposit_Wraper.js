import React, { useState } from "react";
import Transaction_Table from "./Transaction_Table";
import { Link } from "react-router-dom";
import Deposite_request from "./Deposite_request";
const Deposit = () => {
  const [show, setShow] = useState(false);

  console.log(show, "check state");
  const handleTransactionSubmit = () => {
    setShow(true);
  };

  
  return (
    <>
      <main _ngcontent-fig-c57="" id="main" className="main">
        <router-outlet _ngcontent-fig-c57="" />
        <app-deposit-withdraw _nghost-fig-c63="">
          <div className="deposit_withdrawal">
            <h2 className="userscreen-title">
              <Link
               to='/'
                className="btn-xs deposit-btn"
              >
                Back
              </Link>
            </h2>
            <div className="bankingUi">
              <div className="container-fluid">
                <div className="row ">
                  <div className="col-md-8 account-list">
                    <div className="row ">
                      {!show ? (
                        <div>
                          <Deposite_request
                            handleTransactionSubmit={handleTransactionSubmit}
                          />
                        </div>
                      ) : (
                        <div className="col-md-12">
                          <div>
                            <div className="col-md-12 account-list">
                              <nav>
                                <button
                               
                                  className="btn  btn_color rules back_to_amount my-2"
                                  onClick={() => setShow(false)}
                                >
                                  &lt; Back
                                </button>
                               
                                <div
                                  className="nav nav-tabs w-100 overflow-auto"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <button
                                    type="button"
                                    className="nav-link"
                                    onclick="window.open('https://wa.link/dujjncd6942tunbfb52','_blank');"
                                    data-original-title=""
                                    title=""
                                  >
                                    Whatsapp Deposit
                                    <img
                                      src="https://reddypanel.com/images/icon/whatsapp.png"
                                      width="5%"
                                    />
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-imps-16067-tab"
                                    data-id={16067}
                                    data-toggle="tab"
                                    data-target="#nav-imps-16067"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-imps-16067"
                                    aria-selected="false"
                                    data-original-title=""
                                    title=""
                                  >
                                    Imps
                                    <img
                                      src="https://reddypanel.com/images/icon/imps.png"
                                      width="5%"
                                    />
                                  </button>

                                  <button
                                    className="nav-link"
                                    id="nav-bank-account-16066-tab"
                                    data-id={16066}
                                    data-toggle="tab"
                                    data-target="#nav-bank-account-16066"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-bank-account-16066"
                                    aria-selected="false"
                                    data-original-title=""
                                    title=""
                                  >
                                    Account
                                    <img
                                      src="https://reddypanel.com/images/icon/bank-account.png"
                                      width="5%"
                                    />
                                  </button>

                                  <button
                                    className="nav-link"
                                    id="nav-phonepe-16485-tab"
                                    data-id={16485}
                                    data-toggle="tab"
                                    data-target="#nav-phonepe-16485"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-phonepe-16485"
                                    aria-selected="true"
                                    data-original-title=""
                                    title=""
                                  >
                                    Phonepe
                                    <img
                                      src="https://reddypanel.com/images/icon/phonepe.png"
                                      width="5%"
                                    />
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-phonepe-16485-tab"
                                    data-id={16485}
                                    data-toggle="tab"
                                    data-target="#nav-phonepe-16485"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-phonepe-16485"
                                    aria-selected="true"
                                    data-original-title=""
                                    title=""
                                  >
                                    Phonepe
                                    <img
                                      src="https://reddypanel.com/images/icon/phonepe.png"
                                      width="5%"
                                    />
                                  </button>
                                  <button
                                    className="nav-link"
                                    id="nav-usdt-15538-tab"
                                    data-id={15538}
                                    data-toggle="tab"
                                    data-target="#nav-usdt-15538"
                                    type="button"
                                    role="tab"
                                    aria-controls="nav-usdt-15538"
                                    aria-selected="false"
                                    data-original-title=""
                                    title=""
                                  >
                                    USDT
                                    <img
                                      src="https://reddypanel.com/images/icon/usdt-icon.png"
                                      width="5%"
                                    />
                                  </button>
                                </div>
                              </nav>
                              <div className="tab-content" id="nav-tabContent">
                                <div
                                  className="tab-pane fade"
                                  id="nav-imps-16067"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5
                                            className="card-title"
                                            data-min={100.0}
                                            data-max={200000.0}
                                            id="account-name-16067"
                                          >
                                            IMPS
                                          </h5>
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="row justify-content-center">
                                                <div className="col-md-11">
                                                  <div className="account-data">
                                                    <p className="card-text">
                                                      <b>Bank Name</b>: YES BANK
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="lakshit"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b>A/C No</b>:
                                                      082751400005386
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>IFSC Code</b>:
                                                      YESB0000827
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="YESB0000827"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>Account Name</b>:
                                                      lakshit
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="lakshit"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Min Amount </b>
                                                      : 100
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          100
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Max Amount </b>
                                                      : 200000
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          200000
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://www.upitobank.com"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body upi-bank">
                                                        <p>
                                                          <b>
                                                            How To Transfer Upi
                                                            To Bank <br />
                                                            CLICK HERE
                                                            WWW.UPITOBANK.COM
                                                          </b>
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://wa.link/dujjncd6942tunbfb52"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body payment-issues">
                                                        <p>
                                                          <b>
                                                            FOR PAYMENT RELATED
                                                            ISSUES CLICK HERE
                                                          </b>
                                                          &nbsp;&nbsp;
                                                          <i className="fa-brands fa-whatsapp my-float" />
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <form
                                                id="impsForm16067"
                                                method="post"
                                                encType="multipart/form-data"
                                                noValidate="novalidate"
                                              >
                                                <input
                                                  type="hidden"
                                                  name="_token"
                                                  defaultValue="fXgBiHJWpXsj77xPDQnNYDlFSEBsaVcaK86IPhYy"
                                                />
                                                <div className="modal-body">
                                                  <div className="form-group">
                                                    <label htmlFor="transactionId">
                                                      Unique Transaction
                                                      Reference
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      name="transaction_id"
                                                      id="transactionId"
                                                      placeholder="6 to 12 Digit UTR Number"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="proofOfDeposit16067">
                                                      Upload Your Payment Proof
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        [Required]
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="file"
                                                      className="form-control"
                                                      name="deposit_proof"
                                                      id="proofOfDeposit16067"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">
                                                      Amount
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="number"
                                                      className="form-control"
                                                      name="amount"
                                                      readOnly=""
                                                      defaultValue={2300}
                                                      id="amount16067Input"
                                                      placeholder="Enter amount"
                                                    />
                                                    <div
                                                      className="btn-group"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16067}
                                                        data-amount={500}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +500
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16067}
                                                        data-amount={1000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16067}
                                                        data-amount={5000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +5,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16067}
                                                        data-amount={10000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +10,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16067}
                                                        data-amount={50000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +50,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16067}
                                                        data-amount={100000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1,00,000
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    id="accountId"
                                                    name="account_id"
                                                    defaultValue={16067}
                                                  />
                                                  <div className="custom-control custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      name="terms_condition"
                                                      id="termsCheck16067"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="termsCheck16067"
                                                    >
                                                      I have read and agree with
                                                      <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#termsAndCondition"
                                                        className="terms-condition"
                                                      >
                                                        the terms of payment and
                                                        withdrawal policy.
                                                      </a>
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="modal-footer">
                                                  <button
                                                    disabled=""
                                                    type="submit"
                                                    id="depositBtn16067"
                                                    className="btn btn-info depositBtn"
                                                    data-id={16067}
                                                    data-original-title=""
                                                    title=""
                                                  >
                                                    Submit
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="loading-div loading-imps-16067"
                                          style={{ display: "none" }}
                                        >
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-imps-16383"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5
                                            className="card-title"
                                            data-min={100.0}
                                            data-max={200000.0}
                                            id="account-name-16383"
                                          >
                                            IMPS
                                          </h5>
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="row justify-content-center">
                                                <div className="col-md-11">
                                                  <div className="account-data">
                                                    <p className="card-text">
                                                      <b>Bank Name</b>: YES BANK
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="SURENDRA NATH"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b>A/C No</b>:
                                                      082751400005552
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>IFSC Code</b>:
                                                      YESB0000827
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="YESB0000827"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>Account Name</b>:
                                                      SURENDRA NATH
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="SURENDRA NATH"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Min Amount </b>
                                                      : 100
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          100
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Max Amount </b>
                                                      : 200000
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          200000
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://www.upitobank.com"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body upi-bank">
                                                        <p>
                                                          <b>
                                                            How To Transfer Upi
                                                            To Bank <br />
                                                            CLICK HERE
                                                            WWW.UPITOBANK.COM
                                                          </b>
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://wa.link/dujjncd6942tunbfb52"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body payment-issues">
                                                        <p>
                                                          <b>
                                                            FOR PAYMENT RELATED
                                                            ISSUES CLICK HERE
                                                          </b>
                                                          &nbsp;&nbsp;
                                                          <i className="fa-brands fa-whatsapp my-float" />
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <form
                                                id="impsForm16383"
                                                method="post"
                                                encType="multipart/form-data"
                                                noValidate="novalidate"
                                              >
                                                <input
                                                  type="hidden"
                                                  name="_token"
                                                  defaultValue="fXgBiHJWpXsj77xPDQnNYDlFSEBsaVcaK86IPhYy"
                                                />
                                                <div className="modal-body">
                                                  <div className="form-group">
                                                    <label htmlFor="transactionId">
                                                      Unique Transaction
                                                      Reference
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      name="transaction_id"
                                                      id="transactionId"
                                                      placeholder="6 to 12 Digit UTR Number"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="proofOfDeposit16383">
                                                      Upload Your Payment Proof
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        [Required]
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="file"
                                                      className="form-control"
                                                      name="deposit_proof"
                                                      id="proofOfDeposit16383"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">
                                                      Amount
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="number"
                                                      className="form-control"
                                                      name="amount"
                                                      readOnly=""
                                                      defaultValue={2300}
                                                      id="amount16383Input"
                                                      placeholder="Enter amount"
                                                    />
                                                    <div
                                                      className="btn-group"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16383}
                                                        data-amount={500}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +500
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16383}
                                                        data-amount={1000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16383}
                                                        data-amount={5000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +5,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16383}
                                                        data-amount={10000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +10,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16383}
                                                        data-amount={50000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +50,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16383}
                                                        data-amount={100000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1,00,000
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    id="accountId"
                                                    name="account_id"
                                                    defaultValue={16383}
                                                  />
                                                  <div className="custom-control custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      name="terms_condition"
                                                      id="termsCheck16383"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="termsCheck16383"
                                                    >
                                                      I have read and agree with
                                                      <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#termsAndCondition"
                                                        className="terms-condition"
                                                      >
                                                        the terms of payment and
                                                        withdrawal policy.
                                                      </a>
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="modal-footer">
                                                  <button
                                                    disabled=""
                                                    type="submit"
                                                    id="depositBtn16383"
                                                    className="btn btn-info depositBtn"
                                                    data-id={16383}
                                                    data-original-title=""
                                                    title=""
                                                  >
                                                    Submit
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="loading-div loading-imps-16383"
                                          style={{ display: "none" }}
                                        >
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-bank-account-16066"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5
                                            className="card-title"
                                            data-min={100.0}
                                            data-max={100000.0}
                                            id="account-name-16066"
                                          >
                                            Bank Account
                                          </h5>
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="row justify-content-center">
                                                <div className="col-md-11">
                                                  <div className="account-data">
                                                    <p className="card-text">
                                                      <b>Bank Name</b>: yes bank
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="lakshit"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b>A/C No</b>:
                                                      082751400005386
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>IFSC Code</b>:
                                                      YESB0000827
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="YESB0000827"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>Account Name</b>:
                                                      lakshit
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="lakshit"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Min Amount </b>
                                                      : 100
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          100
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Max Amount </b>
                                                      : 100000
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          100000
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://www.upitobank.com"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body upi-bank">
                                                        <p>
                                                          <b>
                                                            How To Transfer Upi
                                                            To Bank <br />
                                                            CLICK HERE
                                                            WWW.UPITOBANK.COM
                                                          </b>
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://wa.link/dujjncd6942tunbfb52"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body payment-issues">
                                                        <p>
                                                          <b>
                                                            FOR PAYMENT RELATED
                                                            ISSUES CLICK HERE
                                                          </b>
                                                          &nbsp;&nbsp;
                                                          <i className="fa-brands fa-whatsapp my-float" />
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <form
                                                id="bankDepositForm16066"
                                                method="post"
                                                action="https://reddypanel.com/store-deposit/param/param1/param2"
                                                encType="multipart/form-data"
                                                noValidate="novalidate"
                                              >
                                                <input
                                                  type="hidden"
                                                  name="_token"
                                                  defaultValue="fXgBiHJWpXsj77xPDQnNYDlFSEBsaVcaK86IPhYy"
                                                />
                                                <div className="modal-body">
                                                  <div className="form-group">
                                                    <label htmlFor="transactionId">
                                                      Unique Transaction
                                                      Reference
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      name="transaction_id"
                                                      id="transactionId"
                                                      placeholder="6 to 12 Digit UTR Number"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="proofOfDeposit16066">
                                                      Upload Your Payment Proof
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        [Required]
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="file"
                                                      className="form-control"
                                                      name="deposit_proof"
                                                      id="proofOfDeposit16066"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">
                                                      Amount
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="number"
                                                      className="form-control"
                                                      name="amount"
                                                      readOnly=""
                                                      defaultValue={2300}
                                                      id="amount16066Input"
                                                      placeholder="Enter amount"
                                                    />
                                                    <div
                                                      className="btn-group"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16066}
                                                        data-amount={500}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +500
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16066}
                                                        data-amount={1000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16066}
                                                        data-amount={5000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +5,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16066}
                                                        data-amount={10000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +10,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16066}
                                                        data-amount={50000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +50,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16066}
                                                        data-amount={100000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1,00,000
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    id="accountId"
                                                    name="account_id"
                                                    defaultValue={16066}
                                                  />
                                                  <div className="custom-control custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      name="terms_condition"
                                                      id="termsCheck16066"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="termsCheck16066"
                                                    >
                                                      I have read and agree with
                                                      <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#termsAndCondition"
                                                        className="terms-condition"
                                                      >
                                                        the terms of payment and
                                                        withdrawal policy.
                                                      </a>
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="modal-footer">
                                                  <button
                                                    disabled=""
                                                    type="submit"
                                                    id="depositBtn"
                                                    className="btn btn-info depositBtn"
                                                    data-id={16066}
                                                    data-original-title=""
                                                    title=""
                                                  >
                                                    Submit
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="loading-div loading-bank-account-16066"
                                          style={{ display: "none" }}
                                        >
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-bank-account-16382"
                                  role="tabpanel"
                                  aria-labelledby="nav-home-tab"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5
                                            className="card-title"
                                            data-min={100.0}
                                            data-max={200000.0}
                                            id="account-name-16382"
                                          >
                                            Bank Account
                                          </h5>
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="row justify-content-center">
                                                <div className="col-md-11">
                                                  <div className="account-data">
                                                    <p className="card-text">
                                                      <b>Bank Name</b>: YES BANK
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="SURENDRA NATH"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b>A/C No</b>:
                                                      082751400005552
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>IFSC Code</b>:
                                                      YESB0000827
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="YESB0000827"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b>Account Name</b>:
                                                      SURENDRA NATH
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="SURENDRA NATH"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Min Amount </b>
                                                      : 100
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          100
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Max Amount </b>
                                                      : 200000
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          200000
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                  </div>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://www.upitobank.com"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body upi-bank">
                                                        <p>
                                                          <b>
                                                            How To Transfer Upi
                                                            To Bank <br />
                                                            CLICK HERE
                                                            WWW.UPITOBANK.COM
                                                          </b>
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://wa.link/dujjncd6942tunbfb52"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body payment-issues">
                                                        <p>
                                                          <b>
                                                            FOR PAYMENT RELATED
                                                            ISSUES CLICK HERE
                                                          </b>
                                                          &nbsp;&nbsp;
                                                          <i className="fa-brands fa-whatsapp my-float" />
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <form
                                                id="bankDepositForm16382"
                                                method="post"
                                                action="https://reddypanel.com/store-deposit/param/param1/param2"
                                                encType="multipart/form-data"
                                                noValidate="novalidate"
                                              >
                                                <input
                                                  type="hidden"
                                                  name="_token"
                                                  defaultValue="fXgBiHJWpXsj77xPDQnNYDlFSEBsaVcaK86IPhYy"
                                                />
                                                <div className="modal-body">
                                                  <div className="form-group">
                                                    <label htmlFor="transactionId">
                                                      Unique Transaction
                                                      Reference
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      name="transaction_id"
                                                      id="transactionId"
                                                      placeholder="6 to 12 Digit UTR Number"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="proofOfDeposit16382">
                                                      Upload Your Payment Proof
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        [Required]
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="file"
                                                      className="form-control"
                                                      name="deposit_proof"
                                                      id="proofOfDeposit16382"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">
                                                      Amount
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="number"
                                                      className="form-control"
                                                      name="amount"
                                                      readOnly=""
                                                      defaultValue={2300}
                                                      id="amount16382Input"
                                                      placeholder="Enter amount"
                                                    />
                                                    <div
                                                      className="btn-group"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16382}
                                                        data-amount={500}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +500
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16382}
                                                        data-amount={1000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16382}
                                                        data-amount={5000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +5,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16382}
                                                        data-amount={10000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +10,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16382}
                                                        data-amount={50000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +50,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16382}
                                                        data-amount={100000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1,00,000
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    id="accountId"
                                                    name="account_id"
                                                    defaultValue={16382}
                                                  />
                                                  <div className="custom-control custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      name="terms_condition"
                                                      id="termsCheck16382"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="termsCheck16382"
                                                    >
                                                      I have read and agree with
                                                      <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#termsAndCondition"
                                                        className="terms-condition"
                                                      >
                                                        the terms of payment and
                                                        withdrawal policy.
                                                      </a>
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="modal-footer">
                                                  <button
                                                    disabled=""
                                                    type="submit"
                                                    id="depositBtn"
                                                    className="btn btn-info depositBtn"
                                                    data-id={16382}
                                                    data-original-title=""
                                                    title=""
                                                  >
                                                    Submit
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="loading-div loading-bank-account-16382"
                                          style={{ display: "none" }}
                                        >
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade active show"
                                  id="nav-phonepe-16485"
                                  role="tabpanel"
                                  aria-labelledby="nav-contact-tab"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5
                                            className="card-title"
                                            data-min={100.0}
                                            data-max={5000.0}
                                            id="account-name-16485"
                                          >
                                            PhonePe
                                          </h5>
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="row justify-content-center">
                                                <div className="col-md-11">
                                                  <div className="account-data">
                                                    <p className="card-text">
                                                      <b>Name</b>: Swami cake
                                                      and pastry
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="Swami cake and pastry"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b>Number</b>: Q066817666
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="Q066817666"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Min Amount </b>
                                                      : 100
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          100
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                    <p className="card-text">
                                                      <b> Max Amount </b>
                                                      : 5000
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text={
                                                          5000
                                                        }
                                                        data-original-title=""
                                                        title=""
                                                      />
                                                      <br />
                                                    </p>
                                                    <img
                                                      className="qr-code"
                                                      src="https://panel-data-all.s3.ap-south-1.amazonaws.com/images/qr_code/1716304433.jpeg"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://www.upitobank.com"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body upi-bank">
                                                        <p>
                                                          <b>
                                                            How To Transfer Upi
                                                            To Bank <br />
                                                            CLICK HERE
                                                            WWW.UPITOBANK.COM
                                                          </b>
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://wa.link/dujjncd6942tunbfb52"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body payment-issues">
                                                        <p>
                                                          <b>
                                                            FOR PAYMENT RELATED
                                                            ISSUES CLICK HERE
                                                          </b>
                                                          &nbsp;&nbsp;
                                                          <i className="fa-brands fa-whatsapp my-float" />
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <form
                                                id="phonepeForm16485"
                                                method="post"
                                                encType="multipart/form-data"
                                                noValidate="novalidate"
                                              >
                                                <input
                                                  type="hidden"
                                                  name="_token"
                                                  defaultValue="fXgBiHJWpXsj77xPDQnNYDlFSEBsaVcaK86IPhYy"
                                                />
                                                <div className="modal-body">
                                                  <div className="form-group">
                                                    <label htmlFor="transactionId">
                                                      Unique Transaction
                                                      Reference
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      name="transaction_id"
                                                      id="transactionId"
                                                      placeholder="6 to 12 Digit UTR Number"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="proofOfDeposit16485">
                                                      Upload Your Payment Proof
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        [Required]
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="file"
                                                      className="form-control"
                                                      name="deposit_proof"
                                                      id="proofOfDeposit16485"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">
                                                      Amount
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="number"
                                                      className="form-control"
                                                      name="amount"
                                                      defaultValue={2300}
                                                      readOnly=""
                                                      id="amount16485Input"
                                                      placeholder="Enter amount"
                                                    />
                                                    <div
                                                      className="btn-group"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16485}
                                                        data-amount={500}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +500
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16485}
                                                        data-amount={1000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16485}
                                                        data-amount={5000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +5,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16485}
                                                        data-amount={10000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +10,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16485}
                                                        data-amount={50000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +50,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={16485}
                                                        data-amount={100000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1,00,000
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    id="accountId"
                                                    name="account_id"
                                                    defaultValue={16485}
                                                  />
                                                  <div className="custom-control custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      name="terms_condition"
                                                      id="termsCheck16485"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="termsCheck16485"
                                                    >
                                                      I have read and agree with
                                                      <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#termsAndCondition"
                                                        className="terms-condition"
                                                      >
                                                        the terms of payment and
                                                        withdrawal policy.
                                                      </a>
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="modal-footer">
                                                  <button
                                                    disabled=""
                                                    type="submit"
                                                    id="depositBtn"
                                                    className="btn btn-info depositBtn"
                                                    data-id={16485}
                                                    data-original-title=""
                                                    title=""
                                                  >
                                                    Submit
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="loading-div loading-phonepe-16485"
                                          style={{ display: "none" }}
                                        >
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-usdt-15538"
                                  role="tabpanel"
                                  aria-labelledby="nav-usdt"
                                >
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card">
                                        <div className="card-body">
                                          <h5
                                            className="card-title"
                                            data-min={5.0}
                                            data-max={100000.0}
                                            id="account-name-15538"
                                          >
                                            USDT
                                          </h5>
                                          <div className="row">
                                            <div className="col-md-6">
                                              <div className="row justify-content-center">
                                                <div className="col-md-11">
                                                  <div className="account-data">
                                                    <p className="card-text">
                                                      <b>Wallet Name</b>: USDT
                                                      TR20
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="USDT TR20"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <p className="card-text">
                                                      <b>Wallet address</b>:
                                                      TPssz5L8NP851hPao65fj8DYopURvzXfTA
                                                      <button
                                                        className="btn btn-sm btn-success"
                                                        data-clipboard-text="TPssz5L8NP851hPao65fj8DYopURvzXfTA"
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        <i className="fa-solid fa-copy" />
                                                      </button>
                                                    </p>
                                                    <img
                                                      className="qr-code"
                                                      src="https://panel-data-all.s3.ap-south-1.amazonaws.com/images/qr_code/1715555587.jpeg"
                                                    />
                                                  </div>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://www.upitobank.com"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body upi-bank">
                                                        <p>
                                                          <b>
                                                            How To Transfer Upi
                                                            To Bank <br />
                                                            CLICK HERE
                                                            WWW.UPITOBANK.COM
                                                          </b>
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                                <div className="col-md-11">
                                                  <a
                                                    href="https://wa.link/dujjncd6942tunbfb52"
                                                    target="_blank"
                                                  >
                                                    <div className="card">
                                                      <div className="card-body payment-issues">
                                                        <p>
                                                          <b>
                                                            FOR PAYMENT RELATED
                                                            ISSUES CLICK HERE
                                                          </b>
                                                          &nbsp;&nbsp;
                                                          <i className="fa-brands fa-whatsapp my-float" />
                                                        </p>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-md-6">
                                              <form
                                                id="usdtForm15538"
                                                method="post"
                                                encType="multipart/form-data"
                                                noValidate="novalidate"
                                              >
                                                <input
                                                  type="hidden"
                                                  name="_token"
                                                  defaultValue="fXgBiHJWpXsj77xPDQnNYDlFSEBsaVcaK86IPhYy"
                                                />
                                                <div className="modal-body">
                                                  <div className="form-group">
                                                    <label htmlFor="transactionId">
                                                      USDT Reference No
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="text"
                                                      className="form-control"
                                                      name="transaction_id"
                                                      id="transactionId"
                                                      placeholder="10 Digit USDT Reference No"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="proofOfDeposit15538">
                                                      Upload Your Payment Proof
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        [Required]
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="file"
                                                      className="form-control"
                                                      name="deposit_proof"
                                                      id="proofOfDeposit15538"
                                                    />
                                                  </div>
                                                  <div className="form-group">
                                                    <label htmlFor="exampleFormControlInput1">
                                                      Amount
                                                      <small
                                                        style={{ color: "red" }}
                                                      >
                                                        *
                                                      </small>
                                                    </label>
                                                    <input
                                                      type="number"
                                                      className="form-control"
                                                      name="amount"
                                                      defaultValue={2300}
                                                      readOnly=""
                                                      id="amount15538Input"
                                                      placeholder="Enter amount"
                                                    />
                                                    <span
                                                      className="amount_label"
                                                      style={{
                                                        fontSize: 15,
                                                        color: "green",
                                                        textAlign: "left",
                                                        display: "block",
                                                      }}
                                                    >
                                                      Rate calculation : 2300 x
                                                      93 = 213900
                                                    </span>
                                                    <div
                                                      className="btn-group"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={15538}
                                                        data-amount={500}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +500
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={15538}
                                                        data-amount={1000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={15538}
                                                        data-amount={5000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +5,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={15538}
                                                        data-amount={10000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +10,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={15538}
                                                        data-amount={50000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +50,000
                                                      </button>
                                                      <button
                                                        type="button"
                                                        className="amount-shortcut"
                                                        data-id={15538}
                                                        data-amount={100000}
                                                        data-original-title=""
                                                        title=""
                                                      >
                                                        +1,00,000
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <input
                                                    type="hidden"
                                                    id="accountId"
                                                    name="account_id"
                                                    defaultValue={15538}
                                                  />
                                                  <div className="custom-control custom-checkbox">
                                                    <input
                                                      type="checkbox"
                                                      className="custom-control-input"
                                                      name="terms_condition"
                                                      id="termsCheck15538"
                                                    />
                                                    <label
                                                      className="custom-control-label"
                                                      htmlFor="termsCheck15538"
                                                    >
                                                      I have read and agree with
                                                      <a
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#termsAndCondition"
                                                        className="terms-condition"
                                                      >
                                                        the terms of payment and
                                                        withdrawal policy.
                                                      </a>
                                                    </label>
                                                  </div>
                                                </div>
                                                <div className="modal-footer">
                                                  <button
                                                    disabled=""
                                                    type="submit"
                                                    id="depositBtn"
                                                    className="btn btn-info depositBtn"
                                                    data-id={15538}
                                                    data-original-title=""
                                                    title=""
                                                  >
                                                    Submit
                                                  </button>
                                                </div>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="loading-div loading-usdt-15538"
                                          style={{ display: "none" }}
                                        >
                                          <div className="loading" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <Transaction_Table />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </app-deposit-withdraw>
      </main>
    </>
  );
};

export default Deposit;

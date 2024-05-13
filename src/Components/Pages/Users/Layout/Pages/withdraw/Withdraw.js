import React, { useState } from "react";
import WithdrawModel from "./WithdrawModel";

const Withdraw = ({ abbb }) => {

  // console.log("abbb", abbb);
  const [show, setShow] = useState(false);



  const ShowModal = () => {
    // abbb(true)
  }

  return (
    <>

      <main _ngcontent-fig-c57="" id="main" className="main">
        <router-outlet _ngcontent-fig-c57="" />
        <app-deposit-withdraw _nghost-fig-c63="">
          <div _ngcontent-fig-c63="" className="deposit_withdrawal">
            <h2 _ngcontent-fig-c63="" className="userscreen-title">
              <button _ngcontent-fig-c63="" className="btn-xs deposit-btn">
                Back
              </button>
            </h2>
            <div className="model-open">
              <div className="bankingUi">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12 text-center pt-3 logo-section">
                      <button
                        type="button"
                        id="addAccountButton"
                        className="btn btn-info"
                        data-modal-type="add_account"
                        data-original-title=""
                        title=""
                        onClick={() => setShow(true)}
                      >
                        Add account
                      </button>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="card">
                            <div
                              className="card-body text-left"
                              style={{ fontSize: "10px !important", color: "red" }}
                            >
                              <p>
                                1. This form is for withdrawing the amount from the
                                main wallet only.
                              </p>
                              <p>
                                2. The bonus wallet amount cannot be withdrawn by
                                this form.
                              </p>
                              <p>
                                3. Do not put Withdraw request without betting with
                                deposit amount. Such activity may be identified as
                                Suspicious
                              </p>
                              <p>
                                4. If multiple users are using same withdraw account
                                then all the linked users will be blocked.
                              </p>
                              <p>
                                5. Maximum Withdraw time is 45 minutes then only
                                complain on WhatsApp number.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <a className="reset_withdraw_password" href="#">
                            <div className="card">
                              <div className="card-body payment-issues">
                                <p>
                                  <b>FOR RESET WITHDRAW PASSWORD CLICK HERE</b>
                                  &nbsp;&nbsp;
                                  <i className="fa-brands fa-whatsapp my-float withdraw-whp-icon" />
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="row" id="account-list-div"></div>
                    </div>
                    <div className="col-md-4">
                      <table
                        className="table table-bordered withdraw-table"
                        id="withdrawTable"
                      >
                        <thead>
                          <tr>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Account</th>
                            <th>Date</th>
                            <th>Reason</th>
                          </tr>
                        </thead>
                        <tbody id="withdrawTableData">
                          <tr id="no_data_found">
                            <td colSpan={4}>No data found!</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WithdrawModel show={show} setShow={setShow} />
        </app-deposit-withdraw>

      </main>




    </>



  );
};

export default Withdraw;

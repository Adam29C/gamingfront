import React from "react";

const Deposit = () => {
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
      <div className="bankingUi">
  <div className="container-fluid">
    <div className="row">
      <div
        className="col-md-12 text-center pt-3 logo-section"
        style={{ display: "none" }}
      >
        <img
          className="img-fluid main-logo"
          src="https://reddypanel.com/images/reddybook.club.png"
          style={{ width: 150 }}
        />
        <h2>9101270692(0)</h2>
      </div>
      <div className="col-md-8">
        <div className="row">
          <div className="col-md-12">
            <div>
              <div
                className="col-md-12 card amount-div"
                style={{ marginTop: 10 }}
              >
                <div className="card-body">
                  <form id="amountForm" method="post">
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="mKCY4PXQtKIrMjkErhOtvSAt3O0hi5aA3KZ2DTCd"
                    />{" "}
                    <div className="form-group">
                      <label>Amount</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          name="amount"
                          id="amount"
                          placeholder="Enter amount"
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            className="input-group-text amountBtn"
                            data-wp-add=""
                            id="basic-addon2"
                          >
                            SUBMIT
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-12 account-list"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div
                    className="card-body text-left"
                  
                  >
                    <p>
                      1. Deposit money only in the below available accounts to
                      get the fastest credits and avoid possible delays.
                    </p>
                    <p>
                      2. Deposits made 45 minutes after the account removal from
                      the site are valid &amp; will be added to their wallets.
                    </p>
                    <p>
                      3. Site is not responsible for money deposited to Old,
                      Inactive or Closed accounts.
                    </p>
                    <p>
                      4. After deposit, add your UTR and amount to receive
                      balance.{" "}
                    </p>
                    <p>
                      5. NEFT receiving time varies from 40 minutes to 2 hours.{" "}
                    </p>
                    <p>
                      6. In case of account modification: payment valid for 1
                      hour after changing account details in deposit page.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="account-table">
          <table
            className="table table-bordered account-table-new"
            id="depositTable"
          >
            <thead>
              <tr>
                <th>Transaction No</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody id="depositTableData">
              <tr id="no_data_found">
                <td colSpan={5}>No data found!</td>
              </tr>
            </tbody>
          </table>
          <div className="row video-player">
            <div className="col-md-12 ">
              <label>Please note the UTR Number👇</label>
              <img
                src="https://reddypanel.com/images/utr_demo_img.png"
                height={300}
                width={320}
              />
            </div>
            <div className="col-md-12 mb-2">
              <label>Phonepay To Bank Transfer👇</label>
              <a className="deposit-anchor" href="https://appopener.ai/yt/7ku56ivmr" target="_blank">
                https://appopener.ai/yt/7ku56ivmr
              </a>
            </div>
            <div className="col-md-12 mb-2">
              <label>Gpay To Bank Transfer 👇</label>
              <a className="deposit-anchor" href="https://appopener.ai/yt/b6ngpraah" target="_blank">
                https://appopener.ai/yt/b6ngpraah
              </a>
            </div>
            <div className="col-md-12 mb-2">
              <label>Paytm To Bank Transfer 👇</label>
              <a className="deposit-anchor" href="https://appopener.ai/yt/e7i9e3623" target="_blank">
                https://appopener.ai/yt/e7i9e3623
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
    {/**/}
  </app-deposit-withdraw>
  {/**/}
</main>
    </>
  );
};

export default Deposit;

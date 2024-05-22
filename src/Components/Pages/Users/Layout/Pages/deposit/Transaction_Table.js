import React from "react";

const Transaction_Table = () => {
  return (
    <div>
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
            <a
              className="deposit-anchor"
              href="https://appopener.ai/yt/7ku56ivmr"
              target="_blank"
            >
              https://appopener.ai/yt/7ku56ivmr
            </a>
          </div>
          <div className="col-md-12 mb-2">
            <label>Gpay To Bank Transfer 👇</label>
            <a
              className="deposit-anchor"
              href="https://appopener.ai/yt/b6ngpraah"
              target="_blank"
            >
              https://appopener.ai/yt/b6ngpraah
            </a>
          </div>
          <div className="col-md-12 mb-2">
            <label>Paytm To Bank Transfer 👇</label>
            <a
              className="deposit-anchor"
              href="https://appopener.ai/yt/e7i9e3623"
              target="_blank"
            >
              https://appopener.ai/yt/e7i9e3623
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction_Table;

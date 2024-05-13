import React,{useState} from 'react'
import Withdraw from './Withdraw';
import Model from '../../../../../Helpers/Model';

const WithdrawModel = ({show , setShow}) => {

    return (
        <>
            {/* <Withdraw abbb={setShow} /> */}
            <Model show={show} setShow={setShow} >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add account</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                            onClick={() => setShow(false)}
                        >
                            <span aria-hidden="true" >×</span>
                        </button>
                    </div>
                    <form
                        id="withdrawAccountForm"
                        method="post"
                        action=""
                        noValidate="novalidate"
                    >
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="typeInput">Account Type</label>
                                <select
                                    className="form-control valid"
                                    name="type"
                                    id="accountType"
                                    aria-invalid="false"
                                >
                                    <option value="">---Select Account Type---</option>
                                    <option data-label="Bank Account" value={1}>
                                        Bank Account
                                    </option>
                                </select>
                            </div>
                            <div className="form-group name_div">
                                <label htmlFor="nameInput">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="nameInput"
                                    required=""
                                    placeholder="Enter Name"
                                />
                            </div>
                            <div className="form-group number_div">
                                <label htmlFor="accountNumberInput" className="number_label">
                                    A/C Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="number"
                                    id="accountNumberInput"
                                    required=""
                                    placeholder="Enter A/C Number"
                                />
                            </div>
                            <div className="form-group ifsc_code_div">
                                <label htmlFor="ifscCodeInput">IFSC CODE</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ifsc_code"
                                    id="ifscCodeInput"
                                    minLength={11}
                                    required=""
                                    maxLength={11}
                                    placeholder="Enter IFSC CODE"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordAInput">Withdraw Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="passwordAInput"
                                    required=""
                                    placeholder="Enter Withdraw password"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                aria-label="Close"
                                data-original-title=""
                                title=""
                                onClick={() => setShow(false)}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                id="withdrawAccountBtn"
                                className="btn btn-info"
                                data-original-title=""
                                title=""
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>

            </Model >
        </>

    )
}

export default WithdrawModel
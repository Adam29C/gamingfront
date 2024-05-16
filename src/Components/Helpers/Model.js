import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const Model = ({ show, setShow, children }) => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    <div
    // className="modal fade show"

    >
      <Modal show={show} onHide={() => setShow(false)} >
        {children}
      </Modal>
    </div>

  )
}

export default Model
import React from 'react'
import { Dialog } from 'react-md'

export const Modal = ({ children, modalOpen, toggleClose }) => (
  <Dialog
    id="main-modal"
    className="modal"
    visible={modalOpen}
    onRequestClose={toggleClose}
  >
    {children}
  </Dialog>
)

import React from "react";
import { CircularProgress } from "@mui/material";
import {
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  Row,
  ModalFooter,
} from "react-bootstrap";

interface Props {
  isEditMode: boolean;
  openModal: boolean;
  isSubmitting: boolean;
  onHide: () => void;
  modalClose: () => void;
  title: string;
  handleSubmit: any;
  children: React.ReactElement;
}

function CreateLedgerAccountOrAccountTypeModal({
  isEditMode,
  openModal,
  onHide,
  title,
  handleSubmit,
  modalClose,
  isSubmitting,
  children
}: Props) {

  return (
    <Modal size="lg" show={openModal} onHide={onHide}>
      <ModalHeader>
        <ModalTitle>{title}</ModalTitle>
        <span className="d-flex ms-auto" onClick={modalClose}>
          <i className="fe fe-x ms-auto"></i>
        </span>
      </ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <Row className="section p-4 mb-4">
            {children}
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={modalClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={isSubmitting}
            className="d-flex"
            onClick={() => ""}
          >
            {isSubmitting ? (
              <CircularProgress
                style={{ color: "white", margin: "2px" }}
                size={20}
              />
            ) : (
              <>{isEditMode ? "Update" : "Add"}</>
            )}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default CreateLedgerAccountOrAccountTypeModal;

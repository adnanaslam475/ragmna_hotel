import React, { useState, useEffect } from "react";
import { Accordion, Card, Col, Collapse, Row } from "react-bootstrap";
import "./ratePolicies.scss";
import { getpolicies, deletePolicies } from "./ratePolicySlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Redux/Store";
import {
  addPolicy,
  getPolicyById,
  updatePolicy,
} from "../../../../Redux/Services/policiesService";
import { toast } from "react-toastify";
import ConformationPopup from "../../../../Modals/ConformationPopup/ConformationPopup";
import CreatePolicyPopup from "../../../../Modals/CreatePolicyPopup/CreatePolicyPopup";

const RatePolicies = () => {
  const policiesType = [
    { key: "Cancellation", name: "Cancellation", modal: "showCancellation" },
    { key: "Check-in", name: "Check In", modal: "showCheckIn" },
    { key: "Deposit", name: "Deposit", modal: "showDeposit" },
    { key: "No-Show", name: "No Show", modal: "showNoShow" },
    { key: "Insurance", name: "Insurance", modal: "showInsurance" },
  ];

  const dispatch = useDispatch<AppDispatch>();
  const [polices, setpolicies] = useState<any[]>([]);
  const [policesModal, setPolicesModal] = useState({
    showCancellation: false,
    showCheckIn: false,
    showDeposit: false,
    showNoShow: false,
    showInsurance: false,
    isEdit: false,
  });

  const [policyDetail, setPolicyDetail] = useState({
    _id: "",
    name: "",
    description: "",
    type: "",
    rules: {
      type: "",
      amountType: "",
      amount: "",
      chargeType: "",
      cancelationDay: "",
      cancelationType: "",
      isChecked: "",
      hours: 0,
      chargeCollectionType: "",
    },
  });

  const [deletePolicyDetail, setDeletePolicyDetail] = useState({
    isDelete: false,
    id: "",
  });

  useEffect(() => {
    getAllPolicies();
  }, []);

  const getAllPolicies = async () => {
    try {
      const response: any = await dispatch(getpolicies()).unwrap();
      setpolicies(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const openCreatePolicyModal = (type) => {
    setPolicesModal({
      ...policesModal,
      [type]: true,
      isEdit: false,
    });

    setPolicyDetail({
      ...policyDetail,
      _id: "",
      name: "",
      description: "",
      type: "",
      rules: {
        type: "",
        amountType: "",
        amount: "",
        chargeType: "",
        cancelationDay: "",
        cancelationType: "",
        isChecked: "",
        hours: 0,
        chargeCollectionType: "",
      },
    });
  };

  const createPolicy = async (type) => {
    try {
      const policyPayload = {
        name: policyDetail.name ? policyDetail.name : "",
        description: policyDetail.description ? policyDetail.description : "",
        type: type ? type : "Cancellation",
        rules: [
          {
            type: policyDetail.rules.type
              ? policyDetail.rules.type
              : "CheckIn Date",
            amountType: policyDetail.rules.amountType
              ? policyDetail.rules.amountType
              : "Percentage",
            amount: policyDetail.rules.amount
              ? parseInt(policyDetail.rules.amount)
              : 0,
            chargeType: policyDetail.rules.chargeType
              ? policyDetail.rules.chargeType
              : "Total Charge",
            cancelationDay: policyDetail.rules.cancelationDay
              ? policyDetail.rules.cancelationDay
              : "",
            cancelationType: policyDetail.rules.cancelationType
              ? policyDetail.rules.cancelationType
              : "",
            isChecked: policyDetail.rules.isChecked
              ? policyDetail.rules.isChecked
              : "",
            hours: policyDetail.rules.hours
              ? parseInt(policyDetail.rules.hours.toString())
              : 0,
            chargeCollectionType: policyDetail.rules.chargeCollectionType
              ? policyDetail.rules.chargeCollectionType
              : "Captured",
          },
        ],
      };

      const addNewPolicy: any = await addPolicy(policyPayload);
      if (addNewPolicy.statusCode === 200) {
        toast.success("Policy has been added");
        setPolicesModal({
          showCancellation: false,
          showCheckIn: false,
          showDeposit: false,
          showNoShow: false,
          showInsurance: false,
          isEdit: false,
        });
        getAllPolicies();
      } else {
        toast.success("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editPolicy = async (type) => {
    try {
      const policyPayload = {
        name: policyDetail.name ? policyDetail.name : "",
        description: policyDetail.description ? policyDetail.description : "",
        type: type ? type : "Cancellation",
        rules: [
          {
            type: policyDetail.rules.type
              ? policyDetail.rules.type
              : "CheckIn Date",
            amountType: policyDetail.rules.amountType
              ? policyDetail.rules.amountType
              : "Percentage",
            amount: policyDetail.rules.amount
              ? parseInt(policyDetail.rules.amount)
              : 0,
            chargeType: policyDetail.rules.chargeType
              ? policyDetail.rules.chargeType
              : "Total Charge",
            cancelationDay: policyDetail.rules.cancelationDay
              ? policyDetail.rules.cancelationDay
              : "",
            cancelationType: policyDetail.rules.cancelationType
              ? policyDetail.rules.cancelationType
              : "",
            isChecked: policyDetail.rules.isChecked
              ? policyDetail.rules.isChecked
              : "",
            hours: policyDetail.rules.hours
              ? parseInt(policyDetail.rules.hours.toString())
              : 0,
            chargeCollectionType: policyDetail.rules.chargeCollectionType
              ? policyDetail.rules.chargeCollectionType
              : "Captured",
          },
        ],
      };

      const addNewPolicy: any = await updatePolicy(
        policyDetail._id,
        policyPayload
      );
      if (addNewPolicy.statusCode === 200) {
        toast.success("Policy has been updated");
        setPolicesModal({
          showCancellation: false,
          showCheckIn: false,
          showDeposit: false,
          showNoShow: false,
          showInsurance: false,
          isEdit: false,
        });
        getAllPolicies();
      } else {
        toast.success("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getSinglePolicy = async (type, entry) => {
    const policyDetail: any = await getPolicyById(entry._id);
    if (policyDetail.statusCode === 200) {
      setPolicyDetail({
        ...policyDetail,
        _id: policyDetail.data._id ? policyDetail.data._id : "",
        name: policyDetail.data.name ? policyDetail.data.name : "",
        description: policyDetail.data.description
          ? policyDetail.data.description
          : "",
        type: policyDetail.data.type ? policyDetail.data.type : "",
        rules: {
          type: policyDetail.data.rules[0].type
            ? policyDetail.data.rules[0].type
            : "",
          amountType: policyDetail.data.rules[0].amountType
            ? policyDetail.data.rules[0].amountType
            : "",
          amount: policyDetail.data.rules[0].amount
            ? policyDetail.data.rules[0].amount
            : "",
          chargeType: policyDetail.data.rules[0].chargeType
            ? policyDetail.data.rules[0].chargeType
            : "",
          cancelationDay: policyDetail.data.rules[0].cancelationDay
            ? policyDetail.data.rules[0].cancelationDay
            : "",
          cancelationType: policyDetail.data.rules[0].cancelationType
            ? policyDetail.data.rules[0].cancelationType
            : "",
          isChecked: policyDetail.data.rules[0].isChecked
            ? policyDetail.data.rules[0].isChecked
            : "",
          hours: policyDetail.data.rules[0].hours
            ? policyDetail.data.rules[0].hours
            : 0,
        },
      });
      setPolicesModal({
        ...policesModal,
        [type]: true,
        isEdit: true,
      });
    } else {
      toast.success("Something went wrong");
    }
  };

  const delPolicies = async () => {
    try {
      await dispatch(deletePolicies(deletePolicyDetail.id)).unwrap;
      setTimeout(() => {
        getAllPolicies();
      }, 1000);
      setDeletePolicyDetail({ ...deletePolicyDetail, isDelete: false });
      toast.success("Policy has been removed");
    } catch (err: any) {
      setDeletePolicyDetail({ ...deletePolicyDetail, isDelete: false });
      toast.success("Something went wrong");
    }
  };

  return (
    <React.Fragment>
      {deletePolicyDetail.isDelete && (
        <ConformationPopup smallmodalClose={delPolicies} />
      )}
      <Row>
        <Col xl={12}>
          <Card className="card-bg">
            <Card.Header>
              <Card.Title>Manage Policy</Card.Title>
            </Card.Header>
            <Card.Body>
              <Accordion
                defaultActiveKey="0"
                className="demo-accordion accordionjs m-0"
              >
                {policiesType.map((type, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    className="acc_section "
                  >
                    <Accordion.Header className="acc_head">
                      <div style={{ display: "flex" }}>{type.name} Policy</div>
                      <div
                        style={{
                          display: "flex",
                          marginLeft: "auto",
                          marginRight: 20,
                        }}
                        onClick={() => openCreatePolicyModal(type.modal)}
                      >
                        Create New
                      </div>
                    </Accordion.Header>
                    {polices &&
                      polices
                        .filter((item) => item.type === type.key)
                        .map((entry) => (
                          <Accordion.Body>
                            <div className="policy-item">
                              <div style={{ display: "flex" }}>
                                <div
                                  style={{
                                    color: "#333",
                                    fontSize: 16,
                                    width: "auto",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    getSinglePolicy(type.modal, entry)
                                  }
                                >
                                  {entry.name}
                                </div>
                                <div
                                  className=""
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginLeft: "auto",
                                  }}
                                >
                                  <span
                                    className="icon-edit"
                                    style={{ cursor: "pointer" }}
                                    onClick={() =>
                                      getSinglePolicy(type.modal, entry)
                                    }
                                  >
                                    Edit
                                  </span>
                                  <span
                                    className="icon-edit"
                                    style={{
                                      marginLeft: 15,
                                      cursor: "pointer",
                                    }}
                                    onClick={() =>
                                      setDeletePolicyDetail({
                                        isDelete: true,
                                        id: entry._id,
                                      })
                                    }
                                  >
                                    Del
                                  </span>
                                  <span
                                    className="icon-edit"
                                    style={{
                                      marginLeft: 15,
                                      cursor: "pointer",
                                    }}
                                  >
                                    {entry.uses} Uses
                                  </span>
                                </div>
                              </div>
                              <span
                                style={{
                                  color: "#666",
                                  fontSize: 14,
                                  fontWeight: 300,
                                  marginLeft: 20,
                                  display: "block",
                                  marginBottom: 5,
                                  marginTop: 5,
                                }}
                              >
                                {entry.description}
                              </span>
                            </div>
                          </Accordion.Body>
                        ))}
                  </Accordion.Item>
                ))}
              </Accordion>
              <Collapse className="mt-2">
                <pre>
                  <code>
                    {`
 
`}
                  </code>
                </pre>
              </Collapse>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <CreatePolicyPopup
        policesModal={policesModal}
        policyDetail={policyDetail}
        setPolicesModal={setPolicesModal}
        setPolicyDetail={setPolicyDetail}
        createPolicy={createPolicy}
        editPolicy={editPolicy}
        deletePolicyDetail={deletePolicyDetail}
      />
    </React.Fragment>
  );
};

export default RatePolicies;

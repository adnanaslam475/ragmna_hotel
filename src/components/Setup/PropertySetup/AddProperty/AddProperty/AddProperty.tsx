import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Card, Nav, Tab } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AmenitiesSelection from "../AmenitiesSelection/AmenitiesSelection";
import CheckInCheckOut from "../CheckInCheckOut/CheckInCheckOut";
import PropertyInfo from "../PropertyInfo/PropertyInfo";
import Reservation from "../Reservation/Reservation";
import SystemConfig from "../SystemConfig/SystemConfig";
import TaxSetup from "../TaxSetup/TaxSetup";
import "./AddProperty.scss";
import * as Yup from "yup";
import { InitialValues } from "../types";
import { useUser } from "../../../../Authentication/firebaseAuth/firebaseAuthSlice";
import {
  addPropertyData,
  getPropertyDataById,
  updatePropertyData,
} from "../PropertyInfo/propertyInfoSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import { ITimezoneOption } from "react-timezone-select";
import {
  addTaxConfigDetails,
  getTaxConfigDetails,
  removeTaxData,
  updateTaxData,
  useTaxData,
} from "../TaxSetup/taxSetupSlice";
import Sections from "../Sections/Sections";
import {
  Success,
} from "../../../../../Redux/Services/toaster-service";

interface AddPropertyProps {
  setAddProperty?: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProperty = (props: AddPropertyProps) => {
  const { taxData } = useTaxData();

  let { id } = useParams();
  const [key, setKey] = useState("first");
  const dispatch = useDispatch<AppDispatch>();

  const [isTax, setIsTax] = useState(false);
  const [isSelectedAmenities, setIsSelectedAmenities] = useState<string[]>([]);

  const onSelectedAmenitiesChange = (e, index) => {
    let val = e.target.value;
    if (e.target.checked) {
      setIsSelectedAmenities([...isSelectedAmenities, val]);
    } else {
      let i = isSelectedAmenities.indexOf(val);
      let temp = Object.assign([], isSelectedAmenities);
      temp.splice(i, 1);
      setIsSelectedAmenities(temp);
    }
  };

  const [tz, setTz] = useState<ITimezoneOption>({
    value: "",
    label: "",
    abbrev: "",
    altName: "",
    offset: 0,
  });
  const [sectionArray, setSectionArray] = useState<any>([]);

  let initialValues: InitialValues = {
    name: "",
    email: "",
    propertyType: "",
    goodFor: "",
    allowedFor: "",
    area: null,
    unit: "",
    children: null,
    adults: null,
    briefDescription: "",
    longDescription: "",
    Cname: "",
    CphoneNumber: "",
    waNumber: "",
    Oname: "",
    OphoneNumber: "",
    address: "",
    Lcity: "",
    state: "",
    Lcountry: "",
    zipCode: null,
    latitude: "",
    longitude: "",
    // country: "",
    // city: "",
    // district: "",
    virtualTourLink: "",
    // sections: [],
    // images: [],
    // amenities: [],
    availableForEntireRental: false,
    strictlyEntireRental: false,
    isPublished: false,
    automaticRoomAssignment: false,
    emailDisplayName: "",
    replyToEmailAddress: "",
    sendCCOnAllEmails: "",
    setOccupiedRoomToDirty: false,
    allowOverBookingManually: false,
    addMarketSegment: [],
    checkInTime: "",
    checkOutTime: "",
    autoGuestRegistrationCreationDuringCheckIn: false,
    sendNotificationToConfirmRoomIfDirty: false,
    allowNonZeroBalanceDuringCheckout: false,
    allowRefundApplyUponCheckOut: false,
    autoRefundApplyUponCheckOut: false,
    includeRoomMovesOnArrivalAndDepartureList: false,
  };

  const initialTaxValuesInfo: any = {
    shortCode: "",
    name: "",
    startDate: "",
    endDate: "",
    surcharge: 0,
    type: 0,
    calculationType: 0,
    isVatApplicable: false,
  };

  const [taxInfo, setTaxInfo] = useState(initialTaxValuesInfo);

  const [taxId, setTaxId] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    email: Yup.string().email("Invalid Email").required("Please Enter Email"),
    propertyType: Yup.string().required("Please Select Propert Type"),
    goodFor: Yup.string().required("Please Select Good For"),
    allowedFor: Yup.string().required(),
    area: Yup.number().required(),
    unit: Yup.string().required(),
    children: Yup.number().required(),
    adults: Yup.number().required(),
    briefDescription: Yup.string(),
    longDescription: Yup.string(),
    Cname: Yup.string().required("Please Enter Name"),
    CphoneNumber: Yup.string().required(),
    waNumber: Yup.string().required(),
    Oname: Yup.string().required("Please Enter Name"),
    OphoneNumber: Yup.string().required(),
    address: Yup.string().required("Please Enter Address"),
    Lcity: Yup.string().required("Please Enter City"),
    state: Yup.string().required("Please Enter State"),
    zipCode: Yup.number().required(),
    Lcountry: Yup.string().required("Please Enter Country"),
    latitude: Yup.string().required("Please Enter Latitude"),
    longitude: Yup.string().required("Please Enter Longitude"),
    // city: Yup.string(),
    // country: Yup.string(),
    // district: Yup.string(),
    virtualTourLink: Yup.string(),
    // sections: Yup.array(),
    // images: Yup.array(),
    // amenities: Yup.array(),
    availableForEntireRental: Yup.boolean(),
    strictlyEntireRental: Yup.boolean(),
    isPublished: Yup.boolean(),
    automaticRoomAssignment: Yup.boolean(),
    emailDisplayName: Yup.string(),
    replyToEmailAddress: Yup.string(),
    sendCCOnAllEmails: Yup.string(),
    setOccupiedRoomToDirty: Yup.boolean(),
    allowOverBookingManually: Yup.boolean(),
    addMarketSegment: Yup.array(),
    checkInTime: Yup.string(),
    checkOutTime: Yup.string(),
    autoGuestRegistrationCreationDuringCheckIn: Yup.boolean(),
    sendNotificationToConfirmRoomIfDirty: Yup.boolean(),
    allowNonZeroBalanceDuringCheckout: Yup.boolean(),
    allowRefundApplyUponCheckOut: Yup.boolean(),
    autoRefundApplyUponCheckOut: Yup.boolean(),
    includeRoomMovesOnArrivalAndDepartureList: Yup.boolean(),
  });

  const { user } = useUser();

  let navigate = useNavigate();

  const navigateToId = (id) => {
    let path = `/setup/propertysetup/add-property/${id}`;
    navigate(path);
  };

  let onSubmit = async (values) => {
    try {
      let payload = Object.assign({}, values);
      payload["supplierId"] = user.supplierId;
      payload["contact"] = {
        name: values.Cname,
        phoneNumber: values.CphoneNumber,
        waNumber: values.waNumber,
      };
      payload["location"] = {
        address: values.address,
        city: values.Lcity,
        state: values.state,
        country: values.Lcountry,
        latitude: values.latitude,
        longitude: values.longitude,
        zipCode: parseInt(values.zipCode),
      };
      payload["owner"] = {
        name: values.Oname,
        phoneNumber: values.OphoneNumber,
      };
      payload["dimensions"] = {
        area: values.area,
        unit: values.unit,
      };
      payload["maxCapacity"] = {
        adults: values.adults,
        children: values.children,
      };
      payload["reservationConfig"] = {
        automaticRoomAssignment: values.automaticRoomAssignment,
        emailDisplayName: values.emailDisplayName,
        replyToEmailAddress: values.replyToEmailAddress,
        sendCCOnAllEmails: values.sendCCOnAllEmails,
        setOccupiedRoomToDirty: values.setOccupiedRoomToDirty,
        allowOverBookingManually: values.allowOverBookingManually,
        addMarketSegment: [],
      };
      payload["checkInCheckOutConfig"] = {
        checkInTime: values.checkInTime,
        checkOutTime: values.checkOutTime,
        autoGuestRegistrationCreationDuringCheckIn:
          values.autoGuestRegistrationCreationDuringCheckIn,
        sendNotificationToConfirmRoomIfDirty:
          values.sendNotificationToConfirmRoomIfDirty,
        allowNonZeroBalanceDuringCheckout:
          values.allowNonZeroBalanceDuringCheckout,
        allowRefundApplyUponCheckOut: values.allowRefundApplyUponCheckOut,
        autoRefundApplyUponCheckOut: values.autoRefundApplyUponCheckOut,
        includeRoomMovesOnArrivalAndDepartureList:
          values.includeRoomMovesOnArrivalAndDepartureList,
      };
      payload["systemConfig"] = {
        timeZone: tz ? tz.value : "",
      };
      let object = Object.assign([], sectionArray);
      payload["sections"] = [];
      for (let i = 0; i < object.length; i++) {
        object[i].quantity = parseInt(object[i].quantity);
        payload["sections"].push(object[i]);
      }
      payload["amenities"] = [...isSelectedAmenities];
      let deletekeys = [
        "Cname",
        "CphoneNumber",
        "waNumber",
        "address",
        "Lcity",
        "state",
        "zipCode",
        "Lcountry",
        "latitude",
        "longitude",
        "Oname",
        "OphoneNumber",
        "area",
        "unit",
        "adults",
        "children",
        "addMarketSegment",
        "automaticRoomAssignment",
        "emailDisplayName",
        "replyToEmailAddress",
        "sendCCOnAllEmails",
        "setOccupiedRoomToDirty",
        "allowOverBookingManually",
        "checkInTime",
        "checkOutTime",
        "autoGuestRegistrationCreationDuringCheckIn",
        "sendNotificationToConfirmRoomIfDirty",
        "allowNonZeroBalanceDuringCheckout",
        "allowRefundApplyUponCheckOut",
        "autoRefundApplyUponCheckOut",
        "includeRoomMovesOnArrivalAndDepartureList",
      ];
      for (let i = 0; i < deletekeys.length; i++) {
        delete payload[deletekeys[i]];
      }
      if (id) {
        payload["id"] = id;
        let response: any = await dispatch(
          updatePropertyData(payload)
        ).unwrap();
        if (response) {
          Success("Property details has been updated");
        }
      } else {
        let response: any = await dispatch(addPropertyData(payload)).unwrap();
        if (response) {
          navigateToId(response.data._id);
          Success("Property details has been saved");
        }
      }
    } catch (err: any) {
      console.log(err, "err");
    }
    if (key === "six" && id) {
      try {
        let payload = Object.assign({}, taxInfo);
        payload["propertyId"] = id;
        payload["surcharge"] = parseInt(payload["surcharge"]);
        if (taxId) {
          payload["taxId"] = taxId;
          let response: any = await dispatch(updateTaxData(payload)).unwrap();
          if (response) {
            Success("Tax Config details has been updated");
            getTaxDetail();
            setTaxInfo({
              shortCode: "",
              name: "",
              startDate: "",
              endDate: "",
              surcharge: 0,
              type: 0,
              calculationType: 0,
              isVatApplicable: false,
            });
          }
        } else {
          let response: any = await dispatch(
            addTaxConfigDetails(payload)
          ).unwrap();
          if (response) {
            Success("Tax Config details has been saved");
            getTaxDetail();
            setTaxInfo({
              shortCode: "",
              name: "",
              startDate: "",
              endDate: "",
              surcharge: 0,
              type: 0,
              calculationType: 0,
              isVatApplicable: false,
            });
          }
        }
      } catch (err: any) {}
    }
  };

  const editTaxDetail = (index, TaxId) => {
    setTaxId(TaxId);
    setTaxInfo({
      ...taxInfo,
      name: taxData[index].name ? taxData[index].name : "",
      shortCode: taxData[index].shortCode ? taxData[index].shortCode : "",
      startDate: taxData[index].startDate ? taxData[index].startDate : "",
      endDate: taxData[index].endDate ? taxData[index].endDate : "",
      surcharge: taxData[index].surcharge
        ? taxData[index].surcharge.toString()
        : 0,
      type: taxData[index].type ? taxData[index].type : index,
      calculationType: taxData[index].calculationType
        ? taxData[index].calculationType
        : 0,
      isVatApplicable: taxData[index].isVatApplicable
        ? taxData[index].isVatApplicable
        : false,
    });
  };

  const setKeyValue = (key) => {
    setKey(key);
    if (key === "six") {
      setIsTax(true);
    } else {
      setIsTax(false);
    }
  };
  const {
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const getById = async () => {
    if (id) {
      let response: any = await dispatch(getPropertyDataById(id)).unwrap();
      if (response?.data) {
        setValues({
          ...values,
          name: response?.data?.name ? response?.data?.name : "",
          email: response?.data?.email ? response?.data?.email : "",
          propertyType: response?.data?.propertyType
            ? response?.data?.propertyType
            : "",
          goodFor: response?.data?.goodFor ? response?.data?.goodFor : "",
          allowedFor: response?.data?.allowedFor
            ? response?.data?.allowedFor
            : "",
          area: response?.data?.dimensions?.area
            ? response?.data?.dimensions?.area
            : 0,
          unit: response?.data?.dimensions?.unit
            ? response?.data?.dimensions?.unit
            : "",
          adults: response?.data?.maxCapacity.adults
            ? response?.data?.maxCapacity.adults
            : 0,
          children: response?.data?.maxCapacity.children
            ? response?.data?.maxCapacity.children
            : 0,
          Cname: response?.data?.contact.name
            ? response?.data?.contact.name
            : "",
          CphoneNumber: response?.data?.contact.phoneNumber
            ? response?.data?.contact.phoneNumber
            : "",
          waNumber: response?.data?.contact.waNumber
            ? response?.data?.contact.waNumber
            : "",
          Oname: response?.data?.owner.name ? response?.data?.owner.name : "",
          briefDescription: response?.data?.briefDescription
            ? response?.data?.briefDescription
            : "",
          longDescription: response?.data?.longDescription
            ? response?.data?.longDescription
            : "",
          OphoneNumber: response?.data?.owner.phoneNumber
            ? response?.data?.owner.phoneNumber
            : "",
          address: response?.data?.location.address
            ? response?.data?.location.address
            : "",
          // city: response?.data?.city,
          Lcity: response?.data?.location.city
            ? response?.data?.location.city
            : "",
          state: response?.data?.location.state
            ? response?.data?.location.state
            : "",
          zipCode: response?.data?.location.zipCode
            ? response?.data?.location.zipCode.toString()
            : "",
          Lcountry: response?.data?.location.country
            ? response?.data?.location.country
            : "",
          // district: response?.data?.district,
          // country: response?.data?.country,
          latitude: response?.data?.location.latitude
            ? response?.data?.location.latitude
            : "",
          longitude: response?.data?.location.longitude
            ? response?.data?.location.longitude
            : "",
          availableForEntireRental: response?.data?.availableForEntireRental
            ? response?.data?.availableForEntireRental
            : false,
          strictlyEntireRental: response?.data?.strictlyEntireRental
            ? response?.data?.strictlyEntireRental
            : false,
          automaticRoomAssignment: response?.data?.reservationConfig
            ?.automaticRoomAssignment
            ? response?.data?.reservationConfig?.automaticRoomAssignment
            : false,
          emailDisplayName: response?.data?.reservationConfig?.emailDisplayName
            ? response?.data?.reservationConfig?.emailDisplayName
            : "",
          replyToEmailAddress: response?.data?.reservationConfig
            ?.replyToEmailAddress
            ? response?.data?.reservationConfig?.replyToEmailAddress
            : "",
          sendCCOnAllEmails: response?.data?.reservationConfig
            ?.sendCCOnAllEmails
            ? response?.data?.reservationConfig?.sendCCOnAllEmails
            : "",
          setOccupiedRoomToDirty: response?.data?.reservationConfig
            ?.setOccupiedRoomToDirty
            ? response?.data?.reservationConfig?.setOccupiedRoomToDirty
            : false,
          allowOverBookingManually: response?.data?.reservationConfig
            ?.allowOverBookingManually
            ? response?.data?.reservationConfig?.allowOverBookingManually
            : false,
          checkInTime: response?.data?.checkInCheckOutConfig?.checkInTime
            ? response?.data?.checkInCheckOutConfig?.checkInTime
            : "",
          checkOutTime: response?.data?.checkInCheckOutConfig?.checkOutTime
            ? response?.data?.checkInCheckOutConfig?.checkOutTime
            : "",
          autoGuestRegistrationCreationDuringCheckIn: response?.data
            ?.checkInCheckOutConfig?.autoGuestRegistrationCreationDuringCheckIn
            ? response?.data?.checkInCheckOutConfig
                ?.autoGuestRegistrationCreationDuringCheckIn
            : false,
          sendNotificationToConfirmRoomIfDirty: response?.data
            ?.checkInCheckOutConfig?.sendNotificationToConfirmRoomIfDirty
            ? response?.data?.checkInCheckOutConfig
                ?.sendNotificationToConfirmRoomIfDirty
            : false,
          allowNonZeroBalanceDuringCheckout: response?.data
            ?.checkInCheckOutConfig?.allowNonZeroBalanceDuringCheckout
            ? response?.data?.checkInCheckOutConfig
                ?.allowNonZeroBalanceDuringCheckout
            : false,
          allowRefundApplyUponCheckOut: response?.data?.checkInCheckOutConfig
            ?.allowRefundApplyUponCheckOut
            ? response?.data?.checkInCheckOutConfig
                ?.allowRefundApplyUponCheckOut
            : false,
          autoRefundApplyUponCheckOut: response?.data?.checkInCheckOutConfig
            ?.autoRefundApplyUponCheckOut
            ? response?.data?.checkInCheckOutConfig?.autoRefundApplyUponCheckOut
            : false,
          includeRoomMovesOnArrivalAndDepartureList: response?.data
            ?.checkInCheckOutConfig?.includeRoomMovesOnArrivalAndDepartureList
            ? response?.data?.checkInCheckOutConfig
                ?.includeRoomMovesOnArrivalAndDepartureList
            : false,
        });
        if (response?.data?.sections) setSectionArray(response.data.sections);
        if (response?.data?.systemConfig?.timeZone) {
          tz.value = response?.data?.systemConfig?.timeZone;
          setTz(tz);
        }
        if (response?.data?.amenities) {
          setIsSelectedAmenities(response?.data?.amenities);
        }
      }
    }
  };

  const getTaxDetail = async () => {
    if (id) {
      await dispatch(getTaxConfigDetails(id)).unwrap();
    }
  };

  useEffect(() => {
    if (id) {
      getById();
      getTaxDetail();
    } else {
      dispatch(removeTaxData([]));
    }
  }, [id]);

  const setTaxInfoValue = (key, value) => {
    setTaxInfo({
      ...taxInfo,
      [key]: value,
    });
  };

  return (
    <React.Fragment>
      <Card className="card-bg">
        <Card.Body>
          <div className="panel panel-secondary">
            <Tab.Container
              id="left-tabs-example p-0"
              onSelect={(k: any) => setKeyValue(k)}
              activeKey={key}
            >
              <form onSubmit={handleSubmit}>
                <div className="tab-name-container d-flex justify-content-between">
                  <Nav
                    variant="pills"
                    className="panel-tabs nav-tabs panel-secondary"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first">
                        <i className="fe fe-user me-1"></i>Property Info
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <i className="fe fe-user me-1"></i>System configuration
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <i className="fe fe-calendar me-1"></i>Reservation
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="four">
                        <i className="fe fe-settings me-1"></i>
                        Check-in/Check-out
                      </Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="five">
                        <i className="fe fe-user me-1"></i>Policies
                      </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="six">
                        <i className="fe fe-calendar me-1"></i>Tax Setup
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="seven">
                        <i className="fe fe-settings me-1"></i>Amenities
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="eight">
                        <i className="fe fe-settings me-1"></i>Sections
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {isTax ? (
                    <Button
                      type="submit"
                      style={{ borderRadius: "0px 20px 20px 0px" }}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      style={{ borderRadius: "0px 20px 20px 0px" }}
                    >
                      Save
                    </Button>
                  )}
                </div>
                <div className="tab-content-container">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <PropertyInfo
                        values={values}
                        handleChange={handleChange}
                        errors={errors}
                        touched={touched}
                        setFieldValue={setFieldValue}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <SystemConfig tz={tz} setTz={setTz} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Reservation
                        values={values}
                        handleChange={handleChange}
                        errors={errors}
                        touched={touched}
                        setFieldValue={setFieldValue}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="four">
                      <CheckInCheckOut
                        values={values}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="five"></Tab.Pane>
                    <Tab.Pane eventKey="six">
                      <TaxSetup
                        initialTaxValuesInfo={taxInfo}
                        setTaxInfo={setTaxInfoValue}
                        editTaxDetail={editTaxDetail}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="seven">
                      {/* <Amenities /> */}
                      <AmenitiesSelection
                        onSelectedAmenitiesChange={onSelectedAmenitiesChange}
                        isSelectedAmenities={isSelectedAmenities}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="eight">
                      <Sections
                        sectionArray={sectionArray}
                        setSectionArray={setSectionArray}
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </form>
            </Tab.Container>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default AddProperty;

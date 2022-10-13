import React, { useEffect, useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "./PropertyInfo.scss";
import Select from "react-select";
import { CommanDropDownType, InitialValues } from "./../types";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { useUser } from "../../../../Authentication/firebaseAuth/firebaseAuthSlice";
import { Country, State, City } from "country-state-city";
import { ICountry, ICity } from "country-state-city";
import { useGetPropertyByIdQuery } from "./propertyInfoApi";
import { useNavigate, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../Redux/Store";
import {
  addPropertyData,
  getPropertyDataById,
  updatePropertyData,
} from "./propertyInfoSlice";
export interface PropertyInfoProps {
  editPid: string | undefined;
}

const PropertyInfo = (props: PropertyInfoProps) => {
  const { editPid } = props;
  const dispatch = useDispatch<AppDispatch>();

  // let { id } = useParams();

  // useEffect(() => {
  //     console.log(id);
  // }, [id])

  const goodFors: CommanDropDownType[] = [
    { value: "", label: "Select Good For" },
    { value: "Singles", label: "Singles" },
    { value: "Family", label: "Family" },
    { value: "Both", label: "Both" },
  ];

  const propertyTypes: CommanDropDownType[] = [
    { value: "", label: "Select Property Type" },
    { value: "Rented", label: "Rented" },
  ];

  const countries = Country.getAllCountries();
  const updatedCountries: CommanDropDownType[] = countries.map(
    (country: ICountry) => {
      return {
        label: country.name,
        value: country.isoCode,
      };
    }
  );

  const updatedStates = (country) => {
    let c: any = updatedCountries.findIndex((x) => x.label === country);
    return State.getStatesOfCountry(updatedCountries[c]?.value).map(
      (state) => ({
        label: state.name,
        value: state.isoCode,
      })
    );
  };

  const updatedCities = (state, types) => {
    switch (types) {
      case "normal":
        let ns: any = updatedStates(values.country).findIndex(
          (x) => x.label === state
        );
        let nc: any = updatedCountries.findIndex(
          (x) => x.label === values.country
        );

        return City.getCitiesOfState(
          updatedCountries[nc]?.value,
          updatedStates(values.country)[ns].value
        ).map((city: ICity) => ({
          label: city.name,
          value: city.name,
        }));
      case "location":
        let s: any = updatedStates(values.Lcountry).findIndex(
          (x) => x.label === state
        );
        let c: any = updatedCountries.findIndex(
          (x) => x.label === values.Lcountry
        );

        return City.getCitiesOfState(
          updatedCountries[c]?.value,
          updatedStates(values.Lcountry)[s]?.value
        ).map((city: ICity) => ({
          label: city.name,
          value: city.name,
        }));
      default:
        return [];
    }
    //   if (values.Lcountry && state) {
    //     let s: any = updatedStates(values.Lcountry).findIndex(
    //       (x) => x.label === state
    //     );
    //     let c: any = updatedCountries.findIndex(
    //       (x) => x.label === values.Lcountry
    //     );

    //     return City.getCitiesOfState(
    //       updatedCountries[c]?.value,
    //       updatedStates(values.Lcountry)[s].value
    //     ).map((city: ICity) => ({
    //       label: city.name,
    //       value: city.name,
    //     }));
    //   } else if (values.country && state) {
    //     let s: any = updatedStates(values.country).findIndex(
    //       (x) => x.label === state
    //     );
    //     let c: any = updatedCountries.findIndex(
    //       (x) => x.label === values.country
    //     );

    //     return City.getCitiesOfState(
    //       updatedCountries[c]?.value,
    //       updatedStates(values.country)[s].value
    //     ).map((city: ICity) => ({
    //       label: city.name,
    //       value: city.name,
    //     }));
    //   } else {
    //     return [];
    //   }
  };

  const initialValuesInfo: InitialValues = {
    name: "",
    email: "",
    propertyType: "",
    goodFor: "",
    space: 0,
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
    latitude: "",
    longitude: "",
    country: "",
    city: "",
    district: "",
    virtualTourLink: "",
    // sections: [],
    // images: [],
    // amenities: [],
    availableForEntireRental: false,
    strictlyEntireRental: false,
    isPublished: false,
  };
  const [initialValues, setInitialValues] = useState(initialValuesInfo);

  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    email: Yup.string().email("Invalid Email").required("Please Enter Email"),
    propertyType: Yup.string().required("Please Select Propert Type"),
    goodFor: Yup.string().required("Please Select Good For"),
    space: Yup.number(),
    briefDescription: Yup.string().required(),
    longDescription: Yup.string().required(),
    Cname: Yup.string().required("Please Enter Name"),
    CphoneNumber: Yup.string(),
    waNumber: Yup.string(),
    Oname: Yup.string().required("Please Enter Name"),
    OphoneNumber: Yup.string(),
    address: Yup.string().required("Please Enter Address"),
    Lcity: Yup.string().required("Please Enter City"),
    state: Yup.string().required("Please Enter State"),
    Lcountry: Yup.string().required("Please Enter Country"),
    latitude: Yup.string().required("Please Enter Latitude"),
    longitude: Yup.string().required("Please Enter Longitude"),
    city: Yup.string(),
    country: Yup.string(),
    district: Yup.string(),
    virtualTourLink: Yup.string(),
    // sections: Yup.array(),
    // images: Yup.array(),
    // amenities: Yup.array(),
    availableForEntireRental: Yup.boolean(),
    strictlyEntireRental: Yup.boolean(),
    isPublished: Yup.boolean(),
  });

  const { user } = useUser();

  let navigate = useNavigate();

  const navigateToId = (id) => {
    let path = `/setup/propertysetup/add-property/${id}`;
    navigate(path);
  };

  const onSubmit = async (values) => {
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
      };
      payload["owner"] = {
        name: values.Oname,
        phoneNumber: values.OphoneNumber,
      };
      // payload["images"] = [];
      // payload['availableForEntireRental'] = isChecked
      let deletekeys = [
        "Cname",
        "CphoneNumber",
        "waNumber",
        "address",
        "Lcity",
        "state",
        "Lcountry",
        "latitude",
        "longitude",
        "Oname",
        "OphoneNumber",
      ];
      for (let i = 0; i < deletekeys.length; i++) {
        delete payload[deletekeys[i]];
      }
      if (editPid) {
        payload["id"] = editPid;
        let response: any = await dispatch(
          updatePropertyData(payload)
        ).unwrap();
      } else {
        let response: any = await dispatch(addPropertyData(payload)).unwrap();
        navigateToId(response.data._id);
      }
    } catch (err: any) {
      console.log(err, "err");
    }
  };
  // const { data, isLoading, isSuccess, isError } = useGetPropertyByIdQuery(
  //   editPid,
  //   { skip: !!editPid }
  // );
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
    if (editPid) {
      let repsonse: any = await dispatch(getPropertyDataById(editPid)).unwrap();
      console.log(repsonse);
      if (repsonse?.data) {
        setValues({
          ...values,
          name: repsonse.data?.name,
          email: repsonse.data?.email,
          propertyType: repsonse.data?.propertyType,
          goodFor: repsonse.data?.goodFor,
          space: repsonse.data?.space,
          Cname: repsonse.data?.contact.name,
          CphoneNumber: repsonse.data?.contact.phoneNumber,
          waNumber: repsonse.data?.contact.waNumber,
          Oname: repsonse.data?.owner.name,
          briefDescription: repsonse?.data?.briefDescription,
          longDescription: repsonse?.data?.longDescription,
          OphoneNumber: repsonse.data?.owner.phoneNumber,
          address: repsonse.data?.location.address,
          city: repsonse.data?.city,
          Lcity: repsonse.data?.location.city,
          state: repsonse.data?.location.state,
          Lcountry: repsonse.data?.location.country,
          district: repsonse.data?.district,
          country: repsonse.data?.country,
          latitude: repsonse.data?.location.latitude,
          longitude: repsonse.data?.longitude,
          availableForEntireRental: repsonse.data?.availableForEntireRental,
          strictlyEntireRental: repsonse.data?.strictlyEntireRental,
        });
      }
    }
  };

  useEffect(() => {
    if (editPid) getById();
  }, [editPid]);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Row className="Contect-details p-4 mb-4">
          <h4>Basic Info</h4>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Property Name</label>
              <input
                type="text"
                className={
                  touched.name && errors.name
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Property Name"
                name="name"
                value={values.name}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Property Type</label>
              <Select
                classNamePrefix="Select"
                options={propertyTypes}
                value={propertyTypes.filter(
                  (option) => option.value === values.propertyType
                )}
                placeholder="Select PropertyType"
                name="propertyType"
                onChange={(selectedOption: any) => {
                  handleChange("propertyType")(selectedOption?.value);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className={
                  touched.email && errors.email
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Good For</label>
              <Select<CommanDropDownType>
                classNamePrefix="Select"
                options={goodFors}
                value={goodFors.filter(
                  (option) => option.value === values.goodFor
                )}
                placeholder="Select Good For"
                name="goodFor"
                onChange={(selectedOption: any) => {
                  handleChange("goodFor")(selectedOption?.value);
                }}
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="control-group form-group">
              <label className="form-label">Brief Description</label>
              <textarea
                className={
                  touched.briefDescription && errors.briefDescription
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Brief Description"
                name="briefDescription"
                value={values.briefDescription}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="control-group form-group">
              <label className="form-label">Long Description</label>
              <textarea
                className={
                  touched.longDescription && errors.longDescription
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="long Description"
                name="longDescription"
                value={values.longDescription}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Space</label>
              <input
                type="number"
                className={
                  touched.space && errors.space
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Space"
                name="space"
                value={values.space}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Virtual Tour Link</label>
              <input
                type="text"
                className={
                  touched.space && errors.space
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Virtual Tour Link"
                name="virtualTourLink"
                value={values.virtualTourLink}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Country</label>
              <Select<CommanDropDownType>
                id="country"
                classNamePrefix="Select"
                name="country"
                options={updatedCountries}
                value={updatedCountries.filter(
                  (option) => option.label === values.country
                )}
                onChange={(value: any) => {
                  setFieldValue("country", value.label ? value.label : "");
                  setFieldValue("district", "");
                  setFieldValue("city", "");
                }}
              />
            </div>
          </Col>
          {values.country ? (
            <Col lg={6}>
              <div className="control-group form-group">
                <label className="form-label">District</label>
                <Select<CommanDropDownType>
                  id="district"
                  name="district"
                  options={updatedStates(
                    values.country ? values.country : null
                  )}
                  value={updatedStates(
                    values.country ? values.country : null
                  ).filter((option) => option.label === values.district)}
                  onChange={(value: any) => {
                    setFieldValue("district", value.label ? value.label : "");
                    setFieldValue("city", "");
                  }}
                />
              </div>
            </Col>
          ) : null}
          {values.district ? (
            <Col lg={6}>
              <div className="control-group form-group">
                <label className="form-label">City</label>
                <Select<CommanDropDownType>
                  id="city"
                  name="city"
                  options={updatedCities(
                    values.district ? values.district : null,
                    "normal"
                  )}
                  value={updatedCities(
                    values.district ? values.district : null,
                    "normal"
                  ).filter((option) => option.label === values.city)}
                  onChange={(value: any) => setFieldValue("city", value.value)}
                />
              </div>
            </Col>
          ) : null}

          <Col lg={6}></Col>
          <Col lg={6} className="my-3">
            <Form.Group>
              <Form.Check
                className="ps-6 pro-switch-style d-flex align-items-center"
                type="switch"
                id="availableForEntireRental"
                label="Available For EntireRental"
                onChange={(e) => {
                  setFieldValue("availableForEntireRental", e.target.checked);
                }}
                checked={values.availableForEntireRental}
              />
            </Form.Group>
          </Col>
          <Col lg={6}></Col>
          <Col lg={6} className="mb-3">
            <Form.Group>
              <Form.Check
                className="ps-6 pro-switch-style d-flex align-items-center"
                type="switch"
                id="strictlyEntireRental"
                label="Strictly EntireRental"
                onChange={(e) => {
                  setFieldValue("strictlyEntireRental", e.target.checked);
                }}
                checked={values.strictlyEntireRental}
              />
            </Form.Group>
          </Col>
          <Col lg={6}></Col>
          <Col lg={6}>
            <Form.Group>
              <Form.Check
                className="ps-6 pro-switch-style d-flex align-items-center"
                type="switch"
                id="isPublished"
                label="is Published"
                onChange={(e) => {
                  setFieldValue("isPublished", e.target.checked);
                }}
                checked={values.isPublished}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="Contect-details p-4 mb-4">
          <h4> Addresss</h4>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Address</label>
              <input
                type="text"
                className={
                  touched.address && errors.address
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Country</label>
              <Select<CommanDropDownType>
                id="Lcountry"
                classNamePrefix="Select"
                name="Lcountry"
                options={updatedCountries}
                value={updatedCountries.filter(
                  (option) => option.label === values.Lcountry
                )}
                onChange={(value: any) => {
                  setFieldValue("Lcountry", value.label ? value.label : "");
                  setFieldValue("state", "");
                  setFieldValue("Lcity", "");
                }}
              />
            </div>
          </Col>
          {values.Lcountry ? (
            <Col lg={6}>
              <div className="control-group form-group">
                <label className="form-label">State</label>
                <Select<CommanDropDownType>
                  id="state"
                  name="state"
                  options={updatedStates(
                    values.Lcountry ? values.Lcountry : null
                  )}
                  value={updatedStates(
                    values.Lcountry ? values.Lcountry : null
                  ).filter((option) => option.label === values.state)}
                  onChange={(value: any) => {
                    setFieldValue("state", value.label ? value.label : "");
                    setFieldValue("Lcity", "");
                  }}
                />
              </div>
            </Col>
          ) : null}
          {values.state ? (
            <Col lg={6}>
              <div className="control-group form-group">
                <label className="form-label">City</label>
                <Select<CommanDropDownType>
                  id="Lcity"
                  name="Lcity"
                  options={updatedCities(
                    values.state ? values.state : null,
                    "location"
                  )}
                  value={updatedCities(
                    values.state ? values.state : null,
                    "location"
                  ).filter((option) => option.label === values.Lcity)}
                  onChange={(value: any) => setFieldValue("Lcity", value.value)}
                />
              </div>
            </Col>
          ) : null}

          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Latitude</label>
              <input
                type="text"
                className={
                  touched.latitude && errors.latitude
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Latitude"
                name="latitude"
                value={values.latitude}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Longitude</label>
              <input
                type="text"
                className={
                  touched.longitude && errors.longitude
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Longitude"
                name="longitude"
                value={values.longitude}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
        </Row>
        <Row className="Contect-details p-4">
          <h4>Contact Details</h4>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={
                  touched.Cname && errors.Cname
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Name"
                name="Cname"
                value={values.Cname}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <label className="form-label">Phone Number</label>
            <div className="wrap-input100 validate-input input-group property-phone-wrap">
              <div
                // className={touched.CphoneNumber && errors.CphoneNumber ? "CountrySelector Property-phone phone-error-border" : "CountrySelector Property-phone"}
                className="CountrySelector Property-phone"
              >
                <PhoneInput
                  country={"us"}
                  value={values.CphoneNumber}
                  inputProps={{ name: "CphoneNumber", required: true }}
                  onChange={(e) => {
                    setFieldValue("CphoneNumber", e);
                  }}
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <label className="form-label">Whatsapp Number</label>
            <div className="wrap-input100 validate-input input-group property-phone-wrap">
              <div
                // className={touched.waNumber && errors.waNumber ? "CountrySelector Property-phone phone-error-border" : "CountrySelector Property-phone"}
                className="CountrySelector Property-phone"
              >
                <PhoneInput
                  country={"us"}
                  value={values.waNumber}
                  inputProps={{ name: "waNumber", required: true }}
                  onChange={(e) => {
                    setFieldValue("waNumber", e);
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="Contect-details p-4 mt-4">
          <h4>Owner Details</h4>
          <Col lg={6}>
            <div className="control-group form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className={
                  touched.Oname && errors.Oname
                    ? "form-control required error-border"
                    : "form-control required"
                }
                placeholder="Name"
                name="Oname"
                value={values.Oname}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <label className="form-label">Phone Number</label>
            <div className="wrap-input100 validate-input input-group property-phone-wrap">
              <div
                // className={touched.OphoneNumber && errors.OphoneNumber ? "CountrySelector Property-phone phone-error-border" : "CountrySelector Property-phone"}
                className="CountrySelector Property-phone"
              >
                <PhoneInput
                  country={"us"}
                  inputProps={{ name: "OphoneNumber", required: true }}
                  value={values.OphoneNumber}
                  onChange={(e) => {
                    setFieldValue("OphoneNumber", e);
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>

        <div className="d-flex justify-content-end mt-4 me-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PropertyInfo;

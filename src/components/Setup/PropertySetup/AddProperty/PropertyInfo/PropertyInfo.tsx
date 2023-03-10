import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import "./PropertyInfo.scss";
import Select, { StylesConfig } from "react-select";
import { CommanDropDownType } from "./../types";
import { Country, State, City } from "country-state-city";
import { ICountry, ICity } from "country-state-city";

export interface PropertyInfoProps {
  values: any;
  handleChange: any;
  errors: any;
  touched: any;
  setFieldValue: any;
}

const PropertyInfo = (props: PropertyInfoProps) => {
  const { values, handleChange, errors, touched, setFieldValue } = props;
  const propertyTypeStyles: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor:
        touched.propertyType && errors.propertyType ? "red" : "#e9edf4",
    }),
  };
  const goodForStyles: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: touched.goodFor && errors.goodFor ? "red" : "#e9edf4",
    }),
  };

  const allowedForStyles: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: touched.allowedFor && errors.allowedFor ? "red" : "#e9edf4",
    }),
  };
  const countryStyles: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: touched.Lcountry && errors.Lcountry ? "red" : "#e9edf4",
    }),
  };
  const unitStyles: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: touched.unit && errors.unit ? "red" : "#e9edf4",
    }),
  };

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

  const allowFors: CommanDropDownType[] = [
    { value: "", label: "Select Allowed For" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Both", label: "Both" },
  ];

  const units: CommanDropDownType[] = [
    { value: "", label: "Select Units For" },
    { value: "SquareFeet", label: "SquareFeet" },
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
  };
  return (
    <React.Fragment>
      {/* <form onSubmit={handleSubmit}> */}
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
              styles={propertyTypeStyles}
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
              styles={goodForStyles}
              name="goodFor"
              onChange={(selectedOption: any) => {
                handleChange("goodFor")(selectedOption?.value);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Allow For</label>
            <Select<CommanDropDownType>
              classNamePrefix="Select"
              options={allowFors}
              value={allowFors.filter(
                (option) => option.value === values.allowedFor
              )}
              styles={allowedForStyles}
              placeholder="Select Allow For"
              name="allowedFor"
              onChange={(selectedOption: any) => {
                handleChange("allowedFor")(selectedOption?.value);
              }}
            />
          </div>
        </Col>
        {/* <Col lg={6}>
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
          </Col> */}
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
            <label className="form-label">Virtual Tour Link</label>
            <input
              type="text"
              className={
                touched.virtualTourLink && errors.virtualTourLink
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
              styles={countryStyles}
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
            <label className="form-label">Zip Code</label>
            <input
              type="text"
              className={
                touched.zipCode && errors.zipCode
                  ? "form-control required error-border"
                  : "form-control required"
              }
              placeholder="Zip Code"
              name="zipCode"
              value={values.zipCode}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </Col>
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
        <h4>Dimensions</h4>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Area</label>
            <input
              type="number"
              className={
                touched.area && errors.area
                  ? "form-control required error-border"
                  : "form-control required"
              }
              placeholder="Area"
              name="area"
              value={values.area}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Unit</label>
            <Select<CommanDropDownType>
              classNamePrefix="Select"
              options={units}
              value={units.filter((option) => option.value === values.unit)}
              placeholder="Select Good For"
              name="unit"
              styles={unitStyles}
              onChange={(selectedOption: any) => {
                handleChange("unit")(selectedOption?.value);
              }}
            />
          </div>
        </Col>
      </Row>
      <Row className="Contect-details p-4">
        <h4>Max Capacity</h4>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Adults</label>
            <input
              type="number"
              className={
                touched.adults && errors.adults
                  ? "form-control required error-border"
                  : "form-control required"
              }
              placeholder="Adults"
              name="adults"
              value={values.adults}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="control-group form-group">
            <label className="form-label">Children</label>
            <input
              type="number"
              className={
                touched.children && errors.children
                  ? "form-control required error-border"
                  : "form-control required"
              }
              placeholder="Children"
              name="children"
              value={values.children}
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
                inputStyle={touched.CphoneNumber && errors.CphoneNumber ? {borderColor:"red"} : {borderColor:"#e9edf4"}}
                inputProps={{ name: "CphoneNumber"  }}
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
                inputStyle={touched.waNumber && errors.waNumber ? {borderColor:"red"} : {borderColor:"#e9edf4"}}
                inputProps={{ name: "waNumber" }}
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
                inputProps={{ name: "OphoneNumber" }}
                inputStyle={touched.OphoneNumber && errors.OphoneNumber ? {borderColor:"red"} : {borderColor:"#e9edf4"}}
                value={values.OphoneNumber}
                onChange={(e) => {
                  setFieldValue("OphoneNumber", e);
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
      {/* <div className="d-flex justify-content-end mt-4 me-3">
          <Button type="submit">Submit</Button>
        </div>
      </form> */}
    </React.Fragment>
  );
};

export default PropertyInfo;

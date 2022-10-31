import React, { FC } from "react";
import "./Profile.scss";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import Select, { StylesConfig } from "react-select";
import { CommanDropDownType } from "../Setup/PropertySetup/AddProperty/types";
import { City, Country, ICity, ICountry, State } from "country-state-city";
import { useFormik } from "formik";
import * as Yup from "yup";

interface ProfileProps {}
const Profile: FC<ProfileProps> = () => {
  let initialValues = {
    name: "",
    businessname: "",
    email: "",
    waNumber: "",
    phoneNumber: "",
    address: "",
    state: "",
    zipCode: null,
    country: "",
    city: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    businessname: Yup.string().required(),
    email: Yup.string().email("Invalid Email").required("Please Enter Email"),
    waNumber: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    address: Yup.string().required("Please Enter Address"),
    state: Yup.string().required("Please Enter State"),
    zipCode: Yup.number().required(),
    city: Yup.string(),
    country: Yup.string(),
  });
  const onSubmit = () => {};
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

  const updatedCities = (state) => {
    let ns: any = updatedStates(values.country).findIndex(
      (x) => x.label === state
    );
    let nc: any = updatedCountries.findIndex((x) => x.label === values.country);

    return City.getCitiesOfState(
      updatedCountries[nc]?.value,
      updatedStates(values.country)[ns].value
    ).map((city: ICity) => ({
      label: city.name,
      value: city.name,
    }));
  };
  return (
    <div className="profile">
      <Row id="user-profile">
        <Col lg={12}>
          <Card className="profile-head">
            <Card.Body>
              <div className="wideget-user mb-2">
                <h3>Profile</h3>
                <Row>
                  <Col lg={12} md={12}>
                    <Row>
                      <div className="panel profile-cover">
                        <div>
                          <i className="profile-img icon fe fe-user" />
                        </div>
                        <div className="profile-img-content text-dark text-start mt-2">
                          <div className="text-dark">
                            <h3 className="h3 mb-2">Percy Kewshun</h3>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          <Card>
            <Row className="Contect-details p-4 mb-4">
              <Col lg={6} md={12}>
                <div className="control-group form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="control-group form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    disabled
                  />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <label className="form-label">Phone Number</label>
                <div className="wrap-input100 validate-input input-group profile-phone-wrap">
                  <div className="CountrySelector profile-phone">
                    <PhoneInput
                      country={"us"}
                      inputProps={{ name: "phoneNumber" }}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <label className="form-label">Whatsapp Number</label>
                <div className="wrap-input100 validate-input input-group profile-phone-wrap">
                  <div className="CountrySelector profile-phone">
                    <PhoneInput
                      country={"us"}
                      inputProps={{ name: "whatsappNumber" }}
                    />
                  </div>
                </div>
              </Col>

              <Col lg={6} md={12}>
                <div className="control-group form-group">
                  <label className="form-label">Business Name</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Business Name"
                    name="businessname"
                    value={values.businessname}
                    disabled
                  />
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="control-group form-group">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control required"
                    placeholder="Address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
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
                    // styles={countryStyles}
                    options={updatedCountries}
                    value={updatedCountries.filter(
                      (option) => option.label === values.country
                    )}
                    onChange={(value: any) => {
                      setFieldValue("country", value.label ? value.label : "");
                      setFieldValue("state", "");
                      setFieldValue("city", "");
                    }}
                  />
                </div>
              </Col>
              {values.country ? (
                <Col lg={6}>
                  <div className="control-group form-group">
                    <label className="form-label">State</label>
                    <Select<CommanDropDownType>
                      id="state"
                      name="state"
                      options={updatedStates(
                        values.country ? values.country : null
                      )}
                      value={updatedStates(
                        values.country ? values.country : null
                      ).filter((option) => option.label === values.state)}
                      onChange={(value: any) => {
                        setFieldValue("state", value.label ? value.label : "");
                        setFieldValue("city", "");
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
                        values.state ? values.state : null
                      )}
                      value={updatedCities(
                        values.state ? values.state : null
                      ).filter((option) => option.label === values.city)}
                      onChange={(value: any) =>
                        setFieldValue("city", value.value)
                      }
                    />
                  </div>
                </Col>
              ) : null}
              <Row>
                <div className="d-flex justify-content-end">
                  <Button>Save</Button>
                </div>
              </Row>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;

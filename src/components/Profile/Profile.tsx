import React, { FC, useEffect } from "react";
import "./Profile.scss";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import Select, { StylesConfig } from "react-select";
import { CommanDropDownType } from "../Setup/PropertySetup/AddProperty/types";
import { City, Country, ICity, ICountry, State } from "country-state-city";
import { useFormik } from "formik";
import * as Yup from "yup";
import { alterProfile, getProfiles, useProfileInfo } from "./profileSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/Store";
import { DangerLeft, Success } from "../../Redux/Services/toaster-service";

interface ProfileProps { }
const Profile: FC<ProfileProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  let initialValues = {
    name: "",
    // businessname: "",
    email: "",
    phoneNumber: "",
    // countryCode: "",
    whatsappNumber: "",
    // waCountryCode:"",
    address: "",
    state: "",
    postalCode: "",
    country: "",
    city: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please Enter Name"),
    // businessname: Yup.string().required(),
    email: Yup.string().email("Invalid Email"),
    whatsappNumber: Yup.string().nullable(),
    // waCountryCode:Yup.string(),
    phoneNumber: Yup.string().nullable(),
    address: Yup.string().required("Please Enter Address"),
    state: Yup.string().required("Please Select The State"),
    postalCode: Yup.number().nullable().required("Please Enter Postal Code"),
    city: Yup.string().required("Please Select The city"),
    country: Yup.string().required("Please Select The country"),
    // countryCode: Yup.string(),
  });

  const countryStyles: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: touched.country && errors.country ? "red" : "#e9edf4",
    }),
  };

  const stateStyle: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: touched.state && errors.state ? "red" : "#e9edf4",
    }),
  };

  const cityStyle: StylesConfig<any> = {
    control: (styles) => ({
      ...styles,
      borderColor: touched.city && errors.city ? "red" : "#e9edf4",
    }),
  };

  const onSubmit = async (values) => {
    try{
      let payload = Object.assign({},values)
      // payload['role']=''
      payload['whatsappNumber'] = parseInt(payload['whatsappNumber'])
      payload['phoneNumber'] = parseInt(payload['phoneNumber'])
      payload['address'] = {
        addressLine1:values.address,
        city:values.city,
        state:values.state,
        country:values.country,
        postalCode:values.postalCode.toString(),
      }
      delete payload['city']
      delete payload['state']
      delete payload['country']
      delete payload['postalCode']
     let res = await dispatch(alterProfile(payload))
     if (res) {
      Success("Profile has been Updated");
    }
    } catch(err){
      DangerLeft("Something went Wrong");
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
  const countries = Country.getAllCountries();
  const updatedCountries: CommanDropDownType[] = countries.map(
    (country: ICountry) => {
      return {
        label: country.name,
        value: country.isoCode,
      };
    }
  );

  const getProfile = async () => {
    try {
      let response = await dispatch(getProfiles()).unwrap()
    
      setValues({
        ...values, 
          name:response?.data?.name ? response.data.name : '',
          email: response?.data.email ? response.data.email : '',
          phoneNumber: response?.data.phoneNumber ? response.data.phoneNumber.toString() : '',
          whatsappNumber: response?.data.whatsappNumber ? response.data.whatsappNumber.toString() : '',
          address: response?.data?.address?.addressLine1 ? response.data.address.addressLine1: '',
          state: response?.data.address?.state ? response.data.address.state  : '',
          postalCode: response?.data?.address?.postalCode ? response?.data?.address?.postalCode : '',
          city: response?.data?.address.city ? response.data.address.city  : '',
          country: response?.data?.address?.country ? response.data.address.country: '',
      })
    } catch (err) {}
  }
  const { profileInfo } = useProfileInfo()
  

  useEffect(() => {
    getProfile()
  }, [])

  const updatedStates = (country:any) => {
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
                            <h3 className="h3 mb-2">{profileInfo.name}</h3>
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
            <form onSubmit={handleSubmit}>
              <Row className="Contect-details p-4 mb-4">
                <Col lg={6} md={12}>
                  <div className="control-group form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={values.name} 
                      className={
                        touched.name && errors.name
                          ? "form-control required error-border"
                          : "form-control required"
                      }
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
                        // value={values.phoneNumber}
                        inputProps={{ name: "phoneNumber" }}
                        value={values.phoneNumber}
                        onChange={(e) => {
                          setFieldValue("phoneNumber", e);
                        }}
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
                        value={values.whatsappNumber}
                        inputProps={{ name: "whatsappNumber" }}
                        onChange={(e) => {
                          setFieldValue("whatsappNumber", e);
                        }}
                      />
                    </div>
                  </div>
                </Col>

                {/* <Col lg={6} md={12}>
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
              </Col> */}
                <Col lg={6} md={12}>
                  <div className="control-group form-group">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={values.address}
                      className={
                        touched.address && errors.address
                          ? "form-control required error-border"
                          : "form-control required"
                      }
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col lg={6} md={12}>
                  <div className="control-group form-group">
                    <label className="form-label">Postal Code</label>
                    <input
                      type="number"
                      placeholder="Postal Code"
                      name="postalCode"
                      value={values.postalCode}
                      className={
                        touched.postalCode && errors.postalCode
                          ? "form-control required error-border"
                          : "form-control required"
                      }
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
                      styles={countryStyles}
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
                        styles={stateStyle}
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
                        styles={cityStyle}
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
                    <Button type="submit">Save</Button>
                  </div>
                </Row>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;

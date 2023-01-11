import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { formSchema } from "../../helpers/schema";
import {
  createUser,
  deleteUser,
  getBioData,
  updateUser,
} from "../../services/bioDataServices";
import "../bioData/bioData.css";
import BioDataTable from "./BioDataTable";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  qualification: "",
  comments: "",
};

const BioDataForm = (props) => {
  const [bioData, setBioData] = useState();
  const [viewMode, setViewMode] = useState();
  const [editMode, setEditMode] = useState();
  const [userId, setUserId] = useState();
  const [form, setForm] = useState(initialValues);

  async function createUserData(values) {
    try {
      const data = await createUser(values);
      console.log(data, "user deleted");
      alert("User added successfully!");
      formik.resetForm();
      getUserData();
    } catch (err) {
      console.log(err);
    }
  }

  function viewBioData(userID, mode) {
    const userData = bioData?.filter((userInfo) => userInfo._id === userID)[0];
    setUserId(userData?._id);
    setForm({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      address1: userData.address1,
      address2: userData.address2,
      city: userData.city,
      state: userData.state,
      zipCode: userData.zipCode,
      country: userData.country,
      qualification: userData.qualification,
      comments: userData.comments,
    });
    if (mode === "view") {
      setViewMode(true);
      setEditMode(false);
    } else if (mode === "edit") {
      setViewMode(false);
      setEditMode(true);
    }
  }

  async function updateUserData(values) {
    try {
      const data = await updateUser(userId, values);
      setForm(initialValues);
      setEditMode(false);
      alert("User updated successfully!");
      console.log(data, "user updated");
      getUserData();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteUserData(userID) {
    try {
      const data = await deleteUser(userID);
      console.log(data, "user deleted");
      alert("User deleted successfully!");
      getUserData();
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserData() {
    try {
      const data = await getBioData();
      if (data.status === 200) {
        setBioData(data.data);
      } else console.log(data.msg);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getUserData();
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: form,
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(editMode, "*** mode");
      editMode ? updateUserData(values) : createUserData(values);
    },
  });

  return (
    <div className="container">
      <div className="register col-md-5 col-sm-6">
        <h1 className="title">
          <strong>Bio Data</strong>
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className="reg_txt">
              Name <span>*</span>
            </label>
            <div className="row">
              <div className="col-6">
                <input
                  disabled={viewMode}
                  type="text"
                  className="input-name w-100 mb-0"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  placeholder="First name"
                />
                <div className="text-danger">{formik.errors.firstName}</div>
              </div>
              <div className="col-6">
                <input
                  disabled={viewMode}
                  type="text"
                  className="input-name w-100 mb-0"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  placeholder="Last name"
                />
                <span class="error text-danger">{formik.errors.email}</span>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>

          <div className="form-group">
            <label className="reg_txt">
              Email <span>*</span>
            </label>
            <input
              disabled={viewMode}
              type="text"
              className="form-register text"
              name="email"
              id=""
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <span class="error text-danger">{formik.errors.email}</span>
          </div>
          <div className="clearfix"></div>

          <div className="form-group" style={{ height: "70px" }}>
            <label className="reg_txt">
              Phone Number <span>*</span>
            </label>
            <div className="clearfix"></div>
            <input
              disabled={viewMode}
              type="text"
              name="phoneNumber"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              className="form-register text"
              placeholder="Phone number"
            />
            <span className="error text-danger">
              {formik.errors.phoneNumber}
            </span>
          </div>

          <div className="clearfix"></div>

          <div className="form-group mt-4">
            <label className="reg_txt">
              Address <span>*</span>
            </label>
            <input
              disabled={viewMode}
              type="text"
              className="form-register text"
              name="address1"
              value={formik.values.address1}
              onChange={formik.handleChange}
              id=""
              placeholder="Line 1"
            />
            <span className="error text-danger">{formik.errors.address1}</span>
            <input
              disabled={viewMode}
              type="text"
              className="form-register text mt-4"
              name="address2"
              value={formik.values.address2}
              onChange={formik.handleChange}
              id=""
              placeholder="Line 2"
            />
            <span className="error text-danger">{formik.errors.address1}</span>
          </div>
          <div className="form-group">
            <div className="controls form-inline">
              <div className="row" style={{ width: "102%" }}>
                <div className="col-6">
                  <input
                    disabled={viewMode}
                    type="text"
                    className="input-name w-100 mb-0"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    placeholder="City"
                  />
                  <span className="error text-danger">
                    {formik.errors.city}
                  </span>
                </div>
                <div className="col-6 pr-0">
                  <input
                    disabled={viewMode}
                    type="text"
                    className="input-name w-100 mb-0"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    placeholder="State"
                  />
                  <span className="error text-danger">
                    {formik.errors.state}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="controls form-inline">
              <div className="row" style={{ width: "102%" }}>
                <div className="col-6">
                  <input
                    disabled={viewMode}
                    type="text"
                    className="input-name w-100 mb-0"
                    name="zipCode"
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    placeholder="ZipCode"
                  />
                  <span className="error text-danger">
                    {formik.errors.zipCode}
                  </span>
                </div>
                <div className="col-6 pr-0">
                  <input
                    disabled={viewMode}
                    type="text"
                    className="input-name w-100 mb-0"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    placeholder="Country"
                  />
                  <span className="error text-danger">
                    {formik.errors.country}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="reg_txt">
              Write Your qualification <span>*</span>
            </label>
            <input
              disabled={viewMode}
              type="text"
              className="form-register text"
              name="qualification"
              value={formik.values.qualification}
              onChange={formik.handleChange}
              id=""
              placeholder="Qualification"
            />
            <span className="error text-danger">
              {formik.errors.qualification}
            </span>
          </div>
          <div className="clearfix"></div>
          <div className="form-group">
            <label className="reg_txt">
              Comment <span>*</span>
            </label>
            <textarea
              className="form-register text"
              name="comments"
              value={formik.values.comments}
              onChange={formik.handleChange}
              placeholder="Comments"
            ></textarea>
            <span className="error text-danger">{formik.errors.comments}</span>
          </div>
          <div className="form-group">
            <button
              disabled={viewMode}
              type="submit"
              className={`btn submit ${editMode ?'btn-warning' : 'btn-primary' }`}
              style={{ width: "97%" }}
            >
              {editMode ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <BioDataTable
        bioData={bioData}
        deleteUserData={deleteUserData}
        viewBioData={viewBioData}
      />
    </div>
  );
};

export default BioDataForm;

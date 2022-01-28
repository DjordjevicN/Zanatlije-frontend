import React, { useState } from "react";
// import { EditUserServiceValidation } from '../validations/EditUserServiceValidation'
// import { Formik, Field, Form, ErrorMessage } from 'formik'
import { connect } from "react-redux";
import SideBarLeft from "./SideBarLeft";
import SideBarRight from "./SideBarRight";
import * as actionCreator from "../store/actions/serviceActions";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// git test

function AddUserServiceForm(props) {
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const createServiceHandler = () => {
    let serviceUserId = props.authUser.userId;
    let fields = {
      serviceCategory,
      serviceDescription,
      servicePrice,
      serviceUserId,
    };
    props.createService(fields);
    window.location = "userServices";
  };
  return (
    <div className="userFeedPage__Wrapper mainGridLayout mobileGridLayout">
      <SideBarLeft />
      <div className="mobileMod--visible">
        <SideBarRight />
      </div>
      <div className="userFeed__content">
        <div className="editUserFormModal__wrapper standardShadowBox">
          <div className="editUserFormModal__content">
            <div className="form">
              <div className="inputElement">
                <input
                  type="text"
                  className="input"
                  placeholder="Kategorija"
                  onChange={(e) => {
                    setServiceCategory(e.target.value);
                  }}
                />
              </div>
              <div className="inputElement">
                <input
                  type="number"
                  className="input"
                  placeholder="Cena"
                  onChange={(e) => {
                    setServicePrice(e.target.value);
                  }}
                />
              </div>
              <div className="inputElement">
                <CKEditor
                  className="ck-editor__editable ckInput"
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setServiceDescription(data);
                  }}
                />
              </div>
              <button
                className="button"
                onClick={() => {
                  createServiceHandler();
                }}
              >
                Kreiraj
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileMod--disable">
        <SideBarRight />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    authUser: state.userReducer.authUser,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createService: (data) => dispatch(actionCreator.createService(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserServiceForm);

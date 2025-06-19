import { useFormik } from "formik";
import React from "react";

function StudentForm() {
  const studentForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      techs: [],
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="border border-2 p-1 m-1 border-secondary">
      <h1>StudentForm</h1>
      <form onSubmit={studentForm.handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={studentForm.handleChange}
        />
        <br />
        <input
          type="text"
          name="lastname"
          onChange={studentForm.handleChange}
        />
        <br />
        <b>Gender: </b>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={studentForm.handleChange}
        />
        :Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={studentForm.handleChange}
        />
        :Female
        <input
          type="radio"
          name="gender"
          value="others"
          onChange={studentForm.handleChange}
        />
        :Others
        <br />
        <b>Technologies: </b>
        <input
          type="checkbox"
          name="techs"
          value="rjs"
          onChange={studentForm.handleChange}
        />{" "}
        :ReactJS
        <input
          type="checkbox"
          name="techs"
          value="angular"
          onChange={studentForm.handleChange}
        />{" "}
        :Angular
        <input
          type="checkbox"
          name="techs"
          value="Nodejs"
          onChange={studentForm.handleChange}
        />{" "}
        :Nodejs
        <input
          type="checkbox"
          name="techs"
          value="Bootstrap"
          onChange={studentForm.handleChange}
        />{" "}
        :Bootstrap
        <input
          type="checkbox"
          name="techs"
          value="Java"
          onChange={studentForm.handleChange}
        />{" "}
        :Java
        <input
          type="checkbox"
          name="techs"
          value="Python"
          onChange={studentForm.handleChange}
        />{" "}
        :Python
        <br />
        <b>Country:</b>
        <select name="country" onChange={studentForm.handleChange}>
          <option disabled selected>
            Please Select Country
          </option>
          <option value="India">India</option>
          <option value="Sweden">Sweden</option>
          <option value="UK">UK</option>
          <option value="Swiss">Swiss</option>
        </select>
        <br />
        <button>Show Student</button>
        <button
          onClick={() => {
            studentForm.resetForm();
          }}
          type="reset"
        >
          Clear Form
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
// state
// action
// UI

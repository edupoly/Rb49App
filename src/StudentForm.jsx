import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function StudentForm() {
  const studentForm = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      gender: "",
      age: 0,
      techs: [],
      country: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("First Name is mandatory")
        .min(3, "arey stupid firstname min 3 letter undali..."),
      lastname: Yup.string()
        .required("lastname pettu")
        .test(
          "checkmax5",
          "mari lastname 5 letters matrame",
          (value, context) => {
            if (value.length <= 5) {
              return true;
            }
          }
        ),
      password: Yup.string()
        .required("must enter password")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          {
            message: "Chusi type cheyyara",
          }
        ),
      age: Yup.string().test(
        "checkage",
        "nee age set avvatle",
        (value, context) => {
          var reg = /^\d+$/;
          if (reg.test(value)) {
            if (context.parent.gender === "male" && value >= 25) {
              return true;
            }
            if (context.parent.gender === "female" && value >= 23) {
              return true;
            }
          } else {
            return false;
          }
        }
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="border border-2 p-1 m-1 border-secondary">
      <h1>StudentForm</h1>
      <p>{JSON.stringify(studentForm.errors)}</p>
      <form onSubmit={studentForm.handleSubmit}>
        <input type="text" {...studentForm.getFieldProps("firstname")} />
        {studentForm.touched.firstname && studentForm.errors.firstname && (
          <div>"Firstname is mandatory"</div>
        )}
        <br />
        <input type="text" {...studentForm.getFieldProps("lastname")} />
        {studentForm.touched.lastname && studentForm.errors.lastname && (
          <div>"Last enter cheyy ra rey"</div>
        )}
        <br />
        <input
          type="password"
          name="password"
          onChange={studentForm.handleChange}
          onBlur={studentForm.handleBlur}
        />
        {studentForm.touched.password && studentForm.errors.password && (
          <div>{studentForm.errors.password}</div>
        )}
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
        <input
          type="text"
          name="age"
          onChange={studentForm.handleChange}
          onBlur={studentForm.handleBlur}
        />
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
          <option disabled value="">
            Please Select Country
          </option>
          <option value="India">India</option>
          <option value="Sweden">Sweden</option>
          <option value="UK">UK</option>
          <option value="Swiss">Swiss</option>
        </select>
        <br />
        <button type="submit">Show Student</button>
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

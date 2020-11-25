import React from "react";
import classes from "./search.module.css";
import { Box } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ClipButton } from "./Components/ClipButton";
import { clipPaths } from "./Home";

const schema = yup.object().shape({
  question1: yup.string().required("please answer this question"),
  question2: yup.string().required("please answer this question"),
  question3: yup.string().required("please answer this question"),
  question4: yup.string().required("please answer this question"),
  question5: yup.string().required("please answer this question"),
  question6: yup.string().required("please answer this question"),
  question7: yup.string().required("please answer this question"),
  question8: yup.string().required("please answer this question"),
  question9: yup.string().required("please answer this question"),
});

const answers = {
  question1: "Hash table",
  question2:
    "It is used to map a given value with a particular key for faster access of elements",
  question3: "Hash function",
  question4: "Hashing",
  question5: "Hashing",
  question6: "True",
  question7: "O(1)",
  question8: "True",
  question9: "True",
};

export function HashingQuiz() {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.heading}>test your knowledge</h1>
      <Formik
        initialValues={{
          question1: "",
          question2: "",
          question3: "",
          question4: "",
          question5: "",
          question6: "",
          question7: "",
          question8: "",
          question9: "",
        }}
        validationSchema={schema}
        onSubmit={async (values, { setStatus }) => {
          try {
            let correct = 0;
            await new Promise((r) => setTimeout(r, 500));
            Object.entries(values).forEach(([key, value]) => {
              if (value === answers[`${key}`]) {
                correct++;
              }
            });
            setStatus({
              msg: `${correct} out of ${
                Object.entries(values).length
              } are correct`,
              type: "success",
            });

            if (correct >= 6) {
              let badges;
              badges = JSON.parse(localStorage.getItem("badges"));
              badges.hashing = true;
              localStorage.setItem("badges", JSON.stringify(badges));
            }
          } catch (error) {
            setStatus({
              msg: error,
              type: "error",
            });
          }
        }}
      >
        {({ handleSubmit, status }) => (
          <Form className={classes.quiz} onSubmit={handleSubmit}>
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What is the name of the data structure used in hashing
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question1" value="Hash function" />
                  Hash function
                </label>
                <label>
                  <Field type="radio" name="question1" value="Hash table" />
                  Hash table
                </label>
                <label>
                  <Field type="radio" name="question1" value="Hash database" />
                  Hash database
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question1"
              component="div"
              className={classes.fieldError}
            />

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What does the hash function do?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="It is used to map a given value with a particular key for faster access of elements"
                  />
                  It is used to map a given value with a particular key for
                  faster access of elements
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="It computes the square of a value given"
                  />
                  It computes the square of a value given
                </label>
                <label>
                  <Field
                    type="radio"
                    name="question2"
                    value="It is used to map a value of 0 for faster access of elements"
                  />
                  It is used to map a value of 0 for faster access of elements
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question2"
              component="div"
              className={classes.fieldError}
            />

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                The efficiency of mapping depends on the efficiency of what in
                hashing?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question3" value="Data" />
                  Data
                </label>
                <label>
                  <Field type="radio" name="question3" value="Hash function" />
                  Hash function
                </label>
                <label>
                  <Field type="radio" name="question3" value="Hash table" />
                  Hash table
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question3"
              component="div"
              className={classes.fieldError}
            />

            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Which choice is used in many encryption algorithms?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question4" value="Binary search" />
                  Binary search
                </label>
                <label>
                  <Field type="radio" name="question4" value="Linear search" />
                  Linear search
                </label>
                <label>
                  <Field type="radio" name="question4" value="Hashing" />
                  Hashing
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question4"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Which of the following is considered the most difficult to
                implement?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question5" value="Binary search" />
                  Binary search
                </label>
                <label>
                  <Field type="radio" name="question5" value="Linear search" />
                  Linear search
                </label>
                <label>
                  <Field type="radio" name="question5" value="Hashing" />
                  Hashing
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question5"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Is choosing an appropriate hash function a challenge when it
                comes to hashing?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question6" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question6" value="False" />
                  False
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question6"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                What is the average case performance of the following
                operations: insert, lookup and delete?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question7" value="O(n)" />
                  O(n)
                </label>
                <label>
                  <Field type="radio" name="question7" value="O(1)" />
                  O(1)
                </label>
                <label>
                  <Field type="radio" name="question7" value="O(log n)" />
                  O(log n)
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question7"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Some advantages of hashing include fast lookup and fast
                indexing?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question8" value="True" />
                  True
                </label>
                <label>
                  <Field type="radio" name="question8" value="False" />
                  False
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question8"
              component="div"
              className={classes.fieldError}
            />
            <div className={classes.formInput}>
              <label className={classes.questionLabel}>
                Hashing is a computationally and storage space efficient form of
                data access that avoids the non-linear access time of ordered
                and unordered lists and structured trees?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question9" value="False" />
                  False
                </label>
                <label>
                  <Field type="radio" name="question9" value="True" />
                  True
                </label>
              </div>
            </div>
            <ErrorMessage
              name="question9"
              component="div"
              className={classes.fieldError}
            />
            {status && <Box className={classes.status}>{status.msg}</Box>}

            <div className={classes.buttonWapper}>
              <ClipButton
                className={classes.button}
                type={"submit"}
                label={"submit"}
                clipPath={clipPaths[1]}
                padding="20px"
                fontSize="20px"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

import React from "react";
import classes from "./search.module.css";
import { Box } from "@material-ui/core";
import * as yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ClipButton } from "./Components/ClipButton";

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
  question1: "Cycles",
  question2: "O(E + V)",
  question3: "backtracks",
  question4: "O(log n)",
  question5: "stack",
  question6: "True",
  question7: "all",
  question8: "oneDirection",
  question9: "edgeWeight",
};

export function DepthFirstSearchQuiz() {
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
              localStorage.setItem("badges", JSON.stringify({ DFS: true }));
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
                What needs to be conssidered when doing DFS on a fully connected
                graph as opposed to an undirected graph?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question1" value="Cycles" />
                  Cycles
                </label>
                <label>
                  <Field type="radio" name="question1" value="Spanning trees" />
                  Spanning trees
                </label>
                <label>
                  <Field type="radio" name="question1" value="Euler Planes" />
                  Euler Planes
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
                What is the Big O performance of DFS? Where E = no edges and V =
                no vertices
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question2" value="O(n)" />
                  O(n)
                </label>
                <label>
                  <Field type="radio" name="question2" value="O(E)" />
                  O(E)
                </label>
                <label>
                  <Field type="radio" name="question2" value="O(E + V)" />
                  O(E + V)
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
                What is the stratergy employed by DFS?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question3" value="neighbours" />
                  It explores all the neighbour nodes of the current node
                </label>
                <label>
                  <Field type="radio" name="question3" value="backtracks" />
                  It explores a branch until it cant anymore then it backtracks
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
                What data strcuture is used when Exploring a graph using DFS?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question4" value="linked list" />
                  linked list
                </label>
                <label>
                  <Field type="radio" name="question4" value="queue" />
                  queue
                </label>
                <label>
                  <Field type="radio" name="question4" value="stack" />
                  stack
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
                When are two nodes adjacent to each other in a graph?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question5" value="lookClose" />
                  When they look like they are close to each other
                </label>
                <label>
                  <Field type="radio" name="question5" value="neighbourNode" />
                  When they both share a common neighbouring node
                </label>
                <label>
                  <Field type="radio" name="question5" value="edgeShared" />
                  When they are connected by an edge
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
                When is a graph connected?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question6" value="True" />
                  When there is a path between any two vertices in the graph
                </label>
                <label>
                  <Field type="radio" name="question6" value="False" />
                  when verte is connected to every other vertex in the graph
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
                Why are graphs useful?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field
                    type="radio"
                    name="question7"
                    value="complexRelationhships"
                  />
                  They can model complex relationships
                </label>
                <label>
                  <Field type="radio" name="question7" value="networking" />
                  They have many real world applications such as networking
                </label>
                <label>
                  <Field type="radio" name="question7" value="socialMedia" />
                  Their structure makes them ideal for modeling social
                  transactions on social media
                </label>
                <label>
                  <Field type="radio" name="question7" value="all" />
                  all of the above
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
                What is the difference between a uniDirected Graph and a
                Directed Graph?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question8" value="uniCycle" />
                  uni directed graph contains cycles where as directed graphs
                  dont
                </label>
                <label>
                  <Field type="radio" name="question8" value="oneDirection" />
                  directed graphs edges can only be traversed in one direction
                  as opposed to unidirected graphs
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
                What is a weighted graph?
              </label>
              <div
                role="group"
                aria-labelledby="my-radio-group"
                className={classes.radioGroup}
              >
                <label>
                  <Field type="radio" name="question9" value="moreEdges" />A
                  graph that contains more edges than nodes
                </label>
                <label>
                  <Field type="radio" name="question9" value="moreNodes" />A
                  graph that contains more nodes than edges
                </label>
                <label>
                  <Field type="radio" name="question9" value="edgeWeight" />A
                  graph with edges that are weighted
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

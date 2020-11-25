import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  code: {
    width: "20%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#e2e2e2",
  },
  runCodeButton: {
    position: "absolute",
    bottom: "0",
  },
  convertButton: {
    background: "#f50057",
    color: "#e2e2e2",
  },
  graphVisWrapper: {
    width: "20%",
  },
}));
export default useStyles;

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: "transparent",
    border: "2px solid orange",
    marginBottom: "50px",
  },
  tab: {
    border: "2px solid orange",
    margin: "10px",
    color: "orange",
  },
  shake: {
    color: "#e6d470",
    opacity: 1.0,
    borderColor: "#e6d470",
    transition: theme.transitions.create(["border-color", "color", "opacity"], {
      duration: "0.2s",
    }),
  },
  indicator: {
    backgroundColor: "orange",
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  panel: {
    color: "orange",
  },
}));
export default useStyles;

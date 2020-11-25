import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    backgroundColor: "transparent",
    border: "2px solid #3d4177",
    marginBottom: "50px",
  },
  tab: {
    border: "2px solid #3d4177",
    margin: "10px",
    color: "#3d4177",
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
    backgroundColor: "#3d4177",
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  panel: {
    color: "#3d4177",
  },
  examplePanel: {
    color: "#3d4177",
    padding: "20px",
    "& > div": {
      height: "50vh",
      width: "100%",
    },
  },
}));
export default useStyles;

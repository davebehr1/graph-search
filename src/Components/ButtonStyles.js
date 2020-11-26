import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    padding: "50px",
    border: "1px solid #3d4177",
  },
  disabled: {
    opacity: 0.5,
  },
  Link: {
    textDecoration: "none",
    fontSize: "24px",
    color: "#3d4177",
    fontWeight: 900,
  },
}));
export default useStyles;

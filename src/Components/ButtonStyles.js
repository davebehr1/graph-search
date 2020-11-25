import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  tagWrap: {
    filter: "drop-shadow(-1px -1px 2px rgba(255, 165, 0, 1))",
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2px",
    backgroundColor: "rgb(255 165 0 / 1)",
  },
  button: {
    background: "linear-gradient(120.93deg, #03294a 4.58%, #091321 91.02%)",
    padding: "50px",
  },
  disabled: {
    opacity: 0.5,
  },
  Link: {
    textDecoration: "none",
    fontSize: "24px",
    color: "orange",
    fontWeight: 900,
  },
}));
export default useStyles;

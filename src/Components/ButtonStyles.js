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
    backgroundColor: "#10144a",
  },
  button: {
    background: "linear-gradient(120.93deg, #7d7d7d 4.58%, #6f6f6f 91.02%)",
    padding: "50px",
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

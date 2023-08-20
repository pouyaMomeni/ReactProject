import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(5),
  },
  typo: {
    "backgroundColor": "#006666",
    "color": "white",
    "width": "max-content",
    "textAlign": "center",
    "padding": "0.5rem 1.5rem",
    "minWidth": "8rem",
    "fontSize": "01.2rem !important",

  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: "none",
    "&:active": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
}));

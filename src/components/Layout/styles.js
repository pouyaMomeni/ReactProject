import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
    flexDirection : "column",
    backgroundColor : "white",

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 240px)`,
    // minHeight: "100vh",
  },
  contentShift: {
    // width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
    width: `calc(100vw - 16px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      width: `100%`,

    }
    },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
}));

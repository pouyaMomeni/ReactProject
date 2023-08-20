import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme => ({
    container: {
        // height: '',
        marginTop: '05%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        "& ul": {
            listStyle: 'none',
            width: "85%",
            gap: '5rem',
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",

            [theme.breakpoints.down("md")]: {
                gap: '2rem',
            },
            [theme.breakpoints.down("sm")]: {
                gridTemplateColumns: '1fr 1fr',
                paddingRight: 0,
                width: '100%',
                gap: '2rem',
            },
            [theme.breakpoints.down("xs")]: {
                gridTemplateColumns: '1fr',
                paddingRight: 0,
                width: "85%",
                gap: '2rem',
            },

            "& li": {
                "padding": "3rem",
                "display": "flex",
                "flexDirection": "column",
                "alignItems": "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                backgroundColor: "#eee",

                [theme.breakpoints.down("xs")]: {
                    "padding": "1.5rem",

                },
                "& p": {
                    textAlign: 'center',
                    lineHeight: "1.7rem"
                },

                "& h3": {
                    fontWeight: 400,
                    fontSize: '1.5rem',
                    color: theme.palette.primary.main
                },

                "& button": {
                    marginTop: "1rem",
                    backgroundColor: theme.palette.primary.main,
                    color: "white"
                }
            }
        }
    },
    widget: {
        width: '50%',
        height: 'max-content',

    },
    widgetBody: {
        padding: '1rem'
    },
    input: {
        margin: "1em 0"
    },
    label: {
        marginRight: '0'
    },
    startTest: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        rowGap : "0.5rem",
        justifyContent:"center",
        border: "1px solid green",
        borderRadius : "0.5rem",

        "& > button": {
            margin: "unset !important"
        },
        "&>span": {
            gridColumn: "1/3",
            fontWeight : "bold",
            paddingTop : "0.5rem",
            textAlign:"center"
        },
        "&>button:last-child": {
            borderRadius: "0 0 0 0.5rem"
        },
        "&>button:not(:last-child)": {
            borderRadius: "0 0 0.5rem 0"
        }
    }
}));

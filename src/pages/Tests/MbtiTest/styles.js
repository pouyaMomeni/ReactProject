import {makeStyles} from "@material-ui/styles";

export default makeStyles(theme => ({
    desc: {
        lineHeight: '1.7rem',
        textAlign: 'justify'
    },
    chartFooter: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: "space-between",
        marginLeft: '5rem',
        paddingRight: '1rem'
    },
    radarContainer: {
        width: "18rem",
        height: "18rem",
        border: "1px solid gray",
        borderRadius: "50%",
        position: "relative",
        "& ul": {
            listStyle: "none"
        }
    },
    xAxis: {
        position: "absolute",
        top: "50%",
        width: "100%",
        height: 1,
        backgroundColor: "gray",
        left: 0,
        transform: "translateY(-50%)"
    },
    yAxis: {
        position: "absolute",
        left: "50%",
        height: "100%",
        width: 1,
        backgroundColor: "gray",
        top: 0,
        transform: "translateX(-50%)"
    },

    circle1: {
        width: "9rem",
        height: "9rem",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        border: "1px solid gray",
        borderRadius: "50%",
        position: "absolute"
    },
    circle2: {
        width: "3rem",
        height: "3rem",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        border: "1px solid gray",
        borderRadius: "50%",
        position: "absolute"
    },
    amountY: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%,-50%)",
        margin: 0,
        "& span": {
            color: "gray"
        }
    },
    amountX: {
        position: "absolute",
        top: "50%",
        transform: "translate(50%,-50%)",
        margin: 0,
        "& span": {
            color: "gray"
        }
    },
    amount70: {
        top: "3rem",
    },
    amount60: {
        top: "6rem",
    },
    amount50: {
        top: "9rem",
        transform: "translate(-50%,-50%)",

    },
    amount40: {
        top: "12rem",

    },
    amount30: {
        top: "15rem",

    },
    amount_70: {
        right: "3rem"
    },
    amount_60: {
        right: "6rem"

    },
    amount_40: {
        right: "12rem"

    },
    amount_30: {
        right: "15rem"

    },
    point: {
        position: "absolute",
        width: "0.7rem",
        height: "0.7rem",
        borderRadius: "50%",
        backgroundColor: "white",
        border: "0.25rem solid red",
        transformOrigin: "bottom left"
    },
    sidebar: {
        // // "backgroundColor": "#fbfbfb",
        //
        // "padding": "3rem",
        // "display": "flex",
        // "flexDirection": "column",
        // "alignItems": "center",
        // backgroundColor : "#eee",
        // width: "max-content",
        display: "flex",
        alignItems: "center",
        width: "34rem",
        borderBottom: "1px solid green",

        [theme.breakpoints.down("sm")]: {
            width: "100%",
            // width: "100%"
        },

        "& h3": {
            fontWeight: 400,
            "backgroundColor": "#006666",
            "color": "white",
            "width": "max-content",
            "textAlign": "center",
            "padding": "0.0331rem 1.5rem",
            "minWidth": "8rem",
            "fontSize": "0.85rem",
            marginLeft: "1rem"


        },

        "& button": {
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginRight: "auto"
        }
    },
    iden: {
        fontWeight: "bold",
        fontSize: "0.85rem",
        // alignSelf: "",
    },
    idenTitle: {
        [theme.breakpoints.down(400)]: {
            display: "none"
        }
    },
    container: {
        display: "grid",
        gap: "2rem",
        justifyItems: "center",
        gridTemplateRows: "max-content 1fr",
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "1fr",
            gap: "2rem",
            justifyItems: "center"
        }
    },
    qText: {
        color: theme.palette.primary.main,
        fontWeight: 500,
        fontSize: "1.1rem"
    },
    options: {
        display: 'flex',
        width: "100%",
        listStyle: "none",
        padding: 0,
        marginBottom: "3rem",
        direction: 'ltr',
        textAlign: 'right',
        justifyContent: 'center',


        "& li": {
            border: "1px solid " + theme.palette.primary.main,
            padding: "0.5rem 3rem",
            color: theme.palette.primary.main,
            fontWeight: "500",
            textAlign: "center",
            fontSize: "0.95rem",
            cursor: "pointer",
            marginTop: "2rem",
            position: "relative",

            [theme.breakpoints.down("sm")]: {
                flex: 1,
                padding: "0.5rem 0"
            },

            "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: "white",
                // "&:nth-child(2):after": {
                //     "bottom": "-50%",
                //     "content": "\"تاحدودی مخالفم\"",
                //     "position": "absolute",
                //     "left": "50%",
                //     "transform": "translateX(-50%)",
                //     "fontSize": "0.7rem",
                //     "width": "100%",
                //     color: theme.palette.primary.main,
                //
                //     [theme.breakpoints.down("sm")]:{
                //         "bottom": "-75%",
                //
                //     },
                // },
                // "&:nth-child(3):after": {
                //     "bottom": "-50%",
                //     "content": "\"نظری ندارم\"",
                //     "position": "absolute",
                //     "left": "50%",
                //     "transform": "translateX(-50%)",
                //     "fontSize": "0.7rem",
                //     "width": "100%",
                //     color: theme.palette.primary.main,
                // },
                // "&:nth-child(4):after": {
                //     "bottom": "-50%",
                //     "content": "\"تاحدودی موافقم\"",
                //     "position": "absolute",
                //     "left": "50%",
                //     "transform": "translateX(-50%)",
                //     "fontSize": "0.7rem",
                //     "width": "100%",
                //     color: theme.palette.primary.main,
                //
                //     [theme.breakpoints.down("sm")]:{
                //         "bottom": "-75%",
                //
                //     },
                // },
            },
            "&:last-child:after": {

            },
            "&:first-child:after": {

            },
        }
    },
    optionActive: {
        backgroundColor: theme.palette.primary.main,
        color: "white !important",

    },
    lastQ: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        fontWeight: 500,
        alignSelf: "flex-end",
        "&:not(:last-child)": {
            marginLeft: "1rem",
        }
    },
    qContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    progress: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "50%",
        // marginTop: "2rem",

        [theme.breakpoints.down("sm")]: {
            width: "100%",

        },
        "& p": {
            fontSize: "0.8rem",
            color: theme.palette.primary.main,

        },
        "& p:first-child": {
            justifySelf: "flex-start"
        }, "& p:nth-child(2)": {
            justifySelf: "flex-end"
        },
        "& div": {
            gridColumn: "1/3",
            height: 5,
            // backgroundColor: theme.palette.primary.main,
            width: "100%"
        }
    }
}));

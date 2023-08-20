import React, {PureComponent, useEffect, useState} from 'react';
import PageTitle from "../../../components/PageTitle";
import Widget from "../../../components/Widget";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {Box, Grid, Tab, Tabs, Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";
import useStyle from './styles';
import RadarChart from "./RadarChart";
import {calculateEnrichTest} from "../../../api/TestApi";
import {useHistory, useParams} from 'react-router-dom'
import {toast} from "react-toastify";
import ResultHeader from '../../../components/resultNavBar'

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


class CustomizedLabel extends PureComponent {
    render() {
        const {
            x, y, stroke, value,
        } = this.props;

        return <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">{value}</text>;
    }
}

const colorResultMap = {
    man: [
        [ //sat1
            12,
            19,
        ], [ //sat2
            13,
            20,
        ], [ //sat3
            12,
            19,
        ], [ //sat4
            13,
            20,
        ], [ //sat5
            13,
            19,
        ], [ //sat6
            14,
            19,
        ], [ //sat7
            13,
            18,
        ], [ //sat8
            13,
            19,
        ], [ //sat9
            14,
            21,
        ], [//sat-tot
            13.7,
            18.7,
        ],
    ],
    woman: [
        [ //sat1
            12,
            19,
        ], [ //sat2
            12,
            19,
        ], [ //sat3
            11,
            18,
        ], [ //sat4
            13,
            20,
        ], [ //sat5
            13,
            19,
        ], [ //sat6
            14,
            19,
        ], [ //sat7
            13,
            18,
        ], [ //sat8
            13,
            18,
        ], [ //sat9
            14,
            21,
        ], [//sat-total
            13.5,
            18.5
        ],
    ],
}


class CustomizedAxisTick extends PureComponent {
    render() {
        const {
            x, y, stroke, payload,
        } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
            </g>
        );
    }
}

const TestEnrichResult = () => {

    const classes = useStyle();
    const history = useHistory();
    const theme = useTheme();
    const {man, woman} = useParams();
    const [oneDMan, setOneDMan] = useState([]);
    const [twoDMan, setTwoDMan] = useState([]);
    const [oneDWoman, setOneDWoman] = useState([]);
    const [twoDWoman, setTwoDWoman] = useState([]);
    const [enrichMan, setEnrichMan] = useState([]);
    const [enrichWoman, setEnrichWoman] = useState([]);
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        calculateEnrichTest(man, woman).then(res => {
            console.log(res);
            // setOneDMan(res.man.neo.one_d)
            // setTwoDMan(res.man.neo.two_d)
            // setOneDWoman(res.woman.neo.one_d)
            // setTwoDWoman(res.woman.neo.two_d)
            setEnrichMan(res.man.enrich.features)
            setEnrichWoman(res.woman.enrich.features)
        }).catch(err => toast.error(err.response ? err.response.data.message : "خطا در دریافت نتیجه"));
    }, [man, woman]);

    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div style={{backgroundColor: "#ebebeb88", padding: "1rem", borderRadius: "0.5rem"}}>
                    <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p>
                    <p className="desc">{payload[0].payload.state_level}</p>
                </div>
            );
        }

        return null;
    };

    function reverse(arr) {
        let newArr = [...arr];
        newArr = newArr.reverse();
        return newArr;
    }

    function calculateColor(gender, index, value) {
        const range = colorResultMap[gender][index];
        console.log(range,value);
        if (value < range[0])
            return "red";
        else if (value < range[1])
            return "yellow";
        else return "green"
    }

    return (
        <div>
            <ResultHeader/>
            <PageTitle title={"نتیجه تست"} button={"بازگشت"} onButtonClick={() => history.push("/")}/>
            <Box sx={{width: '100%'}}>
                <Box sx={{borderBottom: 1, borderColor: 'divider',marginTop:'0.4rem'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="نتیجه مربوط به آقا" {...a11yProps(0)} />
                        <Tab label="نتیجه مربوط به خانم" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                        <Widget title="سامانه‌ی هوشمند پیش‌بینی رضایت از زندگی زناشویی"
                         disableWidgetMenu upperTitle>
                            <ResponsiveContainer width="100%" height={350}>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={enrichMan.map((item, index, arr) => ({
                                        ...item,
                                        مقدار: index === arr.length - 1 ? item.value / 9 : item.value
                                    }))} style={{direction: 'ltr'}}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey=" "/>
                                    <YAxis/>
                                    <Tooltip content={CustomTooltip}/>
                                    <Bar dataKey="مقدار" fill="#8884d8">
                                        {enrichMan.map((entry, index) => (
                                            <Cell key={`cell-${index}`}
                                                  fill={calculateColor("man", index, entry.value)}/>
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            <ul className={classes.chartFooter}>
                                {reverse(enrichMan).map(item => <li>{item.name}</li>)}
                            </ul>
                        </Widget>
                        {/* <Widget title="نتیجه آزمون NEO" disableWidgetMenu upperTitle>
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={oneDMan.map(item => ({مقدار: Math.floor(item.base_sum)}))}
                                    style={{direction: 'ltr'}}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name" tick={<CustomizedAxisTick/>}/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Line
                                        label={<CustomizedLabel/>}
                                        // type="monotone"
                                        dataKey="مقدار"
                                        stroke={theme.palette.primary.main}
                                        activeDot={{r: 8}}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                            <ul className={classes.chartFooter}>
                                {reverse(oneDMan).map(item => <li>{item.question_subject_text}</li>)}
                            </ul>
                        </Widget>
                        {twoDMan.map(item => <Grid item xs={12} md={12}>
                                <Widget title={item.style} disableWidgetMenu upperTitle>
                                    <p>{item.description}</p>
                                    <Grid container justify={"space-between"}>
                                        <Grid item xs flex={1}>
                                            <p>محور عمودی : {item.y_axis_text} (T : {Math.floor(item.y_axis_value)})</p>
                                            <p>محور افقی : {item.x_axis_text} (T : {Math.floor(item.x_axis_value)})</p>
                                        </Grid>
                                        <Grid item xs container justify={"flex-end"}>
                                            <RadarChart x={Math.floor(item.x_axis_value)} y={Math.floor(item.y_axis_value)}
                                                        xTitle={item.x_axis_text} yTitle={item.y_axis_text}/>
                                        </Grid>
                                    </Grid>
                                </Widget>
                            </Grid>
                        )} */}
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                        <Widget title="سامانه‌ی هوشمند پیش‌بینی رضایت از زندگی زناشویی" disableWidgetMenu upperTitle>
                            <ResponsiveContainer width="100%" height={350}>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={enrichWoman.map((item, index, arr) => ({
                                        ...item,
                                        مقدار: index === arr.length - 1 ? item.value / 9 : item.value
                                    }))}
                                    style={{direction: 'ltr'}}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey=" "/>
                                    <YAxis/>
                                    <Tooltip content={CustomTooltip}/>
                                    <Bar dataKey="مقدار" fill="#8884d8">
                                        {enrichWoman.map((entry, index) => (
                                            <Cell key={`cell-${index}`}
                                                  fill={calculateColor("woman", index, entry.value)}/>
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            <ul className={classes.chartFooter}>
                                {reverse(enrichWoman).map(item => <li>{item.name}</li>)}
                            </ul>
                        </Widget>
                        {/* <Widget title="نتیجه آزمون NEO" disableWidgetMenu upperTitle>
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={oneDWoman.map(item => ({مقدار: Math.floor(item.base_sum)}))}
                                    style={{direction: 'ltr'}}
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        left: 30,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name" tick={<CustomizedAxisTick/>}/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Line
                                        label={<CustomizedLabel/>}
                                        // type="monotone"
                                        dataKey="مقدار"
                                        stroke={theme.palette.primary.main}
                                        activeDot={{r: 8}}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                            <ul className={classes.chartFooter}>
                                {reverse(oneDWoman).map(item => <li>{item.question_subject_text}</li>)}
                            </ul>
                        </Widget> */}
                        {/* {twoDWoman.map(item => <Grid item xs={12} md={12}>
                                <Widget title={item.style} disableWidgetMenu upperTitle>
                                    <p>{item.description}</p>
                                    <Grid container justify={"space-between"}>
                                        <Grid item xs flex={1}>
                                            <p>محور عمودی : {item.y_axis_text} (T : {Math.floor(item.y_axis_value)})</p>
                                            <p>محور افقی : {item.x_axis_text} (T : {Math.floor(item.x_axis_value)})</p>
                                        </Grid>
                                        <Grid item xs container justify={"flex-end"}>
                                            <RadarChart x={Math.floor(item.x_axis_value)} y={Math.floor(item.y_axis_value)}
                                                        xTitle={item.x_axis_text} yTitle={item.y_axis_text}/>
                                        </Grid>
                                    </Grid>
                                </Widget>
                            </Grid>
                        )} */}
                    </div>
                </TabPanel>
            </Box>
        </div>
    );
};

export default TestEnrichResult;

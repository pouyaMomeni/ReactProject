import React from 'react';
import useStyle from './styles';
import classNames from 'classnames';
import Tooltip from "@material-ui/core/Tooltip";

export default ({x = 45, y = 73,xTitle,yTitle}) => {
    const classes = useStyle();


    return (
        <div className={classes.radarContainer}>
            <div className={classes.xAxis}></div>
            <div className={classes.yAxis}></div>
            <div className={classes.circle1}></div>
            <div className={classes.circle2}></div>
            <div>
                <p className={classNames(classes.amount70, classes.amountY)}>70</p>
                <p className={classNames(classes.amountY, classes.amount60)}>60</p>
                <p className={classNames(classes.amountY, classes.amount50)}>50</p>
                <p className={classNames(classes.amountY, classes.amount40)}>40</p>
                <p className={classNames(classes.amountY, classes.amount30)}>30</p>
            </div>
            <div>
                <p className={classNames(classes.amountX, classes.amount_70)}>70</p>
                <p className={classNames(classes.amountX, classes.amount_60)}>60</p>
                <p className={classNames(classes.amountX, classes.amount_40)}>40</p>
                <p className={classNames(classes.amountX, classes.amount_30)}>30</p>
            </div>
            <Tooltip title={`${xTitle} : ${x} | ${yTitle} : ${y}`}>
                <div className={classes.point}
                     style={{left: `${(x - 20) / 10 * 3}rem`, bottom: `${(y - 20) / 10 * 3}rem`}}/>
            </Tooltip>
        </div>
    );

}



import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'


const Chart = props => {

    //dataPointValues is returning a new array of just the values of dataPoint, which was an object. So we're getting the number from the object.
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    //we use the spread operator here bc max() needs a list, and the spread operator makes all the dataPointValues stand alone arguments aka a list.
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />)}
        </div>
    )
}

export default Chart;
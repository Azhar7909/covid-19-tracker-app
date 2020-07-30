import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';


export default function PieChart() {

    const [d, setD] = useState({});
    console.log("data", d);

useEffect(() => {
    const da = JSON.parse(localStorage.getItem("DataChar"));
    setD(da)
}, [])


    const data = {
    labels: [
        'death',
        'recover',
        'cases'
    ],
    datasets: [{
        data: [d.total_deaths, d.total_recovered, d.total_cases],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};


    return (
        <div style={{marginTop:'30px'}}>
            <Pie data={data} />
        </div>
    );
}

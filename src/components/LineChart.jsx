import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function LineChart({ coinHistory, currentPrice, coinName }) {
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    console.log(coinTimestamp, "time")
    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `${coinName} Price Chart`,
          },
        },
      };

  return( 
    <div>
    <Row className="chart-header">
    <Col className="price-container">
    <h4 level={5} className="price-change">Change: {coinHistory?.data?.change}%</h4>
    <h4 level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</h4>
  </Col>
      </Row>
    <Line options={options} data={data} />
    </div>
    );
}
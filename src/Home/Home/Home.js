import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import DoughnutChart from '../Chart/DoughnutChart';
import BarChart from '../Chart/BarChart';



  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' ,
      },
      title: {
        display: true,
        text: 'Quarterly performance           @021-First Quarter',
      },
    },
  };
 
  
  const labels = ['January', 'February', 'March'];

  
  export const data = {
    labels,

    datasets: [
      {
        label: 'Dataset 1',
        data: [18,26,21],
        borderColor: '#008E97',
        backgroundColor: '#008E97',
      },
      {
        label: 'Dataset 2',
        data: [14,20,16],
        borderColor: '#DA9100',
        backgroundColor: '#DA9100',
      },
    ],
  };

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Home = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Item><Bar 
    
          options={options}
           data={data} 
          /></Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
             <BarChart></BarChart>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
          <DoughnutChart></DoughnutChart>
          </Item>
        </Grid>
      </Grid>
    );
};

export default Home;
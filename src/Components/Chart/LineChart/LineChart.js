import React from 'react'
import {Line} from 'react-chartjs-2'
import { UserData } from '../userData'
import {Chart as ChartJS} from 'chart.js/auto'

const userData = {
   labels:UserData.map((data) => data.year),
   datasets:[{
      label:"User Gained",
      data:UserData.map((data) => data.userGain),
      backgroundColor:["violet"],
      borderColor:"blue",
      borderWidth:1,
      pointRadius:5,
      pointBorderColor:"black",
      lineTension:0.5,
   },
   {
     label:"User Lost",
     data:UserData.map((data) => data.userLost),
     backgroundColor:["gray"],
     borderColor:"black",
     borderWidth:1,
     pointRadius:5,
     pointBorderColor:"red",
     lineTension:0.5,
  }
  ]
}

const LineChart = () => {
 
  return <div className='chart'>
         <Line data={userData} />
        </div>
}

export default LineChart
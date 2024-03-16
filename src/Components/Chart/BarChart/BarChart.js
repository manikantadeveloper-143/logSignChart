import React from 'react'
import {Bar} from 'react-chartjs-2'
import { UserData } from '../userData'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const userData ={
  labels:UserData.map((data) => data.year),
  datasets:[{ 
     label:"User Gained",
     data:UserData.map((data) => data.userGain),
     backgroundColor:[
      "#f38b4a",
      "#56d798",
      "#ff8397",
      "#6970d5",
      '#697066' 
    ],
    borderColor:"black",
    borderWidth:1,
  }]
}

const BarChart = () => {
 
  return <div className='chart'>
         <Bar data={userData} />
       </div>
}

export default BarChart
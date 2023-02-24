import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import './footer.css'

function Footer() {
  const data = [
    {
     
      "wv": 3400,
      "pv": 2400,
      "wv": 2400
    },
    {
      
      "uv": 3000,
      "pv": 1398
    },
    {
      
      "uv": 2000,
      "pv": 5000
    },
    {
      
      "uv": 2780,
      "pv": 3908
    },
    {
      
      "uv": 1890,
      "pv": 4800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800,
      "wv": 2390
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 0,
      "pv": 3800
    },
    {
      
      "uv": 0,
      "pv": 0
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 2390,
      "pv": 3800
    },
    {
      
      "uv": 3490,
      "pv": 4300
    }
  ]
  return (
    <div className='bottonBar-container'>
      <div>
      <p>Sales Figure</p>
      <p>23,4798</p>
      </div>
      <div className='bar-chart'>
      <BarChart width={1300} height={120} data={data} >
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis dataKey="" />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#DBDFF1" />
  <Bar dataKey="wv" fill="#DBDFF1" />
  <Bar dataKey="uv" fill="#FF708B" />
</BarChart>
      </div>
    </div>
  )
}

export default Footer

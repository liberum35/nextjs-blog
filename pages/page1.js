import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';
//import Slider from 'rc-slider';
//import 'rc-slider/assets/index.css';

function log(value) {
  console.log(value);
}





export default function Home() {
  const [value2, setValue] = React.useState([10,20]);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    log(value2[0]);
    log(value2[1]);
  }
  return (
    <div>

  <Slider defaultValue={value2} onChange={handleSliderChange} />
  <Typography>{value2}</Typography>
    </div>
  )
}

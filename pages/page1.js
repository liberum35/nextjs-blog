import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';
import file1 from '../files/0000001.json'
//import Slider from 'rc-slider';
//import 'rc-slider/assets/index.css';

function log(val) {
  console.log(val);
}






//log(list)

//const selections = file1.selections
let markup1 = file1
const List = markup1.selections.map(obj => {
  log(obj);
  const varray=[obj.startSelection,obj.endSelection];
  const id=[obj.id]
  const type=[obj.type]
  log(varray);
  log(id);
  //let rObj = {}
  //rObj[obj.id] = [obj.startSelection,obj.endSelection]
  //return varray
  return <Row rvalue={varray} key={id} type={type}/>
})
log(List);





function Row(props) {
  const [value, setValue] = React.useState(props.rvalue);
  const handleSliderChange = (event, newValue) => {

    setValue(newValue);
    log(value[0]);
    log(value[1]);
  }
  return (
      <div>

        <Slider defaultValue={value} onChange={handleSliderChange}  />
        <Typography>First:{value[0]} Second:{value[1]} Type:{props.type}</Typography>
      </div>
  )
}

//const rangelist = mylist.map(listitem) =>


function app() {
  return (
      <>
        {/*    <Row rvalue={[20,30]} />
                    <Row rvalue={[20,50]} />  */}
        {List}




      </>
  )
}

export default  app;

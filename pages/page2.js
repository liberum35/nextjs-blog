import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography';
import file1 from '../files/0000001.json'
import {useState} from "react";
import axios from "axios";
import {InputLabel, MenuItem, Select} from "@mui/material";
//import Slider from 'rc-slider';
//import 'rc-slider/assets/index.css';

function Row({selection, setSelection}) {
    console.log('render Row', selection)

    const handleSliderChange = (event, newValue) => {
        const newSelection = {...selection}
        newSelection.startSelection = newValue[0];
        newSelection.endSelection = newValue[1];
        setSelection(newSelection.id, newSelection);
    }

    const handleSelect = ({}) => {
        const newSelection = {...selection}
        newSelection.startSelection = newValue[0];
        newSelection.endSelection = newValue[1];
        setSelection(newSelection.id, newSelection);
    }
    //const menuType = ['<MenuItem value={10}>none</MenuItem>','<MenuItem value={10}>Причина</MenuItem>','<MenuItem value={10}>Причина</MenuItem>']
    return (
        <div>
            <Slider value={[selection.startSelection, selection.endSelection]} onChange={handleSliderChange}/>
            <Typography>First:{selection.startSelection} Second:{selection.endSelection} Type:{selection.type}</Typography>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select onChange={handleSelect}>
                <MenuItem value='none'>none</MenuItem>
                <MenuItem value='Причина'>Причина</MenuItem>
            </Select>
        </div>
    )
}


const app = () => {
    const [file, setFile] = useState(file1);

    const setSelection = (id, selection) => {
        const newFile = {...file};

        newFile.selections = newFile.selections.map(currentSelection => {
            if (currentSelection.id === id) {
                currentSelection = {...selection};
            }
            return currentSelection;
        });

        setFile(newFile);
    };

    const sendFile = () => {
        axios.post('/api/save', {file})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    };

    return <>
        {file.selections.map(selectionItem => {
            return <Row selection={selectionItem} setSelection={setSelection} key={selectionItem.id}/>;
        })}

        <button onClick={sendFile}>Отправить</button>
    </>;
};

export default app;
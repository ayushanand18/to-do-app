import React from 'react';
import {List,TextField, ListItem, ListItemText, Button, IconButton, FormGroup, FormControlLabel, Switch, Checkbox, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Add(){
    const initialList = [
        {
            'name': 'buy some coffee',
            'status': false,
            'label_id': 0
        }
    ]
    const [list, setList] = React.useState(initialList);
    const [copyList, setCopyList] = React.useState([]);
    const [idx, setIdx] = React.useState(1);
    const handleAdd = (event) =>{
        if(event.key === 'Enter'){
            const newList = list.concat({ 
                'name':event.target.value,
                'status': false,
                'label_id': idx
            });
            setIdx(idx+1);
            setList(newList);
            
            console.log(list);
            event.target.value='';
        }
    }
    const handleChecked =  (event, id)=>{
        const index = list.findIndex( element=>{
            if(element.label_id === id){
                return true;
            }
            return false;
        });
        list[index].status ^= true;
        setList(list);
    }
    const handleDelete = (id)=>{
        const newList = list.filter((item)=>id!==item.label_id);
        setList(newList);
    }
    const clearCompleted = ()=>{
        const newList = list.filter((item) => !item.status);
        setList(newList);
    }
    const pendingOnly = (event)=>{
        if(event.target.checked){
            setCopyList(list);
            const newList = list.filter((item)=> !item.status);
            setList(newList);
        }
        else{
            
            setList(copyList);
        }
    }
    const completeOnly = (event)=>{
        if(event.target.checked){
            setCopyList(list);
            const newList = list.filter((item)=> item.status);
            setList(newList);
        }
        else{
            console.log(event.target.checked);
            setList(copyList);
        }
    }
    return (
        <div>
            
            {/* the add item button */}

            <div style={{padding:'20px'}}>
                <TextField label="Enter Item"
                onKeyDown={handleAdd}
                    sx={{
                        input: { 
                            color: 'white' , 
                            borderBottom: '1px white solid',
                            maxWidth: '700px',
                            cursor: 'pointer'
                        }
                    }}
                    InputLabelProps={{style: {color: 'lightgrey'}}}
                    variant="filled"
                />
            </div>
            
            {/* the list of to dos */}

            <div className="todo-list">
                <Typography type="subtitle2">
                    your tasks
                    <Button onClick={clearCompleted}>Clear completed</Button>
                    <FormGroup>
                        <FormControlLabel 
                        sx = {{
                            style: {overflowX: 'hidden', display:'flex'}
                        }}
                        control={<Switch onChange={pendingOnly} />} label="pending only" />
                        <FormControlLabel control={<Switch onChange={completeOnly}/>} label="completed only" />
                    </FormGroup>
                </Typography>
                <List 
                className='todo-list'>
                    {list.map((item)=>(
                        <div>
                            <ListItem 
                            className="listitem"
                            sx={{
                                color:'white',
                                backgroundColor: '#2f2f2f',
                                border: '1px solid white',
                                borderRadius: '15px',
                            }}
                            
                            data-id={item.label_id}

                            secondaryAction={
                                <IconButton edge="end" aria-label="delete">
                                <DeleteIcon 
                                sx={{color:'white'}}
                                onClick = {()=>handleDelete(item.label_id)}
                                />
                                </IconButton>
                            }>
                                <Checkbox 
                                sx={{color:'white'}}
                                defaultChecked={item.status}
                                onChange={(event)=>handleChecked(event, item.label_id)}
                                />
                                    <ListItemText 
                                        disableTypography
            
                                        primary={
                                            <Typography type="body" style={{color:'white'}}>
                                                {item.name}
                                            </Typography>
                                        }
                                    />
                                    
                            </ListItem>
                            <div className="padding"></div>
                        </div>
                    ))}
                    
                </List>
            </div>
        </div>
    )
}
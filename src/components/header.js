import React from 'react';
import Typography from '@mui/material/Typography';
import "../App.css";
// Tasks:
// A text input field where the user can enter a new to-do item.
// A button or the Enter key that adds a new to-do item to the list.
// A list of to-do items, each displayed as a separate list item in an ordered or
// unordered list.
// A checkbox next to each to-do item that allows the user to mark it as completed.
// A "Delete" button next to each to-do item that allows the user to delete it.
// Buttons to view only the completed or only the uncompleted to-do items.
// A "Clear completed" button that allows the user to delete all completed to-do items
// Make it responsive
// And include transitions to make this app even cooler

export default function Head(){
    return (
        <div className="head">
            <Typography color="lightgrey" variant="h3" align="left" component="h1" gutterButton>
                todo: today
            </Typography>
            <div align="left">
                <Typography variant="subtitle1" fontWeight="bold" color="lightgrey">
                    let's plan your day.
                </Typography>
            </div>
            
        </div>
    )
}
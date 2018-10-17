import React from "react";
import 'react-dates/initialize';
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import  "react-dates/lib/css/_datepicker.css";

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state={
            description: props.expense ? props.expense.description : "",
            amount:props.expense ? (props.expense.amount / 100).toString() : "",
            note:props.expense ? props.expense.note : "",
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused:false,
            error:""
        }
    }

    onDescriptionChange=(e) => {
        const description=e.target.value;
        this.setState(()=>({description}));
    };

    onAmountChange=(e)=> {
        const amount=e.target.value;
        if(amount.match(/^\d{0,}(\.\d{0,2})?$/)){
        this.setState(()=>({amount}))
    }
    };
    onNoteChange=(e)=>{
        const note=e.target.value;
        this.setState(()=>({note}))
    };
    onDateChange=(createdAt) =>{
        
        createdAt&&this.setState(()=>({createdAt}))
    };
    onFocusChange=({focused}) => {
        this.setState(()=>({calendarFocused:focused}))
    };

    onSubmit=(e)=> {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(()=>({error:"Please provide a description and amount"}))
        } else {
            this.setState(()=>({error:""}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }


    render(){
        return(
            <div>
            {this.state.error}
                <form onSubmit={this.onSubmit}>
                    <input
                     placeholder="description"
                     type="text"
                     autoFocus
                     value={this.state.description}
                     onChange={this.onDescriptionChange}    
                     /><br/>
                    <input
                      type="text"
                      value={this.state.amount}
                      onChange={this.onAmountChange}    
                      /><br/>
                      <SingleDatePicker
                          date={this.state.createdAt}
                          onDateChange={this.onDateChange}
                          focused={this.state.calendarFocused}
                          onFocusChange={this.onFocusChange}
                          id="expense picker"
                          isOutsideRange={()=> false}
                          numberOfMonths={1}
                      />
                    <textarea
                     placeholder="note"
                     value={this.state.note}
                     onChange={this.onNoteChange}
                     ></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
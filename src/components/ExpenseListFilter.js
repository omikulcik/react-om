import React from "react";
import 'react-dates/initialize';
import {connect} from "react-redux";
import {setTextFilter, sortByAmmount, sortByDate, setStartDate,setEndDate} from "../actions/filters.js";
import {DateRangePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';



class ExpenseListFilter extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}))
    };

    render(){
        return(
            <div>
            <input type="text"
                value={this.props.filters.text}
                onChange={(e)=>{
                    this.props.dispatch(setTextFilter(
                        e.target.value
                    ))}
                }
             />
                     <select
            onChange={
                (e)=>{
                    if(e.target.value==="date"){
                        this.props.dispatch(sortByDate())
                    }
                    else{
                        this.props.dispatch(sortByAmmount())
                    }
                }
            }
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <br/>
            <DateRangePicker
             startDate={this.props.filters.startDate}
             startDateId="lalaj"
             endDate={this.props.filters.endDate}
             endDateId="šalala toto si zpivam ked som vysmiaty"
             onDatesChange={this.onDatesChange}
             focusedInput={this.state.calendarFocused}
             onFocusChange={this.onFocusChange}
             numberOfMonths={1}
             isOutsideRange={()=> false}
             showClearDates={true}
            />
        </div>
        )
    }

};

const mapStateToProps = (state) =>{
    return {
        filters: state.filters,
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)
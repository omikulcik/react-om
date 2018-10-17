import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const ExpenseListItem =({dispatch, id, description, amount, createdAt})=>(
    <div>
        <h2>{description}</h2>
        <p>Ammount: {amount} - Date: {createdAt}</p>
     <Link to={"edit/" + id} >Edit</Link>
    </div>
);



export default connect()(ExpenseListItem)
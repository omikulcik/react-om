import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
    <div>
       Informace je :{props.info} 
    </div>
);

const requireAuthentication = (WrappedElement) => {
    return (props) => (
        <div>
        <WrappedElement   {...props}/> {props.isAuthenticated && <p>Tohle Info je tajné</p>}
        </div>
    )
}


const Authinfo = requireAuthentication(Info)


ReactDOM.render(<Authinfo info="Pacient je stabilizovaný" isAuthenticated={false} />, document.getElementById("app"));
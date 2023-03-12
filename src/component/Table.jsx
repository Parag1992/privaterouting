import React from "react";

const Table = (props) => {

    return(
        <React.Fragment>
            <div className="tblCls"> I am table Component </div><br/>
            <div className="prpCls">{props.myName}</div>
        </React.Fragment>
    )
}
export default Table;
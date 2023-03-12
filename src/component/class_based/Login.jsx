import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import postCall from "./apiCall";
import { saveuserdetailsAct } from "../../Actions";

class Login extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            isLogin:false
        }
    }
    UpdateUsrNmTxt = (e) =>{
        console.log(e.target.value);
    }

    UpdatePassTxt = (e) =>{
        console.log(e.target.value);
    }
    
    onBtnClicked = () =>{
        
        postCall({username: 'kminchelle',
        password: '0lelplR'})
        .then(response=>{
            response.data.token && this.setState({isLogin:true});
            this.props.saveusrdetails(response.data);
        })
        .catch(err=>console.log('post call err',err))
        
    }

    render(){

        return (
            <div>
                   <label>Login Form</label><br/>
                   <label>User Name</label>  <input type={"text"} className={"txtUsrCls"} key={"txtUsr"} onChange={this.UpdateUsrNmTxt} /><br/>
                   <label>Password</label>  <input type={"password"} className={"txtPassCls"} key={"txtPass"} onChange={this.UpdatePassTxt} /><br/>
                   <button className="myBtnCls" value={"Submit"} onClick={this.onBtnClicked} >Submit</button>
                   {this.state.isLogin && <Navigate to={'/home'}/>}
            </div>
        )
    }
}

const mapStateToProps = (props) =>{
  return {
      userdetails:props.saveuserdetails
  }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        saveusrdetails:(data) =>dispatch(saveuserdetailsAct(data))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Login);
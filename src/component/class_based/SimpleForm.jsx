import React from "react";
import Table from "../Table";
import { Navigate } from "react-router-dom";
import Header from "../Header";
class SimpleForm extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
            txtName:"Parag",
            dispTxtNm:""
        }
    }

    componentDidMount(){
      //  console.log('componentDidMount');
    }

    UpdateTxt = (e) =>{
        this.setState({txtName:e.target.value});
    }

    onBtnClicked =() =>{
        let tmpNm=this.state.txtName;
        this.setState({dispTxtNm:tmpNm});
        
        return 3;
    }

    asyncFunc = (a) =>{
        return new Promise((resolve,reject) => {
            //let a=10;
            if(a%2==0){
                resolve("I am resolved");
            }else{
                reject("I have rejected");
            }
        })

        
    }

    render(){
        return (
        <React.Fragment>
           
             <h1 className="h1Cls">My Name is : {this.state.dispTxtNm}</h1><br/>
             <input type={"text"} key={"txtNm"} onChange={this.UpdateTxt} />
             <button className="myBtnCls" value={"Submit"} onClick={this.onBtnClicked} >Submit</button><br/>
             {this.state.dispTxtNm == "abc" &&  <Navigate to="/todo" replace={true} />}
             <hr/>
             <Table myName="I am  props"/>
             
        </React.Fragment>

    )}
}
export default SimpleForm;
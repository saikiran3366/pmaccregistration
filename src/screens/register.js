import React,{Component} from 'react'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import {Tabs,Tab} from '@material-ui/core';
import EmployPage from './employPage';



class Register extends Component{
    state={value:"0"}
    render(){
        const handleTabs=(e,val)=>{
            this.setState({
                value:val
            })
            console.log(val)
        }
        return(
            <Grid container>
                <Grid item col lg={12} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                 <h1 style={{marginLeft:20}}>REGISTER EMPLOYEE</h1>
               <Grid style={{marginRight:20}}>
                    <Button variant="contained">Contained</Button>
               </Grid>
                </Grid>

               <Grid item col lg={12} >
               <Grid style={{width:"60%",display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <Tabs value={this.state.value} onChange={handleTabs}>
                        <Tab  label="EMPLOYEE DETAILS"/>
                        <Tab  label="MODULES"/>
                        <Tab  label="REPORTING"/>
                        <Tab  label="INPUTER"/>
                        <Tab  label="HR"/>
                        <Tab  label="BRANCHES ACCESS"/>
                    </Tabs>
                </Grid>
                <Tabcheck value={this.state.value} index={0}> <EmployPage/> </Tabcheck>
                <Tabcheck value={this.state.value} index={1}> <center>module page</center></Tabcheck>
                <Tabcheck value={this.state.value} index={2}> REPORTING page</Tabcheck>
                <Tabcheck value={this.state.value} index={3}> INPUTER page</Tabcheck>
                <Tabcheck value={this.state.value} index={4}> HR page</Tabcheck>
                <Tabcheck value={this.state.value} index={5}> BRANCHES page</Tabcheck>
               </Grid>
            </Grid>
        )
    }
}

function Tabcheck(props){
    const {children,value,index}=props
    return(
        <div>
            {
            value===index &&(
                <h1>{children}</h1>
            )
            
        }
        </div>
        
        
    )
}

export default Register;
import React,{Component} from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import TextfieldComponent from './textfieldComponent'




class EmployPage extends Component{

    state={pAdress:"",
            }

    render(){
        return(
            <Grid container>
                <Grid item col lg={12} style={{display:'flex',justifyContent:'center'}}>
                    <Grid style={{height:700,width:"95%",border:'1px solid black',borderRadius:10}} >
                        <h3 style={{marginLeft:20}}>Personal Details</h3>
                        <Grid style={{height:1,width:"100%",backgroundColor:'black',marginLeft:15}}>
                        </Grid>

                        <Grid style={{display:'flex',flexDirection:'row'}}>
                            <Grid style={{height:580,width:'50%',display:'flex',flexDirection:'column'}}>
                                <Grid style={{display:'flex',width:'98%',paddingLeft:20}}>
                                    <Grid col lg={3} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                                    <h6>Employ Name :</h6>
                                    </Grid>

                                    <Grid col lg={9} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',alignItems:'center'}}>
                                        <TextfieldComponent width={"98%"}color={"green"}/>
                                    </Grid>
                                </Grid>

                                <Grid style={{display:'flex',width:'100%'}}>
                                    <Grid style={{display:'flex',width:'50%',paddingLeft:20}}>
                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                                        <h6>Date of Birth :</h6>
                                        </Grid>

                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',alignItems:'center'}}>
                                            <TextfieldComponent width={"90%"}/>
                                        </Grid>
                                    </Grid>

                                    <Grid style={{display:'flex',width:'50%'}}>
                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                                        <h6>Date of Birth :</h6>
                                        </Grid>

                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',alignItems:'center'}}>
                                        <TextfieldComponent width={"90%"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid style={{display:'flex',width:'100%'}}>
                                    <Grid style={{display:'flex',width:'50%',paddingLeft:20}}>
                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                                        <h6>Martial Status :</h6>
                                        </Grid>

                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',alignItems:'center'}}>
                                        <TextfieldComponent width={"90%"}/>
                                        </Grid>
                                    </Grid>

                                    <Grid style={{display:'flex',width:'50%'}}>
                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                                        <h6>Marriage Date :</h6>
                                        </Grid>

                                        <Grid col lg={6} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',alignItems:'center'}}>
                                        <TextfieldComponent width={"90%"}/>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid style={{display:'flex',width:'100%',paddingLeft:20}}>
                                    <Grid col lg={3} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                                    <p style={{fontSize:20}}>Permanent Address :</p>
                                    </Grid>

                                    <Grid col lg={9} style={{height:80,backgroundColor:'#f7f7f2',display:'flex',alignItems:'center'}}>
                                    <TextfieldComponent width={"98%"} value={this.state.pAdress} onChange={(e)=>this.setState({pAdress:e.target.value})}/>
                                    {console.log(this.state.pAdress)}
                                    </Grid>
                                </Grid>

                                

                            </Grid>

                            

                            <Grid style={{height:580,width:'50%',backgroundColor:'green'}}>
                                
                            </Grid>
                        </Grid>
                    </Grid>

                    
                    
                </Grid>
            </Grid>
        )
    }
}

export default EmployPage;
import React,{Component} from 'react';
import TextField from '@mui/material/TextField';



class TextfieldComponent extends Component{
    render(){
        return(
                <TextField 
                size="small" 
                id="outlined-basic" 
                label="Outlined" 
                variant="outlined" 
                style={{width:this.props.width,backgroundColor:this.props.color}}
                value={this.props.value}
                onChange={this.props.onChange}
                />
        )
    }
}

export default TextfieldComponent;
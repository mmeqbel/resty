import React from 'react'
import './Form.scss'
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state={
      formDate:{
        method:null,
        url:null
      }
    }
  }
  formHandler=(event)=>{
    event.preventDefault();
    const url= event.target.url.value;
    const method=event.target.method.value;   
    const formDate={
      url:url,
      method:method
    }
    this.setState({formDate});
  }

  render(){
    return (
      <>
        <form onSubmit={this.formHandler}>
            <label htmlFor="url">URL</label>
            <input type="text" name="url"/>
            <input type="submit" value="Go" />
            <br/>
            <label htmlFor="method">Get</label>
            <input type="radio" name="method" value="get"/>
            <label htmlFor="method">Post</label>
            <input type="radio" name="method" value="post"/>
            <label htmlFor="method">Put</label>
            <input type="radio" name="method" value="put"/>
            <label htmlFor="method">delete</label>
            <input type="radio" name="method" value="delete"/>
        </form>
        <div id="form-data">
          <p>{this.state.formDate.method}</p>
          <p>{this.state.formDate.url}</p>
        </div>
        </>
    );
  } 
}
export default Form;
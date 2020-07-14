import React,{ Component} from "react"
import ReactDOM from "react-dom"

class Form extends Components {
  render(){
    return(
      <div>
        hello
      </div>
    )
  }

}

export default Form

const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<Form/>) : false
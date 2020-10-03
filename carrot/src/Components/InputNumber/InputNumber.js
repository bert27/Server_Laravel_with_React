import React from 'react';
import './InputNumber.sass';

class InputNumber extends React.Component {
  constructor(props) {
    super(props);
  this.state = {

  }
}

ActionButton(){
  var Numero=document.getElementById(this.props.id_input).value;
this.props.GetNumberUser(Numero,this.props.Question);
}

    render() {
return (<div className="NumberForm">


  <div className="FormularioAdmin">
        <div className="FormularioB-Elemento">
        <div className="LetrasFormC">{this.props.Title} </div>
        <input type="text" className="InputForm"
               id={this.props.id_input} Value="0"  />
        </div>
  </div>

  <div className="ButtonAdmin_cont">
<button type="submit" className="ButtonAdmin"
  onClick={()=>{this.ActionButton()}}
>
Enviar
</button>
</div>

  </div>);
    }
            }

export default InputNumber;

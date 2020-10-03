import React from 'react';
import './App.sass';
import InputNumber from '../Components/InputNumber/InputNumber';
class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    Exercise1:<></>,
    Exercise2:<></>,
    Exercise2map:<></>,
    Exercise3:<></>,
  }
}
save(data){
  this.setState ({
    Exercise1:data[0],
  });
}
GetNumberUser(Number,Question){
if(Question==2){
  fetch('/Answer2/' + Number, {
    method: 'PUT',
    body: Number,
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',}
     }).then(res => res.json())
            .then((data) => {

console.table(data[0]);

var l=data[0];
var l = l.map(function(num) {
  if(num.length==3 && num<10){
      return (<><div className="SaltoL">{num}</div><div className="salto"></div></>);
  }else if(num.length==4 && num>=10){
    return (<><div className="SaltoL">{num}</div><div className="salto"></div></>);
  }
  else{
      return <div className="NoSaltoL">{num}</div>;
  }

});
          this.setState ({
            Exercise2:data[0],
            Exercise2map:<div className="Answer2div">{l}</div>,
          });
    });
  }
  if(Question=="3"){
    fetch('/Answer3/' + Number, {
      method: 'PUT',
      body: Number,
      headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',}
       }).then(res => res.json())
              .then((data) => {
          console.table(data[0]);
            this.setState ({
              Exercise3:data[0],

            });
      });
  }
  }
componentDidMount(){

    var user="Invitado";
var formData = new FormData();
formData.append('user', user);
fetch('./Answer1', {
        method: 'GET'
    }).then(response => response.json())
    .then(jsondata => this.save(jsondata))
}

render() {
return (
  <div className="App">
    <div className="Title">  Test:</div>


  <div className="Question">
  <div className="QuestionTitle"> PingPong</div>
      <a>Write a program that prints the integers numbers from 1 to 100. But for multiples of three print "ping" instead of
      the number and for the multiples of five print "pong". For numbers which are multiples of both three and five
      print "PingPong".
      </a>
      <div className="Answer">{this.state.Exercise1}</div>
    </div>

  <div className="Question">
        <div className="QuestionTitle">Numbers Squared</div>
          <a>You are encouraged to solve this task according to the task description, using any language you may know.
          Write a program or function that takes a number from a function parameter. It must print or return a string of a ASCII-art square.
           Each side makes N copies of the number N  </a>
                   <div>
                  <div>Examples:</div>

                <div>
                If N is 0, no copies of N are used, so there should be no output (or only a single trailing newline).
                </div>


              <div className="Question2View">
              <div className="Question2View_child">
                    <div>If N is 1, the output is:</div>
                    <div>1</div>
                    <div>If N is 2:</div>
                    <div>22</div>
                    <div>22</div>
              </div>
              <div className="Question2View_child">
                        <div> If N is 3:</div>
                        <div>333</div>
                        <div>3 3</div>
                        <div>333</div>
              </div>
              <div className="Question2View_child">
                              <div>If N is 4:</div>
                              <div>4444</div>
                              <div>4  4</div>
                              <div>4  4</div>
                              <div>4444</div>
              </div>
                  </div>

          </div>

                      <InputNumber
                      GetNumberUser={this.GetNumberUser.bind(this)}
                       Question={"2"}
                       id_input={"Number2"}
                       Title={"Número:"}
                       />
                      <div className="Answer">{this.state.Exercise2map}</div>

  </div>

  <div className="Question">
<div className="QuestionTitle">Numbers Sorted</div>
      <a>You are encouraged to solve this task according to the task description, using any language you may
        know.
        Write a function that takes an array with unsorted numbers as a function argument parameter, to sort in
        ascending order. Please, do not use a language function.
        $unsorted = [7, 2, 6, 1, 8, 4, 5];
      </a>

    <InputNumber
    GetNumberUser={this.GetNumberUser.bind(this)}
     Question={"3"}
     id_input={"Number3"}
     Title={"Números: [7,2,6,1,8,4,5]"}
     />
    <div className="Answer">{this.state.Exercise3}</div>

      </div>




  </div>


);
}
        }

export default App;

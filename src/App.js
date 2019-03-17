import React, { Component } from 'react';
import DynamicForm from './components/DynamicForm';
import './App.css';

class App extends Component {
  state = {
    data: [
      
    ],
    current: {}
  }

  onSubmit = (model) => {
    let data = [];
    if (model.id) {
      data = this.state.data.filter((d) => {
        return d.id != model.id
      });
    } else {
      model.id = +new Date();
      data = this.state.data.slice();
    }
    
    this.setState({
      data: [model, ...data]
    });
  }

  onEdit = (id) => {
    let record = this.state.data.find((d) => {
      return d.id == id;
    });
    alert(JSON.stringify(record));
    this.setState({
      current: record
    })
  }

  render() {
    let data = this.state.data.map((d) => {
      return (
       /* <tr key={d.id}>
            <td>{d.name}</td>
            <td>{d.age}</td>
            <td>{d.qualification}</td>
            <td>{d.gender}</td>
            <td>{d.rating}</td>
            <td>{d.city}</td>
            <td>{d.skills.join(",")}</td>
            <td><button onClick={()=>{this.onEdit(d.id)}}>edit</button></td>
        </tr>*/
        <tr></tr>
      );
    });
    
    return (
      <div className="App">
        <DynamicForm className="form"
          title = "Rule Engine Dashboard"
          defaultValues = {this.state.current}
          model={
            [
               {
                  key:"country",
                  label:"Country",
                  value:"Dubai"
               },
               {
                  key:"name",
                  label:"Name",
                  value:"VAT Dubai"
               },
               {
                  key:"feeInterest",
                  label:"VAT Percentage",
                  value:5
               },
               {
                  key:"dealType",
                  label:"Deal Type",
                  type:"select",
                  options:[
                     {
                        key:"B",
                        label:"Bilateral",
                        value:"Bilateral"
                     },
                     {
                        key:"S",
                        label:"Syndicate Agent",
                        value:"Syndicate Agent"
                     }
                  ]
               },
               {
                  key:"residentIndicatorStatus",
                  label:"Resident Indicator Status",
                  type:"select",
                  options:[
                     {
                        key:"1",
                        label:"Borrower Resident",
                        value:"Borrower Resident"
                     },
                     {
                        key:"2",
                        label:"Borrower Non Resident",
                        value:"Borrower Non Resident"
                     }
                  ]
               }
            ]
         }
          onSubmit = {(model) => {this.onSubmit(model)}} 
        />

        <table border="1">
          <tbody>{data}</tbody>
        </table>

      </div>
    );
  }
}

export default App;

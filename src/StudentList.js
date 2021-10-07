import React, { Component } from 'react';
import ListGroup from './common/ListGroup';
import { getclassList } from './service/Class';
import {getSection} from './service/section';

class StudentList extends Component{
constructor(){
    super();
    this.state={
        section:[],
        class:[]
    }
}
componentDidMount(){
    const newClass=[{name:"All Classes"},...getclassList()]
this.setState({
    section:getSection(),
    class:newClass
})
}
handleItemSelect = (classList)=>{
this.setState({
    selectedItem:classList
})
}
render(){
    
    const {section,selectedItem}=this.state;
    const filter= selectedItem && selectedItem.id
    ?section.filter(cl=>
        cl.class.id===selectedItem.id
        )
    :section
    return(
        <React.Fragment>
            <div className="container">
            <div className="row">
            <div className="col-md-3">
                <ListGroup
                items={this.state.class}
                onItemSelect={this.handleItemSelect}
                selectedItem={this.state.selectedItem}

                />
            </div>
            <div className="col-md-9">
            <table className="table table-hover">
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Section</td>
            </tr>
        </thead>
        <tbody>{
            filter.map(sect =>(
                <tr key={sect.id}>
                    <td>{sect.id}</td>
                    <td>{sect.name}</td>
                    <td>{sect.class.className}</td>
                </tr>
        )) 
            }
        </tbody>
        </table>
            </div>
        </div>
        </div>
        </React.Fragment>
    )}
    
    
}
export default StudentList;
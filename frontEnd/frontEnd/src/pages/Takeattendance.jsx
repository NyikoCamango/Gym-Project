import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class LogStudentAttendance extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            attendanceDate : new Date(),
            Studentmember : []
        }
        this.getStudentmember = this.getStudentmember.bind(this);
    }

    componentDidMount(){
        this.getStudentmember();
    }

    render(){
        const data = (
            <div >
                   <footer className='main-footer'>
            <div className="row">
                <form>
                <div className="form-group">
                   <h4><b>Take Training Attendance</b></h4><br />
            </div>
                    <div className="form-group">
                        <h4><b>Training Attendance Date And Time</b></h4>
                        <DatePicker selected={this.state.attendanceDate} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa"  className="form-control" onChange={this.handleDateChange} />
                    </div> 
                </form>
            </div>
            <div >
            <hr />
            <h4><b>Mark Attendance From Registered Players</b></h4>
            <form className="form">
                <table class="table table-hover">
                    <thead>
                        <th>Student No.</th>
                        <th>Surname</th>
                        <th>Name</th>
                        <th></th>
                    </thead>
                    <tbody>
                       {
                           this.updateStudents()
                       }
                    </tbody>
                </table>
                <div className="form-group">
                    <button type="submit" className="btn btn-outline-dark">Submit Attendance</button>
                </div>
                </form>
                </div>
                </footer>
            </div>
        )
        return data;
    }
    
    handleDateChange = (newDate) =>{
        this.setState({attendanceDate : newDate});
        this.myDate = newDate;
        console.log(newDate);
       // this.logTrainingAttendance();
    }

    updateStudents = () =>{
        var data = null
        if(this.state.Studentmember.toString() === ""){
            data = (<h1>No Team Data/API Connection</h1>)
        }
        else{
            data = (this.state.Studentmember.map((Student,index) =>(
                <tr>
                     <footer className='main-footer'>
                        <td>{Student.studebtid}</td>
                        <td>{Student.FirstName}</td>
                        <td>{Student.LastName}</td>
                        <td>
                            <div className="row" key={index}> 
                                <div style={{paddingRight:7.5}}>
                                <button type="button" className="btn btn-outline-primary" name="present"id="present" onClick={this.MarkP}>Present</button>
                                </div>
                            
                                <div style={{paddingLeft:7.5}}>
                                <button type="button" className="btn btn-outline-danger" id="absent" name="absent" onClick={this.MarkA}>Absent</button>
                                </div>
                            </div>
                        </td>
                        </footer>
                    </tr>
            )))
        }

        return data;
    }

     async getStudentmember(){
        const req = await fetch("https://localhost:44378/api/Players/2");
        const data = await req.json();
        console.log(data);
         this.setState({teamPlayers: data})
    
        
    }

    MarkP = (e) =>{
        e.target.disabled = true;
        var a = document.getElementById("absent");

        if(a.disabled === true){
            a.disabled = false;
        }
    }

    MarkA = (e) =>{
        e.target.disabled = true;

        var p = document.getElementById("present");

        if(p.disabled === true){
            p.disabled = false;
        }
    }

    

}
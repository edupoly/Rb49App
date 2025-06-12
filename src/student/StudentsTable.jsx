import React from 'react'
import students from "../assets/students.json"

function StudentsTable(){
    var [allstudents,setStudents] = React.useState([...students])
    return (
        <table border="2">
        {
          allstudents.map((student)=>{
            return (  <tr style={student.gender==='Female'?{backgroundColor:"lightpink"}:{backgroundColor:"lightblue"}}>
                        {
                            student.gender==='Male' && (<td><img width="50px" src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-business-male-icon-vector-png-image_916468.jpg" alt="" /></td>)
                        }
                        {
                            student.gender==='Female' && (<td><img width="50px" src="https://png.pngtree.com/png-vector/20190118/ourmid/pngtree-vector-female-student-icon-png-image_326761.jpg" alt="" /></td>)
                        }
                        <td>{student.name}</td>
                        <td>{student.gender}</td>
                        <td>{student.fatherName}</td>
                        <td>{student.motherName}</td>
                        <td>{student.age}</td>
                      </tr>)
          })
        }
      </table>
    )
}
export default StudentsTable;
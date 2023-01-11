import React from 'react'

function BioDataTable(props) {
    const {bioData, deleteUserData, viewBioData} = props
  return (
    <div className="col-md-6 tabt">
    <table className="table">
      <tbody>
        <tr className="ztxt">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>View</th>
        </tr>
        {bioData?.map((data)=>(
        <tr>
          <td>{data.firstName}</td>
          <td>{data.email}</td>
          <td>{data.phoneNumber}</td>
          <td>
            <button className="ed" onClick={()=>viewBioData(data._id,"edit")}>Edit</button>
          </td>
          <td>
            <button className="ed" style={{ background: "#f00" }} onClick={()=>deleteUserData(data._id)}>
              Delete
            </button>
          </td>
          <td>
            <button className="ed" style={{ background: "#000" }} onClick={()=>viewBioData(data._id,"view")}>
              View
            </button>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default BioDataTable
import React from 'react'
import Table from 'react-bootstrap/Table'

export const Users = ({users}) => {

    console.log('users length:::', users.length)
    if (users.length === 0) return null

    const UserRow = (user,index) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{user.userId}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.fax}</td>
                  <td>{`${user.streetNumber} ${user.streetName} ${user.city} ${user.state}, ${user.zipcode}`}</td>
              </tr>
          )
    }

    const userTable = users.map((user,index) => UserRow(user,index))

    return(
        <div className="container">
            <h2>Users</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>User Id</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Fax</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </Table>
        </div>
    )
}
import React from 'react'
import {Table} from 'reactstrap';

function List() {

  

  return (
    <>
    <Table>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Email Address
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              1
            </th>
            <td>
              Mark
            </td>
            <td>
              Otto
            </td>
            <td>
              @mdo
            </td>
          </tr>
        </tbody>
    </Table>
    </>
  )
}

export default List
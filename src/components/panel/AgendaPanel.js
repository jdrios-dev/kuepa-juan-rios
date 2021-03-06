import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const AgendaPanel = () => {

  const { clients } = useSelector(state => state.client)

  return (
    <div>
      <h3>Conexiones de agenda para hoy</h3>
      <table className='agenda__table--table'>
        <tbody>
          {
            clients.clientsArray.map( (row)=>{
              return (
                <tr key={row.account_id} className='agenda__table--columns'>
                  <td>{row.name}</td>
                  <td>{row.team_name}</td>
                  <td>
                    <Link to={`profile/${row.account_id}`}>
                      <img src={row.avatar} alt={row.name} />
                    </Link>
                  </td>
                </tr>
              )
            } )
          }
        </tbody>
      </table>
    </div>
  )
}

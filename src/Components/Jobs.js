import React from 'react'
import Pickup from '../Icons/Pickup.svg'
import Dropoff from '../Icons/Dropoff.svg'
import Pays from '../Icons/Pays.svg'

export default function Jobs() {

  return (
    <div className='JobScreen'>
      <div className='JobCard'>

        <h1>Job</h1>

        <div className='JobDetails'>
          <table>
            <tbody>
            <tr>
              <td rowSpan='2'><img src={Pickup} alt='Pickup' className='JobIcons'/></td>
              <td><span className='JobDetailsGrey'>Pickup from </span>2/125 Oxlade Dr</td>
            </tr>
            <tr>
              <td>New Farm QLD 4005</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className='JobDetails'>
          <table>
            <tbody>
            <tr>
              <td rowSpan='2'><img src={Dropoff} alt='Dropoff' className='JobIcons'/></td>
              <td><span className='JobDetailsGrey'>Drop-off at </span>33-7 Townley St</td>
            </tr>
            <tr>
              <td>St Lucia QLD 4067</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className='JobDetails'>
          <table>
            <tbody>
            <tr>
              <td><img src={Pays} alt='$' className='JobIcons' style={{padding: '0 12px 0 6px'}}/></td>
              <td><span className='JobDetailsGrey'>Pays </span>$12.50</td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>

      <div className='AcceptCard'>
        <button className='AcceptButton'>ACCEPT</button>
      </div>

    </div>

  )
}

import React, { Component } from 'react'
import SubmitButton from './SubmitButton.js'
import Pickup from '../Icons/Pickup.svg'
import Dropoff from '../Icons/Dropoff.svg'
import Pays from '../Icons/Pays.svg'

export class IndividualJob extends Component {

  acceptJob = () => {
    this.props.acceptJob(this.props.id);
  }


  render() {
    return (
      <div>
        <div className='JobCard'>

          <h1>Job</h1>

          <div className='JobDetails'>
            <table>
              <tbody>
              <tr>
                <td rowSpan='2'><img src={Pickup}
                alt='Pickup' 
                className='JobIcons'/></td>
                <td><span className='JobDetailsGrey'>Pickup from </span>{this.props.pickupAdd1}</td>
              </tr>
              <tr>
                <td>{this.props.pickupAdd2}</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className='JobDetails'>
            <table>
              <tbody>
              <tr>
                <td rowSpan='2'><img src={Dropoff} 
                alt='Dropoff' 
                className='JobIcons'/></td>
                <td><span className='JobDetailsGrey'>Drop-off at </span>{this.props.dropoffAdd1}</td>
              </tr>
              <tr>
                <td>{this.props.dropoffAdd2}</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className='JobDetails'>
            <table>
              <tbody>
              <tr>
                <td><img src={Pays} 
                alt='$' 
                className='JobIcons' 
                style={{padding: '0 12px 0 6px'}}/></td>
                <td><span className='JobDetailsGrey'>Pays </span>${this.props.pays}</td>
              </tr>
              </tbody>
            </table>
          </div>

          </div>

          <div className='AcceptCard'>
          <SubmitButton 
            text='ACCEPT'
            disabled={false}
            className='AcceptButton'
            onClick={this.acceptJob}
            />
          </div>
        
      </div>
    )
  }
}

export default IndividualJob

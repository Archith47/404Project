import React, {Component} from 'react';
import Payment from '../child-components/payment'

class Booking extends Component {

    render() {
      return(
      <div className="Booking">
                    <p>from booking</p>

           <Payment/>



      </div>);
    }
}

export default Booking;
import React from 'react';
import classes from './BookMySeats.css';

const Seats = (props) => {

    return (
        <div className="section">
            {props.values.map(seat => {
                const isAvailable = props.availableSeats.includes(seat);
                const isBooked = props.bookedSeats.includes(seat);
                let seatClass;
                if (isBooked) {
                    seatClass = 'booked';
                }
                if (!isAvailable) {
                    seatClass = 'disabled';
                }
                return <div className={seatClass} onClick={props.addSeat} key={seat}>{seat}</div>;
            })}
        </div>
    );
}
export default Seats;

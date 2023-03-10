import React from 'react'
import { Row } from 'react-bootstrap'
import "./GuestDetailHead.scss"

const GuestDetailHead = () => {
    return (
        <Row className="guestdetailhead m-4" >
            <div className='main-div'>
                <div className="guestdetailheadleft">
                    <span>Linda Johnson</span>
                    <div className='d-flex'>
                        <span>IN-HOUSE - </span>
                        <span>22138252(Sep 30 - Oct 8)</span>
                    </div>
                </div>
                <div>
                    <div >
                        <div className="d-flex">
                            <h6 className="mt-4">TRIP TOTAL</h6>
                            <h5 className="m-4">$2,644.58</h5>

                        </div>
                        <div className="d-flex">
                            <h6 className="mx-md-2">BALANCE</h6>
                            <h5 className="mx-md-2">$444.58</h5>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="d-flex btn-div">
                        <button className='checkout-btn'>CHECK OUT</button>
                        <i className='icon-arrow-down dropdown-btn'></i>
                    </div>
                </div>
            </div>

        </Row>
    )
}

export default GuestDetailHead

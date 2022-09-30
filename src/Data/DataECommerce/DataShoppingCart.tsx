import React from "react";
import { Tooltip, OverlayTrigger, Button, Table } from "react-bootstrap";

export function Cart () {
    const Data = [
        {
            src: require("../../../src/assets/images/pngs/4.jpg"),
            title: 'laborum et dolorum fuga',
            price: '$568',
            total: '$568',
            quantity: 1,
        },
        {
            src: require("../../../src/assets/images/pngs/8.jpg"),
            title: 'laborum et dolorum fuga',
            price: '$1,027',
            total: '$2,054',
            quantity: 2,
        },
        {
            src: require("../../../src/assets/images/pngs/10.jpg"),
            title: 'laborum et dolorum fuga',
            price: '$1,589',
            total: '$4,767',
            quantity: 3,
        },
        {
            src: require("../../../src/assets/images/pngs/9.jpg"),
            title: 'laborum et dolorum fuga',
            price: '$1,027',
            total: '$4,108',
            quantity: 4,
        },
        {
            src: require("../../../src/assets/images/pngs/6.jpg"),
            title: 'laborum et dolorum fuga',
            price: '$1,589',
            total: '$3,178',
            quantity: 2,
        }
    ];
    // function Decrement(el) {
    //     let unit = el.target.parentElement.querySelector("input").value;
    //     if (unit == 0) {
    //       return false;
    //     } else {
    //       el.target.parentElement.querySelector("input").value--;
    //     }
    //   }
    //   function Increment(el) {
    //     el.target.parentElement.querySelector("input").value++;
    //   }

    function dec(el) {
        let unit = el.currentTarget.parentElement.querySelector("input").value;
    
        if (Number(unit) === 0) {
          return false;
        } else {
          el.currentTarget.parentElement.querySelector("input").value--;
        }
      }
      function inc(el) {
        el.currentTarget.parentElement.querySelector("input").value++;
      }
    return (
        <Table className="table-bordered table-vcenter">
            <thead>

                <tr className="border-top">
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th>Action</th>
                </tr>

            </thead>
            <tbody>
                {Data.map((list, index) => (
                    <tr key={index}>
                        <td>
                            <div className="text-center">
                             <img src={list.src} alt="img" className="cart-img text-center" />
                            </div> 
                         </td>     
                        <td>{list.title}</td>  
                        <td className="fw-bold">{list.price}</td> 
                          <td>  
                            <div className="handle-counter ms-2" id="handleCounter4">
                            <Button variant='default' className="counter-minus lh-2 shadow-none" onClick={dec}><i className="fa fa-minus text-muted"></i></Button>
                            <input type="text" defaultValue={list.quantity} className="qty" />
                            <Button variant='default' className="counter-plus lh-2 shadow-none" onClick={inc}><i className="fa fa-plus text-muted"></i></Button>
                            </div>
                            </td>
                            <td>{list.total}</td>
                        
                        
                        <td className="text-center">
                            <div className=" d-flex g-2">
                        <OverlayTrigger placement="top" overlay={<Tooltip >Wishlist</Tooltip>}><div className="text-secondary bg-secondary-transparent btn-icon py-1 me-2"><i className="bi bi-heart fs-16"></i></div></OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}><div className="text-danger bg-danger-transparent btn-icon py-1"><i className="bi bi-trash fs-16"></i></div></OverlayTrigger>
                        </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
import React, { FC } from 'react';
import { Card, Row, Table, Col, FormControl, InputGroup } from 'react-bootstrap';
import styles from './ShoppingCart.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Link } from 'react-router-dom';
import { Cart } from './../../../Data/DataECommerce/DataShoppingCart';


interface ShoppingCartProps { }

const ShoppingCart: FC<ShoppingCartProps> = () => (
  <div className={styles.ShoppingCart}>
    <PageHeader titles="Cart" active="Cart" items={['E-Commerce']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row>
      <Col lg={12} md={12} sm={12} xl={8}>
        <Card className="cart">
          <Card.Header>
            <Card.Title>Shopping Cart</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
              <Cart />
            </div>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col md={6} sm={6}>
                <InputGroup className="mb-1">
                  <FormControl type="text" placeholder="Search ..." />
                  <span className="input-group-text btn btn-primary">Apply Coupon</span>
                </InputGroup>
              </Col>
              <Col md={6} sm={6} className="text-end"><Link to="#" className="btn btn-default disabled btn-md">Update Cart</Link></Col>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
      <Col lg={12} xl={4} sm={12} md={12}>
        <Card>
          <Card.Header>
            <Card.Title>Cart Totals</Card.Title>
          </Card.Header>
          <Card.Body className="py-2">
            <div className="table-responsive">
              <Table className="table-borderless text-nowrap mb-0">
                <tbody>
                  <tr>
                    <td className="text-start">Sub Total</td>
                    <td className="text-end"><span className="fw-bold  ms-auto">$568</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Additional Discount</td>
                    <td className="text-end"><span className="fw-bold text-success">- $55</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Delivery Charges</td>
                    <td className="text-end"><span className="fw-bold text-green">0 (Free)</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Tax</td>
                    <td className="text-end"><span className="fw-bold text-danger">+ $39</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Coupon Discount</td>
                    <td className="text-end"><span className="fw-bold text-success">- $15%</span></td>
                  </tr>
                  <tr>
                    <td className="text-start">Vat Tax</td>
                    <td className="text-end"><span className="fw-bold">+ $9</span></td>
                  </tr>
                  <tr>
                    <td className="text-start fs-18">Total Bill</td>
                    <td className="text-end"><span className="ms-2 fw-bold fs-23">$14,675</span></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="btn-list d-flex justify-content-between flex-wrap">
              <Link to={`/ecommerce/shop`} className="btn btn-primary"><i className="fa fa-arrow-left mx-1"></i>Continue Shopping</Link>
              <Link to={`/ecommerce/checkout`} className="btn btn-success">Check out<i className="fa fa-arrow-right mx-1"></i></Link>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW-1 CLOSED --> */}
  </div>
)


export default ShoppingCart;

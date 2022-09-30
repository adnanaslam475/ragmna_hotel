import React, { FC } from 'react';
import { Pagination, Row, Col, Card, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Wishlist.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { DataWishlist } from '../../../Data/DataECommerce/DataWishlist';

interface WishlistProps { }

const Wishlist: FC<WishlistProps> = () => (
  <div className={styles.Wishlist}>
    <PageHeader titles="Wishlist" active="Wishlist" items={['E-Commerce']} />
    {/* <!-- ROW-1 OPEN --> */}
    <Row className="row-cards">
      {/* <!-- COL-END --> */}
      <Col xl={12} lg={12}>
        <Row>
          <Col xl={12}>
            <Card className="p-0">
              <Card.Body className="p-4">
                <Row>
                  <Col xl={5} lg={6} md={5} sm={6}>
                    <InputGroup className="d-flex w-100 float-start my-1">
                      <input type="text" className="form-control" placeholder="Search ..." />
                      <button className="btn input-group-text bg-transparent text-muted">
                        <i className="fa fa-search fs-16" aria-hidden="true"></i>
                      </button>
                    </InputGroup>
                  </Col>
                  <Col xl={7} lg={6} md={7} sm={6}>
                    <div className="float-sm-end float-none my-1">
                      <Link to={`/ecommerce/shoppingcart`} className="btn btn-primary me-2">Add All to Cart</Link>
                      <Link to="#" className="btn btn-primary">Clear All</Link>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="tab-content">
          <div className="tab-pane active" id="tab-11">

            <DataWishlist />

            <div className="mb-5">
              <div className="float-end">

                <Pagination>
                  <Pagination.Item disabled>Prev</Pagination.Item>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- COL-END --> */}
      </Col>
      {/* <!-- ROW-1 CLOSED --> */}
    </Row>
    {/* <!-- ROW-1 END--> */}
  </div>
);

export default Wishlist;

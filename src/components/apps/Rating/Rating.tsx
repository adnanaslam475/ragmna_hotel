import React, { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styles from './Rating.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { StarRating, HeartRating, MultiStarRating, MultiHeartRating, MulticircleRating, ThumbsUpRating, BasicStarRating, RoundedStarRating, GradientsRating, ReadOnlyMode, OnHoverEvent, ExecuteCallback } from '../../../Data/App/DataRating';


interface RatingProps { }

const Rating: FC<RatingProps> = () => (
  <div className={styles.Rating}>
    <PageHeader titles="Rating" active="Rating" items={['Apps']} /> 
    {/* <!-- Row --> */}
    <Row className="row-cards">
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
           <StarRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Heart Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <HeartRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Multi Star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <MultiStarRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Multi Heart Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <MultiHeartRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Multi circle Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
         <MulticircleRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Thumbs-up Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
         <ThumbsUpRating/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="row-cards">
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Basic Star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <BasicStarRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Rounded star Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
         <RoundedStarRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              gradients Rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {/* <div className="rating-stars block my-rating-5" data-rating="5">
            </div> */}
            <GradientsRating/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              Execute callback when rating
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {/* <div className="rating-stars block my-rating-6" data-rating="2">
            </div> */}
            <ExecuteCallback/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              read only mode
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {/* <div className="rating-stars block my-rating-7" data-rating="2">
            </div> */}
            <ReadOnlyMode/>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={12} xl={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              On hover event
            </Card.Title>
          </Card.Header>
          <Card.Body>
            {/* <div className="rating-stars block my-rating-9" data-rating="2">
            </div>
            <span className="live-rating"></span> */}
            <OnHoverEvent/>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- End Row --> */}
  </div>
);

export default Rating;

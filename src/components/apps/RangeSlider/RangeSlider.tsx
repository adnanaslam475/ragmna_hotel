import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import styles from './RangeSlider.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import  { DiscreteSliderSteps, RangeSliderDefault, TrackInvertedSlider, DiscreteSlider, CustomizedSlider, ValueLabel, PriceSelector, InputSlider, TrackInvertedDesign, StorageSlider } from '../../../Data/App/DataSlider';
import CustomizedPrettoSlider from './../../../Data/App/DataSlider';

interface RangeSliderProps { }

const RangeSlider: FC<RangeSliderProps> = () => (
  <div className={styles.RangeSlider}>
    <PageHeader titles="RangeSllider" active="RangeSllider" items={['Apps']} />

    <Card>
      <Card.Header className="border-bottom-0">
        <Card.Title>
          Range Slider
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="row row-sm">
          <div className="col-lg-12">

            <RangeSliderDefault />
          </div>
          <div className="col-lg-12 mt-4">

            <DiscreteSlider />
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-lg-12 mt-4">

            <TrackInvertedSlider/>
          </div>
          <div className="col-lg-12 mt-4">

            <DiscreteSliderSteps />
          </div>
        </div>
      </Card.Body>
    </Card>
    {/* <!--/div--> */}

    {/* <!--div--> */}
    <Card>
      <Card.Header className="border-bottom-0">
        <Card.Title>
          Range Slider (Modern Skin)
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="row row-sm">
          <div className="col-lg-12">
            
            <CustomizedSlider />
          </div>
          <div className="col-lg-12 mt-4">
            
            <CustomizedPrettoSlider />
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-lg-12 mt-4">
             
            <ValueLabel />
          </div>
          <div className="col-lg-12 mt-4">
            
            <PriceSelector/>
          </div>
        </div>
      </Card.Body>
    </Card>
    {/* <!--/div--> */}

    {/* <!--div--> */}
    <Card>
      <Card.Header className="border-bottom-0">
        <Card.Title>
          Range Slider (Outline Skin)
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="row row-sm">
          <div className="col-lg-12">
            <InputSlider/>
          </div>
          <div className="col-lg-12 mt-4">
            <TrackInvertedDesign/>
          </div>
        </div>
        <div className="row row-sm">
          <div className="col-lg-12 mt-4">
            <StorageSlider/>
          </div>
          {/* <div className="col-lg-12 mt-4">
            <input className="rangeslider4" data-extra-classes="irs-outline" name="example_name" type="text" />
          </div>*/}
        </div> 
      </Card.Body>
    </Card>
    {/* <!--/div--> */}
  </div>

);

export default RangeSlider;

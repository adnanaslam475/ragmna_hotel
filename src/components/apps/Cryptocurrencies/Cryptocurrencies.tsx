import React, { FC } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styles from './Cryptocurrencies.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { Crypto } from '../../../Data/App/DataCryptoCurrency';


interface CryptoCurrenciesProps { }

const CryptoCurrencies: FC<CryptoCurrenciesProps> = () => (
  <div className={styles.CryptoCurrencies}>
    <PageHeader titles="Crypto-currencies" active="Crypto-currencies" items={['Apps']} />
    {/* <!-- ROW OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Header>
            <Card.Title as="h3">Crypto Currencies</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="table-responsive">
            <Crypto/>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    
    {/* <!-- ROW CLOSED --> */}
  </div>
);

export default CryptoCurrencies;


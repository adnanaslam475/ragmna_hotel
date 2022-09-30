import React, { FC } from 'react';
import { Row } from 'react-bootstrap';
import styles from './Userlist.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import { UserList } from '../../../Data/App/DataUserlist';



interface UserlistProps { }

const Userlist: FC<UserlistProps> = () => (
  <div className={styles.Userlist}>
    <PageHeader titles="User Lists" active="User List" items={['Apps']} /> 

    <Row className="row-cards">

              <UserList/>

    </Row>
  </div>
);

export default Userlist;

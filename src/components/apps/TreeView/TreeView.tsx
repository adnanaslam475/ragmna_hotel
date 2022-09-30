import React, { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styles from './TreeView.module.scss';
import PageHeader from '../../../Layouts/PageHeader/PageHeader';
import AnimatedTreeView, { FileSystemNavigator, BasicTreeviewexample, BasicTreeview, TreeviewStyle, TreeviewStylecolord, TreeViewwithbutton } from './../../../Data/App/DataTreeView';



interface TreeViewProps { }

const TreeView: FC<TreeViewProps> = () => (
  <div className={styles.TreeView}>
    <PageHeader titles="Treeview" active="Treeview" items={['Apps']} /> 
    {/* <!-- ROW OPEN --> */}
    <Row>
      <Col md={12}>
        <Card className="mg-b-20">
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Basic Treeview
            </div>
            <p className="mg-b-20 card-sub-title fs-12 text-muted">It is Very Easy to Customize and it uses in website apllication.</p>
            <Row>
              {/* <!-- col --> */}
              <Col lg={4}>
                <FileSystemNavigator />
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col lg={4} className="mt-4 mt-lg-0">
                
                <BasicTreeviewexample/>
              </Col>
              {/* <!-- /col --> */}

              {/* <!-- col --> */}
              <Col lg={4} className="mt-4 mt-lg-0 filetreeview">
                <BasicTreeview/>
              </Col>
              {/* <!-- /col --> */}
            </Row>
          </Card.Body>
        </Card>
        <Row>
          <Col xl={8}>
            <Card>
              <Card.Body>
                <div className="main-content-label mg-b-5">
                  Tree View Styles
                </div>
                <p className="mg-b-20 card-sub-title fs-12 text-muted">It is Very Easy to Customize and it uses in website apllication.</p>
                <Row>
                  {/* <!-- col --> */}
                  <Col lg={4} className="collapsabletreeview1">
                    <TreeviewStyle/>
                  </Col>
                  {/* <!-- /col --> */}

                  {/* <!-- col --> */}
                  <Col lg={4} className="mt-4 mt-lg-0 collapsabletreeview1">
                    <TreeviewStylecolord/>
                  </Col>
                  {/* <!-- /col --> */}
                </Row>

                
              </Card.Body>
            </Card>
          </Col>
          <Col xl={4}>
            <Card>
              <Card.Body>
                <Row>
                <div className="main-content-label mg-b-5">
                  Collapsable Treeview
                </div>
                  {/* <!-- col --> */}
                  <Col lg={12} className="mt-2 mt-lg-0 collapsabletreeview">
                    <TreeViewwithbutton/>
                  </Col>
                  {/* <!-- /col --> */}
                </Row>
              </Card.Body>
            </Card>
          </Col>  
        </Row> 
      </Col>
    </Row>
    {/* <!-- ROW CLOSED --> */}

    {/* <!-- ROW OPEN --> */}
    <Row>
      <Col md={12}>
        <Card>
          <Card.Body>
            <div className="main-content-label mg-b-5">
              Animated Directory Styles
            </div>
            <p className="mg-b-20 card-sub-title fs-12 text-muted">It is Very Easy to Customize and it uses in website apllication.</p>
            <Row>
              {/* <!-- col --> */}
              <Col lg={4} className="mt-4 mt-lg-0 ">
                <div className="dTree">
                  <AnimatedTreeView/>
                </div>
              </Col>
              {/* <!-- /col --> */}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    {/* <!-- ROW CLOSED --> */}
  </div>
);

export default TreeView;

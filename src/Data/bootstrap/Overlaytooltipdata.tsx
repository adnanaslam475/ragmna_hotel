import React from "react";
import { Button,Popover, OverlayTrigger, Col } from "react-bootstrap";

// Tooltip DefaultpopOver START

const popoverData:any = [
  {
    id: "1",
    variant: "primary",
    
    placement: 'top'
  },
  {
    id: "2",
    variant: "success",
    
    placement: 'left'
  },
  {
    id: "3",
    variant: "danger",
    
    placement: 'right'
  },
  {
    id: "4",
    variant: "warning",
    
    placement: 'bottom'

  }
];
  export function DefaultpopOver() {
    return (
      <>
        {popoverData.map((item:any, k:any) => (
          <Col sm={6} lg={3} className="mt-2 mb-2" key={k}>
          <OverlayTrigger
            trigger="click"
            
            placement={item.placement}
            overlay={
              <Popover id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
                <Popover.Header as="h3">{`Popover ${item.placement}`}</Popover.Header>
                <Popover.Body>
                Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                </Popover.Body>
              </Popover>
            }
          >
            <Button variant={item.variant}>Click me</Button>
          </OverlayTrigger>
            </Col>
        ))}
      </>
    );
  }
//   Tooltip DefaultpopOver END

// Static TooltipPopOver START


const StaticTooltipData:any = [
  {
    id: "1",
    variant: "primary",
    classname:'bg-primary text-white',
    placement: 'top'
  },
  {
    id: "2",
    variant: "secondary",
    classname:'bg-secondary text-white',
    placement: 'bottom'
  }
];

export function StaticTooltip() {
  

    return (
      <>
      {StaticTooltipData.map((item:any, k:any) => (
        <Col sm={6} lg={3} className="mt-2 mb-2 text-center" key={k}>
        <OverlayTrigger
          trigger="click"
          placement={item.placement}
          overlay={
            <Popover id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
              <Popover.Header className={item.classname} as="h3">{`Popover ${item.placement}`}</Popover.Header>
              <Popover.Body>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant={item.variant}>Click me</Button>
        </OverlayTrigger>
          </Col>
      ))}
    </>
    );
  }
// Static TooltipPopOver END


// Colored Static TooltipPopOver START


const ColoredTooltipData:any = [
  {
    id: "1",
    variant: "primary",
    popoverclass:'bg-primary',
    popheaderclass: 'bg-primary text-white',
    placement: 'top'
  },
  {
    id: "2",
    variant: "secondary",
    popoverclass:'bg-secondary',
    classname:'bg-secondary text-white',
    placement: 'bottom'
  }
];

export function ColoredTooltip() {
  
    return (
      <>
      {ColoredTooltipData.map((item:any, k:any) => (
        <Col  sm={6} lg={3} className="mt-2 mb-2" key={k}>
        <OverlayTrigger
          trigger="click"
          placement={item.placement}
          overlay={
            <Popover className={item.popoverclass} id={`popover-positioned-${item.placement}`} style={{ margin: "0px" }}>
              <Popover.Body className="text-white">
                <h4 className={item.popheaderclass} >{`Popover ${item.placement}`}</h4>
              Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant={item.variant}>Click me</Button>
        </OverlayTrigger>
          </Col>
      ))}
    </>
    );
  }

// Colored Static TooltipPopOver END

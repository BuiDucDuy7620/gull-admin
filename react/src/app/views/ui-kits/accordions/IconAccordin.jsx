import React from "react";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { Accordion } from "react-bootstrap";
import shorId from "shortid";

const IconAccordin = () => {
  const iconList = ["i-Big-Data", "i-Data-Settings", "i-Library"];

  return (
    <SimpleCard title="With Icons">
      <Accordion>
        {iconList.map((icon, index) => (
          <Accordion.Item
            key={icon}
            icon={icon}
            eventKey={shorId.generate()}
            className="ul-card__border-radius card border-0 card"
          >
            <Accordion.Header className="p-0 card-header">
              <div className="card-title mb-0 text-primary">
                {icon && <i className={`${icon} me-2 text-15`}></i>}
                Accordion asd Item
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch.
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </SimpleCard>
  );
};

export default IconAccordin;

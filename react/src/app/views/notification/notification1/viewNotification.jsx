import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";

// const popover = (props) => 
class viewNotification extends Component {
    state = {};
    render() {
        return (
            <div>
                {/* <Breadcrumb
                    routeSegments={[
                        { name: "UI Kits", path: "/uikits" },
                        { name: "Popover" },
                    ]}
                ></Breadcrumb> */}
                <h2>View Notification</h2>
                <div className="row">
                    <div className="col-md-12">
                        <SimpleCard title="Organization" className="mb-4 ">
                            <div className='row '>
                                <div className="col-9">
                                    <p>
                                        A new organization Asure Pro has been created.
                                    </p>
                                </div>
                                <div className="col-3">
                                    <OverlayTrigger
                                        trigger="click"
                                        placement="right"
                                    // overlay={popover}
                                    >
                                        <Button className="text-white rounded-3">
                                            View Organization Info
                                        </Button>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </SimpleCard>
                    </div>
                    <div className='d-flex justify-content-end  rounded-fill '>
                        {/* <button  type='button' className=" btn width-100 height-20">Back</button> */}
                        <button type="button" className="btn btn-info ">Info</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default viewNotification;

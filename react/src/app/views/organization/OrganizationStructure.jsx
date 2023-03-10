import React, { Component } from "react";
import { Breadcrumb } from "@gull";

class Organization extends Component {
    state = {};
    render() {
        return (
            <div className="row">
                <div className='d-flex col-lg-12 mb-3'>
                    <button className="btn card  w-50" type="submit">Organization
                        Basic Info</button>
                    <button className="btn card mx-1 w-50" type="submit" style={{ backgroundColor: "#00CDC2" }}>Organization
                        Structure</button>
                    <button className="btn card mx-1 w-50" type="submit">Branches/Outlets</button>
                    <button className="btn card mx-1 w-50" type="submit">Announcements</button>
                    <button className="btn card mx-1 w-50" type="submit">Announcements</button>
                    <button className="btn card mx-1 w-50" type="submit">Holiday Work List</button>
                    <button className="btn card  w-50" type="submit">Manage
                        Asst. Admin</button>
                </div>

                <div className='row card '>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                        <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                            <div className="card-body   row d-flex   " style={{ backgroundColor: "#F2F2F2" }} >
                                <div className="col-lg-1 ">
                                    <img src="/assets/images/logoKelick.png" alt="" />
                                </div>
                                <div className="col-lg-9 mt-3 ">
                                    <h4>Asure Pro Pte Ltd</h4>
                                    <span>Organisation Login ID: asurepro    Country based in: Singapore    Business Registration Number: 20184076R</span>
                                </div>
                                <div className="col-lg-2 row d-flex-justify-center text-center">
                                    <div className="col-lg-6">
                                        <i className="i-Eye"></i>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="/assets/images/Delete.png" className="mt-3" ></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                            <div className="card-body  row d-flex   " style={{ backgroundColor: "#F2F2F2" }}>
                                <div className="col-lg-1 ">
                                    <img src="/assets/images/logoKelick.png" alt="" />
                                </div>
                                <div className="col-lg-9 mt-3">
                                    <h4>Asure Pro Pte Ltd</h4>
                                    <span>Organisation Login ID: asurepro    Country based in: Singapore    Business Registration Number: 20184076R</span>
                                </div>
                                <div className="col-lg-2 row d-flex-justify-center text-center">
                                    <div className="col-lg-6">
                                        <i className="i-Eye"></i>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="/assets/images/Delete.png" className="mt-3" ></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Organization;

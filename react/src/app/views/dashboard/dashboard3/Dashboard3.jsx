import React, { Component } from "react";
import ComparisonChart from "app/views/charts/echarts/ComparisonChart";
import PieChart from "app/views/charts/echarts/PieChart";
import LineChart3 from "app/views/charts/echarts/LineChart3";
import LineChart1 from "app/views/charts/echarts/LineChart1";
import LineChart2 from "app/views/charts/echarts/LineChart2";
import { Breadcrumb } from "@gull";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppCalendar from "app/views/app/calendar/AppCalendar";
class Dashboard3 extends Component {
    state = {
        cardList1: [
            {
                icon: "i-Add-User",
                title: "0",
                subtitle: "New Hires",
            },
            {
                icon: "i-Financial",
                title: "0",
                subtitle: "Staff Leaving",
            },
            {
                icon: "i-Checkout-Basket",
                title: "0",
                subtitle: "Clocked-In",
            },
            {
                icon: "i-Money-2",
                title: "0",
                subtitle: "Absent",
            },
        ],
        topSellingProduct: [
            {
                title: "Wireless Headphone E23",
                description: "Lorem ipsum dolor sit amet consectetur.",
                prevPrice: 500,
                currentPrice: 450,
                imgUrl: "/assets/images/products/headphone-4.jpg",
            },
            {
                title: "Wireless Headphone Y902",
                description: "Lorem ipsum dolor sit amet consectetur.",
                prevPrice: 500,
                currentPrice: 200,
                imgUrl: "/assets/images/products/headphone-3.jpg",
            },
            {
                title: "Wireless Headphone E09",
                description: "Lorem ipsum dolor sit amet consectetur.",
                prevPrice: 500,
                currentPrice: 600,
                imgUrl: "/assets/images/products/headphone-2.jpg",
            },
            {
                title: "Wireless Headphone X89",
                description: "Lorem ipsum dolor sit amet consectetur.",
                prevPrice: 500,
                currentPrice: 350,
                imgUrl: "/assets/images/products/headphone-4.jpg",
            },
        ],
        newUserList: [
            {
                name: "Smith Doe",
                email: "Smith@gmail.com",
                status: "active",
                photoUrl: "/assets/images/faces/1.jpg",
            },
            {
                name: "Jhon Doe",
                email: "Jhon@gmail.com",
                status: "pending",
                photoUrl: "/assets/images/faces/2.jpg",
            },
            {
                name: "Alex",
                email: "Otttio@gmail.com",
                status: "inactive",
                photoUrl: "/assets/images/faces/3.jpg",
            },
            {
                name: "Mathew Doe",
                email: "matheo@gmail.com",
                status: "active",
                photoUrl: "/assets/images/faces/4.jpg",
            },
        ],
        userActivity: [
            {
                activitylist: [
                    {
                        title: "Pages / Visit",
                        count: 2065,
                    },
                    {
                        title: "New user",
                        count: 465,
                    },
                    {
                        title: "Last week",
                        count: 23456,
                    },
                ],
            },
            {
                activitylist: [
                    {
                        title: "Pages / Visit",
                        count: 435,
                    },
                    {
                        title: "New user",
                        count: 5435643,
                    },
                    {
                        title: "Last week",
                        count: 45435,
                    },
                ],
            },
            {
                activitylist: [
                    {
                        title: "Pages / Visit",
                        count: 545,
                    },
                    {
                        title: "New user",
                        count: 54353,
                    },
                    {
                        title: "Last week",
                        count: 4643,
                    },
                ],
            },
        ],
    };

    getUserStatusClass = (status) => {
        switch (status) {
            case "active":
                return "badge-success";
            case "inactive":
                return "badge-warning";
            case "pending":
                return "badge-primary";
            default:
                break;
        }
    };

    render() {
        let {
            cardList1 = [],
            topSellingProduct = [],
            newUserList = [],
            userActivity = [],
        } = this.state;

        return (
            <div className="  bg-alice-blue">
                {
                /* <Breadcrumb
                    routeSegments={[
                        { name: "Dashboard", path: "/dashboard" },
                        { name: "Version 1" },
                    ]}
                ></Breadcrumb> */}
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                            <div className="card-body text-center row d-inline-flex p-3  ">
                                <div className="col-lg-3 p-2  m-1">
                                    <img src="/assets/images/faces/1.jpg" className="rounded-circle"></img>

                                </div>
                                <div className="col-lg-8 p-2  m-1">
                                    <h4>Welcome to Keclick,</h4>
                                    <h4>Asure HR</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-12 mb-4 ">
                        <div className="card bg-dark  ">
                            <div className="card-body  ">
                                <h6 className="text-white">Announcement:</h6>
                                <h3 className="text-white">There is no announcement</h3>
                                <h6 className="text-white">You may create new announcement in the Organization  Announcements page.</h6>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-12 col-md-12 ">
                        <div className="card  mb-4">
                            <div className="card-body text-center">
                                <h5 className="row">Total Workforce  </h5>
                                <div className="row">
                                    <div className="col-lg-1">
                                        <i className="i-Boy"></i>
                                    </div>
                                    <div className="col-lg-1">
                                        <h4>0</h4>
                                    </div>
                                </div>
                                <h6 className="row">since last month</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-md-12">
                        <div className="card mb-4">
                            <div className="card-body p-0">
                                <h5 className="card-title m-0 p-3">Company Calendar</h5>
                                <AppCalendar height="300px"></AppCalendar>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <div className="row">
                            {cardList1.map((card, index) => (
                                <div key={index} className="col-md-6">
                                    <div className="card card-icon-big mb-4">
                                        <div className="card-body text-center">
                                            <i className={card.icon}></i>
                                            <h5 className="text-muted mt-2 mb-0 text-capitalize">
                                                {card.subtitle}
                                            </h5>
                                            <p className="lead text-18 mt-2 mb-0 text-capitalize">
                                                {card.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-icon-big mb-4">
                                    <div className="card-body ">
                                        <h4>Quick Links </h4>
                                        <ul>
                                            <li>Add Super Admin</li>
                                            <li>Add Branch</li>
                                            <li> Add Announcement</li>
                                            <li>Add Employee</li>
                                            <li>Generate New Payroll</li>
                                            <li>Add Assets</li>
                                            <li>Add Attendance</li>
                                            <li>New Claims</li>
                                            <li>New Leaves</li>
                                            <li>New Appraisals</li>
                                        </ul>
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

export default Dashboard3;

import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import { Link } from "react-router-dom";

class Organization extends Component {
    state = {};
    render() {
        return (
            <div className="row">
                <div className='d-flex col-lg-12 mb-3'>
                    <Link className=" text-center card mt-1  w-50" to="/organization/organization">
                        <button className="btn card  " type="submit" >Organization  Basic Info</button>
                    </Link>

                    <Link className=" text-center card mt-1 mx-1 w-50" to="/organization/OrganizationStructure">
                        <button className="btn card " type="submit" >Organization Structure</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Branches/Outlets</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Announcements</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Announcements</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >oliday Work List</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Manage
                            Asst. Admin</button>
                    </Link>

                </div>

                <div>
                    <section className="basic-action-bar">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-12 mb-3 row">
                                    <div className="card">
                                        <div className="card-header bg-transparent">
                                            <h3 className="card-title">Organization Details</h3>
                                        </div>
                                        <form action="">
                                            <div className="card-body row">
                                                <div className="col-lg-6">
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Organization Name*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Asure Pro Pte Ltd"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Country based in*  (Settings will be localized according to the country selected)                                                    </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Singapore"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Business Registration Type
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="UEN - Local Organization Registration Number Issue by ACRA"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Industry
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Tech"
                                                        />

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Organization ID*
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="asurepro"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Logo*
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Asure Pro.jpg"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Business Registration Number
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="201609345K"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Date of Incorporation
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="30/09/2022"
                                                        />

                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </section>

                    <section className="basic-action-bar">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-12 mb-3 row">
                                    <div className="card">
                                        <div className="card-header bg-transparent">
                                            <h3 className="card-title"> Business Address</h3>
                                        </div>
                                        <form action="">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className=" col-lg-6 form-group col-md-6">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Postal Code
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="123456"
                                                        />

                                                    </div>
                                                    <div className="col-lg-6 form-group col-md-6">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Country
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Singapore"
                                                        />

                                                    </div>

                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Line 1
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="1 Harvey Road #04-00"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Line 2
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Address Line 2"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Line 3
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Address Line 3"
                                                        />

                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </section>
                    <section className="basic-action-bar">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-12 mb-3 row">
                                    <div className="card">
                                        <div className="card-header bg-transparent">
                                            <h3 className="card-title"> Departments</h3>
                                            <p>Setup departments for the organisation here</p>
                                        </div>
                                        <form action="">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="form-group col-md-12">
                                                        <label
                                                            htmlFor="inputEmail4"
                                                            className="ul-form__label"
                                                        >
                                                            Department Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Sales"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">

                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Design"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">

                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Marketing"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">

                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Accountant"
                                                        />

                                                    </div>
                                                    <div className="form-group col-md-12">

                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="HR"
                                                        />

                                                    </div>
                                                    <div className="form-group col-2 col-md-12">


                                                        <button
                                                            className="btn btn-primary  border-0  my-1  btn-rounded mt-3 mb-3 "
                                                            type="submit"
                                                            style={{ backgroundColor: ' #00CDC2' }}
                                                        >
                                                            +Add Another Department
                                                        </button>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="mc-footer">
                                                    <div className="row">
                                                        <div className="col-lg-12 text-end">
                                                            {/* <button
                                                            type="button"
                                                            className="btn btn-outline-secondary m-1"
                                                        >
                                                            Cancel
                                                        </button> */}
                                                            <button
                                                                className="btn btn-primary col-1 border-1  my-1  btn-rounded mx-2 "
                                                                type="submit"
                                                                style={{ backgroundColor: ' #00CDC2' }}
                                                            >
                                                                Cancel
                                                            </button>

                                                            <button
                                                                className="btn btn-primary col-1 border-1  my-1  btn-rounded  "
                                                                type="submit"
                                                                style={{ backgroundColor: ' #00CDC2' }}
                                                            >
                                                                Submit
                                                            </button>
                                                            {/* <button
                                                            type="button"
                                                            className="btn  btn-primary m-1"
                                                        >
                                                            Submit
                                                        </button> */}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Organization;

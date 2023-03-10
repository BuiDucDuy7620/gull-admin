import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import { data } from './data'
import { Link } from "react-router-dom";

class Attendance extends Component {
    state = {
        rowsPerPage: 10,
        page: 0
    }
    render() {
        let {
            rowsPerPage,
            page
        } = this.state
        return (
            <div className="row">
                <h3 className="fw-bold">Attendance</h3>
                <div className='d-flex  mb-3'>
                    <Link className=" text-center  card mt-1  w-50" to="/interview/roles">
                        <button className="btn card  " type="submit" >Attendance Log List</button>
                    </Link>

                    <Link className=" text-center card mt-1 mx-1 w-50" to="/interview/CandidatesOverview">
                        <button className="btn card " type="submit" >Attendance Summary</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Attendance Audits</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Attendance Settings</button>
                    </Link>


                </div>
                <div className="bg-white">
                    <div className="row px-4 mt-3">
                        <div className="col-lg-3 col-sm-12 col-md-6 ">
                            <div className="d-flex align-items-center col-lg-5">
                                <span  className="fw-bold">Attendance Log List</span>

                            </div>
                        </div>
                        <div className="col-lg-2 d-flex">
                            <span >Role Type</span>
                            <select >
                                <option>all</option>
                            </select>
                        </div>
                        <div className="col-lg-2 d-flex">
                            <span >Experience</span>
                            <select >
                                <option>all</option>
                            </select>
                        </div>

                        <div className="col-lg-3 col-sm-12 col-md-6 ">
                            <div className="d-flex justify-content-lg-end align-items-center">
                                <div className="mr-1">
                                    <input
                                        type="search"
                                        className="form-control form-control-sm rounded-pill i-Magnifi-Glass1 "
                                        placeholder='Enter keywords ...'                                    // onChange={this.handleSearch}
                                        aria-controls="ul-contact-list"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <button
                                className="btn btn-primary  border-0  btn-rounded"
                                type="submit"
                                style={{ backgroundColor: ' #00CDC2' }}
                            >
                                +Add Attendance
                            </button>
                        </div>
                    </div>

                    <div className="card-body  pt-1">
                        <div className="table-responsive">
                            <table id="ul-contact-list" className="display table w-100">
                                <thead>
                                    <tr style={{ backgroundColor: "#f5f5f5" }}>
                                        <th>Attendance Log No</th>
                                        <th>Employee Name</th>

                                        <th>Check In Date</th>
                                        <th>Check In Time</th>
                                        <th>Check Out Date</th>
                                        <th>Check Out Time</th>
                                        <th>Work Hours</th>
                                        <th>Extra Working Hours</th>

                                        <th>Validity</th>

                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data
                                        .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td> {item.AttendanceLogNo}</td>
                                                <td>{item.EmployeeName}</td>
                                                <td>{item.CheckInDate}</td>
                                                <td> {item.CheckInTime}</td>
                                                <td>{item.CheckOutDate}</td>
                                                <td>{item.CheckOutTime}</td>
                                                <td> {item.WorkHours}</td>
                                                <td>{item.ExtraWorkingHours}</td>
                                                <td> {item.Validity}</td>
                                                <td className="d-flex">
                                                    <Link to="/notification/viewNotification">
                                                        <div>
                                                            <i className="i-Eye"></i>
                                                        </div>
                                                    </Link>
                                                    <Link to="/notification/viewNotification">
                                                        <div>
                                                            <img src="/assets/images/Delete.png"></img>
                                                        </div>
                                                    </Link>

                                                </td>
                                            </tr>

                                        )
                                        )}

                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-end mr-lg-4">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={Math.ceil(data.length / rowsPerPage)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination pagination-lg"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}
                            />
                        </div>
                    </div>

                </div >


            </div>
        );
    }
}

export default Attendance;

import React, { Component } from "react";
import { Breadcrumb } from "@gull";
import ReactPaginate from "react-paginate";
import { dataCandidate } from './data'
import { Link } from "react-router-dom";


class CandidatesOverview extends Component {
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
                <div className='d-flex  mb-3 '>
                    <Link to="/interview/roles"className=" text-center  card mt-1  w-50" >
                        <button className="btn card  " type="submit" >Roles</button>
                    </Link>

                    <Link className=" text-center card mt-1 mx-1 w-50" to="/interview/CandidatesOverview">
                        <button className="btn card " type="submit" >Candidates
                            Overview</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Hiring
                            Process</button>
                    </Link>
                    <Link className=" text-center card mt-1 mx-1 w-50">
                        <button className="btn card  " type="submit" >Talent
                            Pool</button>
                    </Link>


                </div>
                <div className="bg-white">
                    <div className="row px-4 mt-3">
                        <div className="col-lg-6 col-sm-12 col-md-6 ">
                            <div className="d-flex align-items-center col-lg-5">
                                <span >Candidates Overview</span>

                            </div>
                        </div>


                        <div className="col-lg-6 col-sm-12 col-md-6 ">
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

                    </div>

                    <div className="card-body  pt-1">
                        <div className="table-responsive">
                            <table id="ul-contact-list" className="display table w-100">
                                <thead>
                                    <tr style={{ backgroundColor: "#f5f5f5" }}>
                                        <th>Candidate</th>
                                        <th>Applied</th>

                                        <th>Experience</th>
                                        <th>Nationality</th>
                                        <th>Expected</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataCandidate
                                        .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                                        .map((item, index) => (
                                            <tr key={index}>
                                                <td> {item.Candidate}</td>
                                                <td>{item.Applied}</td>
                                                <td>{item.Experience}</td>
                                                <td> {item.Nationality}</td>
                                                <td>{item.Expected}</td>
                                                <td>{item.Phone}</td>
                                                <td> {item.Email}</td>
                                                
                                                <td> {item.Status}</td>
                                                <td className="text-center">
                                                  ...

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
                                pageCount={Math.ceil(dataCandidate.length / rowsPerPage)}
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

export default CandidatesOverview;

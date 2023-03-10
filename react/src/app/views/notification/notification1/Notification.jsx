import React, { Component } from 'react';
import ReactPaginate from "react-paginate";
import { data } from './data'
import { Link } from "react-router-dom";

class Notification extends Component {
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
            <div className="bg-white">
                <div className="row px-4 mt-3">
                    <div className="col-sm-12 col-md-6 mb-2">
                        <div className="d-flex align-items-center">
                            <span className="mr-1">Notification</span>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-2">
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
                                <tr style={{backgroundColor:"#f5f5f5"}}>
                                    <th>Notification Type</th>
                                    <th>Content</th>

                                    <th>Time/Date of Activity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data
                                    .slice(rowsPerPage * page, rowsPerPage * (page + 1))
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td> {item.type}</td>
                                            <td>{item.content}</td>
                                            <td>{item.date}</td>
                                            <td>
                                                <Link to="/notification/viewNotification">
                                                    <div>
                                                        <i className="i-Eye"></i>
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
        )
    }
}
export default Notification
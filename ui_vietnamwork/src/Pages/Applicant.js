import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Applicant() {
    return (
        <div>
            <div className="container">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title" style={{ background: "#437a7d" }}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Applicants</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addApplicantModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Applicant</span></a>
                                    <NavLink className="btn btn-warning" to="/"><span className="text-white">Back</span></NavLink>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>Thomas Hardy</td>
                                    <td>thomashardy@mail.com</td>
                                    <td>89 Chiaroscuro Rd, Portland, USA</td>
                                    <td>(171) 555-2222</td>
                                    <td>
                                        <a href="#editApplicantModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteApplicantModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>

                                    <td>Dominique Perrier</td>
                                    <td>dominiqueperrier@mail.com</td>
                                    <td>Obere Str. 57, Berlin, Germany</td>
                                    <td>(313) 555-5735</td>
                                    <td>
                                        <a href="#editApplicantModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteApplicantModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>

                                    <td>Maria Anders</td>
                                    <td>mariaanders@mail.com</td>
                                    <td>25, rue Lauriston, Paris, France</td>
                                    <td>(503) 555-9931</td>
                                    <td>
                                        <a href="#editApplicantModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteApplicantModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>

                                    <td>Fran Wilson</td>
                                    <td>franwilson@mail.com</td>
                                    <td>C/ Araquil, 67, Madrid, Spain</td>
                                    <td>(204) 619-5731</td>
                                    <td>
                                        <a href="#editApplicantModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteApplicantModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                                <tr>

                                    <td>Martin Blank</td>
                                    <td>martinblank@mail.com</td>
                                    <td>Via Monte Bianco 34, Turin, Italy</td>
                                    <td>(480) 631-2097</td>
                                    <td>
                                        <a href="#editApplicantModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                                        <a href="#deleteApplicantModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="addApplicantModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Applicant</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-success" defaultValue="Add" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Edit Modal HTML */}
            <div id="editApplicantModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Applicant</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <textarea className="form-control" required defaultValue={""} />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-info" defaultValue="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Delete Modal HTML */}
            <div id="deleteApplicantModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Applicant</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

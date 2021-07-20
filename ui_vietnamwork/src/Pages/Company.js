import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import dateFormat from 'date-format'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import "../App.css"
import { createCompany, deleteCompany, getCompanies, updateCompany } from '../redux/actions/CompanyAction';
export default function Company() {

    const { companiesList } = useSelector(state => state.CompanyReducer);
    const dispatch = useDispatch()

    useEffect(async () => {
        dispatch(getCompanies())
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            location: '',
            description: ''
        },
        onSubmit: values => {
            let { name, email, password, location, description } = values
            const company = {
                name, email, password, location, description
            }
            dispatch(createCompany(company))
        }
    })

    const handleDeleteCompany = (id) => {
        dispatch(deleteCompany(id))
    }

    const submitEdit = (event) => {
        event.preventDefault()
        let id = event.target.id.value
        let name = event.target.name.value;
        let email = event.target.email.value;
        let location = event.target.location.value;
        let description = event.target.description.value;
        
        dispatch(updateCompany(id, {name, email, location, description}))
    }

    const renderCompanies = () => {
        return companiesList.map((company, index) => {
            return <tr key={index}>

                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.email}</td>
                <td>{company.location}</td>
                <td>{dateFormat("dd/MM/yyyy", new Date(company.createdAt))}</td>
                <td>
                    <a href={`#editCompanyModal${company.id}`} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
                    <a href={`#deleteCompanyModal${company.id}`} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
                </td>


                {/* Edit Modal HTML */}
                <div id={`editCompanyModal${company.id}`} className="modal fade">

                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={submitEdit}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Edit Company {company.id}</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input type="text" className="form-control" name="id" disabled required defaultValue={company.id} />
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" name="name" required defaultValue={company.name} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" name="email" required defaultValue={company.email} />
                                    </div>
                                    <div className="form-group">
                                        <label>Location</label>
                                        <input className="form-control" required name="location" defaultValue={company.location} />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea type="text" className="form-control" name="description" required defaultValue={company.description} />
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
                <div id={`deleteCompanyModal${company.id}`} className="modal fade">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={() => {
                                handleDeleteCompany(company.id)
                            }}>
                                <div className="modal-header">
                                    <h4 className="modal-title">Delete Company {company.id}</h4>
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
            </tr>
        })
    }

    return (
        <div>
            <div className="container">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Companies</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addCompanyModal" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Company</span></a>
                                    <NavLink className="btn btn-warning" to="/"><span className="text-white">Back</span></NavLink>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Location</th>
                                    <th>Date Added</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCompanies()}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            {/* Add Modal HTML */}
            <div id="addCompanyModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Company</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" id="name" className="form-control" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" id="email" className="form-control" type="email" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                                <div className="form-group">
                                    <label>password</label>
                                    <input type="password" className="form-control" id="password" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                                <div className="form-group">
                                    <label>location</label>
                                    <input type="text" className="form-control" id="location" required onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                                <div className="form-group">
                                    <label>description</label>
                                    <textarea type="text" id="description" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="submit" className="btn btn-success" defaultValue="Add" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    )
}

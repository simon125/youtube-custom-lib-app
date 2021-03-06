import React from 'react'

const AddForm = ({ handleOnSubmitAddForm }) => {

    return (
        <div className="jumbotron bg-secondary text-light py-3 mt-4">
            <form onSubmit={handleOnSubmitAddForm}>
                <div className="form-group">
                    <label className="text-white" htmlFor="urlOrId">URL or ID: </label>
                    <input type="text" placeholder="Enter url or id of film..." id="urlOrId" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Search film" className="btn btn-success btn-block" />
                </div>
            </form>

        </div>
    )
}

export default AddForm
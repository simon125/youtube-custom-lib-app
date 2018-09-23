import React, { Component } from 'react'

class AddForm extends Component {





    render() {

        const { handleOnSubmitAddForm } = this.props


        return (
            <div className="jumbotron bg-secondary text-light">
                <form onSubmit={handleOnSubmitAddForm}>
                    <div className="form-group">
                        <label htmlFor="urlOrId">URL or ID: </label>
                        <input type="text" placeholder="Enter url or id of film..." id="urlOrId" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="SUBMIT" className="btn btn-success btn-lg btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}


export default AddForm
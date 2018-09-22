import React, { Component } from 'react'

class AddForm extends Component {
    render() {
        return (
            <div className="jumbotron bg-secondary">
                <form>
                    <div className="form-group">
                        <label htmlFor="pastedUrl">URL or ID: </label>
                        <input type="text" id="pastedUrl" className="form-control" />
                    </div>
                </form>
            </div>
        )
    }
}


export default AddForm
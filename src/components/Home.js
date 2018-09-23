import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/id.png'
import img2 from '../images/share.png'
import img3 from '../images/whatNext.png'

const Home = () => {
    return (
        <div>
            <div className="jumbotron bg-secondary text-center pb-2">
                <h1 className="display-4">Welcome in the online film library</h1>
                <p className="lead">With this app you can easily store your favourite youtube films</p>
                <Link to="/search" className="btn btn-info btn-lg">Let's add your first film</Link>
                <p className="lead mt-3">or</p>
                <p className="lead mt-2">Read a little more about this app</p>
            </div>


            <div className="jumbotron text-center">
                <h3>So, how to use this app?</h3>
            </div>


            <div className="row">
                <div className="col-md-6 px-0"><img src={img1} alt="" className="img-fluid" /></div>
                <div className="col-md-6">
                    <p className="lead">You can easyli saerch film by link or by id</p>
                    <div className="form-group">
                        <input type="text" readOnly value="https://www.youtube.com/watch?v=ObX3e7MfEal     or     ObX3e7MfEal" placeholder="Enter url or id of film..." id="urlOrId" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-block">Search film</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 py-5">
                    <p className="lead">You can also saerch film by sharing link</p>
                    <div className="form-group">
                        <input type="text" readOnly value="https://youtu.be/abcDEFghi_K" placeholder="Enter url or id of film..." id="urlOrId" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success btn-block">Search film</button>
                    </div></div>
                <div className="col-md-6 px-0"><img src={img2} alt="" className="img-fluid" /></div>
            </div>
            <div className="jumbotron text-center my-4">
                <h3>All right, what next?</h3>
            </div>

            <div className="row">
                <div className="col-md-6"><img src={img3} alt="" className="img-fluid" /></div>
                <div className="col-md-6">
                    <p className="lead">Now, after searching you can easyli add searched film by clicking button "YES! Add to collection"</p>
                    <button className="btn btn-success btn-block my-2">YES! Add to collection</button>

                </div>
            </div>
        </div>
    )
}

export default Home

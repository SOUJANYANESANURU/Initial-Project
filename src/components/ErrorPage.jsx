import React from "react";
import errorImage from '../assets/img/error.gif';

function ErrorPage() {

    return (
        <React.Fragment>
            <div className="container">
                <div>
                    <div className="card bg-shadow border-rounded">
                        <img className="card-img-top" alt='error' src={errorImage}></img>
                        <React.Fragment>
                            <div className="card-body bg-light border-rounded">
                                <label className="card-title text-bold font-size-16">Oops ...</label>
                                <p className="font-size-14">
                                    We are sure that this is not the page you are looking for.<br />
                                    Contact Support if it needs immediate attention.
                                </p>
                                <div className="text-right">
                                    <small>Mean while why don't you try again by going ...</small><a className="btn btn-sm btn-primary" href="/">Home</a> | <a className="btn btn-sm btn-default" href="/logout">Logout</a>
                                </div>
                            </div>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ErrorPage;
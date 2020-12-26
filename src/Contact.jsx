import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Contact = () => {
    const [cevent, uevent] = useState(
        {
            name: "",
            email: "",
            password: "",
            contact: "",
            text: "",
        }
    );
    const changeevent = (event) => {
        const { value, name } = event.target;
        uevent((prevval) => {
            return {
                ...prevval,
                [name]: value,
            }
        });
    }
    const submitevent = (event) => {
        alert(` name:${cevent.name} email:${cevent.email} pass:${cevent.password} contact no:${cevent.contact} text:${cevent.text}`)
    }
    return (
        < React.Fragment >
            <div className="mt-3" >
                <h1 className="text-center">Contact US</h1>
            </div >
            <div className="container contact_div mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={submitevent} >
                            <div className="form-group mb-3">
                                <label for="exampleInputName1">FullName</label>
                                <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Your name" name="name" value={cevent.name} onChange={changeevent} />
                                <small id="nameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="example@gmail.com" name="email" value={cevent.email} onChange={changeevent} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="must be atleast 6 charecter ." name="password" value={cevent.password} onChange={changeevent} />
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleInputPhoneNumber1">Contact Number</label>
                                <input type="number" className="form-control" id="exampleInputPhoneNumber1" placeholder="phone number" name="contact" value={cevent.contact} onChange={changeevent} />
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleFormControlTextarea1">Write Something About You</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="text" value={cevent.text} onChange={changeevent}></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label for="exampleFormControlFile1">Place your Resume here</label>
                                <br />
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <div className="form-group mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-outline-primary " >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
};

export default Contact;
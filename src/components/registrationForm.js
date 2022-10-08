import React, { useState, setState } from 'react';
import './style.css'
import { database } from '../firebase'
import { ref, push, child, update } from "firebase/database";


function RegistrationForm() {
    const [firstName, setFirstName] = useState(null);
    const [college, setCollege] = useState();
    const [department, setDepartment] = useState(null);
    const [uploadImage, setUploadImage] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "college") {
            setCollege(value);
        }
        if (id === "department") {
            setDepartment(value);
        }
        if (id === "uploadImage") {
            setUploadImage(Image);
        }

    }
    const handleSubmit = () => {
        let obj = {
            firstName: firstName,
            college: college,
            department: department,
            uploadImage: uploadImage,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }
    return (
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                </div>

                <div className="college">
                    <label className="form__label" for="college">College </label>
                    <input type="college" id="college" className="form__input" value={college} onChange={(e) => handleInputChange(e)} placeholder="college" />
                </div>
                <div className="department">
                    <label className="form__label" for="department">department </label>
                    <input type="department" id="department" className="form__input" value={department} onChange={(e) => handleInputChange(e)} placeholder="department" />
                </div>
                <div className="uploadImage">
                    <label className="form__label" for="uploadImage">uploadImage </label>
                    <img src="blank-img.png" alt="" type="image"></img>
                    <input className="form__input" type="aria-label" id="image" placeholder="image" />
                </div>
            </div>
            <div class="footer">
                <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>

    )
}
export default RegistrationForm;
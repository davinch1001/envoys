import React from 'react';

import './form.css'
import iconUpload from '../../img/icons-upload.png'
import {getUserData} from "../../redux/reducers/getData";
import {useDispatch} from "react-redux";


const Form = () => {

    const dispatch = useDispatch()

    const userData = (e) => {
        e.preventDefault()
        dispatch(getUserData(e.target.children[2].children[0].value,e.target.children[2].children[1].value,e.target.children[2].children[2].value,e.target.children[2].children[3].value, e.target.children[2].children[4].value ))
        console.log('===>',e.target.children[2].children[4].value)
    }

    return (
        <form onSubmit={userData} className='form'>

            <div className="switch-btns">
                <button className="my-kyc btns "><p>My KYC</p></button>
                <button className="buisness btns"><p>Buisness</p></button>
            </div>
             <h1 className='title'>Enter basic information</h1>

            <div className="inputs-block">

                <select id='select'  className="input">
                <option value="Russia">Russia</option>
                <option value="Ukraine">Ukraine</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                </select>
                <input type="text" placeholder='Full name' className="input"/>
                <select type="text" name='Full name' className="input">
                    <option value="Passport">Passport</option>
                    <option value="Driver Lisence">Driver</option>
                </select>
                <input type="number" placeholder='Enter your number ID' className="input"/>
                <div className="input">
                    <input type="file" placeholder='Upload Front side card photo' className="hide" id="front"/>
                    <p className='label-align'>Upload Front side card photo</p>
                    <label className='label-align' htmlFor="front"><img  src={iconUpload} alt="err"/></label>
                </div>
                <div className="input">
                    <input type="file" placeholder='Upload Back side card photo' className="hide" id="back"/>
                    <p className='label-align'>Upload Front side card photo</p>
                    <label className='label-align' htmlFor="back"><img  src={iconUpload} alt="err"/></label>
                </div>
            </div>

            <h2 className='title'>Confirm basic information</h2>

            <div className="b-information">
                <div className="id">You ID Envoys Vision: <b>{Math.round(Math.random() * 10000000)}</b></div>
                <div className="input">
                    <input type="file" placeholder='Passport self holding' className="hide" id="self"/>
                    <p className='label-align'>Upload Front side card photo</p>
                    <label className='label-align' htmlFor="self"><img  src={iconUpload} alt="err"/></label>
                </div>
            </div>

            <div className="info-block">
              <p>
                  The image file format must be jpg or png, the file size cannot exceed 4 MB. The face must be clearly visible! The note must be clearly legible! The passport must be clearly legible 3. Please upload photos of materials in strict accordance with the requirements, otherwise
                  your certification will not pass the audit, save your precious time!
              </p>
            </div>
            <button type='submit' className="send-info">
                Confirm and send
            </button>
        </form>
    );
};

export default Form;
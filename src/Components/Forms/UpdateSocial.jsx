import React, { useState } from 'react'
import Baseurl from '../SourceFiles/Baseurl'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect } from 'react';


toast.configure()
const UpdateSocial = () => {

    const [fieldStatus, setFieldStatus] = useState(false)
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [snapchat, setSnapchat] = useState('')
    const [telegram, setTelegram] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [skype, setSkype] = useState('')
    const [pinterest, setPintrest] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')
    const [stackoverflow, setStackOverflow] = useState('')
    const [userID, setUserID] = useState()

    const SetLocalLogin = async () => {
        try {
            let user = await localStorage.getItem('user');
            let parsed_user = JSON.parse(user)
            if (parsed_user) {
                fetchData(parsed_user.id);
                setUserID(parsed_user.id)
            }
        } catch {
            return null;
        }
    }

    const submitData = () => {

        const userData = {
            facebook: facebook,
            snapchat: snapchat,
            instagram: instagram,
            telegram: telegram,
            twitter: twitter,
            tiktok: tiktok,
            github: github,
            skype: skype,
            stackoverflow: stackoverflow,
            linkedin: linkedin,
            gmail: email,
            printest: pinterest
        }
        axios.post(`${Baseurl}updatesocials/${userID}`, userData)
            .then((res) => {
                console.log(res)
                toast.info("Data successfully updated")
                setInterval(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch((error) => {
                console.log(error)
                toast.warn('Error while updating data');
            })
    }

    const fetchData = (ID) => {
        var formdata = new FormData();
        formdata.append("user_id", ID);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Baseurl}showsocials`, requestOptions)
            .then(response => response.json())
            .then(result => {

                setFacebook(result.data[0].facebook)
                setInstagram(result.data[0].instagram)
                setTwitter(result.data[0].twitter)
                setSnapchat(result.data[0].snapchat)
                setTelegram(result.data[0].telegram)
                setTiktok(result.data[0].tiktok)
                setSkype(result.data[0].skype)
                setPintrest(result.data[0].printest)
                setEmail(result.data[0].gmail)
                setLinkedin(result.data[0].linkedin)
                setGithub(result.data[0].github)
                stackoverflow(result.data[0].stackoverflow)

                console.log(result)
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        SetLocalLogin()
    }, [])

    return (
            <div className='content-wrapper'>
        <div className='content-header'>
            <div className='container-fluid'>

                <h3 className='mb-5'><b> UPDATE YOUR SOCIAL INFORMATION:</b></h3>

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-facebook mt-1" />&nbsp;
                            <input value={facebook} type="text" onChange={(e) => setFacebook(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-instagram mt-1" />&nbsp;
                            <input value={instagram} type="text" onChange={(e) => setInstagram(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-twitter mt-1" />&nbsp;
                            <input value={twitter} type="text" onChange={(e) => setTwitter(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-snapchat mt-1" />&nbsp;
                            <input defaultValue={snapchat} type="text" onChange={(e) => setSnapchat(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3' >
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-telegram mt-1" />&nbsp;
                            <input value={telegram} type="text" onChange={(e) => setTelegram(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-tiktok mt-1" />&nbsp;
                            <input value={tiktok} type="text" onChange={(e) => setTiktok(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-skype mt-1" />&nbsp;
                            <input value={skype} type="text" onChange={(e) => setSkype(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-pinterest-p mt-1" />&nbsp;
                            <input value={pinterest} type="text" onChange={(e) => setPintrest(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-at mt-1" />&nbsp;
                            <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-linkedin mt-1" />&nbsp;
                            <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-github mt-1" />&nbsp;
                            <input value={github} type="text" onChange={(e) => setGithub(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="mb-3 d-flex">
                            <i className="fa-brands fa-2x fa-stack-overflow mt-1" />&nbsp;
                            <input value={stackoverflow} type="text" onChange={(e) => setStackOverflow(e.target.value)} className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                    </div>
                </div>


                <button onClick={submitData} type="submit" className="btn btn-primary">Submit</button>
            </div>

        </div>
        </div>
    )
}

export default UpdateSocial
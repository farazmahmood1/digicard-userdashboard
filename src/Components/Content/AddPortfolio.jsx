import React, { useState } from 'react'
import Baseurl from '../SourceFiles/Baseurl'
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react'
import allImagesUrl from '../SourceFiles/BaseUrlImage'

toast.configure()
const AddPortfolio = () => {

    const [file, setFile] = useState('');
    const [data, setData] = useState([])
    const [roleID, setUserID] = useState()
    const [loader, setLoader] = useState(false)

    const SetLocalLogin = async () => {
        try {
            let user = await localStorage.getItem('user');
            let parsed_user = JSON.parse(user)
            if (parsed_user) {
                getCollection(parsed_user.id)
                setUserID(parsed_user.id)
            }
        } catch {
            return null;
        }
    }

    const postCollection = () => {
        if (!file) {
            toast.warn('Please select a file')
        }
        else {
            var formdata = new FormData();
            formdata.append("image", file, "[PROXY]");
            formdata.append("user_id", roleID);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow',
            };

            fetch(`${Baseurl}post_image`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    toast.info('Image uploaded successfully')
                    console.log(result)
                    setInterval(() => {
                        window.location.reload();
                    }, 1500);
                })
                .catch(error => {
                    toast.warn('Error while uploading image')
                    console.log('error', error)
                });
        }
    }

    const getCollection = (ID) => {
        setLoader(true)
        axios.get(`${Baseurl}get_image/${ID}`)
            .then((res) => {
                console.log(res.data.Data)
                setData(res.data.Data)
                setLoader(false);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteImage = (id) => {
        axios.post(`${Baseurl}delete_image/${id}`)
            .then((res) => {
                console.log(res)
                toast.warn('Image deleted successfully')
                setInterval(() => {
                    window.location.reload()
                }, 1500);
            })
            .catch((err) => {
                console.log(err)
                toast.error('Error while deleting image')
            })
    }

    useEffect(() => {
        SetLocalLogin();
    }, [])

    return (
        <div className='content-wrapper '>
            <div className='content-header'>
                <div className='container-fluid'>
                <div className='card cardBorder'>
                    <div className='card-body'>
                        <h2>Add your images for the portfolio from here:</h2>
                        <div className='fileuploader'>
                            <label htmlFor="formFileLg" className="form-label">Add your portfolio images from here;</label>
                            <input onChange={(e) => setFile(e.target.files[0])} className="form-control form-control-lg" id="formFileLg" type="file" />
                            <button className="btn btn-primary mt-2 ms-2" onClick={postCollection}>Upload</button>
                        </div>
                    </div>
                </div>
                <div className='card cardBorder mt-3'>
                    <div className="card-body">
                        <h2>Delete your portfolio images:</h2>
                        <div className="portfolioImages">
                            <div className='row'>
                                {
                                    loader === true ?
                                        <>
                                            <div className='d-flex justify-content-center' style={{ marginTop: '130px' }}>
                                                <div className='position-absolute top-50 start-50 translate-middle'>
                                                    <div className="loader">Loading...</div>
                                                </div>
                                            </div>

                                        </> :
                                        <>
                                            <div  className='col-lg-12'>
                                        {
                                        data.map((items, index) => {
                                            return (
                                                <>
                                                        <div key={index} className="card" style={{ backgroundColor: '#7DA0FA', borderRadius: '3px' }}>
                                                            <img src={`${allImagesUrl.itemImage}${items.image}`} style={{ height: '200px' }} className="card-img-top" alt="..." />
                                                            <div className="card-body ">
                                                                {/* <h5 className="card-title"> title</h5> */}
                                                                <a onClick={() => deleteImage(items.id)} className="btn btn-danger">Delete</a>
                                                            </div>
                                                        </div>
                                                </>
                                            )
                                        })
                                    }
                                        </div>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPortfolio
import React from 'react'
import { Link } from 'react-router-dom'

const AccountUpdate = () => {
    return (

        <div className='content-wrapper '>
            <div className='content-header'>
                <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 mt-3' >
                        <Link to='/UpdatePersonal' className='card cards ' >
                            <div className='card-body card-home' style={{ backgroundColor: "#7DA0FA" }}>
                                <h3 className='centertext text-white' >Update All Personal</h3>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-6 mt-3'>
                        <Link to='/UpdateSocial' className='card cards'>
                            <div className='card-body card-home' style={{ backgroundColor: "#4747A1" }}>
                                <h3 className='centertext text-white'>Update All Social</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default AccountUpdate
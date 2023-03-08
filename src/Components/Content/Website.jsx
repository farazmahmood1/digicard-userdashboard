import React from 'react'

const Website = () => {
  return (
    <div className=''>
      <div className=''>
        <section className="muse-section">
          <div className="bg-gray-800 position-relative overflow-hidden rounded-12">
            <div className="row mb-0 mb-mb-5 mb-lg-0">
              <div className="col-md-6">
                <div className="p-4 p-md-5">
                  <h2 className="h1 pt-lg-5 pl-xl-4">Start your 30 day free trial.</h2>
                  <div className="my-4 pl-xl-4">
                    <a href="javascript:void(0);" className="btn btn-xl btn-danger rounded-pill">Sign up</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-auto">
                <div className="text-right mt-md-5 pt-md-5">
                  <img src="../assets/img/templates/start-trial.jpg" className="img-fluid rounded-top-left" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Website
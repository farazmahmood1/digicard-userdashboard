import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Baseurl from "../SourceFiles/Baseurl";

const SeeNews = () => {
  const [userData, setUserData] = useState([]);
  const [loader, setLoader] = useState(false);

  const recieveData = () => {
    setLoader(true);
    axios
      .get(`${Baseurl}fetchNews`)
      .then((res) => {
        setLoader(false);
        setUserData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    recieveData();
  }, []);

  return (
    <>
      {loader === true ? (
        <>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="d-flex justify-content-center">
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <div className="loader">Loading...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container-fluid">
                <div className="mt-3 mb-4">
                  <h3 className="ms-3">
                    <b> WHAT'S NEW</b>
                  </h3>
                </div>
                {userData.map((items) => {
                  return (
                    <>
                      <div id="faq" className="w-100 accordion">
                        <div className="">
                          <ul className="mt-2 mb-3">
                            <li>
                              <input type="checkbox" defaultChecked />
                              <i className="fa-sharp fa-solid fa-arrow-down accordionIcon" />
                              <div class="ribbon">
                                <span class="ribbon__content">new</span>
                              </div>
                              <i />
                              <h2
                                className="accordion-header"
                                style={{ color: "#4169e1" }}
                              >
                                <div className="accordionTitle">
                                  {items.title}
                                </div>
                              </h2>
                              <p>
                                <td
                                  className="p-4"
                                  dangerouslySetInnerHTML={{
                                    __html: items.body,
                                  }}
                                />
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SeeNews;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from 'react';



const Footer = () => {
    return (
      <div className="bg-yellow-400 py-12 text-white">
        <div className="container">
          <div className="row">
            <div className=" col-12 col-md-6 order-lg-0  order-md-1 col-lg-4">
              <img
                className="mx-sm-auto mx-md-1"
                height={80}
                width={180}
                src={
                  "http://themes.potenzaglobalsolutions.com/html/cardealer/images/logo-dark.png"
                }
                alt=""
              />
              <p className="pt-lg-5 pt-md-3 text-sm-center text-md-start">
                Delivering cars between dealer sites and depots, we cover
                everything right the way through to delivery including handover
                to the customer.
              </p>
              <div>
                <p className=" text-sm-center text-md-start">
                  <FontAwesomeIcon className="pr-3" icon={faLocationDot} /> 220E
                  Front St. Burlington NC 27215
                </p>
                <p className=" text-sm-center text-md-start">
                  <FontAwesomeIcon className="pr-3" icon={faPhone} /> (007) 123
                  456 7890
                </p>
                <p className=" text-sm-center text-md-start">
                  <FontAwesomeIcon className="pr-3" icon={faEnvelope} />{" "}
                  support@website.com
                </p>
              </div>
            </div>
            <div className=" col-12 col-md-12 order-lg-1 order-md-0 col-lg-4">
              <h4 className="text-sm-center text-md-center text-lg-start">
                FOLLOW US
              </h4>
              <div className="pt-lg-5 pt-md-2 mb-md-4 font-medium d-md-flex flex-lg-column justify-center">
                <p className="hover:cursor-pointer mx-md-3 text-sm-center text-md-start">
                  <FontAwesomeIcon className="pr-3 " icon={faFacebook} />{" "}
                  Facebook
                </p>
                <p className="hover:cursor-pointer mx-md-3 text-sm-center text-md-start">
                  <FontAwesomeIcon className="pr-3 " icon={faTwitter} /> Twitter
                </p>
                <p className="hover:cursor-pointer mx-md-3 text-sm-center text-md-start">
                  <FontAwesomeIcon className="pr-3" icon={faGithub} /> Github
                </p>
                <p className="hover:cursor-pointer mx-md-3 text-sm-center text-md-start">
                  <FontAwesomeIcon className="pr-3" icon={faLinkedin} />{" "}
                  Linkedin
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-lg-2 order-md-2 col-lg-4">
              <h4 className="text-sm-center text-md-start">
                SUBSCRIBE OUR NEWSLETTER
              </h4>
              <p className="pt-lg-5 pt-md-2 text-sm-center text-md-start ">
                Keep up on our always evolving products features and technology.
                Enter your e-mail and subscribe to our newsletter.
              </p>
              <div className="mt-4">
                {" "}
                <input
                  className="py-2 px-2 mx-auto w-sm-100 d-sm-block d-md-inline m-3 focus:outline-none w-64 focus:bg-slate-200 rounded"
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Your Email"
                />{" "}
                <button
                  className="bg-red-600 d-block d-md-inline mx-md-1 mx-auto px-3 py-2 rounded font-medium  "
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;
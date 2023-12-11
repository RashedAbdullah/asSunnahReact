import React from 'react';
import './Contact.css';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhoneMissedCall } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";


const Contact = () => {
  return (
    <div className='mainContactBox'>
      <div>
        <div className="contactHeadline">
          <h3 className='projectHead animate__animated animate__flipInX'>Let's Talk</h3>
        </div>
        <div className="formAndConcatBox">

            <div className="formbox animate__animated animate__fadeInUp">
                <form action="">
                    <div><span><FaRegUser /></span><input type="text" placeholder='Your name'/></div>
                    <div><span><MdOutlineEmail /></span><input type="email" placeholder='Your email'/></div>
                    <div><span><MdAddCall /></span><input type="number" placeholder='Phone number'/></div>
                    <div className='msgBox'><p><span><LuMessageCircle /></span> Message</p></div>
                    <div><textarea name="" id="" cols="30" rows="5"></textarea></div>
                    <div><button>Submit</button></div>
                </form>
            </div>

            <div className="ContactBox animate__animated animate__fadeInUp">

                <div><p>i'm open for any suggestion or just to have a chat</p></div>
                <div className="address">
                  <p><span className="locationIcon"><FaLocationDot /></span> Feni, Bangladesh</p>
                </div>

                <div className="mail">
                  <p><span className="mailIcon"><FaTelegramPlane /></span> abdulahad4rashed@gmail.com</p>
                </div>

                <div className="phone">
                  <p><span className="phoneIcon"><HiPhoneMissedCall /></span> +8801603443214</p>
                </div>

                <div className="mail">
                  <p><span className="mailIcon"><TiWorld /></span> rashedabdullah.com</p>
                </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
import React from 'react';
import './Contact.css';
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";


const Contact = () => {
  return (
    <div className='mainContactBoxD'>
      <div>
        <div className="contactHeadline">
          <h3>Let's Talk</h3>
        </div>
        <div className="formAndConcatBox">

            <div className="formbox">
              <form action="">
                <div><span><FaRegUser /></span><input type="text" placeholder='Your name'/></div>
                <div><span><MdOutlineEmail /></span><input type="email" placeholder='Your email'/></div>
                <div><span><MdAddCall /></span><input type="number" placeholder='Phone number'/></div>
                <div><p><span><LuMessageCircle /></span>Message</p></div>
                <div><textarea name="" id="" cols="30" rows="10"></textarea></div>
                <div><button>Cencel</button><button>Submit</button></div>
              </form>
            </div>

            <div className="ContactBox">

                <div className="address">
                  <p><span className="locationIcon"></span> Feni, Bangladesh</p>
                </div>

                <div className="mail">
                  <p><span className="mailIcon"></span> abdulahad4rashed@gmail.com</p>
                </div>

                <div className="phone">
                  <p><span className="phoneIcon"></span> 01603443214</p>
                </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
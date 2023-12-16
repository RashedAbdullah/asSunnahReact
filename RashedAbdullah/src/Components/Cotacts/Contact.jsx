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
import { useTranslation } from 'react-i18next';


const Contact = () => {

  const { t } = useTranslation();

  return (
    <div className='mainContactBox'>
      <div>
        <div className="contactHeadline">
          <h3 className='projectHead animate__animated animate__flipInX'>{t("talk")}</h3>
        </div>
        <div className="formAndConcatBox">

            <div className="formbox animate__animated animate__fadeInUp">
                <form action="">
                    <div><span><FaRegUser /></span><input type="text" placeholder={t("palcename")}/></div>
                    <div><span><MdOutlineEmail /></span><input type="email" placeholder={t("placeMail")}/></div>
                    <div><span><MdAddCall /></span><input type="number" placeholder={t("placePhone")}/></div>
                    <div className='msgBox'><p><span><LuMessageCircle /></span> {t("msg")}</p></div>
                    <div><textarea name="" id="" cols="30" rows="5"></textarea></div>
                    <div><button>{t("submit")}</button></div>
                </form>
            </div>

            <div className="ContactBox animate__animated animate__fadeInUp">

                <div><p>{t("suggestion")}</p></div>
                <div className="address">
                  <p><span className="locationIcon"><FaLocationDot /></span> {t("address")}</p>
                </div>

                <div className="mail">
                  <p><span className="mailIcon"><FaTelegramPlane /></span> {t("mail")}</p>
                </div>

                <div className="phone">
                  <p><span className="phoneIcon"><HiPhoneMissedCall /></span> {t("phone")}</p>
                </div>

                <div className="mail">
                  <p><span className="mailIcon"><TiWorld /></span> {t("website")}</p>
                </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
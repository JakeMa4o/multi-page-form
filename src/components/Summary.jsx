/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import { setTotal } from "../features/global/globalSlice";
import { setSection } from "../features/global/globalSlice";
import thankYou from "../assets/images/icon-thank-you.svg";

import { motion } from "framer-motion";
import Buttons from "./Buttons";
import { useEffect } from "react";

const Summary = () => {
  const dispatch = useDispatch();

  const isCompleted = useSelector(state => state.global.isCompleted);
  const section = useSelector(state => state.global.section);

  const plans = useSelector((state) => state.plans);
  const addOns = useSelector((state) => state.addOns);
  const yearly = useSelector((state) => state.plans.yearly);
  const total = useSelector((state) => state.global.total);

  useEffect(() => {
    dispatch(setTotal(yearly ? 10 * (plans[plans.plan] + (addOns.online.bool ? addOns.online.price : 0) + (addOns.storage.bool ? addOns.storage.price : 0) + (addOns.profile.bool ? addOns.profile.price : 0)) : (plans[plans.plan] + (addOns.online.bool ? addOns.online.price : 0) + (addOns.storage.bool ? addOns.storage.price : 0) + (addOns.profile.bool ? addOns.profile.price : 0))))
  }, [])


  const changePlan = () => {
    dispatch(setSection(1));
  }

  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="body"
      >
        <div className="summary">
          {isCompleted ?
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="thankyou">
              <img src={thankYou} alt="tahnkyou" style={{ stroke: "orange" }} width="60px" height="60px" />
              <h2>Thank you!</h2>
              <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loregaming.com</p>
            </motion.div> :
            <div className="summary-details">
              <h1>Finishing up</h1>
              <p>Double check everything looks OK before confirming.</p>
              <div className="summary-info">
                <div className="summary-plan-container">
                  {plans.plan === "arcade" &&
                    <div className="summary-plan">
                      <div className="summary-plan__plan-details">
                        <p>Arcade {yearly ? <span>(Yearly)</span> : <span>(Monthly)</span>}</p>
                        <span className="change-plan" onClick={() => changePlan()}>Change</span>
                      </div>
                      <div className="summary-plan__price">
                        <span>${yearly ? plans.arcade * 10 : plans.arcade}</span>/<span>{yearly ? "yr" : "mo"}</span>
                      </div>
                    </div>
                  }
                  {plans.plan === "advanced" &&
                    <div className="summary-plan">
                      <div className="summary-plan__plan-details">
                        <p>Advanced {yearly ? <span>(yearly)</span> : <span>(monthly)</span>}</p>
                        <span className="change-plan" onClick={() => changePlan()}>Change</span>
                      </div>
                      <div className="summary-plan__price">
                        <span>${yearly ? plans.advanced * 10 : plans.advanced}</span>/<span>{yearly ? "yr" : "mo"}</span>
                      </div>
                    </div>
                  }
                  {plans.plan === "pro" &&
                    <div className="summary-plan">
                      <div className="summary-plan__plan-details">
                        <p>Pro {yearly ? <span>(yearly)</span> : <span>(monthly)</span>}</p>
                        <span className="change-plan" onClick={() => changePlan()}>Change</span>
                      </div>
                      <div className="summary-plan__price">
                        <span>${yearly ? plans.pro * 10 : plans.pro}</span>/<span>{yearly ? "yr" : "mo"}</span>
                      </div>
                    </div>
                  }
                </div>
                <div className="summary-add-ons">

                  {addOns.online.bool &&
                    <div className="summary-add-ons__details">
                      <p>Online services</p>
                      <div className="summary-add-ons__price">
                        <span>+${yearly ? 10 * addOns.online.price : addOns.online.price}</span>/<span>{yearly ? "yr" : "mo"}</span>
                      </div>
                    </div>
                  }

                  {addOns.storage.bool &&
                    <div className="summary-add-ons__details">
                      <p>Larger storage </p>
                      <div className="summary-add-ons__price">
                        <span>+${yearly ? 10 * addOns.storage.price : addOns.storage.price}</span>/<span>{yearly ? "yr" : "mo"}</span>
                      </div>
                    </div>
                  }
                  {
                    addOns.profile.bool &&
                    <div className="summary-add-ons__details">
                      <p>Custom profile </p>
                      <div className="summary-add-ons__price">
                        <span>+${yearly ? 10 * addOns.profile.price : addOns.profile.price}</span>/<span>{yearly ? "yr" : "mo"}</span>
                      </div>
                    </div>
                  }
                </div>
              </div>
              <p className="summary-total"><span className="total-string">Total({yearly ? "per year" : "per month"})</span> <span className="total-price">+${total}/<span>{yearly ? "yr" : "mo"}</span></span></p>
            </div>}
        </div>
      </motion.div>
      {!isCompleted &&
        <div className="buttons-container">
          <Buttons className="confirm-btn" section={section} text="Confirm" changeOption="confirm" />
        </div>
      }
    </>
  )
}

export default Summary
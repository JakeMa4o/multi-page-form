import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

import { useSelector, useDispatch } from "react-redux";
import { setPlan, setYearly } from "../features/plans/plansSlice";

import { motion } from "framer-motion";
import Buttons from "./Buttons";

const Plans = () => {
  const isCompleted = useSelector(state => state.global.isCompleted);
  const section = useSelector(state => state.global.section);

  const dispatch = useDispatch();

  const plan = useSelector((state) => state.plans.plan);
  const yearly = useSelector((state) => state.plans.yearly);

  const chosePlan = (plan) => {
    dispatch(setPlan(plan));
  }

  const toggleSwitch = () => {
    dispatch(setYearly());
  }

  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="body"
      >
        <h1>Select your plan</h1>
        <p>You have options of monthly or yearly billing</p>
        <div className="plans">
          <div className={plan === "arcade" ? "active plan" : "plan"} onClick={() => chosePlan("arcade")}>
            <div className="plan-img">
              <img loading="lazy" src={arcade} alt="arcade" />
            </div>
            <div className="plan-info">
              <h3>Arcade</h3>
              {<span className={yearly ? "price yearly" : "price monthly"}>{yearly ? "$90/yr" : "$9/mo"}</span>}
              {yearly && <span className="free-months">2months free</span>}
            </div>
          </div>
          <div className={plan === "advanced" ? "active plan" : "plan"} onClick={() => chosePlan("advanced")}>
            <div className="plan-img">
              <img loading="lazy" src={advanced} alt="advanced" />
            </div>
            <div className="plan-info">
              <h3>Advanced</h3>
              {<span className={yearly ? "price yearly" : "price monthly"}>{yearly ? "$120/yr" : "$12/mo"}</span>}
              {yearly && <span className="free-months">2months free</span>}
            </div>
          </div>
          <div className={plan === "pro" ? "active plan" : "plan"} onClick={() => chosePlan("pro")}>
            <div className="plan-img">
              <img loading="lazy" src={pro} alt="pro" />
            </div>
            <div className="plan-info">
              <h3>Pro</h3>
              {<span className={yearly ? "price yearly" : "price monthly"}>{yearly ? "$150/yr" : "$15/mo"}</span>}
              {yearly && <span className="free-months">2months free</span>}
            </div>
          </div>
        </div>
        <div className="switch-container" onClick={() => toggleSwitch()}>
          <span className={!yearly && "bold"}>Monthly</span>
          <div className="switch">
            <div className={yearly ? "yearly circle" : "circle"}></div>
          </div>
          <span className={yearly && "bold"}>Yearly</span>
        </div>
      </motion.div >
      {!isCompleted &&
        <div className="buttons-container">
          <Buttons className="prev-btn" section={section} text="go back" changeOption="prevSection" />
          <Buttons className="next-btn" section={section} text="Next step" changeOption="nextSection" />
        </div>
      }
    </>
  )
}

export default Plans
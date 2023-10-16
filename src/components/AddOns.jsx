import { useSelector, useDispatch } from "react-redux";
import { setOnline, setStorage, setProfile } from "../features/add-ons/addOnsSlice";

import { motion } from "framer-motion";
import Buttons from "./Buttons";

const AddOns = () => {
  const isCompleted = useSelector(state => state.global.isCompleted);
  const section = useSelector(state => state.global.section);


  const dispatch = useDispatch();
  const addOns = useSelector((state) => state.addOns);
  const yearly = useSelector((state) => state.plans.yearly);

  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="body"
      >
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="add-ons">
          <div className={addOns.online.bool ? "active option" : "option"}>
            <div className="check-box">
              <input type="checkbox" checked={addOns.online.bool} onChange={(e) => dispatch(setOnline(e.target.checked))} />
            </div>
            <div className="option-info">
              <h3>Online service</h3>
              <span>Access to multiplayer games</span>
            </div>
            <span className="price">{yearly ? "+$10/yr" : "+$1/mo"}</span>
          </div>
          <div className={addOns.storage.bool ? "active option" : "option"}>
            <div className="check-box">
              <input type="checkbox" checked={addOns.storage.bool} onChange={(e) => dispatch(setStorage(e.target.checked))} />
            </div>
            <div className="option-info">
              <h3>Larger storage</h3>
              <span>Extra 1TB of cloud save</span>
            </div>
            <span className="price">{yearly ? "+$20/yr" : "+$2/mo"}</span>
          </div>
          <div className={addOns.profile.bool ? "active option" : "option"}>
            <div className="check-box">
              <input type="checkbox" checked={addOns.profile.bool} onChange={(e) => dispatch(setProfile(e.target.checked))} />
            </div>
            <div className="option-info">
              <h3>Customizable profile</h3>
              <span>Custom theme on your profile</span>
            </div>
            <span className="price">{yearly ? "+$20/yr" : "+$2/mo"}</span>
          </div>
        </div>
      </motion.div>
      {!isCompleted &&
        <div className="buttons-container">
          <Buttons className="prev-btn" section={section} text="go back" changeOption="prevSection" />
          <Buttons className="next-btn" section={section} text="Next step" changeOption="nextSection" />
        </div>
      }
    </>
  )
}

export default AddOns
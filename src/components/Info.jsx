// import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPhone, setIsFilled } from "../features/formInfo/formInfoSlice";

import Buttons from "./Buttons";

import { motion } from "framer-motion";
import { setSection } from "../features/global/globalSlice";

const Info = () => {
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  const dispatch = useDispatch();
  const formInfo = useSelector((state) => state.formInfo);

  const isCompleted = useSelector(state => state.global.isCompleted);
  const section = useSelector(state => state.global.section);


  function formSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    dispatch(setName(e.target.name.value));
    dispatch(setEmail(e.target.mail.value));
    dispatch(setPhone(e.target.phone.value));
    dispatch(setSection(1));
  }

  formInfo.name !== "" && formInfo.email !== "" && formInfo.phone !== "" && dispatch(setIsFilled(true))

  console.log(formInfo)

  return (
    <form action="" onSubmit={formSubmit}>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="body"
      >
        <h1>Personal Info</h1>
        <p>Please provide your name, email adress and phone number.</p>
        <div className="form">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="e.g. Stephen King" value={formInfo.name} onChange={(e) => dispatch(setName(e.target.value))} required />
          <label htmlFor="mail">Email Address</label><br />
          <input id="mail" name="mail" type="email" placeholder="e.g. stephenking@lorem.com" value={formInfo.email} onChange={(e) => dispatch(setEmail(e.target.value))} required />
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="number" placeholder="e.g. +1 234 567 890" value={formInfo.phone} onChange={(e) => dispatch(setPhone(e.target.value))} required />
        </div>
      </motion.div>
      {!isCompleted &&
        <div className="buttons-container">
          <Buttons className={"next-btn"} type={"sumbit"} section={section} text="Next step" />
        </div>
      }
    </form>
  )
}

export default Info
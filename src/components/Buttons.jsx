/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

import { goNextSection, goPrevSection, setIsCompleted } from "../features/global/globalSlice";

const Buttons = ({ text, className, section, type, changeOption }) => {

    const dispatch = useDispatch();

    const changeSection = () => {
        switch (changeOption) {
            case "prevSection":
                if (section === 0) {
                    return
                }
                dispatch(goPrevSection())
                break;
                
            case "nextSection":
                if (section === 3) {
                    return
                }
                dispatch(goNextSection())
                break;

            case "confirm":
                console.log("Confirmed");
                dispatch(setIsCompleted());
                break;
        }
    }

    return (
        <button type={type} className={className} onClick={() => changeSection()}>{text}</button>
    )
}

export default Buttons
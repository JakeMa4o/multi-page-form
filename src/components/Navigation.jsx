/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { setSection } from "../features/global/globalSlice";

const Navigation = () => {
    const dispatch = useDispatch();
    
    const section = useSelector(state => state.global.section);
    const isCompleted = useSelector(state => state.global.isCompleted);
    const isFilled = useSelector(state => state.formInfo.isFilled);

    const tab = (index) => {
        if( isFilled && !isCompleted) {
            dispatch(setSection(index));
        }
    }


    return (
        <nav className='nav'>
            <ul>
                <li className={section === 0 ? "active link" : "link"} onClick={() => tab(0)}>
                    <div className='number'>1</div>
                    <div className='link-details'>
                        <span className="step">step1</span>
                        <span className="step-name">Your Info</span>
                    </div>
                </li>
                <li className={section === 1 ? "active link" : "link"} onClick={() => tab(1)}>
                    <div className='number'>2</div>
                    <div className='link-details'>
                        <span className="step">step2</span>
                        <span className="step-name">Select Plan</span>
                    </div>
                </li>
                <li className={section === 2 ? "active link" : "link"} onClick={() => tab(2)}>
                    <div className='number'>3</div>
                    <div className='link-details'>
                        <span className="step">step3</span>
                        <span className="step-name">Add-ons</span>
                    </div>
                </li>
                <li className={section === 3 ? "active link" : "link"} onClick={() => tab(3)}>
                    <div className='number'>4</div>
                    <div className='link-details'>
                        <span className="step">step4</span>
                        <span className="step-name">Summary</span>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
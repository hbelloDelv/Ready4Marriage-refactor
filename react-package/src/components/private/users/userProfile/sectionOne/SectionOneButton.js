import React from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

function SectionOneButton() {
    return (
        <div className="sectionOneButton">
           <button type="submit" className="btn btn-primary w-100 colorBtnRequestAcess"><Link> <FaEye className="requesAccessIcon"/>Request access </Link></button>
        </div>
    )
}

export default SectionOneButton

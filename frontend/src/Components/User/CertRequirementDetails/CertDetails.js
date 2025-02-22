import React, { useEffect, useState } from "react";
import "./CertDetails.css";
import { getCertificateDetails } from "../../../Services/userApi";
import { useNavigate, useParams } from "react-router-dom";
function CertDetails() {
    const navigate = useNavigate();
    const [requirements, setRequirements] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getCertificateDetails(id).then((res) => {
            if (res.data.status) {
                setRequirements(res.data.requirements);
            }
        });
    }, [id]);

    return (
        <div className="mainDivCertDetails">
            <div>
                <div>
                    <p className="requireList">Required Details:</p>
                    <ul>{requirements && requirements.map((requirement, i) => <li key={i}>{requirement}</li>)}</ul>
                </div>
                <button
                    className="ApplyBtn"
                    onClick={() => {
                        navigate(`/Marriage`);
                    }}
                >
                    Apply
                </button>
            </div>
        </div>
    );
}

export default CertDetails;

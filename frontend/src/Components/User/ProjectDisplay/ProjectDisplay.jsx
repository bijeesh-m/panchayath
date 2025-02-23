import React, { useEffect, useState } from "react";
import "./ProjectDisplay.css";
import { getAllProjects } from "../../../Services/userApi";

function ProjectDisplay() {
    const [project, setProject] = useState([]);

    useEffect(() => {
        getAllProjects().then((res) => {
            console.log(res.data.data);
            setProject(res.data.data);
        });
    }, []);

    return (
        <div>
            <h4 className="m-4">Panchayath's Projects</h4>
            <div className="accordion container-fluid accordionMainDiv" id="accordionPanelsStayOpenExample">
                {project.map((value, index) => {
                    const uniqueId = `collapse-${index}`; // Generate a unique ID for each project
                    return (
                        <div className="accordion-item myAccordion" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${uniqueId}`} // Use unique ID
                                    aria-expanded="false"
                                    aria-controls={uniqueId}
                                >
                                    {value.projectName}
                                </button>
                            </h2>
                            <div id={uniqueId} className="accordion-collapse project-container collapse">
                                <div>
                                    <img
                                        className="Pimage"
                                        src={`http://localhost:4000/Img/${value.projectImage}`}
                                        alt="Project"
                                    />
                                </div>
                                <div className="pro-dec">
                                    <span className="projectDate">
                                        <strong>Date : </strong>
                                        {value.Date}
                                    </span>
                                    <div className="projectDesc">{value.projectDescription}</div>
                                    <div className="website">
                                        Website:{" "}
                                        <a href={value.website} target="_blank" rel="noopener noreferrer">
                                            {value.website}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectDisplay;

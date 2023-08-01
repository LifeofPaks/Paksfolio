import React from "react";
import { ProjectData } from "../../Helpers/ProjectsData";

const ProjectList = () => {
  return (
    <>
      {ProjectData.map((data) => (
        <div  key={data.id} className={`wrapper ${data.animationDelay}`}>
          <img src={data.image} alt="forlio-img" className="forlio-img" />
          <p className="forlio-title">{data.title}</p>
          <a href={data.url} target='_blank' className="preview-link"> Live Preview</a>
          <p className="tools">{data.tools}</p>
          <div className="title-overlay"></div>
        </div>
      ))}
    </>
  );
};

export default ProjectList;

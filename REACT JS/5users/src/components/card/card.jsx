import React, { useState } from 'react';
import jobDetails from '../data/jobdata';
import "./card.css";

function Card() {
  const [selectedJob, setSelectedJob] = useState(jobDetails[0]);

  return (
    <div className='container-fluid p-5'>
      <div className="row p-2 p-md-4">
        <div className="col-md-5">
          <div className="card p-3 w-100">
          <h4>Jobs</h4>
          <hr />
          {jobDetails.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedJob(item)}
              className={`p-2 job-item ${selectedJob === item ? 'selected-job' : ''}`}
            >
              <p className="fw-bold">{item.title}</p>
              <p className="text-success">{item.company}</p>
              <div className="d-flex">
                <p className="m-0"><i className="bi bi-geo-alt"></i> {item.location}</p>
              </div>
              <p><i className="bi bi-clock"></i> {item.experience}</p>
              <hr/>
            </div>
          ))}
      </div>

        </div>

        <div className="col-md-7">
          {selectedJob && (
            <div className="card p-4 ">
              <h3 className="fw-bold">{selectedJob.title}</h3>
              <p className="text-success">
                <i className="bi bi-buildings"></i> {selectedJob.company}
              </p>
              <div className="d-flex gap-3 m-3">
                <div className="p-3 bg-light rounded flex-grow-1">
                  <p className="m-0 text-muted">Location</p>
                  <p className="fw-bold m-0"><i className="bi bi-geo-alt"></i> {selectedJob.location}</p>
                </div>
                <div className="p-3 bg-light rounded flex-grow-1">
                  <p className="m-0 text-muted">Experience</p>
                  <p className="fw-bold m-0"><i className="bi bi-clock"></i> {selectedJob.experience}</p>
                </div>
              </div>

              <p>{selectedJob.description}</p>
              <h5 className='mt-2'>Skills Required</h5>
              <div className="d-flex flex-wrap gap-2">
                {selectedJob.Skills.map((skill, idx) => (
                  <span key={idx} className="rounded-pill bg-green text-success">{skill}</span>
                ))}
              </div>
              <h5 className="mt-4">Responsibilities</h5>
              <ul>
                {selectedJob.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
              <h5 className='mt-2'>Requirements</h5>
              <ul>
                {selectedJob.Requirements.map((requirement, idx) => (
                  <li key={idx}>{requirement}</li>
                ))}
              </ul>
              <button className="btn btn-success mt-3">Apply Now</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

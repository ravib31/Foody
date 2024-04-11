import React from "react";
import { ScaleLoader } from "react-spinners";
import "./Skeleton.css"; // Import CSS for skeleton styles

function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-row">
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
        <div className="skeleton-content">
          <ScaleLoader color="#36d7b7" />
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader;

import React from "react";
import "./Skeleton.css"; // Import CSS for skeleton styles

function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-row">
        <div className="skeleton-content">Loading</div>
        <div className="skeleton-content">Loading</div>
        <div className="skeleton-content">Loading</div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-content">Loading</div>
        <div className="skeleton-content">Loading</div>
        <div className="skeleton-content">Loading</div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-content">Loading</div>
        <div className="skeleton-content">Loading</div>
        <div className="skeleton-content">Loading</div>
      </div>
    </div>
  );
}

export default SkeletonLoader;

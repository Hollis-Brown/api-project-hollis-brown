// CustomSkeleton.js
import React from 'react';

export default function CustomSkeleton () {
 return (

  <div className="skeleton-component animate-pulse flex transition shadow-xl 5 rounded-xl  bg-sky-300 mx-4 mt-4">
  <div className="space-y-2 m-4">
    <h2 className="chart-title">Weather Chart Pending...</h2>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
    <div className="h-4 "></div>
  </div>
</div>

 );
};


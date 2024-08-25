"use client"
import React, { useState } from 'react';

interface ProgressBarProps {
  label: string;
  initialProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, initialProgress }) => {
  const [progress, setProgress] = useState<number>(initialProgress);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value));
  };

  return (
    <div className="w-full rounded-lg mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{label}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSliderChange}
        className="mt-4 w-full bg-[#FD6F00] text-[#FD6F00]"
      />
    </div>
  );
};

export default ProgressBar;

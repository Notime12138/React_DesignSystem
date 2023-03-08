import React from "react";

export interface ProgressBarProps {
  width?: number;
  height?: number;
}

const ProgressBar = ({ width, height, ...props }: ProgressBarProps) => {
  let interval: any;
  const [percentage, setPercentage] = React.useState(0);
  const [status, setStatus] = React.useState("default");

  React.useEffect(() => {
    if (status === "default") {
      interval = setInterval(() => {
        setPercentage((prev) => prev + Math.floor(Math.random() * 50) + 1);
      }, 1000);
    } else if (status === "success" || status === "disabled") {
      clearInterval(interval);
    }
  }, [status]);

  React.useEffect(() => {
    if (percentage >= 100) {
      clearInterval(interval);
      setPercentage(100);
      setStatus("success");
    }
  }, [percentage]);

  return (
    <div
      style={{ width: width, height: height }}
      className={"bar-container"}
      {...props}
    >
      <div
        style={{ width: `${percentage}%` }}
        className={["bar-filler", `bar-filler-${status}`].join(" ")}
      >
        {" "}
      </div>
    </div>
  );
};

export default ProgressBar;

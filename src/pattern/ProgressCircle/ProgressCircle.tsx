import React from "react";

export interface ProgressCircleProps {
  radius?: number;
  strokeWidth?: number;
}

const ProgressCircle = ({
  radius = 24,
  strokeWidth = 5,
  ...props
}: ProgressCircleProps) => {
  const [percentage, setPercentage] = React.useState(0);
  const Ccircle = 2 * Math.PI * radius;
  const PctStroke = ((100 - percentage) * Ccircle) / 100;

  let interval: any;
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
    <div {...props}>
      <svg>
        <g transform="rotate(-90 100 100)">
          <circle
            r={radius}
            strokeWidth={strokeWidth}
            className={"circle-container"}
          />
          <circle
            r={radius}
            strokeWidth={strokeWidth}
            className={["circle-filler", `circle-filler-${status}`].join(" ")}
            strokeDasharray={Ccircle}
            strokeDashoffset={PctStroke}
          />
        </g>
      </svg>
    </div>
  );
};

export default ProgressCircle;

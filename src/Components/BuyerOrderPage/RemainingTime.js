import { Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRemainingTime } from "../../assets/js/utils";

export default function RemainingTime({ label = "Time Left", time }) {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime(getRemainingTime(time));
    }, 1000);
  }, []);

  return (
    <>
      <Typography variant="h5">{label}</Typography>
      <Typography variant="h4">{remainingTime}</Typography>
    </>
  );
}

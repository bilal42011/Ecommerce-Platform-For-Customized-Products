import * as React from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import { Card, Stack } from "@mui/material";
import CategoryChooser from "../Components/CategoryChooser";

import axiosInstance, { endPoints, getToken } from "../axiosInstance";
import { CheckCircleOutline, ArrowRight } from "@mui/icons-material/";
import { Link } from "react-router-dom";

export default function BecomeASeller() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [category, setCategory] = React.useState("");

  const handleFinish = async (e) => {
    try {
      const response = await axiosInstance.post(
        endPoints.UPGRADE_ACCOUNT,
        { category },
        {
          headers: {
            Authorization: "Bearer " + getToken(),
          },
        }
      );
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } catch (err) {}
  };

  const steps = [
    {
      title: "Select a Selling Category",
      element: (
        <Stack maxWidth="sm" m="auto" py={10}>
          <CategoryChooser
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            label={"Selling Category"}
            required
          />
        </Stack>
      ),
    },
    {
      title: "Create your first Product",
      element: (
        <Stack justifyContent={"center"} alignItems="center">
          <CheckCircleOutline sx={{ mb: 3 }} />
          <Typography>
            You have successfully registered yourself as a seller
          </Typography>
          <Link to="/profile/products/create" className="ghost-link">
            <Button endIcon={<ArrowRight />}>Create your first Product</Button>
          </Link>
        </Stack>
      ),
    },
  ];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container sx={{ maxWidth: "lg", mt: 15 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((item, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={item.title} {...stepProps}>
              <StepLabel {...labelProps}>{item.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Card variant="outlined" sx={{ mt: 5, border: "none" }}>
        <Box>{steps[activeStep].element}</Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            pt: 2,
            justifyContent: "space-between",
          }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          {activeStep === 0 ? (
            <Button onClick={handleFinish} disabled={!category}>
              Save
            </Button>
          ) : (
            <Link to="/" className="ghost-link" style={{ width: "auto" }}>
              <Button disabled={!category}>Go to Homepage</Button>
            </Link>
          )}
        </Container>
      </Card>
    </Container>
  );
}

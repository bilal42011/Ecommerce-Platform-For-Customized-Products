import * as React from "react";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import { Card, Stack } from "@mui/material";
import CategoryChooser from "../Components/CategoryChooser";
import SellerProductForm from "../Components/SellerProductForm";

export default function BecomeASeller() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [category, setCategory] = React.useState("");
  const [product, setProduct] = React.useState(null);
  const onCreateProduct = (product) => {
    setProduct(product);
  };

  const handleFinish = () => {};

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
        <SellerProductForm
          onSubmit={onCreateProduct}
          formTitle={"Create your first Product"}
        />
      ),
    },
  ];

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = (e) => {
    e.preventDefault();

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    handleFinish();
  };

  const handleReset = () => {
    setActiveStep(0);
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
        <Container sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Container sx={{ flex: "1 1 auto" }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip &amp; Save
            </Button>
          )}
          {activeStep === 0 ? (
            <Button onClick={handleNext} disabled={!category}>
              Next
            </Button>
          ) : (
            <Button onClick={handleFinish} disabled={!product}>
              Finish
            </Button>
          )}
        </Container>
      </Card>
    </Container>
  );
}

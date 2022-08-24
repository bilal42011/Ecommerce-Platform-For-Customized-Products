import React from "react";
import { Grid, Typography } from "@mui/material";
import { categoriesData } from "./CategoriesData/CategoriesData";
import { Link } from "react-router-dom";

const CategoriesItems = () => {
  return (
    <>
      {categoriesData.map((category, idx) => {
        return (
          <Grid
            component="div"
            key={category.id}
            container
            justifyContent="center"
            item
            rowSpacing={0.5}
            xs={6}
            md={3}
            alignItems="center"
          >
            <Link
              to={`browse?cat=${idx}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Grid
                container
                direction="column"
                alignItems="center"
                sx={{
                  width: "fit-content",
                  "&:hover": {
                    "& .hover": {
                      color: "#ed7966",
                      cursor: "pointer",
                    },
                  },
                }}
              >
                <Grid item>
                  <category.icon
                    className="hover"
                    fontSize="large"
                    sx={{ color: "#006D6F", width: "50px", height: "50px" }}
                  ></category.icon>
                </Grid>
                <Grid item>
                  <Typography
                    className="hover"
                    fontSize="20px"
                    textAlign="center"
                    sx={{ display: "block" }}
                  >
                    {category.name}
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>
        );
      })}
    </>
  );
};

export default CategoriesItems;

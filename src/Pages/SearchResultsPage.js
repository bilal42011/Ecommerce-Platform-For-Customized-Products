import { Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchFilters from "../Components/SearchFilters";
import SearchResults from "../Components/SearchResults";
import { uiActions } from "../Store/Slices/uiSlice";
import axiosInstance, { endPoints } from "../axiosInstance";
import { useSearchParams } from "react-router-dom";
import { categoriesData } from "../Components/Homepage/Categories/CategoriesItems/CategoriesData/CategoriesData";

export default function SearchResultsPage() {
  const [page, setPage] = useState(1);
  const [params, setParams] = useSearchParams();

  console.log(params.get("cat") * 1);

  const [result, setResult] = useState(null);
  const [category, setCategory] = useState(
    categoriesData[params.get("cat") * 1].name || "Iron Works"
  );
  const dispatch = useDispatch();

  const onPageChange = (e, newPage) => {
    // TODO: Fetch new results
    setPage(newPage);
  };

  const fetchResults = async (category) => {
    dispatch(uiActions.setLoading(true));
    try {
      const response = await axiosInstance.get(endPoints.PRODUCT, {
        params: {
          category,
          page,
        },
      });
      setResult(response.data.result);
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.response.data.message || error.message,
        })
      );
    }
    dispatch(uiActions.setLoading(false));
  };

  const onCategoryChange = (newVal) => {
    setCategory(newVal);
    fetchResults(newVal);
  };

  useEffect(() => {
    fetchResults(category);
  }, []);

  return (
    <Box sx={{ pt: 2 }} maxWidth="xl" margin="auto">
      {result && (
        <>
          <SearchFilters
            category={category}
            onChange={onCategoryChange}
            numberOfResults={result.count}
          />
          {result.count === 0 ? (
            <Typography color="GrayText" variant="h3" textAlign={"center"}>
              No Products Found
            </Typography>
          ) : (
            <SearchResults results={result.products} />
          )}
          <Box display="flex" justifyContent={"center"} mt={2}>
            <Pagination
              count={result.totalPages}
              page={1}
              onChange={onPageChange}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

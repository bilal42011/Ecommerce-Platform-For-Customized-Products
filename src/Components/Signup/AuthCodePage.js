import {
  AccountCircle,
  CloseOutlined,
  CreditCard,
  Key,
  Lock,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  Modal,
  Card,
  TextField,
  Typography,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance, { endPoints } from "../../axiosInstance";
import { authActions } from "../../Store/Slices/authSlice/authSlice";
import { uiActions } from "../../Store/Slices/uiSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuthCodePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authCode, setAuthCode] = useState("");

  const token = useSelector((state) => state.auth.token);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(
        endPoints.AUTH_CODE,
        { authCode },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(authActions.updateUser(response.data.user));
      navigate("/profile/dashboard");
    } catch (error) {
      console.log(error);
      dispatch(
        uiActions.setAlert({
          severity: "error",
          text: "ERROR: " + error.response.data.message || error.message,
        })
      );
    }
  };

  return (
    <Container sx={{ mt: 15 }} maxWidth="sm">
      <Card
        variant="outlined"
        component={"form"}
        onSubmit={onSubmit}
        sx={{ p: 2 }}
      >
        <CardHeader
          title="Account Verification"
          subheader="Please check your email"
        />

        <Grid component={CardContent} container spacing={2}>
          <Grid xs={12} item>
            <TextField
              InputProps={{
                startAdornment: (
                  <Icon sx={{ mr: 1 }}>
                    <Lock color="action" />
                  </Icon>
                ),
                inputMode: "numeric",
              }}
              required
              placeholder="Authentication Code"
              name="authCode"
              type="number"
              value={authCode}
              onChange={(e) => setAuthCode(e.target.value)}
              fullWidth
              label="Auth Code"
            ></TextField>
          </Grid>
          <Grid item xs={12} m="auto">
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

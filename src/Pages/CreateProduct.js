import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import SellerProductForm from "../Components/SellerProductForm";

export default function CreateProduct() {
  const { userId } = useParams();

  console.log(userId);
  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <SellerProductForm />
    </Container>
  );
}

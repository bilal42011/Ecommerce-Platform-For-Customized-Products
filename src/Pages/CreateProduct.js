import { Container } from "@mui/system";
import SellerProductForm from "../Components/SellerProductForm";

export default function CreateProduct() {
  return (
    <Container maxWidth="xl" sx={{ mt: 15 }}>
      <SellerProductForm />
    </Container>
  );
}

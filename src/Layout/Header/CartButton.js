import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartButton() {
  const length = useSelector((state) => state.cart.products.length);

  return (
    <Link
      to="/profile/cart"
      className="ghost-link"
      style={{ alignSelf: "center" }}
    >
      <Badge color="primary" badgeContent={length}>
        <ShoppingCart color="background.paper" />
      </Badge>
    </Link>
  );
}

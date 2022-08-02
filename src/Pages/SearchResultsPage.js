import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import SearchFilters from "../Components/SearchFilters";
import SearchResults from "../Components/SearchResults";

export default function SearchResultsPage() {
  const results = [
    {
      id: 12312,
      image:
        "https://cdn.shopify.com/s/files/1/2980/5140/products/LoomSolar2rowDesign4PanelStand375watt_2.jpg?v=1624973202",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 23424,
      image:
        "https://image.made-in-china.com/202f0j00dcNiRtCWrkob/Aluminum-Alloy-Solar-Rail-Solar-Panel-Module-Stand-Bracket.jpg",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 3542,
      image:
        "https://5.imimg.com/data5/YY/QQ/MY-4005949/solar-panel-stand-500x500.jpg",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image:
        "https://s.alicdn.com/@sc04/kf/H2e7f5b3f0b9945baa1e49e747c996b51w.jpg_300x300.jpg",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
    {
      id: 2345,
      image: "https://via.placeholder.com/150",
      ownername: "user3385",
      title: "Solar Panel Stand",
      rating: 4,
      description:
        "The flat roof solar panel mounting system Solar triangular bracket, with innovative triangular to save cost both on installation and transportation. It is installed directly on a rooftop or pre-made concrete cement block. All kinds of panels can be installed which will save time for your project.",
      price: 4999,
      url: "/products/solar-panel-stand",
    },
  ];
  return (
    <Box sx={{ pt: 2 }} maxWidth="xl" margin="auto">
      <SearchFilters />
      <SearchResults results={results} />
      <Box display="flex" justifyContent={"center"} mt={2}>
        <Pagination count={10} />
      </Box>
    </Box>
  );
}

import { useEffect, useRef, useState } from "react";
import useUserStore from "../store";
import SearchBar from "./SearchBar";
import SearchInputs from "./SearchInputs";

export default function SearchContainer() {
  const [value, setValue] = useState("");
  const { getUser, getUsers, searchParamNumber } = useUserStore();
  const selectRef = useRef(null);
  const [inputs, setinpts] = useState([0]);

  const addSearchInput = () => {};

  return (
    <div style={styles.container1}>
      {Array.from({ length: searchParamNumber }).map((_, index) => (
        <SearchInputs key={index} />
      ))}

      <SearchBar />
    </div>
  );
}

const styles = {
  container1: {
    width: "100%",
    margin: "auto",
    padding: "10px",
    textAlign: "center",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    margin: "10px",
    width: "10%",
    maxWidth: "300px",
  },
  input: {
    width: "80%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "10px",
    fontSize: "16px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

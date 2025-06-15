import { useEffect, useRef, useState } from "react";
import useUserStore from "../store";
import SearchBar from "./SearchBar";

export default function SearchInput() {
  const [value, setValue] = useState("");
  const { getUser, getUsers } = useUserStore();
  const selectRef = useRef(null);

  const handleSearch = async (e) => {
    if (value !== "") await getUser({ [selectRef.current.value]: value });
    else await getUsers({ [selectRef.current.value]: value });
  };

  return (
    <div style={styles.container1}>
      <select
        name="search pram"
        defaultValue={"name"}
        style={styles.select}
        ref={selectRef}
      >
        <option value="email">email</option>
        <option value="name">name</option>
        <option value="id">id</option>
        <option value="phone">phone</option>
      </select>

      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        placeholder={"Search...."}
        style={styles.input}
      />
      <SearchBar searchClick={handleSearch} />
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

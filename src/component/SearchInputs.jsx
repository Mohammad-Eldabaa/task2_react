import React, { useEffect, useRef, useState } from "react";
import useUserStore from "../store";

export default function SearchInputs() {
  const [value, setValue] = useState("");
  const selectRef = useRef(null);
  const {
    searchingParam,
    changeSearchParamId,
    changeSearchParamEmail,
    changeSearchParamPhone,
    changeSearchParamName,
  } = useUserStore();

  useEffect(() => {
    console.log("Updated searchingParam:", searchingParam);
  }, [searchingParam]);

  const passingParam = (val) => {
    switch (selectRef.current.value) {
      case "id":
        changeSearchParamId(val);
        break;
      case "phone":
        changeSearchParamPhone(val);
        break;
      case "name":
        changeSearchParamName(val);
        break;
      case "email":
        changeSearchParamEmail(val);
        break;

      default:
        return;
    }
  };
  return (
    <div>
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
        onChange={async (e) => {
          setValue(e.target.value);
          passingParam(e.target.value);
          console.log(searchingParam);
          //   changeSearchParamPhone(e.target.value);
        }}
        value={value}
        placeholder={"Search...."}
        style={styles.input}
      />
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

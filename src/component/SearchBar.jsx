export default function SearchBar({ searchClick }) {
  return (
    <div>
      <div style={styles.container1}>{/* <SearchInput /> */}</div>
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => {
            searchClick();
          }}
        >
          Search
        </button>
        <button
          style={{ ...styles.button, backgroundColor: "#1976d2" }}
          onClick={() => {}}
        >
          Add Another
        </button>
      </div>
    </div>
  );
}

const styles = {
  container1: {
    width: "90%",
    margin: "auto",
    padding: "10px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },

  button: {
    flex: 1,
    padding: "10px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "16px",
  },
};

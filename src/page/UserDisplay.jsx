import React, { useState } from "react";
import useUserStore from "../store";

export default function UserDisplay() {
  const { user } = useUserStore();

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{user.name}</h2>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </p>

      <div style={styles.section}>
        <h3 style={styles.subheading}>Address</h3>
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
        <p>
          Geo: {user.address.geo.lat}, {user.address.geo.lng}
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.subheading}>Company</h3>
        <p>
          <strong>{user.company.name}</strong>
        </p>
        <p>{user.company.catchPhrase}</p>
        <p>{user.company.bs}</p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    width: "100%",
    color: "#333",
  },
  name: {
    marginBottom: "10px",
    color: "#2a6592",
  },
  section: {
    marginTop: "20px",
    backgroundColor: "#f1f1f1",
    padding: "10px 15px",
    borderRadius: "8px",
  },
  subheading: {
    margin: "0 0 5px 0",
    fontSize: "1.1rem",
    color: "#444",
  },
};

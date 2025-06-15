import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../store";

export default function UserList({ User }) {
  const [shadowColor, setShadowColor] = useState("gray");
  const navigate = useNavigate();
  const { getUser } = useUserStore();

  return (
    <div
      style={{ ...Styles.container, boxShadow: `0 2px 20px ${shadowColor}` }}
      onMouseEnter={() => setShadowColor("orange")}
      onMouseLeave={() => setShadowColor("gray")}
      onClick={async () => {
        await getUser({ id: User.id });
        navigate("/user");
      }}
    >
      <h2 style={Styles.title}>{User.name}</h2>
      <p style={Styles.info}>
        <strong>📞 Phone:</strong> {User.phone}
      </p>
      <p style={Styles.info}>
        <strong>📧 Email:</strong> {User.email}
      </p>
    </div>
  );
}

const Styles = {
  container: {
    width: "320px",
    border: "2px solid #4caf50",
    margin: "40px auto",
    padding: "24px",
    lineHeight: "1.8",
    backgroundColor: "#f9f9f9",
    borderRadius: "16px",
    textAlign: "left",
  },
  title: {
    color: "#ff5722",
    fontSize: "1.6rem",
    marginBottom: "16px",
    borderBottom: "2px solid #ffccbc",
    paddingBottom: "8px",
  },
  info: {
    margin: "10px 0",
    fontSize: "1rem",
    color: "#333",
  },
};

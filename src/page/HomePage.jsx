import { useEffect, useState } from "react";
// import { getAllusers, getUser } from "../api";
import UserList from "../component/UserList";
import SearchBar from "../component/SearchBar";
import useUserStore from "../store";
import SearchInput from "../component/SearchInput";

export default function HomePage() {
  // const [users, setUsers] = useState([]);
  const { users, getUsers } = useUserStore();
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <SearchInput />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map((item) => (
          <UserList key={item.id} User={item} />
        ))}
      </div>
    </div>
  );
}

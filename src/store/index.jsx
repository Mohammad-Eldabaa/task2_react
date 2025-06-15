import { create } from "zustand";
import { getAllusers, getUser } from "../api";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  isLoading: false,
  hasError: false,
  searching: false,
  searchingParam: {},
  changeSerchState: () => set((state) => ({ searching: !state.searching })),
  getUsers: async () => {
    const result = await getAllusers();
    set({ users: result.data });
  },
  getUser: async (obj) => {
    const result = await getUser(obj);
    set({ users: result.data });
    set({ user: result.data[0] });
    // console.log(result.data);
  },
}));

export default useUserStore;

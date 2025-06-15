import { create } from "zustand";
import { getAllusers, getUser } from "../api";

const useUserStore = create((set) => ({
  users: [],
  user: null,
  isLoading: false,
  hasError: false,
  searchParamNumber: 1,
  searchingParam: {},
  IncreaseSearchParamNumber: () =>
    set((state) => {
      if (state.searchParamNumber < 4) {
        return { searchParamNumber: state.searchParamNumber + 1 };
      }
      return state;
    }),
  changeSearchParamId: (id) =>
    set((state) => ({
      searchingParam: { ...state.searchingParam, id },
    })),

  changeSearchParamEmail: (email) =>
    set((state) => ({
      searchingParam: { ...state.searchingParam, email },
    })),

  changeSearchParamPhone: (phone) =>
    set((state) => ({
      searchingParam: { ...state.searchingParam, phone },
    })),

  changeSearchParamName: (name) =>
    set((state) => ({
      searchingParam: { ...state.searchingParam, name },
    })),

  getUsers: async () => {
    const result = await getAllusers();
    set({ users: result.data });
  },

  getUser: async (obj) => {
    const result = await getUser(obj);
    console.log(result);
    set({
      users: result.data,
      user: result.data[0] || null,
    });
  },
}));

export default useUserStore;

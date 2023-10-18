import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  items: [
    { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
    { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
    { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
  ],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      const availableItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity < availableItem.inventory) {
          existingItem.quantity++;
          availableItem.inventory--;
        }
      } else {
        state.cartItems.push({ ...availableItem, quantity: 1 });
        availableItem.inventory--;
      }
    },
    removeAllItems: (state) => {
      state.cartItems = [];
      state.items = initialState.items.map((item) => ({
        ...item,
        inventory: item.inventory + (item.quantity || 0),
        quantity: 0,
      }));
    },
  },
});

export const { addItems, removeAllItems } = itemSlice.actions;

export default itemSlice.reducer;

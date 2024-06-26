import { createAppSlice } from '@/lib/createAppSlice';
import type { AppThunk } from '@/lib/store';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
    isCheck?: boolean;
}

export interface CartSliceState {
    // items: CartItem[];
    value: CartItem[];
}
const initialState: CartSliceState = {
    value: [
        {
            id: 1,
            name: 'bagel',
            price: 50,
            quantity: 2,
            img: '/bagel/bagel-5.jpg',
            isCheck: true,
        },
        {
            id: 2,
            name: 'Bagel',
            price: 80,
            quantity: 12,
            img: '/bagel/bagel-1.jpg',
            isCheck: false,
        },
    ],
};

export const cartSlice = createAppSlice({
    name: 'cart',
    initialState,
    reducers: (create) => ({
        addItem: create.reducer((state, action: PayloadAction<CartItem>) => {
            state.value.push(action.payload);
        }),
        removeItem: create.reducer((state, action: PayloadAction<number>) => {
            console.log(action.payload);
            state.value = state.value.filter((item) => item.id !== action.payload);
        }),
        updateItem: create.reducer((state, action: PayloadAction<CartItem>) => {
            const item = state.value.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        }),
        increment: create.reducer((state, action: PayloadAction<CartItem>) => {
            const item = state.value.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        }),
        decrement: create.reducer((state, action: PayloadAction<CartItem>) => {
            const item = state.value.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity <= 1 ? (item.quantity = 1) : (item.quantity -= 1);
            }
        }),
        checkItem: create.reducer((state, action: PayloadAction<CartItem>) => {
            const item = state.value.find((item) => item.id === action.payload.id);
            if (item) {
                item.isCheck = !item.isCheck;
            }
        }),
        iscCheckAll: create.reducer((state, action: PayloadAction<boolean>) => {
            state.value.forEach((item) => {
                item.isCheck = action.payload;
            });
        }),
    }),
    selectors: {
        selectCart: (state) => state.value,
    },
});

export const { addItem, removeItem, updateItem, increment, decrement, checkItem, iscCheckAll } = cartSlice.actions;

export const { selectCart } = cartSlice.selectors;

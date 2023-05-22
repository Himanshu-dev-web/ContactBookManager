import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
  
export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addToContact: (state, action) => {
      console.log(state.contacts?.items[0]);
        state.items = [...state.items, action.payload];
      }, 
      removeFromContact: (state, action) => {
        
        const index = state.items.findIndex((basketItem) => basketItem.mobile ===  action.payload.mobile);
        
        console.log(index);
        let newBasket = [...state.items];
  
        if(index >= 0 ){ 
          newBasket.splice(index,1);
          console.log("removed from contact")
        }
        else{
          console.warn(
            `Can't Remove the Product (Mobile: ${action.payload.mobile})from basket`
          )
        }
        state.items = newBasket;
      },
      updateContact: (state, action) => {
        let { items } = state;
         console.log(items);
        // let { todoList } = 
        state.items = items.map((item) => 
          item.mobile === action.payload.mobile ? action.payload : item);
     
        },
      }
});

export const { addToContact , removeFromContact,updateContact} = contactSlice.actions;

export const selectItems = (state) => state.contacts?.items;

//export const selectTotal = (state) => state.contacts.items.reduce((total,item ) => total + item.price , 0)

// Selectors - This is how we pull information from the Global store slice

export default contactSlice.reducer;

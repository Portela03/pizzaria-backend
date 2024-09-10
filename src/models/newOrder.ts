export interface NewOrder {
    id: number;
    name: string;
    phone: string;
    street: string;
    number: string;
    complement?: string;
    neighborhood?: string;
    state?: string;
    cookingStatus?: string;
    observation?: string;
    orders: Order[];
    createdAt: Date;
  }
  
export interface Order {
    id: number;
    newOrderId: number;
    quantity: number;
    price: number;
    newOrder: NewOrder;
  }
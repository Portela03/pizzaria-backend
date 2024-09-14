import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { NewOrder, Order } from "../models/newOrder";

const prisma = new PrismaClient();

export const newOrder = async (req: Request, res: Response) => {
  const {
    name,
    phone,
    street,
    number,
    complement,
    neighborhood,
    state,
    cookingStatus,
    observation,
    orders,
    createdAt,
  } = req.body as NewOrder;
  try {
    const newOrders = await prisma.newOrder.create({
      data: {
        name,
        phone,
        street,
        number,
        complement,
        neighborhood,
        state,
        cookingStatus,
        observation,
        createdAt,
        ...(orders && {
          orders: {
            create: orders.map((order: Order) => ({
              quantity: order.quantity,
              price: order.price,
            })),
          },
        }),
      },
      include: {
        orders: true, 
      },
    });
    res.status(201).json(newOrders);
  } catch (error) {
    console.log("Erro ao criar pedido", error);
    res.status(501).json("Erro ao criar pedido");
  }
};
export const getOrder = async (req: Request, res: Response) => {
  try {
    const order = await prisma.newOrder.findMany({
      include: {
        orders: true, 
      },
    });
    res.status(201).json(order);
  } catch (error){
    res.status(501).json("Erro ao pegar pedidos")
  }
};

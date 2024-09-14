import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {

    await prisma.order.deleteMany({
      where: { newOrderId: Number(id) },
    });

    
    await prisma.newOrder.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Error deleting order' });
    
  }
};

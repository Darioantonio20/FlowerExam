import { Request, Response } from 'express';
import Order from '../models/order';
import Flower from '../models/flower';

// Crear nuevo pedido
export const createOrder = async (req: Request, res: Response) => {
    const { flowers, customerName, eventDate } = req.body;
    try {
      // Obtener los IDs de las flores
      const flowerIds = await Promise.all(flowers.map(async (flowerName: string) => {
        const flower = await Flower.findOne({ name: flowerName });
        if (!flower) {
          throw new Error(`Flor no encontrada: ${flowerName}`);
        }
        return flower._id;
      }));

      const order = new Order({ flowers: flowerIds, customerName, eventDate });
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el pedido.', error: (error as any).message });
    }
};
// Obtener todos los pedidos
export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos.' });
  }
};

// Obtener un pedido por ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado.' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el pedido.' });
  }
};

// Actualizar un pedido
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado.' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el pedido.' });
  }
};

// Eliminar un pedido
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Pedido no encontrado.' });
    }
    res.status(200).json({ message: 'Pedido eliminado.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el pedido.' });
  }
};
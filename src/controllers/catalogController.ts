import { Request, Response } from 'express';
import Flower from '../models/flower';

// Obtener el catálogo de flores disponibles
export const getCatalog = async (req: Request, res: Response) => {
  try {
    const flowers = await Flower.find({ inStock: true });
    res.status(200).json(flowers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el catálogo.' });
  }
};

// Agregar nueva flor al catálogo
export const addFlower = async (req: Request, res: Response) => {
  const { name, price, quantity } = req.body;
  try {
    const flower = new Flower({ name, price, quantity, inStock: quantity > 0 });
    await flower.save();
    res.status(201).json(flower);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la flor.' });
  }
};

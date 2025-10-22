import { Request, Response } from "express";
import NFT from "../models/NFT";

export const getAllNFT = async (req: Request, res: Response) => {
  try {
    const nfts = await NFT.find().sort({ createdAt: -1 });
    res.status(200).json(nfts);
  } catch (e: any) {
    console.error("Error with getting NFTs:", e);
    res
      .status(500)
      .json({ message: "Error with getting NFTs", error: e?.message || e });
  }
};

export const createNFT = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is requiered" });
    }

    const { name, description, price } = req.body;
    if (!name || !description || !price) {
      return res
        .status(400)
        .json({ message: "name, description and price are required" });
    }

    const imgUrl = `/uploads/${req.file.filename}`;

    const addNFT = await NFT.create({
      name: name,
      description: description,
      price: price,
      img: imgUrl,
    });
    res.status(201).json(addNFT);
  } catch (e: any) {
    console.error("Error with adding new NFT:", e);
    res
      .status(500)
      .json({ message: "Error with adding new NFT", error: e?.message || e });
  }
};

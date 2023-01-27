import { Item } from "../interface/Item.interface";
import ItemModel from "../models/item";

export const insertItemService = async (item: Item) => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

export const getItemsService = async () => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

export const getItemService = async (id: string) => {
  const responseItem = await ItemModel.findOne({ _id: id });
  return responseItem;
};

export const updateItemService = async (id: string, data: Item) => {
  const responseItem = await ItemModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseItem;
};

export const deleteItemService = async (id: string) => {
  const responseItem = await ItemModel.remove({ _id: id });
  return responseItem;
};
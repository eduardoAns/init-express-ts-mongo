import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  insertItemService,
  getItemsService,
  getItemService,
  updateItemService,
  deleteItemService,
} from "../services/item";
import { handleHttp } from "../utils/error.handler";

export const getItem = async ({ params }: Request, res: Response) => {
    try {
      const { id } = params;
      const response = await getItemService(id);
      const data = response ? response : "NOT_FOUND";
      res.send(data);
    } catch (e) {
      handleHttp(res, "ERROR_GET_ITEM");
    }
  };
  
  export const getItems = async (req: Request, res: Response) => {
    try {
      const response = await getItemsService();
      res.send(response);
    } catch (e) {
      handleHttp(res, "ERROR_GET_ITEMS");
    }
  };
  
  export const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
      const { id } = params;
      const response = await updateItemService(id, body);
      res.send(response);
    } catch (e) {
      handleHttp(res, "ERROR_UPDATE_ITEM");
    }
  };
  
  export const postItem = async ({ body }: Request, res: Response) => {
    try {
      const responseItem = await insertItemService(body);
      res.send(responseItem);
    } catch (e) {
      handleHttp(res, "ERROR_POST_ITEM", e);
    }
  };
  
  export const deleteItem = async ({ params }: Request, res: Response) => {
    try {
      const { id } = params;
      const response = await deleteItemService(id);
      res.send(response);
    } catch (e) {
      handleHttp(res, "ERROR_DELETE_ITEM", e);
    }
  };
  



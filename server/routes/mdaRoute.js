import {Router} from "express";
import { createMda, getMda, updateMda } from "../controllers/mdaController.js";

const mdaRouter = Router()

mdaRouter.route('/').get(getMda).post(createMda)
mdaRouter.route('/:id').patch(updateMda)

export default mdaRouter
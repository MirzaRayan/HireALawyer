import { Router } from "express";
import { loginInClient, registerClient } from "../controllers/client.controllers.js";

const router = Router()


router.route('/registerclient').post( registerClient )
router.route('/logininclient').post( loginInClient )




export default router


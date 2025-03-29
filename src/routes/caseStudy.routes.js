import { Router } from "express";
import { getAllCaseStudies } from "../controllers/caseStudy.controller";


const router = Router()


router.route('getallcasestudies').get(getAllCaseStudies)
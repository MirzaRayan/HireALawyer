import { Router } from "express";
import { getAllLawyers, getcivilMatterLawyer, getcompanyRegLawyer, getcriminalMatterLawyer, getdivorceLawyer, getExperties, getfamilyMatterLawyer, getimmigrationLawyer, getLawyerById, getlegalNoticeLawyer, getmediationLawyer, getrecoveryMatterLawyer, getserviceMatterLawyer, gettaxfilingLawyer, gettrademarkLawyer, loginInLawyer, logOutLawyer, RefreshedRefreshToken, registerLawyer, sendMessageToLawyer } from "../controllers/lawyer.controllers.js";
const router = Router()
import { upload } from "../middlewares/multer.js";
import { verfityJWT } from "../middlewares/auth.js";

router.route('/registerlawyer').post(
    // upload.single('image'),
    registerLawyer
  );
  
  
router.route('/logininlawyer').post( loginInLawyer )
router.route('/getalllawyers').get( getAllLawyers )
router.route('/id/:id').get( getLawyerById )
router.route('/expertise/:expertise').get( getExperties )
router.route('/getlegalnoticelawyers').get( getlegalNoticeLawyer )
router.route('/getcriminalmatterlawyers').get( getcriminalMatterLawyer)
router.route('/getdivorceLawyer').get( getdivorceLawyer)
router.route('/getfamilyMatterLawyer').get( getfamilyMatterLawyer)
router.route('/getmediationLawyer').get( getmediationLawyer)
router.route('/getcompanyRegLawyer').get( getcompanyRegLawyer)
router.route('/gettrademarkLawyer').get( gettrademarkLawyer)
router.route('/gettaxfilingLawyer').get( gettaxfilingLawyer)
router.route('/getrecoveryMatterLawyer').get( getrecoveryMatterLawyer)
router.route('/getimmigrationLawyer').get( getimmigrationLawyer)
router.route('/getserviceMatterLawyer').get( getserviceMatterLawyer)
router.route('/getcivilMatterLawyer').get( getcivilMatterLawyer)
router.route('/logout').post(verfityJWT, logOutLawyer)
router.route('/refresh-token').post(RefreshedRefreshToken)


router.route('/sendmessagetolawyer').post(
  sendMessageToLawyer
)




export default router


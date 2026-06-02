import { Router, type IRouter } from "express";
import healthRouter from "./health";
import enrollRouter from "./enroll";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(enrollRouter);
router.use(contactRouter);

export default router;

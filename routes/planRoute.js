import { Router } from 'express'
import * as controller from '../controllers/planController.js'
import validateAdmin from '../middlewares/adminValidator.js'
import userValidator from '../middlewares/userValidator.js'

const router = Router()

router.post('/add', validateAdmin, controller.add)
router.get('/get-all', controller.getAllPlan)
router.post('/delete', validateAdmin, controller.delPlan)
router.post('/pay-with-paypal', userValidator, controller.payWithPaypal)
router.post('/pay-with-paystack', userValidator, controller.payWithPayStack)
router.post('/pay-with-razorpay', userValidator, controller.payWithRazorpay)
router.post('/pay-with-zarnipal', userValidator, controller.payWithZarnipal)
router.get('/verify-zarnipal', controller.verifyZarnipal)
router.post('/pay-with-instamojo', userValidator, controller.payWithInstamojo)
router.get('/verify-instamojo', controller.verifyInstamojo)
router.post('/pay-free', userValidator, controller.payFree)

export default router

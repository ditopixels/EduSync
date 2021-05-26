import {Router} from 'express'
import {renderDashboard} from '../controllers/dashboard.controller.js'
import {isAuth} from '../helpers/auth.js'

const router = Router();

router.get('/App', isAuth ,renderDashboard);
router.get('/App/inicio', (req,res)=>res.redirect('/App'));
router.get('/App/biblioteca',isAuth,renderDashboard)
router.get('/App/documentos',isAuth,renderDashboard)
router.get('/App/pagina',isAuth,renderDashboard)
router.get('/App/configuracion',isAuth,renderDashboard)
router.get('/App/miembros',isAuth,renderDashboard)



export default router;
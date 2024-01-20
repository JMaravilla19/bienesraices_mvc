import express from 'express';

const router = express.Router();

//Routing, Express supports the HTTP Methods: GET, POST, PATCH, DELETE
router.get('/', (req, res) =>{
    res.send("Hello World from Express");
})

router.post('/', (req, res) =>{
    res.json({msg: "Respuesta Tipo HTTP POST"});
})

router.get('/nosotros', (req, res)=>{
    res.send("We Are Developers!");
})


export default router;
import express from 'express';
import { dreaminterpreter } from '../controllers/dreamController.js';
const dreamRoute = express.Router();

dreamRoute.post('/dreaminterpreter', async (req, res) => {
    try {
      const dream_content = req.body.dream; // Declare the variable properly
      const result = await dreaminterpreter(dream_content); // Await the asynchronous function
  
      if (result) {
        res.status(200).json({ status: "success", message: result.message.content });
      } else {
        res.status(400).json({ status: "error", message: "No result from interpreter" });
      }
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  });

  export default dreamRoute;

import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  /**
   * #swagger.tags = ['Video']
   * #swagger.method = 'GET'
   * #swagger.path = '/video'
   * #swagger.description = 'Get the current video'
   */
  // TODO: Add request redirect
});

export { router };

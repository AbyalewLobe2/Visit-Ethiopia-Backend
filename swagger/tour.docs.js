/**
 * @swagger
 * components:
 *   schemas:
 *     Tour:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "507f1f77bcf86cd799439011"
 *         title:
 *           type: string
 *           example: "Ethiopian Highlands Adventure"
 *         description:
 *           type: string
 *           example: "Explore the stunning Ethiopian Highlands..."
 *         price:
 *           type: number
 *           example: 1299.99
 *         difficulty:
 *           type: string
 *           enum: [easy, moderate, challenging]
 *         averageRating:
 *           type: number
 *           example: 4.5
 *         isFeatured:
 *           type: boolean
 *           example: true
 *
 *     CreateTourRequest:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - price
 *       properties:
 *         title:
 *           type: string
 *           example: "Ethiopian Highlands Adventure"
 *         description:
 *           type: string
 *           example: "Explore the stunning Ethiopian Highlands..."
 *         price:
 *           type: number
 *           example: 1299.99
 *
 *     TourResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "success"
 *         data:
 *           type: object
 *           properties:
 *             tour:
 *               $ref: '#/components/schemas/Tour'
 *
 *     ToursResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "success"
 *         results:
 *           type: number
 *           example: 25
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Tour'
 *
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: JWT token for authentication
 */

/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: Tour management and exploration endpoints
 */

/**
 * @swagger
 * /api/v1/tours:
 *   post:
 *     summary: Create a new tour (Admin only)
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTourRequest'
 *     responses:
 *       201:
 *         description: Tour created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourResponse'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *
 *   get:
 *     summary: Get all tours with filtering
 *     tags: [Tours]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter by tour title
 *       - in: query
 *         name: difficulty
 *         schema:
 *           type: string
 *         description: Filter by difficulty level
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Results per page
 *     responses:
 *       200:
 *         description: Tours retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToursResponse'
 */

/**
 * @swagger
 * /api/v1/tours/featured:
 *   get:
 *     summary: Get featured tours
 *     tags: [Tours]
 *     responses:
 *       200:
 *         description: Featured tours retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToursResponse'
 */

/**
 * @swagger
 * /api/v1/tours/{id}:
 *   get:
 *     summary: Get tour by ID
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *     responses:
 *       200:
 *         description: Tour retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourResponse'
 *       404:
 *         description: Tour not found
 *
 *   patch:
 *     summary: Update tour (Admin only)
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Tour updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Tour not found
 *
 *   delete:
 *     summary: Delete tour (Admin only)
 *     tags: [Tours]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *     responses:
 *       204:
 *         description: Tour deleted successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Tour not found
 */

/**
 * @swagger
 * /api/v1/tours/{id}/reviews:
 *   get:
 *     summary: Get reviews for a tour
 *     tags: [Tours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *     responses:
 *       200:
 *         description: Reviews retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 results:
 *                   type: number
 *                   example: 15
 *                 data:
 *                   type: object
 *                   properties:
 *                     reviews:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           rating:
 *                             type: number
 *                           title:
 *                             type: string
 *                           comment:
 *                             type: string
 *       404:
 *         description: Tour not found
 */

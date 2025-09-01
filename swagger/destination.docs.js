/**
 * @swagger
 * components:
 *   schemas:
 *     Destination:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "507f1f77bcf86cd799439011"
 *         name:
 *           type: string
 *           example: "Lalibela"
 *         description:
 *           type: string
 *           example: "Lalibela is a town in northern Ethiopia, known for its rock-cut monolithic churches..."
 *         shortDescription:
 *           type: string
 *           example: "Ancient rock-hewn churches and religious heritage site"
 *         region:
 *           type: string
 *           example: "Amhara"
 *         location:
 *           type: object
 *           properties:
 *             coordinates:
 *               type: object
 *               properties:
 *                 lat:
 *                   type: number
 *                   example: 12.0317
 *                 lng:
 *                   type: number
 *                   example: 39.0473
 *             address:
 *               type: string
 *               example: "Lalibela, Amhara Region, Ethiopia"
 *         attractions:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Rock-hewn churches", "Bete Giyorgis", "Bete Medhane Alem"]
 *         bestTimeToVisit:
 *           type: array
 *           items:
 *             type: string
 *           example: ["October to March", "Dry season"]
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           example: ["lalibela1.jpg", "lalibela2.jpg"]
 *         coverImage:
 *           type: string
 *           example: "lalibela-cover.jpg"
 *         climate:
 *           type: string
 *           example: "Temperate highland climate"
 *         localCuisine:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Injera", "Doro Wat", "Shiro"]
 *         nearbyAccommodations:
 *           type: array
 *           items:
 *             type: string
 *           example: ["507f1f77bcf86cd799439012", "507f1f77bcf86cd799439013"]
 *         tours:
 *           type: array
 *           items:
 *             type: string
 *           example: ["507f1f77bcf86cd799439014", "507f1f77bcf86cd799439015"]
 *         isFeatured:
 *           type: boolean
 *           example: true
 *         status:
 *           type: string
 *           enum: [active, inactive]
 *           example: "active"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00.000Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2024-01-15T10:30:00.000Z"
 *
 *     CreateDestinationRequest:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - shortDescription
 *         - region
 *         - location
 *         - coverImage
 *       properties:
 *         name:
 *           type: string
 *           example: "Lalibela"
 *           description: "Unique name of the destination"
 *         description:
 *           type: string
 *           example: "Lalibela is a town in northern Ethiopia, known for its rock-cut monolithic churches..."
 *           description: "Detailed description of the destination"
 *         shortDescription:
 *           type: string
 *           example: "Ancient rock-hewn churches and religious heritage site"
 *           description: "Brief description for quick overview"
 *         region:
 *           type: string
 *           example: "Amhara"
 *           description: "Geographic region of the destination"
 *         location:
 *           type: object
 *           required:
 *             - coordinates
 *           properties:
 *             coordinates:
 *               type: object
 *               required:
 *                 - lat
 *                 - lng
 *               properties:
 *                 lat:
 *                   type: number
 *                   example: 12.0317
 *                   description: "Latitude coordinate"
 *                 lng:
 *                   type: number
 *                   example: 39.0473
 *                   description: "Longitude coordinate"
 *             address:
 *               type: string
 *               example: "Lalibela, Amhara Region, Ethiopia"
 *               description: "Human-readable address"
 *         attractions:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Rock-hewn churches", "Bete Giyorgis", "Bete Medhane Alem"]
 *           description: "List of main attractions"
 *         bestTimeToVisit:
 *           type: array
 *           items:
 *             type: string
 *           example: ["October to March", "Dry season"]
 *           description: "Best times to visit the destination"
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           example: ["lalibela1.jpg", "lalibela2.jpg"]
 *           description: "Additional images of the destination"
 *         coverImage:
 *           type: string
 *           example: "lalibela-cover.jpg"
 *           description: "Main cover image for the destination"
 *         climate:
 *           type: string
 *           example: "Temperate highland climate"
 *           description: "Climate information"
 *         localCuisine:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Injera", "Doro Wat", "Shiro"]
 *           description: "Local food specialties"
 *         nearbyAccommodations:
 *           type: array
 *           items:
 *             type: string
 *           example: ["507f1f77bcf86cd799439012"]
 *           description: "Array of hotel IDs nearby"
 *         tours:
 *           type: array
 *           items:
 *             type: string
 *           example: ["507f1f77bcf86cd799439014"]
 *           description: "Array of tour IDs available"
 *         isFeatured:
 *           type: boolean
 *           example: false
 *           description: "Whether the destination is featured"
 *         status:
 *           type: string
 *           enum: [active, inactive]
 *           example: "active"
 *           description: "Status of the destination"
 *
 *     UpdateDestinationRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Lalibela - Rock Churches"
 *         description:
 *           type: string
 *           example: "Updated description of Lalibela..."
 *         shortDescription:
 *           type: string
 *           example: "Updated short description"
 *         region:
 *           type: string
 *           example: "Amhara Region"
 *         location:
 *           type: object
 *           properties:
 *             coordinates:
 *               type: object
 *               properties:
 *                 lat:
 *                   type: number
 *                   example: 12.0317
 *                 lng:
 *                   type: number
 *                   example: 39.0473
 *             address:
 *               type: string
 *               example: "Updated address"
 *         attractions:
 *           type: array
 *           items:
 *             type: string
 *         bestTimeToVisit:
 *           type: array
 *           items:
 *             type: string
 *         images:
 *           type: array
 *           items:
 *             type: string
 *         coverImage:
 *           type: string
 *         climate:
 *           type: string
 *         localCuisine:
 *           type: array
 *           items:
 *             type: string
 *         nearbyAccommodations:
 *           type: array
 *           items:
 *             type: string
 *         tours:
 *           type: array
 *           items:
 *             type: string
 *         isFeatured:
 *           type: boolean
 *         status:
 *           type: string
 *           enum: [active, inactive]
 *
 *     DestinationResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "success"
 *         data:
 *           type: object
 *           properties:
 *             destination:
 *               $ref: '#/components/schemas/Destination'
 *
 *     DestinationsResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "success"
 *         results:
 *           type: number
 *           example: 15
 *         data:
 *           type: array
 *           items:
 *               $ref: '#/components/schemas/Destination'
 *
 *     ToursForDestinationResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "success"
 *         results:
 *           type: number
 *           example: 8
 *         data:
 *           type: object
 *           properties:
 *             tours:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tour'
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "error"
 *         message:
 *           type: string
 *           example: "No destination found with that ID"
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
 *   name: Destinations
 *   description: Destination management and exploration endpoints
 */

/**
 * @swagger
 * /api/v1/destinations:
 *   post:
 *     summary: Create a new destination (Admin only)
 *     tags: [Destinations]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateDestinationRequest'
 *     responses:
 *       201:
 *         description: Destination created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DestinationResponse'
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized - Authentication required
 *       403:
 *         description: Forbidden - Admin access required
 *       409:
 *         description: Conflict - Destination name already exists
 *
 *   get:
 *     summary: Get all destinations
 *     tags: [Destinations]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of destinations per page
 *       - in: query
 *         name: region
 *         schema:
 *           type: string
 *         description: Filter destinations by region
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, inactive]
 *         description: Filter destinations by status
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [name, createdAt, updatedAt]
 *         description: Sort field
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Destinations retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DestinationsResponse'
 *
 * /api/v1/destinations/featured:
 *   get:
 *     summary: Get featured destinations
 *     tags: [Destinations]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 10
 *         description: Number of destinations per page
 *     responses:
 *       200:
 *         description: Featured destinations retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DestinationsResponse'
 *
 * /api/v1/destinations/{id}:
 *   get:
 *     summary: Get a single destination by ID
 *     tags: [Destinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Destination ID
 *     responses:
 *       200:
 *         description: Destination retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DestinationResponse'
 *       404:
 *         description: Destination not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   patch:
 *     summary: Update a destination (Admin only)
 *     tags: [Destinations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Destination ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateDestinationRequest'
 *     responses:
 *       200:
 *         description: Destination updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DestinationResponse'
 *       400:
 *         description: Bad request - Invalid input data
 *       401:
 *         description: Unauthorized - Authentication required
 *       403:
 *         description: Forbidden - Admin access required
 *       404:
 *         description: Destination not found
 *
 *   delete:
 *     summary: Delete a destination (Admin only)
 *     tags: [Destinations]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Destination ID
 *     responses:
 *       204:
 *         description: Destination deleted successfully
 *       401:
 *         description: Unauthorized - Authentication required
 *       403:
 *         description: Forbidden - Admin access required
 *       404:
 *         description: Destination not found
 *
 * /api/v1/destinations/{id}/tours:
 *   get:
 *     summary: Get tours for a specific destination
 *     tags: [Destinations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Destination ID
 *     responses:
 *       200:
 *         description: Tours retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToursForDestinationResponse'
 *       404:
 *         description: Destination not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

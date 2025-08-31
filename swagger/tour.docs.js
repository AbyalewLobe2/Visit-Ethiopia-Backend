/**
 * @swagger
 * components:
 *   schemas:
 *     Tour:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - shortDescription
 *         - duration
 *         - destinations
 *         - difficulty
 *         - price
 *         - coverImage
 *         - maxGroupSize
 *         - createdBy
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the tour
 *           example: "507f1f77bcf86cd799439011"
 *         title:
 *           type: string
 *           description: Tour title
 *           example: "Ethiopian Highlands Adventure"
 *         description:
 *           type: string
 *           description: Detailed tour description
 *           example: "Explore the stunning Ethiopian Highlands with this comprehensive adventure tour..."
 *         shortDescription:
 *           type: string
 *           description: Brief tour description
 *           example: "Discover the beauty of Ethiopia's highlands"
 *         duration:
 *           type: object
 *           required:
 *             - days
 *             - nights
 *           properties:
 *             days:
 *               type: number
 *               description: Number of days
 *               example: 7
 *             nights:
 *               type: number
 *               description: Number of nights
 *               example: 6
 *         destinations:
 *           type: array
 *           items:
 *             type: string
 *           description: List of destinations visited
 *           example: ["Addis Ababa", "Lalibela", "Gondar"]
 *         categories:
 *           type: array
 *           items:
 *             type: string
 *             enum: [cultural, adventure, nature, historical, religious]
 *           description: Tour categories
 *           example: ["cultural", "adventure"]
 *         difficulty:
 *           type: string
 *           enum: [easy, moderate, challenging]
 *           description: Tour difficulty level
 *           example: "moderate"
 *         price:
 *           type: number
 *           description: Tour price in USD
 *           example: 1299.99
 *         discount:
 *           type: number
 *           default: 0
 *           description: Discount percentage
 *           example: 10
 *         images:
 *           type: array
 *           items:
 *             type: string
 *           description: Array of tour images
 *           example: ["image1.jpg", "image2.jpg"]
 *         coverImage:
 *           type: string
 *           description: Main tour image
 *           example: "cover-image.jpg"
 *         maxGroupSize:
 *           type: number
 *           description: Maximum number of participants
 *           example: 15
 *         averageRating:
 *           type: number
 *           default: 0
 *           minimum: 0
 *           maximum: 5
 *           description: Average rating from reviews
 *           example: 4.5
 *         isFeatured:
 *           type: boolean
 *           default: false
 *           description: Whether this tour is featured
 *         status:
 *           type: string
 *           enum: [active, inactive, draft]
 *           default: active
 *           description: Tour status
 *
 *     CreateTourRequest:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - shortDescription
 *         - duration
 *         - destinations
 *         - difficulty
 *         - price
 *         - coverImage
 *         - maxGroupSize
 *       properties:
 *         title:
 *           type: string
 *           example: "Ethiopian Highlands Adventure"
 *         description:
 *           type: string
 *           example: "Explore the stunning Ethiopian Highlands with this comprehensive adventure tour..."
 *         shortDescription:
 *           type: string
 *           example: "Discover the beauty of Ethiopia's highlands"
 *         duration:
 *           type: object
 *           properties:
 *             days:
 *               type: number
 *               example: 7
 *             nights:
 *               type: number
 *               example: 6
 *         destinations:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Addis Ababa", "Lalibela", "Gondar"]
 *         categories:
 *           type: array
 *           items:
 *             type: string
 *           example: ["cultural", "adventure"]
 *         difficulty:
 *           type: string
 *           example: "moderate"
 *         price:
 *           type: number
 *           example: 1299.99
 *         coverImage:
 *           type: string
 *           example: "cover-image.jpg"
 *         maxGroupSize:
 *           type: number
 *           example: 15
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
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: "fail"
 *         message:
 *           type: string
 *           example: "Tour not found"
 *
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: JWT token for authentication
 *     CookieAuth:
 *       type: apiKey
 *       in: cookie
 *       name: jwt
 *       description: JWT token stored in HTTP-only cookie
 *
 * security:
 *   - BearerAuth: []
 *   - CookieAuth: []
 */

/**
 * @swagger
 * tags:
 *   name: Tours
 *   description: Tour management and exploration endpoints
 */

/**
 * @swagger
 * /api/v1/tours/tour:
 *   get:
 *     summary: Test tour route
 *     tags: [Tours]
 *     description: Simple test endpoint for tour routes
 *     responses:
 *       201:
 *         description: Test successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "test file"
 */

/**
 * @swagger
 * /api/v1/tours:
 *   post:
 *     summary: Create a new tour (Admin only)
 *     tags: [Tours]
 *     description: Create a new tour with comprehensive details
 *     security:
 *       - BearerAuth: []
 *       - CookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateTourRequest'
 *           example:
 *             title: "Ethiopian Highlands Adventure"
 *             description: "Explore the stunning Ethiopian Highlands with this comprehensive adventure tour..."
 *             shortDescription: "Discover the beauty of Ethiopia's highlands"
 *             duration:
 *               days: 7
 *               nights: 6
 *             destinations: ["Addis Ababa", "Lalibela", "Gondar"]
 *             categories: ["cultural", "adventure"]
 *             difficulty: "moderate"
 *             price: 1299.99
 *             coverImage: "cover-image.jpg"
 *             maxGroupSize: 15
 *     responses:
 *       201:
 *         description: Tour created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourResponse'
 *       400:
 *         description: Bad request - validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized - not authenticated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Forbidden - insufficient permissions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   get:
 *     summary: Get all tours with advanced filtering
 *     tags: [Tours]
 *     description: Retrieve all tours with filtering, sorting, pagination, and field selection using API features
 *     parameters:
 *       # Basic Filtering
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Filter by tour title (partial match)
 *         example: "Ethiopian"
 *       - in: query
 *         name: difficulty
 *         schema:
 *           type: string
 *           enum: [easy, moderate, challenging]
 *         description: Filter by difficulty level
 *         example: "moderate"
 *       - in: query
 *         name: categories
 *         schema:
 *           type: string
 *         description: Filter by categories (comma-separated)
 *         example: "cultural,adventure"
 *       - in: query
 *         name: destinations
 *         schema:
 *           type: string
 *         description: Filter by destinations (comma-separated)
 *         example: "Lalibela,Gondar"
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, inactive, draft]
 *         description: Filter by tour status
 *         example: "active"
 *       - in: query
 *         name: isFeatured
 *         schema:
 *           type: boolean
 *         description: Filter featured tours
 *         example: true
 *
 *       # Advanced Filtering with Operators (gte, lte, gt, lt, ne)
 *       - in: query
 *         name: maxGroupSize[gte]
 *         schema:
 *           type: number
 *         description: Filter tours with max group size greater than or equal to value
 *         example: 10
 *       - in: query
 *         name: averageRating[gte]
 *         schema:
 *           type: number
 *         description: Filter tours with average rating greater than or equal to value
 *         example: 4.0
 *       - in: query
 *         name: duration.days[lte]
 *         schema:
 *           type: number
 *         description: Filter tours with duration days less than or equal to value
 *         example: 7
 *       - in: query
 *         name: price[gt]
 *         schema:
 *           type: number
 *         description: Filter tours with price greater than value
 *         example: 1000
 *
 *       # Price Range Filtering (minPrice, maxPrice)
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price filter
 *         example: 500
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price filter
 *         example: 2000
 *
 *       # Sorting (sort)
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort fields (comma-separated, prefix with - for descending)
 *         example: "price,-averageRating,title"
 *
 *       # Field Selection (fields)
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: Select specific fields (comma-separated)
 *         example: "title,price,difficulty,coverImage"
 *
 *       # Pagination (page, limit)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 100
 *         description: Number of results per page
 *         example: 20
 *     responses:
 *       200:
 *         description: Tours retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToursResponse'
 *             example:
 *               status: "success"
 *               results: 20
 *               data: [
 *                 {
 *                   _id: "507f1f77bcf86cd799439011"
 *                   title: "Ethiopian Highlands Adventure"
 *                   shortDescription: "Discover the beauty of Ethiopia's highlands"
 *                   price: 1299.99
 *                   difficulty: "moderate"
 *                   coverImage: "highlands-cover.jpg"
 *                   averageRating: 4.5
 *                   isFeatured: true
 *                 }
 *               ]
 *       400:
 *         description: Bad request - invalid query parameters
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api/v1/tours/featured:
 *   get:
 *     summary: Get featured tours
 *     tags: [Tours]
 *     description: Retrieve featured tours with automatic sorting by rating and price
 *     parameters:
 *       # Inherits all parameters from the main tours endpoint
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number for pagination
 *         example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *           default: 100
 *         description: Number of results per page
 *         example: 20
 *     responses:
 *       200:
 *         description: Featured tours retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ToursResponse'
 *             example:
 *               status: "success"
 *               results: 5
 *               data: [
 *                 {
 *                   _id: "507f1f77bcf86cd799439011"
 *                   title: "Ethiopian Highlands Adventure"
 *                   shortDescription: "Discover the beauty of Ethiopia's highlands"
 *                   price: 1299.99
 *                   difficulty: "moderate"
 *                   coverImage: "highlands-cover.jpg"
 *                   averageRating: 4.8
 *                   isFeatured: true
 *                 }
 *               ]
 */

/**
 * @swagger
 * /api/v1/tours/{id}:
 *   get:
 *     summary: Get tour by ID with reviews
 *     tags: [Tours]
 *     description: Retrieve a specific tour with populated reviews
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: Tour retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourResponse'
 *       404:
 *         description: Tour not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   patch:
 *     summary: Update tour (Admin only)
 *     tags: [Tours]
 *     description: Update tour information (admin access required)
 *     security:
 *       - BearerAuth: []
 *       - CookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *         example: "507f1f77bcf86cd799439011"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Ethiopian Highlands Adventure"
 *               price:
 *                 type: number
 *                 example: 1399.99
 *               status:
 *                 type: string
 *                 enum: [active, inactive, draft]
 *                 example: "active"
 *     responses:
 *       200:
 *         description: Tour updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TourResponse'
 *       400:
 *         description: Bad request - validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized - not authenticated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Forbidden - insufficient permissions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Tour not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *   delete:
 *     summary: Delete tour (Admin only)
 *     tags: [Tours]
 *     description: Delete a tour (admin access required)
 *     security:
 *       - BearerAuth: []
 *       - CookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       204:
 *         description: Tour deleted successfully
 *       401:
 *         description: Unauthorized - not authenticated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Forbidden - insufficient permissions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Tour not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api/v1/tours/{id}/reviews:
 *   get:
 *     summary: Get reviews for a specific tour
 *     tags: [Tours]
 *     description: Retrieve all reviews for a specific tour
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Tour ID
 *         example: "507f1f77bcf86cd799439011"
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
 *                           _id:
 *                             type: string
 *                             example: "507f1f77bcf86cd799439014"
 *                           rating:
 *                             type: number
 *                             example: 5
 *                           title:
 *                             type: string
 *                             example: "Amazing Experience!"
 *                           comment:
 *                             type: string
 *                             example: "This tour exceeded all my expectations..."
 *                           user:
 *                             type: object
 *                             properties:
 *                               FirstName:
 *                                 type: string
 *                                 example: "John"
 *                               LastName:
 *                                 type: string
 *                                 example: "Doe"
 *                               email:
 *                                 type: string
 *                                 example: "john.doe@example.com"
 *       404:
 *         description: Tour not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * components:
 *   examples:
 *     # API Features Query Parameter Examples
 *     FilterExamples:
 *       summary: Common filtering examples using API features
 *       value:
 *         # Basic filtering
 *         title: "Ethiopian"
 *         difficulty: "moderate"
 *         categories: "cultural,adventure"
 *         destinations: "Lalibela,Gondar"
 *         status: "active"
 *         isFeatured: true
 *
 *         # Advanced filtering with operators (gte, lte, gt, lt, ne)
 *         "maxGroupSize[gte]": 10
 *         "averageRating[gte]": 4.0
 *         "duration.days[lte]": 7
 *         "price[gt]": 1000
 *         "price[lt]": 2000
 *
 *         # Price range filtering (minPrice, maxPrice)
 *         minPrice: 500
 *         maxPrice: 2000
 *
 *         # Sorting (sort)
 *         sort: "price,-averageRating,title"
 *
 *         # Field selection (fields)
 *         fields: "title,price,difficulty,coverImage"
 *
 *         # Pagination (page, limit)
 *         page: 1
 *         limit: 20
 *
 *     SortExamples:
 *       summary: Sorting examples using API features
 *       value:
 *         # Single field sorting
 *         sort: "price"
 *
 *         # Multiple field sorting
 *         sort: "price,-averageRating,title"
 *
 *         # Descending order (prefix with -)
 *         sort: "-price,-createdAt"
 *
 *         # Ascending order (default)
 *         sort: "title,price"
 *
 *     FieldSelectionExamples:
 *       summary: Field selection examples using API features
 *       value:
 *         # Select specific fields
 *         fields: "title,price,difficulty"
 *
 *         # Exclude specific fields
 *         fields: "-__v,-createdAt,-updatedAt"
 *
 *         # Mixed selection and exclusion
 *         fields: "title,price,-__v"
 *
 *     PaginationExamples:
 *       summary: Pagination examples using API features
 *       value:
 *         # First page with 10 results
 *         page: 1
 *         limit: 10
 *
 *         # Second page with 20 results
 *         page: 2
 *         limit: 20
 *
 *         # Custom page size
 *         page: 3
 *         limit: 15
 */

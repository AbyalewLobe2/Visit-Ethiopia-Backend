import express from 'express'

import {
  createTour,
  getAllTours,
  getTour,
  featuredTours,
  getTourReviews,
  updateTour,
  deleteTour,
} from '../controllers/tourController.js'

import { protect, restrict } from '../controllers/authController.js'

const router = express.Router()

// ✅ Create tour (protected & restricted)
router.post('/', protect, restrict('admin'), createTour)

// ✅ Get all tours
router.get('/', getAllTours)

// ✅ Featured tours (MUST come before /:id routes)
router.get('/featured', featuredTours, getAllTours)

// ✅ Get reviews for a specific tour
router.get('/:id/reviews', getTourReviews)

// ✅ Get single tour with reviews populated
router.get('/:id', getTour)

// ✅ Update a tour
router.patch('/:id', protect, restrict('admin'), updateTour)

// ✅ Delete a tour
router.delete('/:id', protect, restrict('admin'), deleteTour)

export default router

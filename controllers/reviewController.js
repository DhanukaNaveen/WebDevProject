import Review from "../models/review.js";

export async function createReview(req, res) {
  try {
    const review = new Review(req.body);
    await review.save();
    res.json({ message: "Review submitted", review });
  } catch (err) {
    console.error("Error creating review:", err);
    res.status(500).json({ message: "Failed to submit review" });
  }
}

export async function getReviews(req, res) {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
}
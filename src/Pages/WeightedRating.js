function calculateWeightedRating(userReviews) {
  const totalReviews = userReviews.reduce(
    (total, user) => total + user.totalReviews,
    0
  );

  const weightedRatings = userReviews.map((user) => {
    const { rating, totalReviews } = user;
    const weight = totalReviews / totalReviews;
    const weightedRating = rating * weight;
    return weightedRating;
  });

  const overallWeightedRating =
    weightedRatings.reduce((sum, rating) => sum + rating, 0) /
    userReviews.length;

  return overallWeightedRating;
}

export default calculateWeightedRating;

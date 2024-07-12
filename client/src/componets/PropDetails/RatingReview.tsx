import Reviews from '../Reviews'
const RatingReview = () => {
  return (
    <div className="my-10 space-y-5 border p-5 border-zinc-200 rounded-md">
    <h3 className="text-2xl font-medium ">Ratings & Reviews</h3>
    <div>
      <Reviews reviews={reviews} />
    </div>
  </div>
  )
}

export default RatingReview;


const reviews = [
    {
      id: 1,
      name: "Aishwarya Malik",
      experience: "2 years ago",
      review_title: "Good Property",
      review:
        "The garden view is mesmerizing, the exposure of natural light is good.Easy access to stores, markets and schools.",
      stars: 3,
    },
    {
      id: 2,
      name: "Rajendra Prasad",
      experience: "3 years ago",
      review_title: "Good Society & Apartment",
      review:
        "With its thoughtfully designed apartments, power backup, and 24x7 security, it offers a secure and worry-free living experience.Easy access to stores, markets and schools....",
      stars: 4,
    },
    {
      id: 2,
      name: "Jane Doe",
      experience: "3 years ago",
      review_title: "Good Property",
      review:
        "I have been living here for 2 years now and I must say it is a good property",
      stars: 4,
    },
    {
      id: 2,
      name: "Jane Doe",
      experience: "3 years ago",
      review_title: "Good Property",
      review:
        "I have been living here for 2 years now and I must say it is a good property",
      stars: 4,
    },
  ];
  
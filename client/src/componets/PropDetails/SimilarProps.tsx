import PropertyCard from "../PropertyCard";
const SimilarProps = () => {
  return (
    <div className=" my-10 space-y-5 bg-[#FDFAF7] py-5 ">
    <h3 className="text-2xl font-medium ">
      Similar Properties In Mira road
    </h3>
    <div>
      <div className="grid lg:grid-cols-4  gap-8">
        {similarProperties.map(
          ({ image, location, title, price }, index) => (
            <PropertyCard
              key={index}
              image={image}
              location={location}
              title={title}
              price={price}
            />
          )
        )}
      </div>
    </div>
  </div>
  )
}

export default SimilarProps;


const similarProperties = [
    {
      image:
        "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
      title: "Modern & Luxury 2BHK Flat For Rent",
      price: 60.5,
      location: "Kashimira, Mira Road East,  Mumbai",
    },
    {
      image:
        "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
      title: "A great appartment next to sundale",
      price: 280000,
      location: "1234, Sundale, California",
    },
    {
      image:
        "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
      title: "A great appartment next to sundale",
      price: 280000,
      location: "1234, Sundale, California",
    },
    {
      image:
        "https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg",
      title: "A great appartment next to sundale",
      price: 280000,
      location: "1234, Sundale, California",
    },
  ];
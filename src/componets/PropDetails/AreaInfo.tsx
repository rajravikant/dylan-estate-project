import Button from '../UI/Button'

const AreaInfo = () => {
  return (
    <div className="my-10 space-y-5 border p-5 border-zinc-200 rounded-md">
    <h3 className="text-2xl font-medium ">About Mira Road</h3>
    <div className="mt-5">
      <p className="text-sm text-neutral-800">
        Spread over 510 sqft. this home is an ideal place to live in. Access
        to bus station & medical stores is very easy & convenient from this
        house. If you are a frequent traveller, then you'll be happy to note
        that train station is less than 10 minutes from this house. With PVR
        Cinemas - Mira Road, Maxus Cinemas & INOX close by, you can catch
        your favourite movies running & never worry about missing a show
        because of traffic. Never miss out on lifestyle as Rassaz Mall......
      </p>
        <span className="underline font-medium text-sm">Show more</span>
    </div>
        <Button title="Write a Review" />
  </div>
  )
}

export default AreaInfo
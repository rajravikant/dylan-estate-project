import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserStateContext } from "../store/userStateContext";
import { PropertyType } from "../store/FormDataSchema";
function Profile() {
  const { user } = useContext(UserStateContext);
  const token = user.token ?? null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    console.log(user);
  }, [token]);

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toDateString();
  };

  return (
    <div className="lg:px-16 p-5 w-full">
      <div className="space-y-4 max-w-2xl mx-auto ">
        <img
          src={user.avatar}
          alt={user.name}
          className="size-52 mx-auto rounded-full object-cover cursor-pointer"
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.country}</p>
          <p className="text-gray-500">{user.phone}</p>
        </div>
      </div>

      <div className="listed-properties">
        <h2 className="text-xl font-bold">Listed Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {user.properties?.map((property: PropertyType) => (
            <div
              key={property._id}
              className="bg-white shadow-md rounded-md p-4"
            >
              <img
                src={property.images[0]}
                alt={
                  property._id
                }
                className="w-full h-52 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold">
                {property.details.propertyType + " / " + property.location.city}
              </h2>
              <p className="text-gray-500 text-sm">
                Uploaded at : {formatDate(property.createdAt)}
              </p>
              <p className="text-gray-500 text-sm">
                Updatede at : {formatDate(property.updatedAt)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;

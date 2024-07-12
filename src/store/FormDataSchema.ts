export type PropertyDetailsType = {
  propertyFor: string;
  propertyType: string;
  propertySubType: string;
  buildUpArea: string;
  carpetArea: string;
  propertyOnFloor: string;
  totalFloors: string;
  propertyFacing: string;
  propertyAge: string;
  bhkType: string;
  bathroomToilets: string;
  balcony: string;
  tenantPreference: string;
  availability: string;
  propertyDescription: string;
};
export type LocationDetailsType = {
  buildingName: string;
  locality: string;
  landmark: string;
  city: string;
  map: string;
};

export type FeaturesType = {
  nonVeg: string;
  petsAllowed: string;
  electricity: string;
  waterSupply: string;
  furnishing: string;
  tiles: string;
  security: string;
  societyAmenities: string[];
  additionalFeatures: string[];
};
export type PriceDetailsType = {
  rent: number;
  security: number;
  maintainance: {
    type: string;
    charge: number;
    period: string;
  };
  remarks: string;
};


export type PropertyImagesTypes = {
  // images: image[];
  images: string[];
};


export type FormDataSchema = {
  propertyDetails: PropertyDetailsType;
  locationDetails: LocationDetailsType;
  features: FeaturesType;
  priceDetails: PriceDetailsType;
  propertyImages: PropertyImagesTypes;
};

export type CreatorType = {
  _id: string;
  name: string;
  phone: string;
  avatar: string;
};


export type PropertyType = {
  _id: string;
  createdAt: string;
  creator ?: CreatorType;
  updatedAt: string;
  details: PropertyDetailsType;
  location: LocationDetailsType;
  features: FeaturesType;
  price: PriceDetailsType;
  images: string[];
};

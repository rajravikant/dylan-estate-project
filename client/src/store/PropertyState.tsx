import * as React from "react";
import { useState } from "react";
import {
  PropertyDetailsType,
  FeaturesType,
  LocationDetailsType,
  PriceDetailsType,
  PropertyImagesTypes,
} from "./FormDataSchema";

type PropertyStateContextType = {
  propertyDetails: PropertyDetailsType;
  setPropertyDetails: React.Dispatch<React.SetStateAction<PropertyDetailsType>>;
  locationDetails: LocationDetailsType;
  setLocationDetails: React.Dispatch<React.SetStateAction<LocationDetailsType>>;
  features: FeaturesType;
  setFeatures: React.Dispatch<React.SetStateAction<FeaturesType>>;
  priceDetails: PriceDetailsType;
  setPriceDetails: React.Dispatch<React.SetStateAction<PriceDetailsType>>;
  propertyImages: PropertyImagesTypes;
  setPropertyImages: React.Dispatch<React.SetStateAction<any>>;
  getAllData: ()=>void
  resetForm: ()=>void
};

export const PropertyStateContext =
  React.createContext<PropertyStateContextType>({} as PropertyStateContextType);

export const PropertyStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [propertyDetails, setPropertyDetails] = useState<PropertyDetailsType>({
    propertyFor: "",
    propertyType: "",
    propertySubType: "",
    buildUpArea: "",
    carpetArea: "",
    propertyOnFloor: "",
    totalFloors: "",
    propertyFacing: "West",
    propertyAge: "",
    bhkType: "",
    bathroomToilets: "",
    balcony: "",
    tenantPreference: "",
    availability: "",
    propertyDescription: "",
  });

  const [locationDetails, setLocationDetails] = useState<LocationDetailsType>({
    buildingName: "",
    locality: "",
    landmark: "",
    city: "Delhi",
  
  });

  const [features, setFeatures] = useState<FeaturesType>({
    nonVeg: "",
    petsAllowed: "",
    electricity: "",
    waterSupply: "",
    furnishing: "",
    tiles: "",
    security: "",
    societyAmenities: [],
    additionalFeatures: [],
  });

  const [priceDetails, setPriceDetails] = useState<PriceDetailsType>({
    rent: 0,
    security: 0,
    maintainance: {
      type: "Included in Rent",
      charge: 0,
      period: "",
    },
    remarks: "",
  });

  const [propertyImages, setPropertyImages] = useState({
    images: [],
  });

  const resetForm = () => {
    setPropertyDetails({
      propertyFor: "",
      propertyType: "",
      propertySubType: "",
      buildUpArea: "",
      carpetArea: "",
      propertyOnFloor: "",
      totalFloors: "",
      propertyFacing: "",
      propertyAge: "",
      bhkType: "",
      bathroomToilets: "",
      balcony: "",
      tenantPreference: "",
      availability: "",
      propertyDescription: "",
    });

    setLocationDetails({
      buildingName: "",
      locality: "",
      landmark: "",
      city: "",
    });

    setFeatures({
      nonVeg: "",
      petsAllowed: "",
      electricity: "",
      waterSupply: "",
      furnishing: "",
      tiles: "",
      security: "",
      societyAmenities: [],
      additionalFeatures: [],
    });

    setPriceDetails({
      rent: 0,
      security: 0,
      maintainance: {
        type: "",
        charge: 0,
        period: "",
      },
      remarks: "",
    });

    setPropertyImages({
      images: [],
    });
  }

  const getAllData = () => {
    const formData = {
      propertyDetails,
      locationDetails,
      features,
      priceDetails,
      propertyImages,
    }
    return formData;
  }


 



  return (
    <PropertyStateContext.Provider
      value={{
        propertyDetails,
        setPropertyDetails,
        locationDetails,
        setLocationDetails,
        features,
        setFeatures,
        priceDetails,
        setPriceDetails,
        propertyImages,
        setPropertyImages,
        getAllData,
        resetForm
      }}
    >
      {children}
    </PropertyStateContext.Provider>
  );
};

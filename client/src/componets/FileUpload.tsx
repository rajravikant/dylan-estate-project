import React, { ChangeEvent, useContext,useState } from "react";
import { PropertyStateContext } from "../store/PropertyState";
import { XIcon, ImagePlus } from "lucide-react";
import {useDropzone} from 'react-dropzone';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from "../firebase";
import toast ,{ Toaster} from "react-hot-toast";



const FileUpload = () => {
  const { propertyImages, setPropertyImages } = useContext(PropertyStateContext);
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  const [uploading, setUploading] = useState<boolean>(false);

   

  const handleImageSubmit = async () => {
    if (acceptedFiles.length > 0 && acceptedFiles.length + propertyImages.images.length <= 3) {
      setUploading(true);
      const promises = [];

      for (let i = 0; i < acceptedFiles.length; i++) {
        promises.push(storeImage(acceptedFiles[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setPropertyImages((prev:any) => {
            return {
              images: [...prev.images, ...urls],
            }
          })
          toast.success('Images uploaded successfully');

          setUploading(false);
        })
        .catch((err:Error) => {
          toast.error('Error uploading images');
          setUploading(false);
        });
    } else {
      toast.error('Please upload 1 to 3 images');
      setUploading(false);
    }
  };

  const storeImage = async (file:File) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };


  
  
  return (
    <div className="flex flex-col w-full">
      <Toaster/>
    

  <section className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
       
      </section>

      {acceptedFiles.length > 0 && (
        <>
        <div className="inline-flex gap-3 mt-2">
          <p className="text-gray-500 text-sm mt-2">
            Upload {acceptedFiles.length} images
          </p>
          <button type="button" onClick={handleImageSubmit}
          className="px-4 py-2 bg-primary text-white text-sm rounded-md">
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 mt-5 gap-5">
            {propertyImages.images.length > 0 && propertyImages.images.map((image:string, index:number) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt="property"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 bg-white p-1 rounded-full"
                  onClick={() => {
                    setPropertyImages((prev:any) => {
                      return {
                        images: prev.images.filter(
                          (img:string) => img !== image
                        ),
                      }
                    });
                  }}
                >
                  <XIcon size={20} />
                </button>
              </div>
            
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FileUpload;

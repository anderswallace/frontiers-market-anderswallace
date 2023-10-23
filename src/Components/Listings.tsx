import "./ListingsStyles.css";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState, useEffect } from "react";
import { storage } from "../firebaseSetup";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
  listAll,
} from "firebase/storage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function Listings() {
  const [file, setFile] = useState<File | null>(null);

  // to resolve handler function executing before useState updates state
  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  // call firebase to download uploaded images on page load
  useEffect(() => {
    handleDownload();
  }, []);

  function handleUpload() {
    if (!file) {
      alert("Please choose a file first");
    } else {
      const storageRef = ref(storage, `/files/UploadedImages/${file?.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // following code from google firebase documentation
      // display upload progress while images uploaded to firebase
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    }

    setFile(null);
  }

  function handleDownload() {
    const storageRef = storage.ref("files/UploadedImages");

    // Now we get the references of these images
    storageRef
      .listAll()
      .then(function (result) {
        result.items.forEach(function (imageRef) {
          // call download URL on each item from 'UploadedImages'
          downloadURL(imageRef);
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function downloadURL(imageRef: any) {
    console.log("downloadURL called");
    imageRef
      .getDownloadURL()
      .then(function (url: any) {
        // TODO: Display the image on the UI
        console.log(url);
      })
      .catch(function (error: any) {
        console.error(error);
      });
  }

  return (
    <div className="listings-container">
      <div className="listings-header">
        <text>Try Your Own Listing Below</text>
      </div>
      <div className="listings-body">
        <div>
          <text>Upload an image to preview how your listing would look</text>
        </div>
      </div>
      <div>
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          color="success"
        >
          Upload Image
          <VisuallyHiddenInput
            type="file"
            accept="image/*"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (!event.target.files) {
                return;
              }
              setFile(event.target.files[0]);
            }}
          />
        </Button>
      </div>
    </div>
  );
}

export default Listings;

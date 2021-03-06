import React, { useState } from "react";
import { API_URL } from '../../constants'

function FormEditImage(props) {

const [image, setImage] = useState(props.data.image)

const id = props.data.id

const handleOnChange = (e) => {
    console.log(e.target.files[0])
    setImage({
        [e.target.name]: e.target.files[0]
    });
};

const handleSubmit = (e) => {
    // debugger
    e.preventDefault()
    // console.log("onSubmit here")
    let body = new FormData()
    body.append("image", image.image)
    body.append("id", id)
    fetch(API_URL + '/image_upload', {
        method: "PUT",
        body
    })
    .then(res => res.json())
    .then(data => {
        console.log("put fetch", data)
        if (data.id) {
            setTimeout(function(){ alert("Thank you. Your image has been updated.") }, 500);
            props.onSubmit(data)
            if (props) {
                setTimeout(function(){ props.closeModal() }, 1000);
                // debugger
            }
            setImage(data.image)
        } else {
            alert(data.error)
        }
    })
    .catch(error => {
        // console.log("Avatar upload error:", error)
    })
}



    return (
        <div className="stories">
            {console.log("edit image", props)}
                <h1>Edit Image</h1>
               
                <div className="story-form">
                    <form className="form-story-input" onSubmit={handleSubmit}>
                        <div className="si-form">
                        
                            <label className="story-form-label">Image: </label>
                            <input
                                id="files-upload "
                                type="file"
                                name="image"
                                onChange={handleOnChange}
                                accept="image/*"
                            />
                            
                        </div>
                        {localStorage.getItem("token") && (
                            <div className="si-form">
                                <input type="submit" className="form-button" value="Submit Edits" />
                            
                            <p>*Please note, that once you change the image, the original image will be lost from the system</p>
                            </div>
                        )}
                    </form>
                </div>
        </div>
    );
}

export default FormEditImage;

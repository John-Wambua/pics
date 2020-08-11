import React from "react";

const ImageList = (props) =>{
        return (
             <div className="ui card">
                <div className="image">
                    <img alt={props.image.alt_description} src={props.image.links.download} style={{height: '220px'}}/>
                </div>

            </div>


        )

}

export default ImageList;
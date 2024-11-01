import React from "react";
import produit from "./produit";


function Image() {
    return (
        <div>
            <img src={produit.Image} alt={produit.name} style={{width:'150px',heigth :'150px '}}/>
        </div>
    );
}
export default Image;

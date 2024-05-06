import { useState } from "react";
import { useEffect } from "react"
import axios from "axios";
import "./GalleryList.css"
import Gallery from "../Gallery/Gallery";
export default function GalleryList(){
    const [imageList, setImageList] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    async function downloadImages(){
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
        console.log(response.data);

        const downloadResults = response.data.photos;

        const galleryResultPromise = downloadResults.map((p) => axios.get(p.url))
        // console.log(galleryResultPromise);
        
        const galleryData = await axios.all(galleryResultPromise);
        console.log(galleryData);

        const res = galleryData.map((galData) => {
            const image = galData.request?.responseURL || '';
            const lastModified = galData.headers?.['last-modified'] || '';
            const contentType = galData.headers?.['content-Type'] || '';
            const contentLength = galData.headers?.['content-length'] || '';
        
            return { image, lastModified, contentType, contentLength };
        });
        
        setImageList(res)
        console.log(res);
        setIsLoading(false);
    }
    useEffect(()=>{
        downloadImages();
    },[])

    return (
        <div className="images-list">  
            <div>Images List</div>
            {(isLoading) ? "Loading..." : imageList.map((p) => <Gallery image={p.image} key={p.image} contentType={p.ContentType}/>)}
        </div>
    )
}
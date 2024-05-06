import GalleryList from "../GalleryList/GalleryList";
import SearchBar from "../Searchbar/Searchbar";
// css 
import "./GalleryPics.css"
export default function GalleryPics(){
    return (
        <div className="Gallery-pics">
            <h1>Gallery</h1>
            <SearchBar/>
            <GalleryList/>
        </div>
    )
}
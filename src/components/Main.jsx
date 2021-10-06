import Imagen from "./Imagen";
import "./styles/Main.css";
import Masonry from 'react-masonry-css'
const Main = () => {
  return (
    <main className="main">
      <Masonry
  breakpointCols={5}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column">
  
   
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
        <Imagen />
  
      
</Masonry>
      
    </main>
  );
};

export default Main;

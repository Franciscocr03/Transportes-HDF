import '../styles/gallery.css';

const GalleryPage = (props) => {
    return(
        <main className="holder">
        <h2 className="h2gallery">Galeria</h2>
        <div className="images">
            <p className="pgallery">Pase el cursor por las imágenes para descubrir los servicios de lujo <strong>Transportes</strong> </p>
            <img src="images/gallery/img01.jpg" alt="gallery01"/>
            <img src="images/gallery/img02.jpg" alt="gallery02"/>
            <img src="images/gallery/img03.jpg" alt="gallery03"/>
            <img src="images/gallery/img04.jpg" alt="gallery04"/>
            <img src="images/gallery/img05.jpg" alt="gallery05"/>
            <img src="images/gallery/img06.jpg" alt="gallery06"/>
            <img src="images/gallery/img07.jpg" alt="gallery07"/>
        </div>
    </main>
    )
}

export default GalleryPage;
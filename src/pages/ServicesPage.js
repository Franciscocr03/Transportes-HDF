import '../styles/services.css';

const ServicesPage = (props) => {
    return (
        <main className="holder">
            <h2>Services</h2>
            <div className="service">
                <img src="images/services/aereo.jpg" alt="service01" />
                <div className="info">
                    <h4>Transporte aéreo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora cum distinctio fugit perferendis, obcaecati accusantium magnam et hic doloremque nisi. Ullam, velit quis. Harum asperiores ducimus pariatur ut nulla!</p>
                </div>
            </div>
            <div className="service">
                <img src="images/services/ferroviario.jpg" alt="service02" />
                <div className="info">
                    <h4>Transporte Ferroviario</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora cum distinctio fugit perferendis, obcaecati accusantium magnam et hic doloremque nisi. Ullam, velit quis. Harum asperiores ducimus pariatur ut nulla!</p>
                </div>
            </div>
            <div className="service">
                <img src="images/services/maritimo.jpg" alt="service03" />
                <div className="info">
                    <h4>Transporte Marítimo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora cum distinctio fugit perferendis, obcaecati accusantium magnam et hic doloremque nisi. Ullam, velit quis. Harum asperiores ducimus pariatur ut nulla!</p>
                </div>
            </div>
            <div className="service">
                <img src="images/services/terrestre.jpg" alt="service04" />
                <div className="info">
                    <h4>Transporte terrestre</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora cum distinctio fugit perferendis, obcaecati accusantium magnam et hic doloremque nisi. Ullam, velit quis. Harum asperiores ducimus pariatur ut nulla!</p>
                </div>
            </div>
        </main>
    )
}

export default ServicesPage;
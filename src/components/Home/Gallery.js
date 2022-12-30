export default function Gallery() {

    const sampleCount = 9;

    return (
        <div className="Gallery">
            <div className="Gallery__content">
                <h2 className="Gallery__content__title">Gallery</h2>
                <p className="Gallery__content__paragraph">
                    I love to watch some anime on my free-time, you can see below a gallery of a lot of them.
                    If vous vous posez la question, Oui j’ai ajouté cette section afin d’avoir une excuse
                    pour faire un effet supplémentaire.
                </p>
            </div>
            <ul className="Gallery__list">
                {Array.from(Array(sampleCount).keys()).map((i) => (
                    <li className="Gallery__list__item" key={i}>
                        <img
                            className="Gallery__list__item__image"
                            src={`https://picsum.photos/seed/${i * 2111}/200/300`}
                            alt="Manga"
                        />
                        <div className="Gallery__list__item__overlay">PLACEHOLDER</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
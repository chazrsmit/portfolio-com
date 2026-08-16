import './Home.css'
import Contenu from './Contenu.jsx'
import { useState } from 'react'

export default function Home() {
    
    const [isOpened, setIsOpened] = useState(false)
    const [element, setElement] = useState(false)

    const handleClick = (titre) => {
        // if (element === titre) {
        //     setIsOpened(false)
        //     console.log('click')
        // }
        if (!isOpened) {
            setIsOpened(true)
            setElement(titre)
        }

        if (isOpened && element === titre) {
            setIsOpened(false)
        }

        if (isOpened && element !== titre) {
            setElement(titre)
        }

    }

    const elements = [
        {
            titre: "socialmedia",
            contenu: "texte social media"
        },
        {
            titre: "posters",
            contenu: "texte posters"
        },
        {
            titre: "textes",
            contenu: "texte textes"
        },
        {
            titre: "newsletters",
            contenu: "texte newsletters"
        },
        {
            titre: "presse",
            contenu: "texte presse"
        }
    ]

    return (
        <>
            <section className="home d-flex flex-column">
                <div className="titre">
                    <h2><span onClick={() => handleClick("socialmedia")}>Social media</span>, <span onClick={() => handleClick("posters")}>posters</span>, <span onClick={() => handleClick("textes")}>textes</span>, <span onClick={() => handleClick("newsletters")}>newsletters</span>, <span onClick={() => handleClick("presse")}>presse</span>.</h2>
                </div>
                {isOpened &&
                    <div className="contenu">
                        {
                            elements.map((e, index) => (
                                e.titre === element &&
                                    <div key={index}>
                                        {e.contenu}
                                    </div>
                                
                            ))
                        }
                        {/* <Contenu isOpened={isOpened} setIsOpened={setIsOpened} /> */}
                    </div>
                }
            </section>
        </>
    )
}
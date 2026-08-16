import './Home.css'
import Contenu from './Contenu.jsx'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
    
    const [isOpened, setIsOpened] = useState(false)
    const [element, setElement] = useState(null)
    const [selected, setSelected] = useState(null)

    const handleClick = (titre) => {
        if (!isOpened) {
            setIsOpened(true)
            setElement(titre)
        }

        if (isOpened && element === titre) {
            setIsOpened(false)
            setElement(null)
        }

        if (isOpened && element !== titre) {
            setElement(titre)
        }
    }

    const elements = [
        {
            titre: "socialmedia",
            contenu: "Visuels réalisés avec Adobe Photoshop pour être postés sur les réseaux sociaux."
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
                <div className={`titre`}>
                    <h2><span className={`${element === "socialmedia" ? 'selected' : null}`} onClick={() => handleClick("socialmedia")}>Social media</span>, <span className={`${element === "posters" ? 'selected' : null}`} onClick={() => handleClick("posters")}>posters</span>, <span className={`${element === "textes" ? 'selected' : null}`} onClick={() => handleClick("textes")}>textes</span>, <span className={`${element === "newsletters" ? 'selected' : null}`} onClick={() => handleClick("newsletters")}>newsletters</span>, <span className={`${element === "presse" ? 'selected' : null}`} onClick={() => handleClick("presse")}>presse</span>.</h2>
                </div>
                <AnimatePresence mode="wait">
                {isOpened &&
                    <motion.div
                        className="contenu"
                        // initial={{ opacity: 0, y: -20 }}
                        // animate={{ opacity:1 , y: 0 }}
                        // exit={{ opacity: 0, y: -20 }}
                        // transition={{ duration: 0.3 }}
                    >
                        {element ==="socialmedia" &&
                        <div className="socials d-flex flex-column align-items-start gap-2">
                            <div className="d-flex">
                                <img className={`type1 ${selected === "one" ? 'selected' : null}`} onMouseEnter={() => setSelected("one")} onMouseLeave={() => setSelected(null)} src="./images/fatmapost.jpg"/>
                                <img className={`type1 ${selected === "two" ? 'selected' : null}`} onMouseEnter={() => setSelected("two")} onMouseLeave={() => setSelected(null)} src="./images/zoneneutre-post.png" />
                                <img className={`type2 ${selected === "three" ? 'selected' : null}`} onMouseEnter={() => setSelected("three")} onMouseLeave={() => setSelected(null)} src="./images/fb-cover.jpg" />
                                <img className={`type1 ${selected === "four" ? 'selected' : null}`} onMouseEnter={() => setSelected("four")} onMouseLeave={() => setSelected(null)} src="./images/post-elisethere-modif.png" />
                                <img className={`type1 ${selected === "six" ? 'selected' : null}`} onMouseEnter={() => setSelected("six")} onMouseLeave={() => setSelected(null)} src="./images/post-hni.png" />
                            </div>
                            <div div className="d-flex">
                                <img className={`type2 ${selected === "five" ? 'selected' : null}`} onMouseEnter={() => setSelected("five")} onMouseLeave={() => setSelected(null)} src="./images/fb-cover-v2.png" />
                                <img className={`type1 ${selected === "seven" ? 'selected' : null}`} onMouseEnter={() => setSelected("seven")} onMouseLeave={() => setSelected(null)} src="./images/batard-2.jpg" />
                                <img className={`type1 ${selected === "eight" ? 'selected' : null}`} onMouseEnter={() => setSelected("eight")} onMouseLeave={() => setSelected(null)} src="./images/batard-1.jpg" />
                                <video
                                    width="100%"
                                    style={{ aspectRatio: '16/9' }}
                                    controls
                                    playsInline
                                    muted
                                    autoPlay
                                    loop
                                    className={`${selected === "nine" ? 'selected' : null}`} onMouseEnter={() => setSelected("nine")} onMouseLeave={() => setSelected(null)}
                                >   
                                        <source src="./images/batard-vid.mp4" type="video/mp4" />
                                </video>
                            </div>
                                
                            
                        </div>   
                        }

                    </motion.div>
                }
                </AnimatePresence>
            </section>
        </>
    )
}
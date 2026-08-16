import './Home.css'
import Contenu from './Contenu.jsx'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
    
    const [isOpened, setIsOpened] = useState(false)
    const [element, setElement] = useState(null)
    const [selected, setSelected] = useState(null)
    const [selectedText, setSelectedText] = useState(null)

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

    const handleClickText = (text) => {
        if (!selectedText) {
            setSelectedText(text)
        }

        if (selectedText) {
            setSelectedText(null)
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
                <div className={`titres`}>
                    <h2><span className={`${element === "socialmedia" ? 'selected' : null}`} onClick={() => handleClick("socialmedia")}>Social media</span>, <span className={`${element === "posters" ? 'selected' : null}`} onClick={() => handleClick("posters")}>posters</span>, <span className={`${element === "textes" ? 'selected' : null}`} onClick={() => handleClick("textes")}>textes</span>, <span className={`${element === "newsletters" ? 'selected' : null}`} onClick={() => handleClick("newsletters")}>newsletters</span>, <span className={`${element === "presse" ? 'selected' : null}`} onClick={() => handleClick("presse")}>presse</span>.</h2>
                </div>
                <AnimatePresence mode="wait">
                {isOpened &&
                    <motion.div
                        className="contenu d-flex align-items-start"
                        // initial={{ opacity: 0, y: -20 }}
                        // animate={{ opacity:1 , y: 0 }}
                        // exit={{ opacity: 0, y: -20 }}
                        // transition={{ duration: 0.3 }}
                    >
                        {/* social media */}
                        {element ==="socialmedia" &&
                        <div className="socials d-flex flex-column align-items-start gap-2">
                            <div className="d-flex gap-2">
                                <img className={`type1 ${selected === "one" ? 'selected' : null}`} onMouseEnter={() => setSelected("one")} onMouseLeave={() => setSelected(null)} src="./images/fatmapost.jpg"/>
                                <img className={`type1 ${selected === "two" ? 'selected' : null}`} onMouseEnter={() => setSelected("two")} onMouseLeave={() => setSelected(null)} src="./images/zoneneutre-post.png" />
                                <img className={`type2 ${selected === "three" ? 'selected' : null}`} onMouseEnter={() => setSelected("three")} onMouseLeave={() => setSelected(null)} src="./images/fb-cover.jpg" />
                                <img className={`type1 ${selected === "four" ? 'selected' : null}`} onMouseEnter={() => setSelected("four")} onMouseLeave={() => setSelected(null)} src="./images/post-elisethere-modif.png" />
                                <img className={`type1 ${selected === "six" ? 'selected' : null}`} onMouseEnter={() => setSelected("six")} onMouseLeave={() => setSelected(null)} src="./images/post-hni.png" />
                            </div>
                            <div div className="d-flex gap-2">
                                <img className={`type2 ${selected === "five" ? 'selected' : null}`} onMouseEnter={() => setSelected("five")} onMouseLeave={() => setSelected(null)} src="./images/fb-cover-v2.png" />
                                <img className={`type1 ${selected === "ten" ? 'selected' : null}`} onMouseEnter={() => setSelected("ten")} onMouseLeave={() => setSelected(null)} src="./images/social-1.png" />
                                <img className={`type1 ${selected === "eleven" ? 'selected' : null}`} onMouseEnter={() => setSelected("eleven")} onMouseLeave={() => setSelected(null)} src="./images/social-2.png" />
                                <img className={`type1 ${selected === "seven" ? 'selected' : null}`} onMouseEnter={() => setSelected("seven")} onMouseLeave={() => setSelected(null)} src="./images/batard-2.jpg" />
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
                        {/* posters */}
                        {element ==="posters" &&
                        <div className="socials d-flex flex-column align-items-start gap-2">
                            <div className="d-flex gap-2">
                                <img className={`${selected === "one" ? 'selected' : null}`} onMouseEnter={() => setSelected("one")} onMouseLeave={() => setSelected(null)} src="./images/poster-1.png"/>
                                <img className={`type1 ${selected === "two" ? 'selected' : null}`} onMouseEnter={() => setSelected("two")} onMouseLeave={() => setSelected(null)} src="./images/poster-2.jpg" />
                                <img className={`type2 ${selected === "three" ? 'selected' : null}`} onMouseEnter={() => setSelected("three")} onMouseLeave={() => setSelected(null)} src="./images/poster-3.jpg" />
                                <img className={`type1 ${selected === "four" ? 'selected' : null}`} onMouseEnter={() => setSelected("four")} onMouseLeave={() => setSelected(null)} src="./images/poster-4.jpg" />
                                <img className={`type1 ${selected === "six" ? 'selected' : null}`} onMouseEnter={() => setSelected("six")} onMouseLeave={() => setSelected(null)} src="./images/poster-5.png" />
                                <img className={`type1 ${selected === "five" ? 'selected' : null}`} onMouseEnter={() => setSelected("five")} onMouseLeave={() => setSelected(null)} src="./images/poster-6.png" />
                            </div>
                            <div div className="d-flex gap-2">
                                <img className={`type2 ${selected === "seven" ? 'selected' : null}`} onMouseEnter={() => setSelected("seven")} onMouseLeave={() => setSelected(null)} src="./images/poster-7.png" />
                                <img className={`type1 ${selected === "ten" ? 'selected' : null}`} onMouseEnter={() => setSelected("ten")} onMouseLeave={() => setSelected(null)} src="./images/poster-8.png" />
                            </div>
                            
                        </div>   
                        }
                        {/* textes */}
                        {element === "textes" &&
                        <div className="textes">
                            {/* ex1 */}
                            <div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 onClick={() => handleClickText("one")} className={selectedText && selectedText !== "one" ? 'gone' : ''}>
                                        Pour Bâtard Festival: And So You're Back - post réseaux sociaux
                                    </h3>
                                    <div className="langue">
                                    {(!selectedText || selectedText === "one") &&
                                        <p>(EN)</p>
                                    }
                                    </div>
                                </div>
                                {selectedText === "one" &&
                                    <div>
                                        <p>
                                            Splashed across your screen in capital letters, coupled with a dramatic voice-over and suspenseful score, here reads the would-be introduction line to our imagined trailer for Bâtard 2022 𝘱𝘢𝘳𝘵 2. In line with modern cinema's implicit rules, a successful artistic endeavour cannot 𝘯𝘰𝘵 produce a subsequent follow-up*. Which brings us to the second episode of Bâtard of this year.<br/><br/>
                                            <i>*The decision to split the 2022 edition in two was actually made weeks before the first part took place in April but let's ignore that fact for storytelling's sake.</i><br/><br/>
                                            You may feel a certain way about sequels, a decade-long divisive topic eliciting an array of reactions ranging for instance from "superior to the original" to "was it really necessary?"(a debate so conflicting it even made its way onto the big screen in the meta form of a high-level analytical discussion in Scream 2). Consequently, we were careful in bringing back the elements that made the April episode a success in the first place: a festival developed with the universes of the artists at the front, carried by the desire to program pieces of work that spoke to us, hoping they’ll speak to you in return.<br/><br/>
                                            Continuing with the post-breakup energy conveyed by Gloria Gaynor in <i>I Will Survive</i>, we wish to embrace the superpowers of hope and survival which arise during and after being dumped and ghosted, without glamourising or hiding behind the vulnerability that it brings. Bastards arise from complexity, systemic struggles, dissensus and multiplicity.
                                            <br/><br/>
                                            <i><b>AND SO YOU'RE BACK.</b></i><br/><br/>
                                            <a href="https://www.instagram.com/p/CjlP95QtePX/?img_index=1" target="blank">Lien Instagram</a>
                                            </p>
                                    </div>
                                }
                            </div>
                            {/* ex2  */}
                            <div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 onClick={() => handleClickText("two")} className={selectedText && selectedText !== "two" ? 'gone' : ''}>
                                        Pour Bâtard Festival: Magic Cells - post réseaux sociaux
                                    </h3>
                                    <div className="langue">
                                    {(!selectedText || selectedText === "two") &&
                                        <p>(EN)</p>
                                    }
                                    </div>
                                </div>
                                {selectedText === "two" &&
                                    <div>
                                        <p>Glazing across the canvas, numerous acrylic fluid shades are blended all over as part of what is known as the ‘acrylic paint pouring technique’, revealing a kaleidoscopic aggregation of cells of all shapes and forms, a pictorial representation of brain activity on psychedelics that would be sure to fit as a vinyl release in the Psychedelic Rock section of a vintage record store; an approach compelling in its unpredictableness, where true magic happens when random colours meet to take on a new prismatic form. Last year, Bâtard decided to reinvent itself by acquiring a new shape, two editions instead of one ― the burgeoning of life in Spring, the releasing and slowing down of Autumn.<br/><br/>
                                        We decided to bring back the magic formula that proved defining in the ongoing reflection about the meaning of Bâtard and its ever-shifting form: for the second year straight, Bâtard Festival is splitting in two. Two smaller editions in size, but twice as much space for celebration and magical discoveries.
                                        After two 2022 editions organised to the sound of post-heartbreak beats in the spirit of an out of the wilderness comeback Cher-style, Bâtard is now wandering into the realm of magical realism, inspired by the entanglement of everyday life with the ubiquitous magical properties of artistic practices. Although not quite as surrealistic as haunting spirits or sidekick ghosts, fantasy and wonders are part of our daily surroundings, should we look a little closer or pay attention, magnifying glass mode <i>on</i>, through the sheer beauty of sounds, colours, pictures, words on a page or behind a touchscreen, or the last brushstroke on a polychromic canvas, magic wand gently-held in hand.<br/><br/>
                                        <a href="https://www.instagram.com/p/Cpaq6K4jPKl/" target="blank">Lien Instagram</a>
                                            </p>
                                    </div>



                                }
                            </div>
                            {/* ex3  */}
                            <div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 onClick={() => handleClickText("three")} className={selectedText && selectedText !== "three" ? 'gone' : ''}>
                                        Pour Medeber Teatro - post réseaux sociaux
                                    </h3>
                                    <div className="langue">
                                    {(!selectedText || selectedText === "three") &&
                                        <p>(FR)</p>
                                    }
                                    </div>
                                </div>
                                {selectedText === "three" &&
                                    <div>
                                        <p>Trois jeunes errant dans la ville, sur la route de leur propre découverte, avec une nouvelle paire d'yeux et un appareil photo comme extension de leur être. Un œil plissé, l'autre en communion avec le verre, ces adolescents ont immortalisé la vastitude de leur quotidien et ses possibilités avec un regard métamorphosé. Au terme de plusieurs semaines d'apprentissage des codes de la photographie et d'expression corporelle, un nouveau langage s'est offert à elleux. Un langage qui ne requiert pas de mots, dont les histoires sont infinies, de celles qui commencent par une vision inspirée, un (dé)clic, et qui ne se terminent jamais, démultipliées sur un support en papier glacé ou derrière un écran de verre.<br/><br/>
                                        <a href="https://www.facebook.com/medeberteatro/posts/pfbid02MGhf9JMmCPHGMeJAgB7ZNR75bQZqkvjj41634UXQukm9djrLATB3T8iZjQz68QfLl" target="blank">Lien Facebook</a>
                                            </p>
                                    </div>



                                }
                            </div>
                            {/* ex4  */}
                            <div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 onClick={() => handleClickText("four")} className={selectedText && selectedText !== "four" ? 'gone' : ''}>
                                        Pour Medeber Teatro - texte exposition URBE
                                    </h3>
                                    <div className="langue">
                                    {(!selectedText || selectedText === "four") &&
                                        <p>(EN)</p>
                                    }
                                    </div>
                                </div>
                                {selectedText === "four" &&
                                    <div>
                                        <p>TURBE - Urbanisme Émotionnel is an experiment. An experiment to cut through the city with ever-changing eyes, changing ears, words, of one, of many, of many more to come.<br/><br/>

                                        This small exhibition is the first outcome of the experiment. 36 photos

                                        to discover

                                        to match together

                                        to shuffle

                                        and reshuffle

                                        to project every time a different perception of the city.

                                        Of this city, where 9 teenagers spent 11 weeks looking for something that spoke of them, of their past, of their present and of the leap into the future that awaits them… here, there, everywhere.
                                        <br/><br/>
                                        For this experiment we asked to look at the city with the whole body, not just with the eye inside the camera. Concepts such as speed, balance, focus, composition became at once the way to capture what’s outside but also to express what moves us across the city from the inside. We always started in a circle, and at each session we opened it up a little bit more. We first let in the light, then it was the colours, the shapes, the contrasts, the sounds, the smells, and bit by bit we pieced together a map…

                                        Here it is our ever-changing map, it’s for you. You can follow it from afar, or from up close, with logic or with your guts, with awareness or blissful ignorance, it’s your choice. That’s what matters for us, having the choice, the choice to decide how to look, how to move, how and if and when to speak… <br/><br/>
                                        <a href="https://www.facebook.com/medeberteatro/posts/pfbid02MGhf9JMmCPHGMeJAgB7ZNR75bQZqkvjj41634UXQukm9djrLATB3T8iZjQz68QfLl" target="blank">Lien carte interactive</a>
                                        </p>
                                    </div>



                                }
                            </div>
                            {/* ex5  */}
                            <div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 onClick={() => handleClickText("five")} className={selectedText && selectedText !== "five" ? 'gone' : ''}>
                                        Pour Medeber Teatro - article de blog
                                    </h3>
                                    <div className="langue">
                                    {(!selectedText || selectedText === "five") &&
                                        <p>(EN)</p>
                                    }
                                    </div>
                                </div>
                                {selectedText === "five" &&
                                    <div>
                                        <p><b><i>Reality: transfiguration of the common place</i></b>
                                        <br/><br/>
                                        Medeber Teatro went once again to the theatre with a top-notch team of editorialists to watch the play Reality by Daria Deflorian and Antonio Tagliarini at Théâtre Les Tanneurs in Brussels. An initiative part of the Migrant Spectators project, notably aiming to help adult migrants appropriate public spaces in an effort of social inclusion.
                                        <br/><br/>
                                        From an extraordinary story, that of the notebooks of Janina Turek, a housewife who for more than half a century described with sharp precision her ordinary daily life with a pen and small notebooks, comes the vision of the artists Daria Deflorian and Antonio Tagliarini who imagined, interpreted, assumed, created a life parallel to the one meticulously written down by the Polish housewife. A work that puts the imaginary at its core centre, even though it stages the life of a real life person. For Janina’s “factography” echoes the reading of a recipe, with data such as ingredients, quantities, sequences, times, a parallel with her writings, where over thousands of pages she has precisely transcribed at a daily rhythm her smallest facts and gestures, the number of meals, hugs, shaken hands, meetings, outings. Facts dated, classified, digitized, signed, with the precision of an expert accountant. But what do we know about this woman beyond meticulously transcribed quantitative data? With Reality, the audience is witnessing the reality of a life, one imagined by its authors who questioned Janina’s existence and life itself.
                                        <br/><br/>
                                        It was after her husband’s arrest and imprisonment in Auschwitz that Janina began writing her life work. Unbeknownst to everyone around her, she kept writing everyday, even after her husband’s return. Notebooks that were found post-mortem by her children in an old box, now similar to an artefact locked in a museum behind a glass window, transparent, accessible to all. The discovery of these notes has led to a fascination that persists to this day, an anecdote about the ordinary daily life of a woman about whom very little is known for someone famous for having written about her own existence for decades. A life counted down, a ticking clock in the form of scrambled annotations, each annotated meal bringing Janina closer to an uncertain but inevitable end. A finite number of meals, gestures, hellos, goodbyes, hugs, encounters, movies, before the end of one’s journey on earth. In Janina’s notes, these numbers feel like a countdown set up on paper with a fountain pen. An accumulation of trivial facts which in the end, after 748 notebooks, amount to a whole life; the counting of a life span with the calibration of notebooks as a unit of measurement instead of years.
                                        <br/><br/>
                                        Reality refers to our own mortality and the beauty of the every day. A life told in the form of an accounting journal seen through a magnifying glass, made up of small everyday gestures, the kind done mechanically, the kind we would not even remember or be unable to count correctly if asked to. It brings forward questions about our relationship to the meaning of life. By what are we defined? By the content of our lives, by the relative importance of our actions and accomplishments? By our values? What is important to us? In the end, what matters most?
                                        <br/><br/>
                                        <a href="https://www.instagram.com/p/Ceygswpq3cV/" target="blank">Lien Instagram</a>
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* ex6  */}
                            <div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 onClick={() => handleClickText("six")} className={selectedText && selectedText !== "six" ? 'gone' : ''}>
                                        Pour Medeber Teatro - article de blog
                                    </h3>
                                    <div className="langue">
                                    {(!selectedText || selectedText === "six") &&
                                        <p>(EN)</p>
                                    }
                                    </div>
                                </div>
                                {selectedText === "six" &&
                                    <div>
                                        <p><b><i>Dimanche: turn off the lights so I can’t see</i></b>
                                            <br/><br/>
                                            Last week, Medeber Teatro shared a look into its experience in the Migrant Spectators initiative. As part of this project, we went to the theatre in Brussels with editorial teams for two different shows. This time, we are talking about the play Dimanche by Focus / Chaliwaté which we had the opportunity to see at the Théâtre Les Tanneurs back in October.
                                            <br/><br/>
                                            Our article of last week evoked the blurred frontiers between reality and fiction, the uncertainty of the real imbued with the imaginary – and vice versa. At first glance, Dimanche definitely seems to belong more to the world of the dreamlike, so much the absurd takes precedence over the sensible. However, it does depict a very familiar reality: the one we are currently living in. Dimanche – which means «Sunday» in French – tells in part the story of a common Sunday in an ordinary family set in a house plagued by natural disasters, ready to collapse on them from one moment to the next. The family members use all sorts of stratagems to maintain their daily lives and to try to escape the inevitable change that is happening around them.
                                            <br/><br/>
                                            Theatre companies Focus and Chaliwaté have joined forces to tell the all too current story of climate change using a multidisciplinary, handcrafted theater that combines puppets, videos and various objects. The play illustrates human absurdity and its attachment to material forms in the face of a situation that simultaneously is bigger than them and concerns them entirely. The precious blinders of human individualism take many forms to resist the inevitable impermanence of things, in a society fixated on material conditions as indicators of happiness, the perpetual race towards success and possessions cannot be stopped – not even by a house on fire.
                                            <br/><br/>
                                            With relevance to the current crisis the world is facing, a question we asked the editorial team who attended the show was: What advice would you give to your younger self? The members took the time to reflect on their childhood, comparing the societal context they spent their formative years in to the one this new generation is growing up in, faced with unprecedented challenges. A generation of children asking questions their parents are sometimes not ready to answer or even to hear. Gaia and Giovanni both took the time to reflect and to record their answer. Below is a summary of their reflection.
                                            <br/><br/>
                                            [...]
                                        </p>
                                    </div>
                                }
                            </div>
                            {/* ex7  */}
                            <div>
                                <div className="d-flex align-items-end gap-2">
                                    <h3 onClick={() => handleClickText("seven")} className={selectedText && selectedText !== "seven" ? 'gone' : ''}>
                                        Pour Karoo - article de blog
                                    </h3>
                                    <div className="langue">
                                    {(!selectedText || selectedText === "seven") &&
                                        <p>(FR)</p>
                                    }
                                    </div>
                                </div>
                                {selectedText === "seven" &&
                                    <div>
                                        <p><b><i>Speak no evil : L’art du savoir-dire</i></b>
                                        <br/><br/>
                                        Un passage remarqué à Sundance cette année pour Speak No Evil , film d’horreur satirique et sans pitié qui détient le potentiel de devenir une œuvre culte du genre. Une mise à mal de la politesse, plus terrifiante que n'importe quel tueur masqué.
                                        <br/><br/>
                                        Une carte postale comme souvenir suspendu, hors du temps et des scènes de vie quotidienne en couleurs froides qui s'enchaînent successivement à l’écran. Un goût de monotonie a remplacé les nuances chaudes dans lesquelles baignait cette famille danoise lors de son séjour en Toscane, quelques mois auparavant. Le retour dans le monde réel semble particulièrement plus compliqué pour Bjørn que pour sa femme Louise et sa fille Agnes. Son regard perdu dans le vague et le sourire forcé qu’il peine à maintenir lors d’un repas avec des invités laissent deviner une sensation de prise au piège. Peut-être son esprit vagabonde-t-il vers l’invitation lancée par la famille néerlandaise rencontrée lors de leurs vacances en Italie, matérialisée sous la forme d’une carte postale arborée sur le réfrigérateur. Sur le recto, une photo immortalisant les deux familles aux sourires irradiants et aux bras bronzés, avec en toile de fond la campagne italienne.
                                        <br/><br/>
                                        Lors de ce dîner, le couple discute de l’invitation de cette famille à venir les rejoindre pour un weekend dans la campagne néerlandaise, Louise visiblement plus réticente que son mari à y répondre positivement. « Quelle est la pire chose qui puisse arriver ? » s’interroge à voix haute l’une des invités. Une question qui résonne dans l’esprit du spectateur et qui, malgré le ton léger sur lequel elle est prononcée, suscite un sentiment d’appréhension aigu. Poussés par le sens des conventions, peut-être aussi par l’envie de Bjørn de s’échapper de la vie quotidienne et probablement par l’impression forte que Patrick, le père de famille néerlandais, a laissé sur le patriarche danois lors de leurs moments passés ensemble, ils prennent la décision de partir rejoindre Patrick, Karin et leur fils Abel dans leur maison à la campagne.
                                        <br/><br/>
                                         Le film explore peu la vie des personnages au Danemark, offrant comme contexte initial le portrait d’une famille relativement ordinaire, assez aisée pour pouvoir s’offrir des vacances en Toscane, et qui semble relativement heureuse. La personnalité de Bjørn se dévoile d’abord au fil de ses interactions avec Patrick en Italie, avec face à lui la figure contrastante d’un homme visiblement sûr de lui, qui semble détaché des conventions sociales en vigueur et qui, de son propre aveu, déteste le politiquement correct. Très rapidement, un désir d’approbation se fait ressentir de la part de Bjørn et dont l’évidence s’intensifie une fois la famille arrivée chez leurs hôtes. En dépit de l’enchaînement de situations à l’échelle de malaise variable, il évite de prendre position contre Patrick et Karin, malgré ses propres réticences et celles de sa femme, plus apparentes, implorant Louise d’être patiente : « Ce n’est que le temps d’un weekend ». Louise, bien que de plus en plus désapprobatrice du couple de Néerlandais, peine elle-même à s’affirmer lors d’événements dérangeants. Et le malaise ne fait que croître à mesure que le film avance et que le comportement de Patrick et Karin dépasse les limites de l’acceptable et des convenances. L’anxiété et la frustration chez le spectateur s’accroissent en parallèle avec l’avancée de l’intrigue. Une frustration liée au comportement des protagonistes danois dont les décisions vont souvent à l’encontre du bon sens, mais qui s’expliquent précisément par cette aversion à se montrer en désaccord avec leurs hôtes et à enfreindre les codes de la politesse.
                                        <br/><br/>
                                        Le troisième et dernier acte s’accélère brutalement pour terrasser l’anxiété planante et la remplacer par un sentiment d’effroi qui ne quittera plus le spectateur et qui demeurera bien après que les lumières de la salle se soient allumées. Dernier élan d’espoir avant le défilement des crédits à l’écran, l’étreinte nerveuse des mains croisées s’intensifiant à mesure que l’étau se resserre autour des protagonistes, mais de nouveau l’inaction de Bjørn signale que le destin de la famille danoise est déjà scellé. Des indices laissent deviner la direction de la narration, particulièrement la magistrale et terrifiante musique originale de Sune Kølster, macabrement annonciatrice de la conclusion finale dès les premières secondes du film. Une fin sinistre aux accents de Funny Games , à contre-courant des conventions établies en matière de dénouement d’intrigue.
                                        <br/><br/>
                                         Sans doute le point faible de Speak No Evil , le dernier acte est un peu précipité dans la révélation des intentions des hôtes néerlandais , soulevant dans la foulée certaines interrogations quant à la faisabilité même de leurs actes sur une aussi longue période. Des explications approfondies ne sont jamais offertes sur les motivations derrière leurs agissements, laissant uniquement au spectateur comme clé de compréhension cet échange énigmatique : « Pourquoi faites-vous cela ? » « Parce que vous nous laissez. ». D’après son réalisateur Christian Tafdrup, le film explore la manière dont les conventions sociales peuvent brider notre sens de survie. Si ce film doit s’ajouter à la longue liste de films d’horreur pouvant servir de matière à l’écriture d’un manuel de survie, son principal enseignement est déjà familier : ne pas parler aux inconnus. 
                                        <br/><br/>
                                        <a href="https://karoo.me/articles/speak-no-evil/" target="blank">Lien article</a>
                                        </p>
                                    </div>
                                }
                            </div>
                        {!selectedText &&
                            <p>(Et bien d'autres types de textes, en anglais et français...)</p>
                        }
                        </div> 
                        }
                        {/* newsletters */}
                        {element ==="newsletters" &&
                        <div className="newsletters d-flex gap-2">
                                <video
                                    width="100%"
                                    style={{ aspectRatio: '16/9' }}
                                    controls
                                    playsInline
                                    muted
                                    autoPlay
                                    loop
                                    className={`${selected === "vid1" ? 'selected' : null}`}
                                    onMouseEnter={() => setSelected("vid1")} onMouseLeave={() => setSelected(null)}
                                >   
                                        <source src="./images/batard1.mp4" type="video/mp4" />
                                </video>
                                <video
                                    width="100%"
                                    style={{ aspectRatio: '16/9' }}
                                    controls
                                    playsInline
                                    muted
                                    autoPlay
                                    loop
                                    className={`${selected === "vid2" ? 'selected' : null}`}
                                    onMouseEnter={() => setSelected("vid2")} onMouseLeave={() => setSelected(null)}
                                >   
                                        <source src="./images/batard2.mp4" type="video/mp4" />
                                </video>      
                                <video
                                    width="100%"
                                    style={{ aspectRatio: '16/9' }}
                                    controls
                                    playsInline
                                    muted
                                    autoPlay
                                    loop
                                    className={`${selected === "vid3" ? 'selected' : null}`}
                                    onMouseEnter={() => setSelected("vid3")} onMouseLeave={() => setSelected(null)}
                                >   
                                        <source src="./images/batard3.mp4" type="video/mp4" />
                                </video>
                                <video
                                    width="100%"
                                    style={{ aspectRatio: '16/9' }}
                                    controls
                                    playsInline
                                    muted
                                    autoPlay
                                    loop
                                    className={`${selected === "vid4" ? 'selected' : null}`}
                                    onMouseEnter={() => setSelected("vid4")} onMouseLeave={() => setSelected(null)}
                                >   
                                        <source src="./images/tinwwp.mp4" type="video/mp4" />
                                </video> 
                        </div>   
                        }

                    </motion.div>
                }
                </AnimatePresence>
            </section>
        </>
    )
}
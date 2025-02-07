import { useState } from 'react'
import './App.css'
import { FaStar, FaPlusCircle, FaFacebook, FaMinusCircle  } from "react-icons/fa"

function App() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Qu'est-ce qui différencie Bigoodee des autres sources d'information capillaire ?",
            answer: "Bigoodee offre des conseils basés sur des études scientifiques et des experts du domaine."
        },
        {
            question: "Est-ce que les conseils de Bigoodee conviennent à tous les types de cheveux ?",
            answer: "Oui, nous couvrons une large gamme de types de cheveux avec des recommandations adaptées."
        },
        {
            question: "Comment puis-je poser des questions ou demander des conseils personnalisés ?",
            answer: "Vous pouvez nous contacter via notre formulaire en ligne ou sur nos réseaux sociaux."
        },
        {
            question: "Qu'est-ce que Bigoodee propose exactement ?",
            answer: "Bigoodee propose des conseils, des analyses de produits et des routines adaptées à vos besoins capillaires."
        }
    ];
    
    return (
        <div>
            <header>
                <span>
                    <img src="images/logo.jpg" alt="bigood" width={150}/>
                </span>
                <span>
                    <a href="/">Accueil</a>
                </span>
                <span>
                    <a href="/">FAQ</a>
                </span>
                <span>
                    <a href="/">Contact</a>
                </span>    
            </header>

            <section className='bloc-presentation'>
                <div className='presentation'>
                    <div className='text-presentation'>
                        <h1>
                            Avec Bigoodee, <span> prendre soin de vos cheveux </span> n'aura jamais été aussi simple.
                        </h1>
                        <p>
                            Bigoodee accompagne les femmes aux cheveux texturés dans leur quête de naturel, 
                            dans leur besoin de prendre soin de leurs cheveux afin de leur permettre de <b> s’épanouir au quotidien. </b>
                        </p>
                    </div>
                    <div className='img-presentation'>
                        <img src="images/Frame 49.jpg" alt="discussion" width={"60%"} />
                    </div>
                </div>
                <div className='notation'>
                    <div className='comment'>
                        <div className='stars'>
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                        </div>
                        <div>
                            Les conseils de Bigoodee ont transformé ma relation avec mes boucles ! Grâce à leurs astuces simples mais efficaces, j'ai appris à apprécier la beauté naturelle de mes cheveux texturés.
                        </div>
                    </div>

                    <div className='comment'>
                        <div className='stars'>
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                        </div>
                        <div>
                            La transition vers des cheveux naturels était intimidante, mais Bigoodee a rendu ce processus tellement plus facile ! Leurs conseils sur la détox capillaire et la création d'une nouvelle routine capillaire ont été une révélation pour moi.                        
                        </div>
                    </div>

                    <div className='comment'>
                        <div className='stars'>
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                            <FaStar color="white" size={20} />
                        </div>
                        <div>
                            J'avais du mal à trouver des conseils capillaires adaptés à mes cheveux texturés jusqu'à ce que je découvre Bigoodee. Leurs recommandations sur les produits naturels et les techniques de coiffage ont vraiment changé la donne pour moi.
                        </div>
                    </div>
                </div>
            </section>

            <section className='newsletter'>
               <h1>Notre newsletter vous donne des conseils et astuces pour en <span> apprendre plus sur l'entretien de vos cheveux. </span></h1>
                <div className='types-newsletter'>
                    <div className='type-newsletter'>
                        <div className='img-type'>
                            <img src="images/Frame 43.jpg" alt="" width={200} />
                            <p>Sur mesure</p>
                        </div>
                        <div>
                            Des conseils adaptés à votre type de cheveux et à vos besoins spécifiques, pour une expérience capillaire sur mesure.
                        </div>
                        
                    </div>
                    <div className='type-newsletter'>
                        <div className='img-type'>
                            <img src="images/Frame 44.jpg" alt="" width={200} />
                            <p>Approche naturelle</p>
                        </div>
                        <div>
                            Connectez-vous à votre véritable essence en adoptant une approche holistique et naturelle dans vos soins capillaires.
                        </div>
                    </div>
                    <div className='type-newsletter'>
                        <div className='img-type'>
                            <img src="images/Frame 45.jpg" alt="" width={200} />
                            <p>Simple et pratique</p>
                        </div>
                        <div>
                             Des conseils pratiques et faciles à suivre qui s'intègrent parfaitement à votre quotidien, pour des résultats visibles et durables.
                        </div>
                    </div>
                </div>
                <div className='mail'>
                    <input type="text" placeholder='Entrez votre adresse mail'/>
                    <span> </span>
                </div>
            </section>

            <section className='inscrire'>
                <div className='img-inscrire'>
                    <img src="images/plein-coup-femme-tenant-smartphone 1.jpg" alt="" width={400} />
                </div>
                <div className='text-inscrire'>
                    <h1>Pourquoi vous inscrire à <span>notre newsletter ?</span> </h1>
                    <p>
                        <h3>Conseils Experts</h3>

                        Bénéficiez de conseils avisés et personnalisés de nos experts en cheveux texturés, adaptés à vos besoins spécifiques. De la transition vers des cheveux naturels aux techniques de coiffage innovantes, nos conseils vous guident vers des cheveux épanouis.

                        <h3>Échange et Partage </h3>
                        
                        Rejoignez une communauté bienveillante où le partage d'expériences et d'astuces est encouragé, vous offrant ainsi un soutien précieux dans votre parcours capillaire.

                        <h3>Actualités Capillaires Naturelles </h3>

                        Restez informée sur les dernières tendances et découvertes en matière de soins capillaires naturels. Découvrez de nouveaux produits, des astuces de coiffage créatives et des méthodes innovantes pour sublimer vos cheveux.
                    </p>
                </div>
            </section>

            <section className='routine'>
                <h3>
                    Recevez une routine exclusive et personnalisée, en fonction de votre objectif capillaire
                </h3>
                <select name="" id="">
                    <option value="">Routine pour ouvrir les écailles des cheveux et permettre l’hydratation du cuir chevelu</option>
                </select>
                <br />
                <input type="button" value="RECEVOIR MA ROUTINE" />
            </section>

            {/* <section className='faq'>
                <h1>FAQ</h1>

                <p>
                    <span>Qu'est-ce qui différencie Bigoodee des autres sources d'information capillaire ?</span> 
                    <span><FaPlusCircle color="black" size={20} /></span>
                </p>
                <hr />
                <p>
                    <span>Est-ce que les conseils de Bigoodee conviennent à tous les types de cheveux ?</span> 
                    <span><FaPlusCircle color="black" size={20} /></span>
                </p>
                <hr />
                <p>
                    <span>Est-ce que les conseils de Bigoodee conviennent à tous les types de cheveux ?</span> 
                    <span><FaPlusCircle color="black" size={20} /></span>
                </p>
                <hr />
                <p>
                    <span>Comment puis-je poser des questions ou demander des conseils personnalisés ?</span> 
                    <span><FaPlusCircle color="black" size={20} /></span>
                </p>
                <hr />
                <p>
                    <span>Qu'est-ce que Bigoodee propose exactement ?</span> 
                    <span><FaPlusCircle color="black" size={20} /></span>
                </p>
                <hr />
            </section> */}

            <section className="faq">
            <h1>FAQ</h1>
            {faqData.map((item, index) => (
                <div key={index}>
                    <p>
                        <span>{item.question}</span>
                        <span onClick={() => toggleAnswer(index)} style={{ cursor: "pointer", marginLeft: 10 }}>
                            {openIndex === index ? <FaMinusCircle color="black" size={20} /> : <FaPlusCircle color="black" size={20} />}
                        </span>
                    </p>
                    {openIndex === index && <p style={{ paddingLeft: 20, color: "#555" }}>{item.answer}</p>}
                    <hr />
                </div>
            ))}
        </section>

            <section className='conseil'>
                <h1>Découvrez des conseils et astuces exclusifs pour prendre soin de vos cheveux grâce à nos <span> guides complets </span></h1>
                <div className='option-conseil'>
                    <input type="radio" name="conseil" id="conseil1" />
                    <span className="custom-radio"></span>
                    <label htmlFor="conseil1">Guide cheveux bouclés au naturel</label>
                    <br /><br />
                    <input type="radio" name="conseil" id="conseil2" />
                    <span className="custom-radio"></span>
                    <label htmlFor="conseil2">Guide cheveux crépus au naturel</label>
                    <br />
                    <div className='mail'>
                        <input type="text" placeholder='Entrez votre adresse mail'/>
                        <span> </span>
                    </div>
                </div>
            </section>

            <footer>
                <div className='reseaux'>
                    <div><img src="images/logoBlanc.png" alt="" width={150} /></div>
                    <div>
                        <span><img src="images/facebook.png" alt="" width={30} /></span>
                        <span><img src="images/insta.png" alt="" width={30} /></span>
                    </div>
                </div>
                <div className='autre'>
                    <div className='text-autre'>
                        Bigoodee accompagne les femmes aux cheveux texturés dans leur quête de naturel, dans leur besoin de prendre soin de leurs cheveux afin de leur permettre de s’épanouir au quotidien.
                    </div>
                    <div className='lien-autre'>
                        <div><a href="/">Accueil</a>  </div>
                        <div><a href="/">Témoignages</a> </div>
                        <div><a href="/">FAQ</a> </div>
                        <div><a href="/">A Propos</a>  </div>
                        <div><a href="/">Nous contacter</a>  </div>
                    </div>
                </div>
                <div className='communaute'>
                    <h2>Inscrivez-vous et rejoignez notre communauté.</h2>
                    <div className='mail'>
                        <input type="text" placeholder='Entrez votre adresse mail'/>
                        <span> S'incrire </span>
                    </div>
                </div> 
                <br /><br /><br /><br />
            </footer>

          
        </div>
    )
}

export default App

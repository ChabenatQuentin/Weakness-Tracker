import React from 'react';
import styles from './Home.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Home(){
    const proprietes = {
      duration: 3500,
      transitionDuration: 380,
      infinite: true,
      indicators: true,
      arrows: false
    }

    return(
        <div className="page">

        
            <div className= "bocal">

              <div className="subdivision">

                  <div className="reseauxGlobal"> 
                    <ul className="Reseaux">
                      <li> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"className= "iconReseaux m-2" >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </li>

                      <li> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16" className= "iconReseaux m-2">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </li>

                      <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" className= "iconReseaux m-2">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                        </svg>
                      </li>
                    </ul>
                  </div>

                  <div className="paraphintro"> 
                    <p className="intro"> <h2 >Weakness tracker </h2> est l'outil de scan qui vous permettra d'identifier les vulnérabilités de votre réseau. <br/> <br/>
                    Parcourez le site pour essayer nos services !</p> <br/>
                    <button type="button" class="btn btn-success btn-lg">
                      Lancer le scan 
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16" className="m-2">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                      </svg>
                    </button>
                  </div>

                </div>

              <div className="containerSlide">
              <Slide {...proprietes}>
                <div className="each-slide">
                  <div>
                    <img src = 'https://i1.wp.com/devotics.fr/wp-content/uploads/2017/09/security.jpeg?fit=4576%2C3051&ssl=1' 
                    />
                    
                  </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src = 'https://www.hubone.fr/data/2019/06/C34-S2-Comment-s%C3%A9curiser-son-r%C3%A9seau-dentreprise.jpg' 
                    />
                    
                  </div>
                </div>
                <div className="each-slide">
                <div>
                    <img src = 'https://www.pandasecurity.com/fr/mediacenter/src/uploads/2019/02/pandasecurity-Comment-prot%C3%A9ger-son-identit%C3%A9-num%C3%A9rique.jpg' 
                    />
                    
                  </div>
                </div>
              </Slide>
              </div>

              
    


            </div> 

        </div>
    )
}

export default Home;
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonPopover,
  IonButtons,
  IonMenu,
  IonMenuToggle,
  IonLabel,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonListHeader,
  CreateAnimation,
} from "@ionic/react";
import {
  chevronUp,
  menuOutline,
  navigateOutline,
  searchOutline,
  close,
  filter,
  searchSharp,
  caretUpSharp,
} from "ionicons/icons";
import FileAddIcon from "../icons/add-file.svg";
import "./Home.css";
import { useEffect, useState } from "react";
import { Animation, createAnimation } from "@ionic/react";

interface ScrollDetail {
  scrollTop: number;
}

const Home: React.FC = () => {
  return (
    // <IonButton>Hello world</IonButton>
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Error 404</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="error404-content">
          <div className="error404-container">
            <h1 className="error404-heading">Oops! Page not found</h1>
            <p className="error404-description">
              The page you are looking for could not be found. Please check the
              URL or go back to the homepage.
            </p>
            <a href="/" className="error404-link">
              Go to Homepage
            </a>
          </div>
        </IonContent>
      </IonPage>
      {/* <IonPage>
        <IonContent scrollEvents={true} onIonScroll={handleScroll}>
          <div>
            <IonList lines="full">
              <IonListHeader>
                <IonLabel>Listes</IonLabel>
                <IonButton>See All</IonButton>
              </IonListHeader>
              <IonItem button>
                <IonLabel>Param 1</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 2</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 3</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 4</IonLabel>
              </IonItem>
              <IonItem button>
                <IonLabel>Param 5</IonLabel>
              </IonItem>
            </IonList>
            <IonButton
              className={`scroll-button ${
                scrollDirection === "down" ? "show" : "hide"
              }`}
            >
              Button Content
            </IonButton>
            <IonItem button>
              <IonLabel>Param 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 2</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 3</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 4</IonLabel>
            </IonItem>
            <IonItem button>
              <IonLabel>Param 5</IonLabel>
            </IonItem>
          </div>
        </IonContent>
      </IonPage> */}

      {/* <IonCard className={`ion-card-modal ${isNewFormVisible ? '' : 'small-card'}`}>
        <IonCardContent className="ion-card-content-center">
          <div className="ion-card-buttons">
            <IonButton
              style={{ marginLeft: "0.5em" }}
              className={"button-without-shadow "}
              onClick={() => console.log("xcvxvcxcv")}
            >
              <IonIcon icon={FileAddIcon} className="icon-file-add"></IonIcon>
              {isNewFormVisible && <span> Create new form</span>}
            </IonButton>
            <div className="separator"></div>
            <IonButton className={"button-without-shadow "}>
              <IonIcon icon={chevronUp} />
            </IonButton>
          </div>
        </IonCardContent>
      </IonCard> */}

      {/* <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to close the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonMenuToggle>
            <IonButton>Click to open the menu</IonButton>
          </IonMenuToggle>
        </IonContent>
      </IonPage> */}
    </>
    // <IonPage>
    //   {/* <IonContent fullscreen>
    //     <IonHeader collapse="condense">
    //       <IonToolbar>
    //         <IonTitle size="large">Blank2</IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <IonGrid >
    //       <div className="popover">
    //         <IonRow >
    //           <IonCol className="ion-col-item">
    //             <IonButton>Selected item </IonButton>
    //           </IonCol>
    //           <IonCol className="ion-col-item">
    //             <div className="popover-container">
    //               <div className="popover-content">
    //                 <IonList>
    //                   <IonItem button lines="full">
    //                     Modal 1
    //                   </IonItem>
    //                   <IonItem button lines="full">
    //                     Modal 1
    //                   </IonItem>
    //                   <IonItem button lines="full">
    //                     Modal 1
    //                   </IonItem>
    //                   <IonItem button lines="full">
    //                     Modal 1
    //                   </IonItem>
    //                   <IonItem button lines="full">
    //                     Modal 1
    //                   </IonItem>
    //                 </IonList>
    //               </div>
    //               <div className="button-container">
    //                 <IonButton>
    //                   <IonIcon icon={chevronUp}></IonIcon>
    //                 </IonButton>
    //               </div>
    //             </div>
    //           </IonCol>
    //         </IonRow>
    //       </div>
    //     </IonGrid>
    //   </IonContent> */}
    //   {/* <IonPage>
    //     <IonHeader>
    //       <IonToolbar>
    //         <IonTitle></IonTitle>
    //       </IonToolbar>
    //     </IonHeader>
    //     <IonContent>
    //       <IonGrid>
    //         <IonRow>

    //           <IonCol>
    //             <IonInput fill="outline" placeholder="Search">

    //             </IonInput>
    //           </IonCol>
    //           <IonCol size="auto">
    //             <IonButton fill="clear">
    //               <IonIcon slot="icon-only" icon={menuOutline} />
    //             </IonButton>
    //           </IonCol>
    //           <IonCol size="auto">
    //             <IonButton fill="clear">
    //               <IonIcon slot="icon-only" icon={searchOutline} />
    //             </IonButton>
    //           </IonCol>

    //           <IonCol size="auto">
    //             <IonButton color="primary" fill="clear">
    //               <IonIcon slot="icon-only" icon={navigateOutline} />
    //             </IonButton>
    //           </IonCol>
    //         </IonRow>
    //       </IonGrid>
    //     </IonContent>
    //   </IonPage> */}

    //   <IonHeader>
    //     <IonToolbar>
    //       <IonTitle></IonTitle>
    //     </IonToolbar>
    //   </IonHeader>
    //   <IonContent>
    //     {/* <div className="search-bar-test">
    //       <IonIcon
    //         slot="icon-only"
    //         className="search-icon"
    //         icon={searchSharp}
    //         color="primary"
    //       />

    //       <IonInput
    //         placeholder="Search"
    //         className="input"
    //         clearInput={true}
    //       ></IonInput>
    //       <IonButton fill="clear" className="button-icon" id="popover-button">
    //         <IonIcon slot="icon-only" icon={filter} />
    //       </IonButton>
    //       <IonPopover
    //         trigger="popover-button"
    //         dismissOnSelect={true}
    //         side="bottom"
    //         alignment="center"
    //         showBackdrop={false}
    //       >
    //         <IonContent>
    //           <IonList lines="none">
    //             <IonItem button>
    //               <IonIcon icon={caretUpSharp} size="small" className="ion-icon" color="primary"></IonIcon>Date
    //             </IonItem>
    //             <IonItem button>
    //               {" "}
    //               <IonIcon icon={caretUpSharp} size="small" className="ion-icon" color="primary"></IonIcon>Nom
    //             </IonItem>
    //             <IonItem button>
    //               <IonIcon icon={caretUpSharp} size="small" className="ion-icon" color="primary"></IonIcon>Description
    //             </IonItem>
    //           </IonList>
    //         </IonContent>
    //       </IonPopover>
    //     </div> */}
    //       <IonButton className="chevron-button">
    //         <IonIcon icon={FileAddIcon}  className="icon-file-add"></IonIcon>
    //         <span className="button-text">Texte à ajouter</span>
    //         <div className="separator"></div>

    //         <IonIcon icon={chevronUp} />
    //       </IonButton>
    //   </IonContent>
    // </IonPage>
  );
};

export default Home;

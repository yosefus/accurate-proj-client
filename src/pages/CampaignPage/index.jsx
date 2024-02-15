import { Route, Routes } from "react-router-dom";
import HeadLine from "../../components/HeadLine";
import LeadsTab from "../../components/LeadsTab";
import ListMessage from "../../components/ListMessage";
import NewMsg from "../../components/newMsg";
import TabSwitcher from "../../components/TabSwitcher";
import InfoViewer from "./InfoViewer";
import styles from "./style.module.css";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiReq from "../../functions/ApiReq";
import ClipLoader from "react-spinners/ClipLoader";
import PopOver from "../../components/PopOver";
import Campaign_Form from "../../components/Campaign_Form";
import { PopupContext } from "../../Context/Popup";
export const CampaignContext = createContext(null);

export default function campaignCampaignPage() {
const {closeDailog, openDialoge} = useContext(PopupContext)
   const [toLoding, settoLoding] = useState(true);
  const [campaign, setcampaign] = useState({});
  const leads = campaign.leads || []
  const messages = campaign.msg || []
  const { id } = useParams();



  const toget = async () => {
    try {
      settoLoding(true)
      let resolet = await apiReq({ get: "get", path: `campaign/${id}` });
      setcampaign(resolet);
    } catch (error) { }
    finally { settoLoding(false) }
  };
   const listLinks = [{
     name: "עריכת רשימה", color: 'green', onClick: () => openDialoge({ comp: <Campaign_Form toget={toget} campaign={campaign} />, title: "רשימה חדשה" }),
     icon: (<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
      <path d="M19.75 17L18.7499 18.094C18.2195 18.6741 17.5001 19 16.7501 19C16.0001 19 15.2808 18.6741 14.7504 18.094C14.2192 17.5151 13.5 17.1901 12.7502 17.1901C12.0004 17.1901 11.2811 17.5151 10.75 18.094M1.75 19H3.42454C3.91372 19 4.15832 19 4.38849 18.9447C4.59256 18.8957 4.78765 18.8149 4.9666 18.7053C5.16843 18.5816 5.34138 18.4086 5.68729 18.0627L18.25 5.49998C19.0785 4.67156 19.0785 3.32841 18.25 2.49998C17.4216 1.67156 16.0785 1.67156 15.25 2.49998L2.68726 15.0627C2.34136 15.4086 2.1684 15.5816 2.04472 15.7834C1.93506 15.9624 1.85425 16.1574 1.80526 16.3615C1.75 16.5917 1.75 16.8363 1.75 17.3255V19Z" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
  }, {
    color: 'green', name: "הוספה ידנית", icon: (<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
      <path d="M11.75 13.5H7.25C5.85444 13.5 5.15665 13.5 4.58886 13.6722C3.31045 14.06 2.31004 15.0605 1.92224 16.3389C1.75 16.9067 1.75 17.6044 1.75 19M18.75 19V13M15.75 16H21.75M14.25 5.5C14.25 7.98528 12.2353 10 9.75 10C7.26472 10 5.25 7.98528 5.25 5.5C5.25 3.01472 7.26472 1 9.75 1C12.2353 1 14.25 3.01472 14.25 5.5Z" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
  }, {name :"יבוא רשימה", color:"green",icon:(<svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M16.75 12L12.75 8M12.75 8L8.75 12M12.75 8V17.2C12.75 18.5907 12.75 19.2861 13.3005 20.0646C13.6663 20.5819 14.7194 21.2203 15.3472 21.3054C16.2921 21.4334 16.6509 21.2462 17.3686 20.8719C20.5667 19.2036 22.75 15.8568 22.75 12C22.75 6.47715 18.2728 2 12.75 2C7.22715 2 2.75 6.47715 2.75 12C2.75 15.7014 4.76099 18.9331 7.75 20.6622" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>)},{
    name: 'מחיקה', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M7.25 1H13.25M1.25 4H19.25M17.25 4L16.5487 14.5193C16.4435 16.0975 16.3909 16.8867 16.05 17.485C15.7499 18.0118 15.2972 18.4353 14.7517 18.6997C14.132 19 13.3411 19 11.7593 19H8.74065C7.15891 19 6.36803 19 5.74834 18.6997C5.20276 18.4353 4.75009 18.0118 4.44998 17.485C4.10911 16.8867 4.0565 16.0975 3.95129 14.5193L3.25 4M8.25 8.5V13.5M12.25 8.5V13.5" stroke="#6B6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>), color: "red"
  }]


  useEffect(() => { toget() }, [id]);

  return (
    <CampaignContext.Provider value={{ toget, campaign }}>
      <>
        {/* TODO - middle */}
        <div className={styles.holdTabs}>
          <div>
            <div className={styles.headLine}>
              {toLoding ? <ClipLoader
                color={'#0E9D85'}
                loading={toLoding}
                // cssOverride={override}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> :
                <>
                  <HeadLine
                    primaryText={campaign.title}
                    scontText={`${leads.length} נרשמים ${messages.length} הודעות`}
                    icone={<PopOver listLinks={listLinks}><img src="/threePoints.svg" alt="three points" /></PopOver>}
                  />
                  <div className={styles.tabSwitcher}>
                    <TabSwitcher
                      linkList={[
                        { text: "נרשמים", href: `/campaign/${id}/leads/` },
                        { text: "הודעות", href: `/campaign/${id}/messages/` }
                      ]}
                    />
                  </div>

                  <Routes>
                    <Route
                      path="/"
                      element={
                        <LeadsTab
                          LeadList={leads}
                          idCampaign={id}

                        />
                      }
                    />
                    <Route
                      path="/leads/*"
                      element={
                        <LeadsTab
                          LeadList={leads}
                          idCampaign={id}

                        />
                      }
                    />
                    <Route
                      path="/messages/*"
                      element={
                        <ListMessage
                          listMessage={
                            messages
                          }
                        />
                      }
                    />
                  </Routes></>}

            </div>
          </div>

          <InfoViewer />
        </div>
      </>
    </CampaignContext.Provider>
  );
}

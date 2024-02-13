import {Route, Routes} from "react-router-dom";
import HeadLine from "../../components/HeadLine";
import LeadsTab from "../../components/LeadsTab";
import ListMessage from "../../components/ListMessage";
import NewMsg from "../../components/newMsg";
import TabSwitcher from "../../components/TabSwitcher";
import InfoViewer from "./InfoViewer";
import styles from "./style.module.css";
import {createContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import apiReq from "../../functions/ApiReq";

export const campaignContext = createContext(null);

export default function campaignCampaignPage() {
  // get params
  const {id} = useParams();

  // get data from the server by id
  const [campaign, setcampaign] = useState({});
  const leads = campaign.leads || []

  
  const toget = async () => {
    try {
      let resolet = await apiReq({get: "get", path: `campaign/${id}`});
      setcampaign(resolet);
    } catch (error) {}
    finally{}
  };
  useEffect(() => {
    toget();
  }, [id]);
  console.log(campaign);

  return (
    <campaignContext.Provider value={{toget, campaign}}>
      <>
        {/* TODO - middle */}
        <div className={styles.holdTabs}>
          <div>
            <div className={styles.headLine}>

              <HeadLine
                primaryText={campaign.title}
                scontText={"24 מרשמים 3 הודעות"}
                icone={<img src="/threePoints.svg" alt="three points" />}
              />
              <div className={styles.tabSwitcher}>
                <TabSwitcher
                  linkList={[
                    {text: "נרשמים", href: `/campaign/${id}/leads/`},
                    {text: "הודעות", href: `/campaign/${id}/messages/`}
                  ]}
                />
              </div>

              <Routes>
                <Route
                  path="/"
                  element={
                    <LeadsTab
                      LeadList={leads}
                    />
                  }
                />
                <Route
                  path="/leads/*"
                  element={
                    <LeadsTab
                      LeadList={[
                        {
                          id: "33",
                          name: "avior",
                          email: "yuiad@asd.com",
                          date: new Date(),
                        },
                        {
                          id: "34",
                          name: "dani",
                          email: "tasdk@asd.com",
                          date: new Date(),
                        },
                      ]}
                    />
                  }
                />
                <Route
                  path="/messages/*"
                  element={
                    <ListMessage
                      listMessage={[
                        {id: 3124, name: "itamar", date: new Date()},
                      ]}
                    />
                  }
                />
              </Routes>
            </div>
          </div>

          <InfoViewer />
        </div>
      </>
    </campaignContext.Provider>
  );
}

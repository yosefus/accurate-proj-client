import { Route, Routes } from "react-router-dom";
import HeadLine from "../../components/HeadLine";
import LeadsTab from "../../components/LeadsTab";
import ListMessage from "../../components/ListMessage";
import NewMsg from "../../components/newMsg";
import TabSwitcher from "../../components/TabSwitcher";
import InfoViewer from "./InfoViewer";
import styles from "./style.module.css";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiReq from "../../functions/ApiReq";
import ClipLoader from "react-spinners/ClipLoader";

export const campaignContext = createContext(null);

export default function campaignCampaignPage() {
  const [toLoding, settoLoding] = useState(true);
  const [campaign, setcampaign] = useState({});
  const leads = campaign.leads || []

  const { id } = useParams();



  const toget = async () => {
    try {
      settoLoding(true)
      let resolet = await apiReq({ get: "get", path: `campaign/${id}` });
      setcampaign(resolet);
    } catch (error) { }
    finally { settoLoding(false) }
  };

  useEffect(() => { toget() }, [id]);

  return (
    <campaignContext.Provider value={{ toget, campaign }}>
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
                    scontText={"24 מרשמים 3 הודעות"}
                    icone={<img src="/threePoints.svg" alt="three points" />}
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
                          listMessage={[
                            { id: 3124, name: "itamar", date: new Date() },
                          ]}
                        />
                      }
                    />
                  </Routes></>}

            </div>
          </div>

          <InfoViewer />
        </div>
      </>
    </campaignContext.Provider>
  );
}

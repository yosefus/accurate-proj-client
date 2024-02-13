import Popup from "./Popup";

export default function MainContext({children}) {
  return (
    <>
    <Popup>
    {children}
    </Popup>
    </>
  )
}


export default function FormatDate(date,withTime=false){
  const s = new Date(date)
  let timeAfterFormat = ""
 const afetrFormat = `${s.getFullYear()}/${s.getMonth()+1}/${s.getDate()}`
 if(withTime){
   timeAfterFormat = ` ${s.getHours() < 10?"0"+s.getHours():+s.getHours()}:${s.getMinutes()< 10?'0'+s.getMinutes():s.getMinutes()}`
  }
  return afetrFormat + timeAfterFormat
}


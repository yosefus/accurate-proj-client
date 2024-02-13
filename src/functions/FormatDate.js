
function FormatDate(time,withTime){
  const s = new Date(time)
 const afetrFormat = ` ${s.getFullYear()}/${s.getMonth()+1}/${s.getDate()}`
 const timeAfterFormat = `${s.getHours() < 10?"0"+s.getHours():+s.getHours()}:${s.getMinutes()< 10?'0'+s.getMinutes():s.getMinutes()}`
  return afetrFormat + " " + timeAfterFormat
}
FormatDate('2024-02-02T00:00:00.000Z')
export default function CallComponentButton({setFunction}) {
  return (
    <button type="button" className="fixed right-8 bottom-8" onClick={setFunction}>
        <svg width="60" height="60" viewBox="0 0 85 85" fill="none"> <circle cx="42.5" cy="42.5" r="42.5" fill="#D43031" /> <path d="M57.8002 42.925H27.2002M42.5002 27.2V58.65V27.2Z" stroke="#EEEEEE" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" /> </svg>
    </button>
  )
}

export default function CallComponentButton({children, setFunction}) {
  return (
    <button type="button" className="fixed right-8 bottom-8" onClick={setFunction}>
      {children}
    </button>
  )
}

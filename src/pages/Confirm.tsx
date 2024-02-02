import { useSearchParams } from "react-router-dom"

const Confirm = () => {
  const [ SearchParams, ] = useSearchParams();
  return (
    <ul>
        <li>果物:{SearchParams.get("fruits")}</li>
        <li>肉:{SearchParams.get("meat")}</li>
        <li>魚:{SearchParams.get("fish")}</li>
    </ul>
  )
}

export default Confirm
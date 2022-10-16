import { useSearchParams } from "react-router-dom";

export default function AuthPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  console.log(type);
  return <></>;
}

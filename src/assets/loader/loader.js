import ReactLoading from "react-loading";
const Loader = ({ type, color, h, w }) => (
  <ReactLoading type={type} color={color} height={h} width={w} />
);
export default Loader;

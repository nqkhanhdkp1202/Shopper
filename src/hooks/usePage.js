import { useSelector } from "react-redux";
import store from "../store";

const usePage = () => useSelector(store => store.page)

export default usePage
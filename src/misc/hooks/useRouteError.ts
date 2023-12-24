import { useRouteError as useError} from "react-router-dom";
import { RouteError } from "../types/global";

const useRouteError = () =>  useError() as RouteError;

export default useRouteError;


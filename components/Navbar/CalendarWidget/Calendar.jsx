import CalModal from "./modal";
import OpenCal from "./open-cal";
import { Suspense } from "react";

export default function Calendar({buttonBg}) {
  return (
    <Suspense fallback={<OpenCal buttonBg={buttonBg}/>}>
    <CalModal />
  </Suspense>
  );
}
 
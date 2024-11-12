import { Typography, Card } from "@material-tailwind/react";
import Navabar from "./compontes/navabr/inedex";
import EcommerceSection from "./pages/bosh";
import Orta from "./pages/a";

export default function App() {
  return (
     <div>
      <Navabar/>
          <div className="mb-10">
          <EcommerceSection/>
          </div>
          <Orta/>
     </div>
  );
}

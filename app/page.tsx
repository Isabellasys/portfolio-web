import { ViewModeProvider } from "@/context/view-mode-context";
import { SinglePagePortfolio } from "@/components/single-page-portfolio";

export default function Home() {
  return (
    <ViewModeProvider>
      <SinglePagePortfolio />
    </ViewModeProvider>
  );
}

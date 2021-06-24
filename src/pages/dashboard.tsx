import React from "react";
import apiService from "../lib/apiService";
import CardsList from "../shared/cardsList";
import { SmallCardDataType } from "../types";

export default function Dashboard() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cardsData, setCardsData] = React.useState<Array<SmallCardDataType>>(
    []
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    setCardsData(apiService.getSmallCardsData());
  }, []);
  return <CardsList data={cardsData} />;
}

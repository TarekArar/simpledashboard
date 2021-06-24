import { SmallCardDataType } from "../types";

function getSmallCardsData(): Array<SmallCardDataType> {
  return [
    {
      id: 0,
      title: "Approvals Pending",
      percentage: 0,
    },
    {
      id: 1,
      title: "Hours Yesterday",
      percentage: 0.0,
    },
    {
      id: 2,
      title: "Active Employess Today",
      percentage: "0 / 1",
    },
    {
      id: 3,
      title: "Active Employess Yesterday",
      percentage: "0 / 1",
    },
  ];
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getSmallCardsData };

import { useTranslation } from "next-i18next";
import Link from "next/link";
import React, { useContext } from "react";
import CardHelp from "./card/CardHelp";

interface Props {
  [key: string]: never;
}

const AnonymousBanner: React.FC<Props> = function AnonymousBanner() {
  const { t } = useTranslation();




  return null;
};

export default AnonymousBanner;

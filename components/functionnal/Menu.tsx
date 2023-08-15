import { useTranslation } from "next-i18next";
import React, { useContext } from "react";
import ProfileContext from "../providers/ProfileContext";
import MenuBurger from "../ui/menu/MenuBurger";
import MenuToolbar from "../ui/menu/MenuToolbar";
import MenuToolbarLink from "../ui/menu/MenuToolbarLink";

interface IProps {
  [key: string]: never;
}

const Menu: React.FC<IProps> = function Menu() {
  const { t } = useTranslation("common");
  const { values } = useContext(ProfileContext);

  return (
    <MenuToolbar>
      <MenuToolbarLink to="/" image="/loot/frame.png"> 
        <MenuBurger />
        {t("Home")}
      </MenuToolbarLink>
      <MenuToolbarLink to={`/protected/${values.userId}`} image="/heroes/Priest.jpg">
        {t("Heroes")}
      </MenuToolbarLink>
      <MenuToolbarLink to="/tiers-list" image="/loot/priority-list.jpg">
        {t("Relatório")}
      </MenuToolbarLink>
      <MenuToolbarLink to="/top-team" image="/enemies/Goblin.jpg">
        {t("Admin")}
      </MenuToolbarLink>
    </MenuToolbar>
  );
};

export default Menu;

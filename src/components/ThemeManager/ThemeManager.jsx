import React, { useState } from "react";

import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { MaterialUISwitch } from "./ThemeSwitch";

const ThemeManager = () => {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <div>Theme Manager</div>

      <MaterialUISwitch />
      <NightsStayIcon />
      <LightModeIcon />
    </div>
  );
};

export default ThemeManager;

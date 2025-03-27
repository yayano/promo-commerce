import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from "react-flags-select";
import "../i18n.js";
const LanguageSwitcher = () => {
  //languages configuration
  const [t, i18n] = useTranslation();
  const [selected, setSelected] = useState();
  useEffect(() => {
    if (localStorage.getItem("i18nlng")) {
      setSelected(localStorage.getItem("i18nLng").toUpperCase());
      i18n.changeLanguage(localStorage.getItem("i18nLng"));
    } else {
      i18n.changeLanguage("us");
      setSelected("US");
    }
  }, []);
  const handleLanguageChange = (code) => {
    if (code === "DZ") {
      code = "ar";
    }
    console.log(i18n);
    i18n.changeLanguage(code.toLowerCase());
    localStorage.setItem("i18nLng", code.toLowerCase()); // Save preference
    setSelected(code.toUpperCase());
  };
  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={(code) => {
        handleLanguageChange(code);
        setSelected(code);
      }}
      placeholder={selected}
      countries={["US", "DZ", "FR"]}
      customLabels={{ US: "English", DZ: "العربية", FR: "Français" }}
    />
  );
};

export default LanguageSwitcher;

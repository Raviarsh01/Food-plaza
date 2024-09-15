import React from "react";
import Button from "../../components/button";
import { paths } from "../../utils/paths";

const ButtonsDuo = () => {
  return (
    <div className="flex gap-[25px] justify-center md:justify-start">
      <Button
        href={paths.menu}
        text="Menu"
        variant="contained"
        background="secondary"
      />
      <Button
        href={paths.about}
        text="About"
        variant="contained"
        background="primary"
      />
    </div>
  );
};

export default ButtonsDuo;

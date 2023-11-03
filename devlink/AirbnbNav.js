import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AirbnbNav.module.css";

export function AirbnbNav({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "airbnb-nav")} tag="div">
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container-2", "airbnb")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "brand")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "", "image-6")}
            width="32"
            height="auto"
            loading="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/654532b9b3a68c7f111155a2_Terms%20of%20Service%20-%20Airbnb%20Help%20Center-0.svg"
          />
          <_Builtin.Heading
            className={_utils.cx(_styles, "logo-text")}
            tag="h4"
          >
            {"Help Center"}
          </_Builtin.Heading>
        </_Builtin.NavbarBrand>
        <_Builtin.Block className={_utils.cx(_styles, "right-side")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "globe-block")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="16"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/654534b6801f2d5349d64cb2_Terms%20of%20Service%20-%20Airbnb%20Help%20Center-2.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "profile-pill")}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-7")}
              loading="lazy"
              width="14"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/654535270cfba737673a7974_Terms%20of%20Service%20-%20Airbnb%20Help%20Center-3.svg"
            />
            <_Builtin.Image
              className={_utils.cx(_styles, "profile-image")}
              loading="lazy"
              width="30"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/65453500152614dc9cf2a8b2_Terms%20of%20Service%20-%20Airbnb%20Help%20Center-4.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}

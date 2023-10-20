import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Navbar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-44":{"id":"e-44","name":"","animationType":"preset","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-6","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-6-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1697494210188}},"actionLists":{"a-6":{"id":"a-6","title":"Nav Animation 2","continuousParameterGroups":[{"id":"a-6-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":0,"actionItems":[{"id":"a-6-n","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e21ed9dd-281a-0c03-5845-c9399520ce71"},"globalSwatchId":"","rValue":0,"bValue":0,"gValue":0,"aValue":0}}]},{"keyframe":24,"actionItems":[{"id":"a-6-n-2","actionTypeId":"STYLE_BACKGROUND_COLOR","config":{"delay":0,"easing":"","duration":500,"target":{"id":"e21ed9dd-281a-0c03-5845-c9399520ce71"},"globalSwatchId":"","rValue":27,"bValue":27,"gValue":27,"aValue":0.66}}]}]}],"createdOn":1591198471588}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.NavbarWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      data-w-id="e21ed9dd-281a-0c03-5845-c9399520ce71"
      tag="div"
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      config={{
        animation: "default",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.NavbarBrand
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "")}
            width="180"
            height="auto"
            loading="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/652d9c665b332864d8961bf6_Net%20Flix%20Logo.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-links")}
            options={{
              href: "#",
            }}
          >
            {"Home"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-links")}
            options={{
              href: "#",
            }}
          >
            {"About"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-links")}
            options={{
              href: "#",
            }}
          >
            {"Movies"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-links")}
            options={{
              href: "#",
            }}
          >
            {"Music"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(_styles, "nav-links")}
            options={{
              href: "#",
            }}
          >
            {"Legal Center"}
          </_Builtin.NavbarLink>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "menu-button")}
          tag="div"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}

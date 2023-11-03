import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AirbnbFooter.module.css";

export function AirbnbFooter({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      grid={{
        type: "section",
      }}
      tag="footer"
      id="footer"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "footer")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-flex-container")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "footer-logo-link")}
            button={false}
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "footer-image")}
              width="auto"
              height="auto"
              loading="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/654532b9b3a68c7f111155a2_Terms%20of%20Service%20-%20Airbnb%20Help%20Center-0.svg"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-16")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "footer-heading")}
              tag="h2"
            >
              {"Quick Navigation"}
            </_Builtin.Heading>
            <_Builtin.List tag="ul" unstyled={true}>
              <_Builtin.ListItem
                list={{
                  type: "",
                }}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  {"Home"}
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                list={{
                  type: "",
                }}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  {"About"}
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-16")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "footer-heading")}
              tag="h2"
            >
              {"Contact Us"}
            </_Builtin.Heading>
            <_Builtin.List tag="ul" unstyled={true}>
              <_Builtin.ListItem
                list={{
                  type: "",
                }}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  {"hello@demo.com"}
                </_Builtin.Link>
              </_Builtin.ListItem>
              <_Builtin.ListItem
                list={{
                  type: "",
                }}
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "footer-link")}
                  button={false}
                  options={{
                    href: "#",
                  }}
                >
                  {"+123456789"}
                </_Builtin.Link>
              </_Builtin.ListItem>
            </_Builtin.List>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-16")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "footer-heading")}
              tag="h2"
            >
              {"Social Media"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-15")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "social-icons")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "social-icon-main")}
                  width="30"
                  height="auto"
                  loading="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/652d9c665b332864d8961bfd_facebook.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-icons")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "social-icon-main")}
                  width="30"
                  height="auto"
                  loading="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/652d9c665b332864d8961bf3_instagram.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-icons")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "social-icon-main")}
                  width="30"
                  height="auto"
                  loading="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/652d9c665b332864d8961bf4_twitter.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "social-icons")}
                button={false}
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "social-icon-main")}
                  width="30"
                  height="auto"
                  loading="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/652d9c665b332864d8961bae/652d9c665b332864d8961bf7_linkedin.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{"Copyright © 2023 "}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

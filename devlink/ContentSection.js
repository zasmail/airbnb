import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ContentSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-34":{"id":"e-34","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-35"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".cross","originalId":"652d9c665b332864d8961beb|e262f9dd-d145-fe48-59b6-ca8b492a2b7d","appliesTo":"CLASS"},"targets":[{"selector":".cross","originalId":"652d9c665b332864d8961beb|e262f9dd-d145-fe48-59b6-ca8b492a2b7d","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1591201745961},"e-36":{"id":"e-36","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-37"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".back","originalId":"652d9c665b332864d8961beb|badcb8b9-57a3-d4ee-e4d2-9fb83d7ef0ce","appliesTo":"CLASS"},"targets":[{"selector":".back","originalId":"652d9c665b332864d8961beb|badcb8b9-57a3-d4ee-e4d2-9fb83d7ef0ce","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1591201951657},"e-38":{"id":"e-38","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-39"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"800c5003-2a0f-22e8-4652-a00cdd897114","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"800c5003-2a0f-22e8-4652-a00cdd897114","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1591202028758},"e-40":{"id":"e-40","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"800c5003-2a0f-22e8-4652-a00cdd897135","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"800c5003-2a0f-22e8-4652-a00cdd897135","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1591294325522}},"actionLists":{"a-5":{"id":"a-5","title":"Modal Close","actionItemGroups":[{"actionItems":[{"id":"a-5-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".new-moda","selectorGuids":["aabf029a-1504-44cc-c86d-82970255ad42"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1591201629931},"a-4":{"id":"a-4","title":"New Modal Open","actionItemGroups":[{"actionItems":[{"id":"a-4-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":100,"target":{"useEventTarget":"CHILDREN","selector":".new-moda","selectorGuids":["aabf029a-1504-44cc-c86d-82970255ad42"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-4-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".new-moda","selectorGuids":["aabf029a-1504-44cc-c86d-82970255ad42"]},"value":"flex"}}]},{"actionItems":[{"id":"a-4-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".new-moda","selectorGuids":["aabf029a-1504-44cc-c86d-82970255ad42"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1591201027195}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContentSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "content-section")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "category-wrapper")}
          tag="div"
        >
          <_Builtin.Heading tag="h3">{"Popular"}</_Builtin.Heading>
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "category-wrapper")}
          tag="div"
        >
          <_Builtin.Heading tag="h3">{"Originals"}</_Builtin.Heading>
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}

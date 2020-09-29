import React, {useContext} from "react";
import { ContentStateContext } from "../contexts/ContentStateContext";

function NavItem(props) {
  const { contentState, setContentState } = useContext(ContentStateContext);
  const id = props.id;

  function navClick(e) {
    if (contentState !== e.target.id) {
      setContentState(e.target.id);
    } else {
      setContentState(null);
    }
  }

  if (id === contentState) {
    return (
      <div className="nav-item-selected hover-item" id={id} onClick={navClick}>
        {props.children}
      </div>
    )
  ;}
  return (
    <div className="nav-item hover-item" id={id} onClick={navClick}>
      {props.children}
    </div>
  );
}

export default NavItem;
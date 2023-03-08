import React from "react";
import Icon from "@icon-park/react/es/all";
import Button from "./../Button/Button";

export interface ModalProps {
  iconDelete?: true | false;
  moreAction?: true | false;
  titleText: string;
  showModal: boolean;
  setModal: any;
  size?: "xs" | "s" | "m" | "l" | "xl";
  moreFunc?: any;
  deleteFunc?: any;
  cancelFunc?: any;
  confirmFunc?: any;
  headerProps?: {};
  bodyProps?: {};
  footerProps?: {};
  children?: React.ReactChild | React.ReactChild[];
}

const Modal = ({
  iconDelete = true,
  moreAction = true,
  titleText = "TITLE OF THE Modal",
  showModal = true,
  setModal = (e: boolean) => {
    showModal = false;
    console.log("it's a close button, please assign a setState function to it");
  },
  size = "xs",
  moreFunc = () => {
    console.log("it's a more function button");
  },
  deleteFunc = () => {
    console.log("it's a delete button");
  },
  cancelFunc = () => {
    console.log("it's a cancel button");
  },
  confirmFunc = () => {
    console.log("it's a confirm button");
  },
  headerProps = {},
  bodyProps = {},
  footerProps = {},
  children,
  ...props
}: ModalProps) => {
  return showModal ? (
    <div className={[`modal-whole`, `modal-${size}`].join(" ")} {...props}>
      {/* header */}
      <div className={[`modal-header`].join(" ")} {...headerProps}>
        <div className={[`modal-header-left`].join(" ")}>
          <span className="modal-title-text fr-text--sm medium">
            {titleText}
          </span>
        </div>
        <div className="modal-header-right">
          <Icon
            type="more"
            className={moreAction ? "modal-icon-more" : "hidden"}
            onClick={moreFunc}
          />
          <Icon
            type={"CloseSmall"}
            className={"modal-icon-close"}
            onClick={() => setModal(false)}
          />
        </div>
      </div>
      {/* body */}
      <div className={[`modal-body`].join(" ")} {...bodyProps}>
        {children}
      </div>
      {/* footer */}
      <div className="modal-footer" {...footerProps}>
        <span style={iconDelete ? {} : { visibility: "hidden" }}>
          <Button
            label={"Delete"}
            types={"secondary"}
            context={"critical"}
            icon={"only"}
            iconType={"Delete"}
            onClick={deleteFunc}
          />
        </span>

        <span>
          <Button label="Cancel" types={"secondary"} onClick={cancelFunc} />
          <Button label="Confirm" onClick={confirmFunc} />
        </span>
      </div>
    </div>
  ) : null;
};

export default Modal;

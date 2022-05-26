import "@styles/modal.scss";
import CustomButton from "../CustomButton";

const ConfirmModal = ({ show, title }) => {
  return (
    <>
      {show ? (
        <div className="modalOutside">
          <div className="confirmModal">
            <div className="title">{title}</div>
            <div className="btnContainer">
              <CustomButton title={"취소"} div={"red"} clickFn={null} />
              <CustomButton title={"확인"} div={"blue"} clickFn={null} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ConfirmModal;

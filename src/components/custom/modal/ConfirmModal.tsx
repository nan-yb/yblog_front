import "@styles/modal.scss";
import CustomButton from "../CustomButton";

type props = {
  show : boolean , 
  title : string
}
const ConfirmModal = ({ show, title } : props ) => {
  return (
    <>
      {show ? (
        <div className="modalOutside">
          <div className="confirmModal">
            <div className="title">{title}</div>
            <div className="btnContainer">
              <CustomButton title={"취소"} div={"red"} />
              <CustomButton title={"확인"} div={"blue"}  />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ConfirmModal;

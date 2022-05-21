import CloseIcon from '@mui/icons-material/Close'
import '../styles/Popup.css'
const Popup = (props) => {
    return (
        <div className="PopupBackGround">
            <div className="Popup">
                <div className="x" onClick={() => props.handlePopup()}>
                    <CloseIcon />
                </div>
                신고 사유
            </div>
        </div>
    )
}

export default Popup;
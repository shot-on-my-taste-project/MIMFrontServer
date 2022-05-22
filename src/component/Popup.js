import CloseIcon from '@mui/icons-material/Close'
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import '../styles/Popup.css'

class Popup extends Component {
    render() {
      // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
      const { open, close, header } = this.props;
  
      return (
          
        <div className={open ? 'openPopup Popup' : 'Popup'}>
          {open ? (
            <section>
              <header>
                {header}
                <div className="close" onClick={close}>
                <CloseIcon />
                </div>
              </header>
              <main>{this.props.children}</main>
              <footer>
                {/* <Button className="close" variant="secondary" onClick={close}>
                  닫기
                </Button> */}
              </footer>
            </section>
          ) : null}
        </div>
      );
    }
  }
  
export default Popup;
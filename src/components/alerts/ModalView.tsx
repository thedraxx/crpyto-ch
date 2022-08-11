import React, {useState} from 'react';
import {Alert, Modal} from 'react-native';
import {
  ModalViewCustom,
  ModalContain,
  ModalViewContain,
  ModalTextError,
  ModalText,
  ButtonPressable,
  ButtomStyle,
} from './styles';

const ModalView = () => {
  const [handleViewModal, setHandleViewModal] = useState<boolean>(true);
  const HandleViewModal = () => setHandleViewModal(prev => !prev);
  const requestClose = Alert => {
    Alert.alert('Modal has been closed.');
    setHandleViewModal(false);
  };

  return (
    <ModalViewCustom>
      <Modal
        animationType="slide"
        transparent={true}
        visible={handleViewModal}
        onRequestClose={() => requestClose(Alert)}>
        <ModalContain>
          <ModalViewContain>
            <ModalTextError>Error</ModalTextError>
            <ModalText>
              Please wait a few minutes before you try again
            </ModalText>
            <ButtonPressable onPress={HandleViewModal}>
              <ButtomStyle>Dismiss</ButtomStyle>
            </ButtonPressable>
          </ModalViewContain>
        </ModalContain>
      </Modal>
    </ModalViewCustom>
  );
};

export default ModalView;

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
} from '../styles/ModalViewStyles';

const ModalView = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const HandleViewModal = () => setModalVisible(!modalVisible);

  return (
    <ModalViewCustom>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
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

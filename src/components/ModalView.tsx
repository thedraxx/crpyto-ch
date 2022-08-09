import React, {useState} from 'react';
import {Alert, Modal} from 'react-native';
import {
  CustomModalView,
  CenteredViewModal,
  ModalViewContain,
  ModalTextError,
  ModalText,
  PressableButton,
  TextStyleButtom,
} from '../styles/ModalViewStyles';

const ModalView = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const HandleViewModal = () => setModalVisible(!modalVisible);

  return (
    <CustomModalView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <CenteredViewModal>
          <ModalViewContain>
            <ModalTextError>Error</ModalTextError>
            <ModalText>
              Please wait a few minutes before you try again
            </ModalText>
            <PressableButton onPress={HandleViewModal}>
              <TextStyleButtom>Dismiss</TextStyleButtom>
            </PressableButton>
          </ModalViewContain>
        </CenteredViewModal>
      </Modal>
    </CustomModalView>
  );
};

export default ModalView;

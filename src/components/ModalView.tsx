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

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
// });

export default ModalView;

import React from 'react'

import Modal from "../modal";

import { closeRegisterModal } from '../../redux/modals-slice';
import { useAppDispatch } from '../../redux/store';
import { RegisterOne } from './RegisterOne';
import { RegisterTwo } from './RegisterTwo';
import { RegisterThree } from './RegisterThree';



function Register() {
  const [step, setStep] = React.useState(1)
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeRegisterModal())
  }

  return (
    <Modal title='Регистрация' closeModal={closeModal}>

      {step === 1 && <RegisterOne setStep={setStep} />}
      {step === 2 && <RegisterTwo setStep={setStep} />}
      {step === 3 && <RegisterThree />}

    </Modal>
  )
}

export { Register }
import React from 'react'

import { closeLoginRegisterRecoveryModals } from '../../redux/modals-slice';
import { useAppDispatch } from '../../redux/store';

import Modal from "../modal";
import { RecoveryOne } from './RecoveryOne';
import { RecoveryTwo } from './RecoveryTwo';
import { RecoveryThree } from './RecoveryThree';
import { RecoveryFour } from './RecoveryFour';



function Recovery() {
  const [step, setStep] = React.useState(1)
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(closeLoginRegisterRecoveryModals())
  }

  return (
    <Modal title='Восстановление пароля' closeModal={closeModal}>

      {step === 1 && <RecoveryOne setStep={setStep} />}
      {step === 2 && <RecoveryTwo setStep={setStep} />}
      {step === 3 && <RecoveryThree setStep={setStep} />}
      {step === 4 && <RecoveryFour />}

    </Modal>
  )
}

export { Recovery }
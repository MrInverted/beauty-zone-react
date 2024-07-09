import React from 'react'
import { Address } from './Address'
import { Password } from './Password'

function CabinetPersonal() {
  return (
    <div className="cabinet__right cabinet-personal">
      <Address />
      <Password />
    </div>
  )
}

export { CabinetPersonal }
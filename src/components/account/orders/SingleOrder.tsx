import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { setRequests } from '../../../redux/account-slice';
import { IRequest } from '../../../data/models';
import { BACKEND_URL } from '../../../data/url';



function SingleOrder({ name, phone, isChecked, createdAt, _id, text }: IRequest) {
  const dispatch = useAppDispatch();
  const { ownerId } = useAppSelector(store => store.auth);

  const onCheckboxChange = async () => {
    const url = `${BACKEND_URL}/api/request/${_id}`

    const data = await axios.patch(url)
      .catch(err => {
        toast.error("Что-то пошло не так...");
        console.log(err.response?.data)
      });

    axios.get(`${BACKEND_URL}/api/account/request/${ownerId}`)
      .then(success => {
        dispatch(setRequests(success.data.requests));
        toast.success("Список заявок обновлен");
      })
      .catch(err => console.log(err.response?.data));
  }

  return (
    <div className={isChecked ? "cabinet__time" : "cabinet__time active"}>
      <span>{new Date(createdAt).toLocaleString()}</span>
      <span>{name}</span>
      <span>{phone}</span>
      <input type="checkbox" checked={isChecked} onChange={onCheckboxChange} />
      <p>{text}</p>
    </div>
  )
}

export { SingleOrder }
import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteSpotThunk } from "../../store/spots";
import './DeleteSpotModal.css'

export default function DeleteSpotModal({spot}){
    const dispatch = useDispatch();
    const { closeModal } = useModal()
    // console.log(spot)

    const confirmDelete = (spot) => {
        dispatch(deleteSpotThunk(spot))
        .then(closeModal)
    }

    return (
        <>
            <div className="delete-spot-modal-div">
            <h1>Confirm Delete</h1>
            <h3>Are you sure you want to remove this spot from the listings?</h3>
            <button onClick={() => confirmDelete(spot)}>Delete!</button>
            <button onClick={() => closeModal()}>No (Keep)</button>
            </div>
        </>
    )
}
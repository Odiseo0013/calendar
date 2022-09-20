import {  useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );

    const SetActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) );
    }
    
    const startSavingEvent = async( calendarEvent ) => {
        //TODO: llegar al backend

        //TODO: todo salio bien
        if( calendarEvent._id ) {
            //Actualizando
            dispatch(onUpdateEvent({ ...calendarEvent }) )
        } else {
            //Creando
            dispatch( onAddNewEvent({...calendarEvent, _id: new Date().getTime() }) );
        }
    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent());
    }


    return {
        // Propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,

        // Metodos
        startSavingEvent,
        SetActiveEvent,
        startDeletingEvent
    }
}

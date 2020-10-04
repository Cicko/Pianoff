/**
 * File created by Rudolf Cicko (@cicko)
 * Created on 04.10.20 - 11:52
 **/
import * as React from 'react'
import { Event, Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar'
import * as moment from 'moment'
import { TranslationManager } from '../../../../../../lib/services';

const localizer = momentLocalizer(moment)


export interface CalendarProps {

}

const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
    const t = React.useContext(TranslationManager.Context) as Function

    const myEventsList: Array<Event> = [
        {
            allDay: false,
            title: t('calendar.available'),
            start: moment('06-10-2020 17:00', 'DD-MM-YYYY hh:mm').toDate(),
            end: moment('08-10-2020 21:00', 'DD-MM-YYYY hh:mm').toDate(),
        }
    ]

    return (
        <BigCalendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    )
}

export default Calendar

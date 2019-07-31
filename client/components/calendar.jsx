import React from 'react';
import dateFns from 'date-fns';
import CalendarDetails from './calendardetails';



export default class Calendar extends React.Component{

    constructor(props){
        super(props)
        this.state={
            currentMonth: new Date(),
            currentDate: new Date(), 
            selectedDate: null
        }
        this.renderHeader = this.renderHeader.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);
    }

    renderHeader(){
        const dateFormat = "MMMM YYYY";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>
                        {dateFns.format(this.state.currentMonth, dateFormat)}
                    </span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon"> chevron_right</div>
                </div>
            </div>
        )
    }
    renderDays(){
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let dateIndex = 0; dateIndex<7; dateIndex++){
            days.push(
                <div className="col col-center" key={dateIndex}>
                    {dateFns.format(dateFns.addDays(startDate, dateIndex), dateFormat).substring(0,3)}
                </div>
            )
        }
        return <div className="days row"> {days}</div>
    }
    renderCells(){
        const {currentMonth, selectedDate} = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while(day<=endDate){
            for (var dayIndex = 0; dayIndex <7; dayIndex++){
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;
                // console.log("console logged day", day)
                days.push(
                    <div
                    className={`col cell ${
                      !dateFns.isSameMonth(day, monthStart)
                        ? "disabled"
                        : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                    }`}
                    key={day}
                    onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                  >
                    <span className="number">{formattedDate}</span>
                    <span className="bg">{formattedDate}</span>
                  </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>

    }
    onDateClick(day){
        this.setState({
            selectedDate: day
        })
        this.props.getDateDataFromDatabase("2019-07-28");
    }
    nextMonth() {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        })
    }
    prevMonth(){
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        })
    }

    render(){
        console.log("calendar props",this.props, this.state.selectedDate);
        return(
        <div className="calendar">
            {this.renderHeader()}
            {this.renderDays()}
            {this.renderCells()}
            <CalendarDetails getDateDataFromDatabase={this.props.getDateDataFromDatabase} currentDate={this.state.selectedDate}/>
        </div>
        )
    }


}
export class TicketPrototype {
  public duration: number;
  public _duration: number;
  public timeStart: string;
  public _timeStart: string;
  public stops: string[];
  public _stops: string[];

  constructor(
    duration: number,
    _duration: number,
    timeStart: string,
    _timeStart: string,
    stops: string[],
    _stops: string[]
  ) {
    this.duration = duration;
    this._duration = _duration;
    this.timeStart = timeStart;
    this._timeStart = _timeStart;
    this.stops = stops;
    this._stops = _stops;
  }

  durationParse(): [string, string] {
    const hours = Math.floor(this.duration / 60);
    const minutes = this.duration % 60;
    const res = `${hours}ч ${minutes}м`;

    const _hours = Math.floor(this._duration / 60);
    const _minutes = this._duration % 60;
    const _res = `${_hours}ч ${_minutes}м`;

    return [res, _res];
  }

  dateParse(): [string, string] {
    const timeEnd: string[] = [];
    const _timeEnd: string[] = [];

    const time = this.timeStart.split(':');
    const timeValue = Number(time[0]) * 60 + Number(time[1]) + this.duration;
    let timeHours = Math.floor(timeValue / 60);
    if (timeHours > 24) {
      timeHours -= 24;
    }
    if (timeHours < 10) {
      timeEnd.push(`0${timeHours}`);
    } else {
      timeEnd.push(`${timeHours}`);
    }
    const timeMinutes = timeValue % 60;
    if (timeMinutes < 10) {
      timeEnd.push(`0${timeMinutes}`);
    } else {
      timeEnd.push(`${timeMinutes}`);
    }

    const _time = this._timeStart.split(':');
    const _timeValue = Number(_time[0]) * 60 + Number(_time[1]) + this._duration;
    let _timeHours = Math.floor(_timeValue / 60);
    if (_timeHours > 24) {
      _timeHours -= 24;
    }
    if (_timeHours < 10) {
      _timeEnd.push(`0${_timeHours}`);
    } else {
      _timeEnd.push(`${_timeHours}`);
    }
    const _timeMinutes = _timeValue % 60;
    if (_timeMinutes < 10) {
      _timeEnd.push(`0${_timeMinutes}`);
    } else {
      _timeEnd.push(`${_timeMinutes}`);
    }

    return [
      `${this.timeStart} - ${timeEnd.join(':')}`,
      `${this._timeStart} - ${_timeEnd.join(':')}`,
    ];
  }

  stopsParse(): [{ header: string; body: string }, { header: string; body: string }] {
    let header;
    let body;

    switch (this.stops.length) {
      case 0:
        header = '0 пересадок';
        body = '-';
        break;
      case 1:
        header = '1 пересадка';
        body = this.stops[0];
        break;
      default:
        header = `${this.stops.length} пересадки`;
        body = this.stops.join(',');
    }

    const stops = {
      header,
      body,
    };

    switch (this._stops.length) {
      case 0:
        header = '0 пересадок';
        body = '-';
        break;
      case 1:
        header = '1 пересадка';
        body = this._stops[0];
        break;
      default:
        header = `${this._stops.length} пересадки`;
        body = this._stops.join(',');
    }

    const _stops = {
      header,
      body,
    };

    return [stops, _stops];
  }
}

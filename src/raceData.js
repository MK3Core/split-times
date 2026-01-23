// 2026 race schedules with UTC times for all series
// All times stored in UTC for proper timezone conversion

// Last Updated Time
export const LAST_UPDATED = '2026-01-19T23:18:00-05:00';

export const racingSeries = {
  f1: {
    id: 'f1',
    name: 'Formula 1',
    color: '#E10600',
    races: [
      { name: 'Australian Grand Prix', location: 'Melbourne', dateTimeUTC: '2026-03-08T04:00:00Z', timezone: 'Australia/Melbourne' },
      { name: 'Chinese Grand Prix', location: 'Shanghai', dateTimeUTC: '2026-03-15T07:00:00Z', timezone: 'Asia/Shanghai' },
      { name: 'Japanese Grand Prix', location: 'Suzuka', dateTimeUTC: '2026-03-29T05:00:00Z', timezone: 'Asia/Tokyo' },
      { name: 'Bahrain Grand Prix', location: 'Sakhir', dateTimeUTC: '2026-04-12T15:00:00Z', timezone: 'Asia/Bahrain' },
      { name: 'Saudi Arabian Grand Prix', location: 'Jeddah', dateTimeUTC: '2026-04-19T17:00:00Z', timezone: 'Asia/Riyadh' },
      { name: 'Miami Grand Prix', location: 'Miami', dateTimeUTC: '2026-05-03T20:00:00Z', timezone: 'America/New_York' },
      { name: 'Canadian Grand Prix', location: 'Montreal', dateTimeUTC: '2026-05-24T20:00:00Z', timezone: 'America/Toronto' },
      { name: 'Monaco Grand Prix', location: 'Monaco', dateTimeUTC: '2026-06-07T13:00:00Z', timezone: 'Europe/Monaco' },
      { name: 'Spanish Grand Prix', location: 'Barcelona', dateTimeUTC: '2026-06-14T13:00:00Z', timezone: 'Europe/Madrid' },
      { name: 'Austrian Grand Prix', location: 'Spielberg', dateTimeUTC: '2026-06-28T13:00:00Z', timezone: 'Europe/Vienna' },
      { name: 'British Grand Prix', location: 'Silverstone', dateTimeUTC: '2026-07-05T13:00:00Z', timezone: 'Europe/London' },
      { name: 'Belgian Grand Prix', location: 'Spa-Francorchamps', dateTimeUTC: '2026-07-19T13:00:00Z', timezone: 'Europe/Brussels' },
      { name: 'Hungarian Grand Prix', location: 'Budapest', dateTimeUTC: '2026-07-26T13:00:00Z', timezone: 'Europe/Budapest' },
      { name: 'Dutch Grand Prix', location: 'Zandvoort', dateTimeUTC: '2026-08-23T13:00:00Z', timezone: 'Europe/Amsterdam' },
      { name: 'Italian Grand Prix', location: 'Monza', dateTimeUTC: '2026-09-06T13:00:00Z', timezone: 'Europe/Rome' },
      { name: 'Spanish Grand Prix', location: 'Madrid', dateTimeUTC: '2026-09-13T13:00:00Z', timezone: 'Europe/Madrid' },
      { name: 'Azerbaijan Grand Prix', location: 'Baku', dateTimeUTC: '2026-09-26T11:00:00Z', timezone: 'Asia/Baku' },
      { name: 'Singapore Grand Prix', location: 'Singapore', dateTimeUTC: '2026-10-11T12:00:00Z', timezone: 'Asia/Singapore' },
      { name: 'United States Grand Prix', location: 'Austin', dateTimeUTC: '2026-10-25T19:00:00Z', timezone: 'America/Chicago' },
      { name: 'Mexico City Grand Prix', location: 'Mexico City', dateTimeUTC: '2026-11-01T19:00:00Z', timezone: 'America/Mexico_City' },
      { name: 'São Paulo Grand Prix', location: 'São Paulo', dateTimeUTC: '2026-11-08T17:00:00Z', timezone: 'America/Sao_Paulo' },
      { name: 'Las Vegas Grand Prix', location: 'Las Vegas', dateTimeUTC: '2026-11-22T06:00:00Z', timezone: 'America/Los_Angeles' }, // Saturday night race
      { name: 'Qatar Grand Prix', location: 'Lusail', dateTimeUTC: '2026-11-29T16:00:00Z', timezone: 'Asia/Qatar' },
      { name: 'Abu Dhabi Grand Prix', location: 'Yas Marina', dateTimeUTC: '2026-12-06T14:00:00Z', timezone: 'Asia/Dubai' },
    ]
  },
  imsa: {
    id: 'imsa',
    name: 'IMSA WeatherTech SportsCar Championship',
    color: '#0077B6', // Changed from #003087 (dark blue) to Dodger Blue - much more visible on dark backgrounds
    races: [
      { name: 'Rolex 24 at Daytona', location: 'Daytona', dateTimeUTC: '2026-01-24T18:40:00Z', endDateTimeUTC: '2026-01-25T18:40:00Z', timezone: 'America/New_York' }, // 24hr race
      { name: '12 Hours of Sebring', location: 'Sebring', dateTimeUTC: '2026-03-21T15:00:00Z', endDateTimeUTC: '2026-03-22T03:00:00Z', timezone: 'America/New_York' }, // 12hr race
      { name: 'Grand Prix of Long Beach', location: 'Long Beach', dateTimeUTC: '2026-04-18T20:00:00Z', timezone: 'America/Los_Angeles' },
      { name: 'WeatherTech Raceway Laguna Seca', location: 'Monterey', dateTimeUTC: '2026-05-03T21:00:00Z', timezone: 'America/Los_Angeles' },
      { name: 'Detroit Grand Prix', location: 'Detroit', dateTimeUTC: '2026-05-30T17:00:00Z', timezone: 'America/Detroit' },
      { name: 'Watkins Glen', location: 'Watkins Glen', dateTimeUTC: '2026-06-28T14:00:00Z', endDateTimeUTC: '2026-06-28T20:00:00Z', timezone: 'America/New_York' }, // 6hr race
      { name: 'Canadian Tire Motorsport Park', location: 'Bowmanville', dateTimeUTC: '2026-07-12T17:00:00Z', timezone: 'America/Toronto' },
      { name: 'Road America', location: 'Elkhart Lake', dateTimeUTC: '2026-08-02T16:00:00Z', endDateTimeUTC: '2026-08-02T22:00:00Z', timezone: 'America/Chicago' }, // 6hr race
      { name: 'VIRginia International Raceway', location: 'Alton', dateTimeUTC: '2026-08-23T17:00:00Z', timezone: 'America/New_York' },
      { name: 'Indianapolis Motor Speedway', location: 'Indianapolis', dateTimeUTC: '2026-09-20T17:00:00Z', timezone: 'America/Indiana/Indianapolis' },
      { name: 'Petit Le Mans', location: 'Braselton', dateTimeUTC: '2026-10-10T16:00:00Z', endDateTimeUTC: '2026-10-11T02:00:00Z', timezone: 'America/New_York' }, // 10hr race
    ]
  },
  wec: {
    id: 'wec',
    name: 'FIA World Endurance Championship',
    color: '#F77F00',
    races: [
      { name: '1812km of Qatar', location: 'Lusail', dateTimeUTC: '2026-03-28T13:00:00Z', timezone: 'Asia/Qatar' },
      { name: '6 Hours of Imola', location: 'Imola', dateTimeUTC: '2026-04-19T11:00:00Z', endDateTimeUTC: '2026-04-19T17:00:00Z', timezone: 'Europe/Rome' }, // 6hr race
      { name: '6 Hours of Spa-Francorchamps', location: 'Spa', dateTimeUTC: '2026-05-09T11:00:00Z', endDateTimeUTC: '2026-05-09T17:00:00Z', timezone: 'Europe/Brussels' }, // 6hr race
      { name: '24 Hours of Le Mans', location: 'Le Mans', dateTimeUTC: '2026-06-13T14:00:00Z', endDateTimeUTC: '2026-06-14T14:00:00Z', timezone: 'Europe/Paris' }, // 24hr race
      { name: '6 Hours of São Paulo', location: 'São Paulo', dateTimeUTC: '2026-07-12T15:00:00Z', endDateTimeUTC: '2026-07-12T21:00:00Z', timezone: 'America/Sao_Paulo' }, // 6hr race
      { name: 'Lone Star Le Mans', location: 'Austin', dateTimeUTC: '2026-09-06T19:00:00Z', endDateTimeUTC: '2026-09-07T01:00:00Z', timezone: 'America/Chicago' }, // 6hr race
      { name: '6 Hours of Fuji', location: 'Fuji', dateTimeUTC: '2026-09-27T02:00:00Z', endDateTimeUTC: '2026-09-27T08:00:00Z', timezone: 'Asia/Tokyo' }, // 6hr race
      { name: '8 Hours of Bahrain', location: 'Sakhir', dateTimeUTC: '2026-11-07T11:00:00Z', endDateTimeUTC: '2026-11-07T19:00:00Z', timezone: 'Asia/Bahrain' }, // 8hr race
    ]
  },
  wrc: {
    id: 'wrc',
    name: 'FIA World Rally Championship',
    color: '#2A9D8F',
    races: [
      { name: 'Rally Monte-Carlo', location: 'Monaco', dateTimeUTC: '2026-01-22T08:00:00Z', endDateTimeUTC: '2026-01-25T16:00:00Z', timezone: 'Europe/Monaco' },
      { name: 'Rally Sweden', location: 'Umeå', dateTimeUTC: '2026-02-12T08:00:00Z', endDateTimeUTC: '2026-02-15T16:00:00Z', timezone: 'Europe/Stockholm' },
      // Testing Race { name: 'Rally Sweden', location: 'Umeå', dateTimeUTC: '2026-01-23T08:30:00Z', endDateTimeUTC: '2026-01-23T16:00:00Z', timezone: 'Europe/Stockholm' },
      { name: 'Safari Rally Kenya', location: 'Nairobi', dateTimeUTC: '2026-03-12T07:00:00Z', endDateTimeUTC: '2026-03-15T15:00:00Z', timezone: 'Africa/Nairobi' },
      { name: 'Rally Croatia', location: 'Rijeka', dateTimeUTC: '2026-04-09T08:00:00Z', endDateTimeUTC: '2026-04-12T16:00:00Z', timezone: 'Europe/Zagreb' },
      { name: 'Rally Islas Canarias', location: 'Gran Canaria', dateTimeUTC: '2026-04-23T10:00:00Z', endDateTimeUTC: '2026-04-26T18:00:00Z', timezone: 'Atlantic/Canary' },
      { name: 'Rally Portugal', location: 'Matosinhos', dateTimeUTC: '2026-05-07T09:00:00Z', endDateTimeUTC: '2026-05-10T17:00:00Z', timezone: 'Europe/Lisbon' },
      { name: 'Rally Japan', location: 'Nagoya', dateTimeUTC: '2026-05-28T01:00:00Z', endDateTimeUTC: '2026-05-31T09:00:00Z', timezone: 'Asia/Tokyo' },
      { name: 'Rally Greece Acropolis', location: 'Loutraki', dateTimeUTC: '2026-06-25T07:00:00Z', endDateTimeUTC: '2026-06-28T15:00:00Z', timezone: 'Europe/Athens' },
      { name: 'Rally Estonia', location: 'Tartu', dateTimeUTC: '2026-07-16T07:00:00Z', endDateTimeUTC: '2026-07-19T15:00:00Z', timezone: 'Europe/Tallinn' },
      { name: 'Rally Finland', location: 'Jyväskylä', dateTimeUTC: '2026-07-30T07:00:00Z', endDateTimeUTC: '2026-08-02T15:00:00Z', timezone: 'Europe/Helsinki' },
      { name: 'Rally Paraguay', location: 'Asunción', dateTimeUTC: '2026-08-27T12:00:00Z', endDateTimeUTC: '2026-08-30T20:00:00Z', timezone: 'America/Asuncion' },
      { name: 'Rally Chile', location: 'Concepción', dateTimeUTC: '2026-09-10T13:00:00Z', endDateTimeUTC: '2026-09-13T21:00:00Z', timezone: 'America/Santiago' },
      { name: 'Rally Italy', location: 'Sardinia', dateTimeUTC: '2026-10-01T08:00:00Z', endDateTimeUTC: '2026-10-04T16:00:00Z', timezone: 'Europe/Rome' },
      { name: 'Rally Saudi Arabia', location: 'Jeddah', dateTimeUTC: '2026-11-11T08:00:00Z', endDateTimeUTC: '2026-11-14T16:00:00Z', timezone: 'Asia/Riyadh' },
    ]
  }
};

// Helper to get all races from all series, sorted by UTC time
export const getAllRaces = () => {
  const allRaces = [];
  Object.values(racingSeries).forEach(series => {
    series.races.forEach(race => {
      allRaces.push({
        ...race,
        seriesId: series.id,
        seriesName: series.name,
        seriesColor: series.color
      });
    });
  });
  return allRaces.sort((a, b) => new Date(a.dateTimeUTC) - new Date(b.dateTimeUTC));
};

// Helper to get races for selected series only
export const getRacesBySeries = (selectedSeriesIds) => {
  const races = [];
  selectedSeriesIds.forEach(seriesId => {
    const series = racingSeries[seriesId];
    if (series) {
      series.races.forEach(race => {
        races.push({
          ...race,
          seriesId: series.id,
          seriesName: series.name,
          seriesColor: series.color
        });
      });
    }
  });
  return races.sort((a, b) => new Date(a.dateTimeUTC) - new Date(b.dateTimeUTC));
};

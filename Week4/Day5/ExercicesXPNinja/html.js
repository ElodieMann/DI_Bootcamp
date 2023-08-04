function createCalendar(year, month) {
    const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    const daysInMonth = new Date(year, month, 0).getDate();
 
    const firstDay = new Date(year, month - 1, 0).getDay();

    const calendar = document.createElement('table');
   
    const thead = document.createElement('thead');
    calendar.appendChild(thead);
    console.log(thead);
   
    weekdays.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      thead.appendChild(th);
    });
  
    
  
    let currentDay = 1;
    let currentRow = document.createElement('tr');
  

    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('td');
      emptyCell.textContent = "."
      currentRow.appendChild(emptyCell);
    }
  
    for (let i = firstDay; i < 7; i++) {
      const dayCell = document.createElement('td');
      dayCell.textContent = currentDay;
      currentRow.appendChild(dayCell);
      currentDay++;
    }
  
    calendar.appendChild(currentRow);
  
    while (currentDay <= daysInMonth) {
      currentRow = document.createElement('tr');
  
      for (let i = 0; i < 7; i++) {
        if (currentDay <= daysInMonth) {
          const dayCell = document.createElement('td');
          dayCell.textContent = currentDay;
          currentRow.appendChild(dayCell);
          currentDay++;
        } else {
          const emptyCell = document.createElement('td');
          currentRow.appendChild(emptyCell);
        }
      }
  
      calendar.appendChild(currentRow);
    }
    document.body.appendChild(calendar); 
    return calendar;
  }
  


  createCalendar(2012, 9)
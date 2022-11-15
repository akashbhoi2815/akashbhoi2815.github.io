// import React from 'react'
// import GitHubCalendar from 'react-github-calendar';


// const Calender = () => {
//   const selectLastHalfYear = (contributions) => {
//     const currentYear = new Date().getFullYear();
//     const currentMonth = new Date().getMonth();
//     const shownMonths = 6;

//     return contributions.filter((day) => {
//       const date = new Date(day.date);
//       const monthOfDay = date.getMonth();

//       return (
//         date.getFullYear() === currentYear &&
//         monthOfDay > currentMonth - shownMonths &&
//         monthOfDay <= currentMonth
//       );
//     });
//   };
//   return (
//     <div>
//      <GitHubCalendar
//             username="akashbhoi2815"
//             year={new Date().getFullYear()}
//             blockSize={10}
//             style={{marginLeft:"20px"}}
//          />
        
//     </div>
//   )
// }

// export default Calender
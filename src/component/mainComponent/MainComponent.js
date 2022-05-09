import React from 'react'

export default function MainComponent() {
  return (
    <div>MainComponent</div>
  )
}



// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import InputTask from '../inputTask/InputTask'
// import LeftNavbar from '../leftNavbar/LeftNavbar';
// import { useWindowSize, useWindowWidth, useWindowHeight } from '@react-hook/window-size'
// import Modal from '@mui/material/Modal';
// import DisplayData from '../displayData/DisplayData'
// import RightSideBar from '../rightSideBar/RightSideBar';



// // custom date set
// let date = new Date();
// let day = date.getDay();
// let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusrday', 'Friday', 'Saturday'].map((item, index) => {
//   return index === day ? item : null;
// })
// let month = date.getMonth();
// let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((item, index) => {
//   return index === month ? item : null;
// })
// let currentDate = date.getDate();

// // for model style
// const style = {
//   width: '220px',
//   height: '100vh',
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   zIndex: 300,
//   paddingTop: '60px',
// };

// // ----------------------------------------------------------------------------------------

// export default function MainComponent(props) {
//   const { pageName } = props
//   const [width, height] = useWindowSize()
//   const [open, setOpen] = React.useState(true);  //model State
//   const [leftWindowOpen, setleftWindowOpen] = useState(width >= 800 ? true : false)
//   const [inputTask, setInputTask] = useState("")
//   const [isUpdate, setIsUpadte] = useState(false)
//   const [rightBarOpen, setRightBarOpen] = useState(false)
//   const [rightBarCheck, setRightBarCheck] = useState(true)

//   // model Function
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false)
//     setleftWindowOpen(false)
//   }

//   const leftNavbarHandler = () => {
//     setleftWindowOpen(true)
//     setOpen(true)
//   }

//   return (
//     <>
//       <Box sx={{ height: '100vh', width: '100vw', boxSizing: 'border-box',}}>
//         <Box sx={{ height: '100%', boxSizing: 'border-box', display: 'flex', }}>

//           {/* left side bar */}
//           {leftWindowOpen ?
//             width >= 800 ?
//               <Box sx={{ minWidth: '220px', maxWidth: '220px', bgcolor: '#EAEAEA', pt: 8 }}>
//                 <Box component='span' sx={{ display: 'inline-block', position: 'absolute', marginLeft: { xs: '3px', sm: '11px' } }}>
//                   <IconButton aria-label="delete" size="large" onClick={() => setleftWindowOpen(false)}>
//                     <MenuIcon />
//                   </IconButton>
//                 </Box>
//                 <Box sx={{ pt: 2 }}>
//                   <LeftNavbar />
//                 </Box>
//               </Box>
//               : <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//               >
//                 <Box sx={style}>
//                   <Box sx={{ height: '100%', minWidth: '220px', maxWidth: '220px', bgcolor: '#EAEAEA', pt: 1 }}>
//                     <Box component='span' sx={{ display: 'inline-block', position: 'absolute', marginLeft: { xs: '3px', sm: '11px' } }}>
//                       <IconButton aria-label="delete" size="large" onClick={() => setleftWindowOpen(false)}>
//                         <MenuIcon />
//                       </IconButton>
//                     </Box>
//                     <Box sx={{ pt: 2 }}>
//                       <LeftNavbar />
//                     </Box>
//                   </Box>
//                 </Box>
//               </Modal>
//             : null
//           }

//           {/* center box */}
//           <Box sx={{ height: '100%', px: 1, width: '50%', boxSizing: 'border-box',flex: '1 0 0', pt: 8, display: 'flex', flexDirection: 'column' }}>
//             <Box sx={{ display: 'flex', boxSizing: 'border-box', }}>
//               {leftWindowOpen ? null :
//                 <Box component='span' sx={{ display: 'inline-block', marginLeft: { xs: '-4px', sm: '3px' } }}>
//                   <IconButton aria-label="delete" size="large" onClick={() => leftNavbarHandler()}>
//                     <MenuIcon />
//                   </IconButton>
//                 </Box>}
//               <Box component='span' sx={{ paddingTop: '11px', pl: 1, typography: 'h5', display: 'inline-block' }} >
//                 {pageName}
//                 <Box component="p" sx={{ typography: 'caption', ml: 1, color: '#797775' }}>
//                   {dayName}, {monthName} {currentDate}
//                 </Box>
//               </Box>
//             </Box>
//             <Box sx={{ boxSizing: 'border-box', }}>
//               <InputTask inputTask={inputTask} setInputTask={setInputTask} isUpdate={isUpdate} setIsUpadte={setIsUpadte} />
//             </Box>
//             <Box sx={{ boxSizing: 'border-box', overflow: 'auto', height: '100%' }}>
//               <DisplayData setInputTask={setInputTask} setIsUpadte={setIsUpadte} setRightBarOpen={setRightBarOpen} setRightBarCheck={setRightBarCheck} />
//             </Box>
//           </Box>


//            {/*right side bar */}
//          {rightBarOpen &&
//               <RightSideBar rightBarCheck={rightBarCheck} setRightBarCheck={setRightBarCheck} setRightBarOpen={setRightBarOpen} />
//           }
//         </Box>
//       </Box>
//     </>
//   )
// }

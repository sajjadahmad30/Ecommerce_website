import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoClose } from "react-icons/io5";
import "../Navigation/style.css"
import CategoryCollapse from '../../CategoryCollapse';

const CategoryPanel = (props) => {


    const toggleDrawer = (newOpen) => () => {
      props.setIsOpenCategoryPanel(newOpen)
    };


  
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
        <h3 className='!p-3 !text-[16px] !font-[500] flex justify-between items-center'>Shop By Categories <IoClose className='cursor-pointer text-[20px]' onClick={toggleDrawer(false)}/></h3>

        
        <CategoryCollapse/>
        
      </Box>
    );
  

  return (
  <>
      <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
  </>
  )
}

export default CategoryPanel

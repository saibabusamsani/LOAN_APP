

const toggleEmployeeStatus = async (employee) => {
    try{
        await employee.toggleStatus();

    }
    catch(e){
        console.log(e)
    }
};

export default toggleEmployeeStatus;

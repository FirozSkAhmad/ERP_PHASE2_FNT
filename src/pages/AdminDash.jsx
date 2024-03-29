import React, { useState } from 'react'
import '../components/admin/style.css'
import NavBar from '../components/NavBar'
import WebMenu from '../components/menu/WebMenu'
import Overview from '../components/Overview'
import Table from '../components/Table'
import Scale from '../components/Scale'
import overViewData from '../data/overviewData'

const AdminDash = () => {
    const [selectedButton, setSelectedButton] = useState('Apartments');
    const [selectedRole, setSelectedRole] = useState('Super Admin');

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };
   
    
    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    };

    const incomeValue = overViewData.income;
    const expensesValue = overViewData.expenses;
    const balanceValue = overViewData.balance;
    
    return (
        <div className='dash'>
            <style>
                {`
                    body {
                        background-color: #f0f1f3;
                    }
                    .type-btn button {
                        background-color: ${selectedButton ? '#9FC2F3' : '#1366d9'};
                    }
                    select {
                        margin-left: 300px;
                    }
                `}
            </style>
        <div>
            <NavBar />
            <WebMenu roleType={selectedRole}/>
            <Overview incomeValue={incomeValue} expensesValue={expensesValue} balanceValue={balanceValue} />
            <div className='dash_data'>
                <div className='type'>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedButton === 'Apartments' ?  '#1366d9': '' }}
              onClick={() => handleButtonClick('Apartments')}>
                            Apartments
                        </button>
                    </div>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedButton === 'Villas' ? '#1366d9' : '' }}
              onClick={() => handleButtonClick('Villas')}>
                            Villas
                        </button>
                    </div>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedButton === 'Plots' ? '#1366d9' : '' }}
              onClick={() => handleButtonClick('Plots')}>
                            Plots
                        </button>
                    </div>
                    <div className='type-btn'>
                        <button style={{ backgroundColor: selectedButton === 'Farm lands' ? '#1366d9' : '' }}
              onClick={() => handleButtonClick('Farm lands')}>
                            Farm lands
                        </button>
                    </div>
                </div>
            </div>
            <select value={selectedRole} onChange={handleRoleChange}>
        <option value="Sales Person">Sales Person</option>
        <option value="Manager">Manager</option>
        <option value="Channel Person">Channel Person</option>
        <option value="Super Admin">Super Admin</option>
      </select>
            <Table selectedButton={selectedButton} />
            <Scale />
        </div>
    </div>
  )
}

export default AdminDash
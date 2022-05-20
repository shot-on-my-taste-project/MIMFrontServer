import React, { Component, useState } from 'react';
import ReportSearch from './ReportSearch';
import ReportTable from './ReportTable';
import Pagenation from '../component/Pagenation';
import { pagenate } from '../services/pagenate'

const AdminReportBoard = () => {
    return (
        <div className="BoardReport">
            <ReportSearch/>
            <ReportTable/>   
        </div>
    );
};

export default AdminReportBoard;
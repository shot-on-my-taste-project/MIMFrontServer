import React, { Component } from 'react';
import ReportSearch from './ReportSearch';
import ReportTable from './ReportTable';

class AdminReportPost extends Component {
    render() {
        return (
            <div className="PostReport">
                <ReportSearch/>
                <ReportTable/>
            </div>
        );
    };
}

export default AdminReportPost;
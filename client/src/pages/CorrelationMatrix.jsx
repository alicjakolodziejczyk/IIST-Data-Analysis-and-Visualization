import React, { useEffect, useState, useCallback } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Table from 'react-bootstrap/Table';
import Filters from "../components/Filters";
import axios from "axios";
import SubjectPopup from "../components/SubjectPopup";
import ToastContainer from "react-bootstrap/ToastContainer";
import ComparisonSubjectPopup from "../components/ComparisonSubjectPopup";

function CorrelationMatrix() {
  const [correlationMatrix, setCorrelationMatrix] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [correlationsList, setCorrelationsList] = useState([])
  const [filterData, setFilterData] = useState({
    semesters: [1, 2, 3, 4, 5, 6, 7],
    mandatory: ['obieralne', 'obowiązkowe'],
    specializations: ['SE', 'IT', 'CE', 'IIS'],
    categories: ['wiedza', 'umiejętność', 'kompetencje społeczne']
  });
  const [showSubjectData, setShowSubjectData] = useState(false);
  const [subjectData, setSubjectData] = useState({kod: '', nazwa: ''});

  const handleShowSubjectData = (kod, nazwa) => {
    setSubjectData({kod: kod, nazwa: nazwa});
    setShowSubjectData(true);
  }

  const handleHideSubjectData = () => {
    setSubjectData({kod: '', nazwa: ''});
    setShowSubjectData(false);
  }

  const [showComparisonSubjectData, setShowComparisonSubjectData] = useState(false);
  const [comparisonSubjectData, setComparisonSubjectData] = useState({kod1: '', nazwa1: '', kod2: '', nazwa2: ''});

  const handleShowComparisonSubjectData = (kod1, nazwa1, kod2, nazwa2) => {
    setComparisonSubjectData({kod1: kod1, nazwa1: nazwa1, kod2: kod2, nazwa2: nazwa2});
    setShowComparisonSubjectData(true);
  }

  const handleHideComparisonSubjectData = () => {
    setComparisonSubjectData({kod1: '', nazwa1: '', kod2: '', nazwa2: ''});
    setShowComparisonSubjectData(false);
  }

  const fetchData = useCallback(async () => {
    try {
      const url = "http://localhost:8080/api/correlation";
      const response = await axios.post(url, filterData);
      console.log(response.data);
      setCorrelationMatrix(response.data.correlationMatrix);
      setSubjects(response.data.przedmioty);
      setCorrelationsList(response.data.correlationsList);
    } catch (error) {
      console.log(error);
    }
  }, [filterData]);

  useEffect(() => {
    fetchData();
  }, []);



  const CorrHeader = ({ children, nazwa }) => (
    <OverlayTrigger overlay={<Tooltip id={children}>{nazwa}</Tooltip>}>
      <div>{children}</div>
    </OverlayTrigger>
  );

  return (
  <div style={{paddingBottom: '10vh'}}>
    <Filters setFilterData={setFilterData} graph={false} />
  
      <h2 style={{ padding: "25px 0" }}>Correlation Matrix</h2>
      
      {showSubjectData && <ToastContainer position="top-end" style={{backdropFilter: 'blur(2px)'}}><SubjectPopup onClose={handleHideSubjectData} kod={subjectData.kod} nazwa={subjectData.nazwa}/></ToastContainer>}
      {showComparisonSubjectData && <ToastContainer position="top-end" style={{backdropFilter: 'blur(2px)', position: 'fixed'}}>
        <ComparisonSubjectPopup onClose={handleHideComparisonSubjectData} kod1={comparisonSubjectData.kod1} nazwa1={comparisonSubjectData.nazwa1} kod2={comparisonSubjectData.kod2} nazwa2={comparisonSubjectData.nazwa2}/>
        </ToastContainer>}
      
      <div style={{overflow: 'auto', width: '94vw', height: '70vh', margin: 'auto'}}>
        <Table bordered hover style={{ display: 'initial'}}>
        <thead>
          <tr>
            <th></th>
            {subjects.map((subject, index) => (
              <th key={index} onClick={()=>handleShowSubjectData(subject['kod'], subject['nazwa'])}>
                <CorrHeader nazwa={subject['nazwa']}>{subject['kod']}</CorrHeader>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {correlationMatrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th onClick={()=>handleShowSubjectData(subjects[rowIndex]['kod'], subjects[rowIndex]['nazwa'])}><CorrHeader nazwa={subjects[rowIndex]['nazwa']}>{subjects[rowIndex]['kod']}</CorrHeader></th>
              {row.map((value, colIndex) => (
                <td onClick={()=>handleShowComparisonSubjectData(subjects[rowIndex]['kod'], subjects[rowIndex]['nazwa'], subjects[colIndex]['kod'], subjects[colIndex]['nazwa'])} style={{ backgroundColor: `rgba(255,105,180,${value})` }} key={colIndex}>
                  {value.toFixed(2)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      
      <h2 style={{ padding: "25px 0" }}>List of correlations</h2>
      <div style={{ padding: "3vw" }}>
        <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Przedmiot 1</th>
          <th>Przedmiot 2</th>
          <th>Wartość korelacji</th>
        </tr>
      </thead>
      <tbody>
        {correlationsList.map((item) => (
          <tr onClick={()=>handleShowComparisonSubjectData(item.subject1, item.subject1_name, item.subject2, item.subject2_name)}>
          <td>{item.subject1} {item.subject1_name}</td>
          <td>{item.subject2} {item.subject2_name}</td>
          <td>{item.similarityScore.toFixed(4)}</td>
        </tr>
        ))}
      </tbody>
    </Table>
      </div>
    </div>

    
  );
}

export default CorrelationMatrix;

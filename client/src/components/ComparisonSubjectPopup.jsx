import React from 'react'
import Toast from 'react-bootstrap/Toast';
import axios from 'axios';
import Table from 'react-bootstrap/esm/Table';
import Spinner from 'react-bootstrap/Spinner';

function ComparisonSubjectPopup(props) {
  const {onClose, kod1, nazwa1, kod2, nazwa2} = props;
const [subjectsData1, setSubjectsData1] = React.useState('');
const [seeMore1, setSeeMore1] = React.useState(false);

const [subjectsData2, setSubjectsData2] = React.useState('');
const [seeMore2, setSeeMore2] = React.useState(false);

React.useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const url = "http://localhost:8080/api/subject/" + kod1;
    const response = await axios.get(url);
    setSubjectsData1(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  try {
    const url = "http://localhost:8080/api/subject/" + kod2;
    const response = await axios.get(url);
    setSubjectsData2(response.data);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};


return (
  <Toast onClose={onClose} style={{minWidth: 'min-content'}}>
    <Toast.Header>{nazwa1} vs {nazwa2}</Toast.Header>
    <Toast.Body style={{maxHeight: '70vh', overflow: 'scroll'}}>
      {subjectsData1.kod !== null && subjectsData2.kod !== null ? (
        <Table bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>{nazwa1}</th>
              <th>{nazwa2}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>kod</td>
              <td>{subjectsData1.kod}</td>
              <td>{subjectsData2.kod}</td>
            </tr>
            <tr>
              <td>nazwa</td>
              <td>{subjectsData1.nazwa}</td>
              <td>{subjectsData2.nazwa}</td>
            </tr>
            <tr>
              <td>rok</td>
              <td>{subjectsData1.rok}</td>
              <td>{subjectsData2.rok}</td>
            </tr>
            <tr>
              <td>semestr</td>
              <td>{subjectsData1.semestr}</td>
              <td>{subjectsData2.semestr}</td>
            </tr>
            <tr>
                <td>specjalizacja</td>
                <td>{subjectsData1.obieralny ? subjectsData1.specjalizacja : '--'}</td>
                <td>{subjectsData2.obieralny ? subjectsData2.specjalizacja : '--'}</td>
            </tr>
            
            <tr>
              <td>efekty</td>
              <td>{seeMore1 ? (subjectsData1.efekty?.map((efekt)=> {
                return (
                  <tr>
                    <td>{efekt.kod}</td>
                    <td>{efekt.nazwa}</td>
                  </tr>
                )
              })):(subjectsData1.efekty?.slice(0,3).map((efekt)=> {
                return (
                  <tr>
                    <td>{efekt.kod}</td>
                    <td>{efekt.nazwa}</td>
                  </tr>
                )
              }))
                }
                <button onClick={()=>(setSeeMore1(!seeMore1))}>{seeMore1 ? "hide" : "see more"}</button></td>
              <td>{seeMore2 ? (subjectsData2.efekty?.map((efekt)=> {
                return (
                  <tr>
                    <td>{efekt.kod}</td>
                    <td>{efekt.nazwa}</td>
                  </tr>
                )
              })):(subjectsData2.efekty?.slice(0,3).map((efekt)=> {
                return (
                  <tr>
                    <td>{efekt.kod}</td>
                    <td>{efekt.nazwa}</td>
                  </tr>
                )
              }))
                }
                <button onClick={()=>(setSeeMore2(!seeMore2))}>{seeMore2 ? "hide" : "see more"}</button></td>
            </tr>
            </tbody>
                
        </Table>
      ):(
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)}
   
    </Toast.Body>
  </Toast>
)
}

export default ComparisonSubjectPopup
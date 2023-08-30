import {useCallback, useState, useEffect
} from 'react'
import Toast from 'react-bootstrap/Toast';
import axios from 'axios';

function SubjectPopup(props) {
  const {onClose, kod, nazwa} = props;
  const [subjectsData, setSubjectsData] = useState('');
  const [seeMore, setSeeMore] = useState(false);
  
  const fetchData = useCallback( async () => {
    try {
      const url = "http://localhost:8080/api/subject/" + kod;
      const response = await axios.get(url);
      setSubjectsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [kod]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return (
    <Toast onClose={onClose}>
      <Toast.Header>{nazwa}</Toast.Header>
      {subjectsData.kod !== null && <Toast.Body style={{maxHeight: '70vh', overflow: 'scroll'}}>
        <table>
          <tbody>
            <tr>
              <td>kod</td>
              <td>{subjectsData.kod}</td>
            </tr>
            <tr>
              <td>nazwa</td>
              <td>{subjectsData.nazwa}</td>
            </tr>
            <tr>
              <td>rok</td>
              <td>{subjectsData.rok}</td>
            </tr>
            <tr>
              <td>semestr</td>
              <td>{subjectsData.semestr}</td>
            </tr>
            {
              subjectsData.obieralny && (
                <tr>
                  <td>specjalizacja</td>
                  <td>{subjectsData.specjalizacja}</td>
                </tr>
              )
            }
            <tr>
              <td>efekty</td>
              <td>{seeMore ? (subjectsData.efekty?.map((efekt)=> {
                return (
                  <tr>
                    <td>{efekt.kod}</td>
                    <td>{efekt.nazwa}</td>
                  </tr>
                )
              })):(
                subjectsData.efekty?.slice(0,3).map((efekt)=> {
                  return (
                    <tr>
                      <td>{efekt.kod}</td>
                      <td>{efekt.nazwa}</td>
                    </tr>
                  )
                })
              )
                }
                <button onClick={()=>(setSeeMore(!seeMore))}>{seeMore ? "hide" : "see more"}</button></td>
            </tr>
            

          </tbody>
        </table>
      </Toast.Body>}
    </Toast>
  )
}

export default SubjectPopup
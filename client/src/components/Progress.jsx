import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Progress(props) {
  const {past, present, future, pastSubjects, presentSubjects, futureSubjects} = props;
  const renderPastTooltip = (props) => {
    return <Tooltip {...props}>{
      <table>
        <thead>
          <tr>
            <th>Kod</th>
            <th>Nazwa</th>
          </tr>
        </thead>
        <tbody>
          {pastSubjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.kod}</td>
              <td>{subject.nazwa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    }</Tooltip>;
  }

  const renderPresentTooltip = (props) => {
    return <Tooltip {...props}>{
      <table>
        <thead>
          <tr>
            <th>Kod</th>
            <th>Nazwa</th>
          </tr>
        </thead>
        <tbody>
          {presentSubjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.kod}</td>
              <td>{subject.nazwa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    }</Tooltip>;
  }

  const renderFutureTooltip = (props) => {
    return <Tooltip {...props}>{
      <table>
        <thead>
          <tr>
            <th>Kod</th>
            <th>Nazwa</th>
          </tr>
        </thead>
        <tbody>
          {futureSubjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.kod}</td>
              <td>{subject.nazwa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    }</Tooltip>;
  }
  return (
    <div style={{height: "25px", display: 'flex', borderRadius: '12px', overflow: "hidden"}}>
      <OverlayTrigger placement='bottom' delay={{show: 250, hide: 400}} overlay={renderPastTooltip}>
        <div style={{width: past, height: '100%', backgroundColor: "#f694c1"}}>{pastSubjects.nazwa}</div>
      </OverlayTrigger>
      <OverlayTrigger placement='bottom' delay={{show: 250, hide: 400}} overlay={renderPresentTooltip}>
        <div style={{width: present, height: '100%', backgroundColor: "#e4c1f9"}}>{presentSubjects.nazwa}</div>
      </OverlayTrigger>
      <OverlayTrigger placement='bottom' delay={{show: 250, hide: 400}} overlay={renderFutureTooltip}>
        <div style={{width: future, height: '100%', backgroundColor: "#a9def9"}}>{futureSubjects.nazwa}</div>
      </OverlayTrigger>
    </div>
  )
}

export default Progress
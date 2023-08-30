import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

function Filters(props) {
  
  const handleSemesterChange = (event) => {
    const semester = Number(event.target.id.split('-')[1]); 
    console.log(typeof semester)
    if (event.target.checked) {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        semesters: [...prevFilterData.semesters, semester],
      }));
    } else {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        semesters: prevFilterData.semesters.filter((s) => s !== semester),
      }));
    }
  };
  
  const handleMandatoryChange = (event) => {
    const mandatory = event.target.id;
    if (event.target.checked) {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        mandatory: [...prevFilterData.mandatory, mandatory],
      }));
    } else {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        mandatory: prevFilterData.mandatory.filter((m) => m !== mandatory),
      }));
    }
  }

  const handleSpecializationChange = (event) => {
    const specialization = event.target.id;
    if (event.target.checked) {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        specializations: [...prevFilterData.specializations, specialization],
      }));
    } else {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        specializations: prevFilterData.specializations.filter(
          (s) => s !== specialization
        ),
      }));
    }
  };

  const handleCategoryChange = (event) => {
    const category = event.target.id;
    if (event.target.checked) {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        categories: [...prevFilterData.categories, category],
      }));
    } else {
      props.setFilterData((prevFilterData) => ({
        ...prevFilterData,
        categories: prevFilterData.categories.filter((c) => c !== category),
      }));
    }
  };

  return (
    <div>
      <Navbar fixed="bottom" bg="dark" data-bs-theme="dark">
            <Container>
              <Nav className="me-auto">
              <Nav.Item>
                <Dropdown drop='up'>
                  <Dropdown.Toggle variant="dark" id="dropdown-semestry">
                    Semestry
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {[1, 2, 3, 4, 5, 6, 7].map((semester) => (
                      <div key={`sem-${semester}`} style={{ padding: '0 10px' }}>
                        <Form.Check
                          type="checkbox"
                          id={`semester-${semester}`}
                          label={semester}
                          onChange={handleSemesterChange}
                          checked={props.filterData.semesters.includes(semester)}
                        />
                      </div>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>


                <Nav.Item>
                  <Dropdown drop='up'>
                    <Dropdown.Toggle variant="dark" id="dropdown-semestry">
                      Obieralność
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {['obieralne', 'obowiązkowe'].map((item) => (
                        <div
                          key={`mandatory-${item}`}
                          style={{ padding: '0 10px' }}
                        >
                          <Form.Check
                            type="checkbox"
                            id={item}
                            label={item}
                            onChange={handleMandatoryChange}
                            checked={props.filterData.mandatory.includes(item)}
                          />
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>

                <Nav.Item>
                  <Dropdown drop='up'>
                    <Dropdown.Toggle variant="dark" id="dropdown-semestry">
                      Specjalizacje
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {['SE', 'IT', 'CE', 'IIS'].map((specialization) => (
                        <div
                          key={`specialization-${specialization}`}
                          style={{ padding: '0 10px' }}
                        >
                          <Form.Check
                            type="checkbox"
                            id={specialization}
                            label={specialization}
                            onChange={handleSpecializationChange}
                            checked={props.filterData.specializations.includes(specialization)}
                          />
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>

                <Nav.Item>
                  <Dropdown drop='up'>
                    <Dropdown.Toggle variant="dark" id="dropdown-semestry">
                      Kategorie
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {['wiedza', 'umiejętność', 'kompetencje społeczne'].map((category) => (
                        <div key={`category-${category}`} style={{ padding: '0 10px' }}>
                          <Form.Check
                            type="checkbox"
                            id={category}
                            label={category}
                            onChange={handleCategoryChange}
                            checked={props.filterData.categories.includes(category)}
                          />
                        </div>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                {props.graph && 
                <Nav.Item>
                  <Form.Check
                            type="checkbox"
                            id="visible"
                            label="pokaż liczbę wspólnych efektów"
                            onChange={()=> props.setVisible(!props.visible)}
                            checked={props.visible}
                            style = {{paddingTop: '0.4em', marginLeft: '1em', color: 'white'}}
                          />
                </Nav.Item>}
                
              </Nav>
            </Container>
          </Navbar>
    </div>
  )
}

export default Filters